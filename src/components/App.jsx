import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar } from './SearchBar/SearchBar';
import { ContainerStyled } from './App.styled';
import { ErrorMessageStyled } from './SearchBar/SearchBar.styled';
import { Loader } from './Loader/Loader';
import { ButtonUp } from './ButtonUp/ButtonUp';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImage } from '../api/fetchImg';
import { Notify } from 'notiflix';

Notify.init({
  width: '300px',
  position: 'left-top',
  timeout: 2000,
});

export class App extends Component {
  state = this.getInitState();

  componentDidUpdate(_, prevState) {
    const { page, currentPage, error } = this.state;

    if (page === currentPage || error) {
      return;
    }

    getImage(this.state.searchValue, this.state.page)
      .then(data => {
        if (data.totalHits < 1) {
          throw new Error(
            'Вибачайте, але нажаль ми не знайшли нічого за цим запитом. Спробуйте ще.'
          );
        }

        this.setState(prevState => ({
          img: [...prevState.img, ...data.hits],
          totalPage: Math.ceil(data.totalHits / 12),
          currentPage: prevState.currentPage + 1,
        }));

        Notify.success(`Круто! Ми знайшли ${data.totalHits} картинок.`);
        this.smoothScroll(this.getNextPageHeight());
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  getInitState() {
    return {
      img: [],
      searchValue: '',
      page: 1,
      currentPage: 0,
      totalPage: 0,
      isLoading: false,
      error: null,
    };
  }

  smoothScroll = cardHeight => {
    if (!cardHeight) {
      return;
    }

    scroll.scrollMore(cardHeight * 2);
  };

  onSubmit = value => {
    this.setState({
      ...this.getInitState(),
      searchValue: value,
    });
  };

  getNextPageHeight = () => {
    const galleryRef =
      document.querySelector('.galleryWrapp').firstElementChild;

    if (!galleryRef) {
      return null;
    }

    const { height: cardHeight } = galleryRef.getBoundingClientRect();

    return cardHeight;
  };

  onChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  render() {
    const { img, isLoading, error, totalPage, page } = this.state;

    return (
      <ContainerStyled>
        <Searchbar onSubmit={this.onSubmit} currentPage={{ page, totalPage }} />
        {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
        <ImageGallery img={img} />
        {isLoading && <Loader />}
        {totalPage > 1 && page < totalPage && (
          <Button onClick={this.onChangePage} />
        )}
        <ButtonUp />
      </ContainerStyled>
    );
  }
}