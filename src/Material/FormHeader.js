import React from 'react'
import CardHeader from "@material-ui/core/CardHeader";
import {MailOutline} from "@material-ui/icons";
import CardIcon from "Components/CardIcon";
import {checkPropTypes} from "prop-types";

class FormHeader extends React.Component {
    render() {
        return <CardHeader color={this.props.icon} icon>
            <CardIcon color={this.props.icon}>
                <MailOutline/>
            </CardIcon>
            <h4 className={this.props.titleClassName}>{this.props.title}</h4>
        </CardHeader>
    }
}

FormHeader.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    titleClassName: PropTypes.string
};
FormHeader.defaultProps = {
    color: '',
    title: '',
    titleClassName: ''


};
export default FormHeader
