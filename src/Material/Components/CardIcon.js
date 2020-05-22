import React from "react";

class CardIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div {...props}>{this.props.children}</div>
    }
}


CardIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.string,
    color: PropTypes.string
};

CardIcon.defaultProps = {
    className: '',
    style: '',
    color: '',
};
export default CardIcon
