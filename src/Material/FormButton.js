import React from 'react';
import { Button } from '@material-ui/core';
import {StyleColors, StyleButtonTypes} from './Parameters'
import PropTypes from "prop-types";


class FormButton extends React.Component {

    render() {
        let align = this.props.className || '';
        align += this.props.type === StyleButtonTypes.submit ? ' float-right' : '';
        let b = {className: align, onClick: e => e.preventDefault(), ...this.props};
        let label = b.label;
        delete b.label;
        return <Button {...b}>{this.props.children ? this.props.children : label}</Button>
    }
}

FormButton.propTypes = {
    type: PropTypes.oneOf(StyleButtonTypes.keys()),
    color: PropTypes.oneOf(StyleColors),
    label: PropTypes.string.isRequired
};
FormButton.defaultProps = {
    type: StyleButtonTypes.submit,
    color: StyleColors.secondary,
    label: 'Enviar'
}

export default FormButton
