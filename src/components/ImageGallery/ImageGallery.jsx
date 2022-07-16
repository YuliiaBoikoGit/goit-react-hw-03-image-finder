import PropTypes from "prop-types";
import { ImageGallery } from "./ImageGallery.styled";
import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const Gallery = ({images, onImgClick}) => {
    return (
        <ImageGallery>
            <GalleryItem images={images} onImgClick={onImgClick} />
        </ImageGallery>
    );
};

Gallery.propTypes = {
    images: PropTypes.array,
    onImgClick: PropTypes.func.isRequired,
};