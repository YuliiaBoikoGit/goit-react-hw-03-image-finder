import PropTypes from "prop-types";
import { ImageGalleryItem, ImageGalleryItemImage } from "./ImageGalleryItem.styled";

export const GalleryItem = ({images}) => {
    return (
        <>
            {images.map(image =>
                <ImageGalleryItem key={image.id}>
                    <ImageGalleryItemImage src={image.webformatURL} alt={image.tags}/>
                </ImageGalleryItem>)
            }
        </>
    );
};

GalleryItem.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }),
    ),
};