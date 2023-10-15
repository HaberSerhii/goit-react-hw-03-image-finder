import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Notify } from 'notiflix';
import { Searchbar } from './SearchBar/SearchBar';
import { ContainerStyled } from './App.styled';
import { ErrorMessageStyled } from './SearchBar/SearchBar.styled';
import { Loader } from './Loader/Loader';
import { ButtonUp } from './ButtonUp/ButtonUp';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImage } from './fetchApi/fetchImg';
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
        () => this.onFirstFetch()
      );
    }
  }
  onFirstFetch = () => {
    getImage(this.state.searchValue, this.state.page)
      .then(data => {
        if (data.totalHits < 1) {
          throw new Error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        this.setState({
          img: data.hits,
          totalPage: Math.ceil(data.totalHits / 12),
        });
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
      })
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ isLoading: false }));
  };
  onLoadMore = () => {
    getImage(this.state.searchValue, this.state.page)
      .then(data => {
        this.setState(
          prevState => ({
            img: [...prevState.img, ...data.hits],
          }),
          this.smoothScroll(this.getNextPageHeight())
        );
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangePage = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        isLoading: true,
      }),
      () => {
        this.onLoadMore();
      }
    );
  };

  getNextPageHeight = () => {
    const { height: cardHeight } = document
      .querySelector('.galleryWrapp')
      .firstElementChild.getBoundingClientRect();
    return cardHeight;
  };

  smoothScroll = cardHeight => {
    scroll.scrollMore(cardHeight * 2);
  };

  onSubmit = value => {
    this.setState({ searchValue: value });
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