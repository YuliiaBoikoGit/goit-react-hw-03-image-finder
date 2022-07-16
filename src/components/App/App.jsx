import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./App.styled";
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Gallery } from 'components/ImageGallery/ImageGallery';
import { LoadButton } from 'components/Button/Button';
import { fetchImages } from "api/galleryApi";

export class App extends React.Component {
  state = {
    imageName: '',
    page: 1,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.getImages();
    };
  };

  handleFormSubmit = imageName => {
    this.setState({
      imageName,
      page: 1,
      images: [],
    });
  };

  getImages = async () => {
    const { imageName, page } = this.state;
    const { hits } = await fetchImages(imageName, page);

    this.setState(prevState => ({
      images: [...prevState.images, ...hits],
      page: prevState.page + 1,
    }));
  };

  render() {
    const showLoadMoreBtn = this.state.images.length > 0 && this.state.images.length >= 12;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Gallery images={this.state.images} />
        {showLoadMoreBtn && <LoadButton onClick={this.getImages} />}
        <ToastContainer position="top-center"/>
      </Container>
    );
  };
};