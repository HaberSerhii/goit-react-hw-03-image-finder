import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  CurrentPageStyled,
  ErrorMessageStyled,
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';

const schema = object().shape({
  search: string().trim().required('This field is required'),
});
const initialValues = {
  search: '',
};
export class Searchbar extends Component {
  handleSubmit = (value, { resetForm }) => {
    this.props.onSubmit(value.search);
    resetForm();
  };
  render() {
    const {
      currentPage: { page, totalPage },
    } = this.props;
    return (
      <Header>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          <SearchForm>
            <SearchFormButton type="submit">
              <AiOutlineSearch />
            </SearchFormButton>

            <SearchFormInput
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage component={ErrorMessageStyled} name="number" />
          </SearchForm>
        </Formik>
        {totalPage > 1 && (
          <CurrentPageStyled onClick={() => scroll.scrollToBottom()}>
            {page}/{totalPage}
          </CurrentPageStyled>
        )}
      </Header>
    );
  }
}