import PropTypes from "prop-types";
import { ImageGalleryItem, ImageGalleryItemImage } from "./ImageGalleryItem.styled";

export const GalleryItem = ({image, onImgClick}) => {
    return (
    <>
            <ImageGalleryItem>
                <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} onClick={() => onImgClick(image.largeImageURL)} />
            </ImageGalleryItem>
    </>
    );
};

GalleryItem.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }),
    ),
    onImgClick: PropTypes.func.isRequired,
};