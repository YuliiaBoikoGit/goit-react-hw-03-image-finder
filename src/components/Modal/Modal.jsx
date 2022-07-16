import React from 'react';
import PropTypes from "prop-types";
import { Overlay, Modal } from "./Modal.styled";

export class Modal extends React.Component {
    render() {
        return (
            <Overlay>
                <Modal>(this.props.children)</Modal>
            </Overlay>
        );
    };
};

Modal.propTypes = {
    children: PropTypes.any.isRequired,
};