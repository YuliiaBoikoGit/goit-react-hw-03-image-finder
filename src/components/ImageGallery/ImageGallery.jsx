import PropTypes from "prop-types";
import { ImageGallery } from "./ImageGallery.styled";
import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const Gallery = ({images}) => {
    return (
        <ImageGallery>
            <GalleryItem images={images} />
        </ImageGallery>
    );
};

Gallery.propTypes = {
    images: PropTypes.array,
};