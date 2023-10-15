import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Modal } from '../Modal/Modal';
import { ModalStyled } from '../Modal/Modal.styled';
ReactModal.setAppElement('#root');

export class ImageGallery extends Component {
  state = {
    showModal: false,
    showImg: {},
  };

  handleOpenModal = (imgUrl, alt) => {
    document.body.style.overflow = 'hidden';
    this.setState({ showModal: true, showImg: { imgUrl, alt } });
  };

  handleCloseModal = () => {
    document.body.style.overflow = '';
    this.setState({ showModal: false });
  };

  render() {
    const { img } = this.props;
    const { showModal, showImg } = this.state;
    return (
      <>
        <ImageGalleryStyled className="galleryWrapp">
          {img &&
            img.map(item => (
              <ImageGalleryItem
                key={item.id}
                itemImg={item}
                onOpenModal={this.handleOpenModal}
              />
            ))}
        </ImageGalleryStyled>
        <ReactModal
          isOpen={showModal}
          contentLabel="Modal"
          onRequestClose={this.handleCloseModal}
          style={ModalStyled}
        >
          <Modal imgData={showImg} />
        </ReactModal>
      </>
    );
  }
}