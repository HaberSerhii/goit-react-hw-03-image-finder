import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import * as ButtonUpStyled from './ButtonUp.styled';
import { FaArrowCircleUp } from 'react-icons/fa';

export class ButtonUp extends Component {
  state = {
    buttonIsHidden: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolledDistance = window.scrollY;

    if (scrolledDistance >= 600) {
      this.setState({
        buttonIsHidden: false,
      });
    } else {
      this.setState({
        buttonIsHidden: true,
      });
    }
  };


  render() {
    const { buttonIsHidden } = this.state;
    return (
      <ButtonUpStyled.ButtonUpStyled
        onClick={()=>scroll.scrollToTop()}
        style={{ display: buttonIsHidden ? 'none' : 'block' }}
      >
        <FaArrowCircleUp fill="#3f51b5" />
      </ButtonUpStyled.ButtonUpStyled>
    );
  }
}