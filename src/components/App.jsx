import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar } from './SearchBar/SearchBar';
import { ContainerStyled } from './App.styled';
import { ErrorMessageStyled } from './SearchBar/SearchBar.styled';
import { Loader } from './Loader/Loader';
import { ButtonUp } from './ButtonUp/ButtonUp';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImage } from './fetchApi/fetchImg';
import { Notify } from 'notiflix';

Notify.init({
  width: '300px',
  position: 'left-top',
  timeout: 2000,
});
export class App extends Component {
  state = {
    img: [],
    searchValue: '',
    page: 1,
    totalPage: 0,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState(
        {
          isLoading: true,
          page: 1,
          img: [],
          error: null,
          totalPage: 0,
        },
        () => {
          getImage(this.state.searchValue, this.state.page).then(data => {
            if (data.totalHits < 1) {
              throw new Error(
            'Вибачайте, але нажаль ми не знайшли нічого за цим запитом. Спробуйте ще.'
          );
        }
          this.setState({
          img: data.hits,
          totalPage: Math.ceil(data.totalHits / 12),
        });
        Notify.success(`Круто! Ми знайшли ${data.totalHits} картинок.`);
      })
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ isLoading: false }));}
      );
    }
  };

  smoothScroll = cardHeight => {
    scroll.scrollMore(cardHeight * 2);
  };

  onSubmit = value => {
    this.setState({ searchValue: value });
  };

  getNextPageHeight = () => {
    const { height: cardHeight } = document
      .querySelector('.galleryWrapp')
      .firstElementChild.getBoundingClientRect();
    return cardHeight;
  };


  onChangePage = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        isLoading: true,
      }),
      () => {
      getImage(this.state.searchValue, this.state.page).then(data => {
        this.setState(
          prevState => ({
            img: [...prevState.img, ...data.hits],
          }),
          this.smoothScroll(this.getNextPageHeight())
        );
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
      }
    );
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