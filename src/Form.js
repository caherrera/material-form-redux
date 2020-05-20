import React from 'react'
import PropTypes from 'prop-types';
import Input from "Input";
import Radio from "Radio";
import Checkbox from "Checkbox";
import Select from "Select";
import Button from 'FormButton';
import {ButtonEnviar} from "./BootstrapParameters";

class FormTag extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
    }


    renderErrors() {
        return '';
    }

    handleSubmit(event) {

        this.props.onSubmit(event);
    }

    handleReset(event) {
        this.props.onReset(event);
    }

    getIdentification() {
        const i = this.props.name.inflectorClassify() || this.state.title.inflectorClassify();
        return i;
    }

    renderTitle() {
        const t = this.props.title ? this.props.title : this.props.name.inflectorHumanize();
        return <h5>{t}</h5>

    }

    changeInput(e) {
        return this.props.onChange(e);
    }

    renderFields(_fieldset) {
        const fieldset = _fieldset instanceof Array ? {
            inline: false,
            fields: _fieldset
        } : _fieldset;
        let legend;
        // console.log('******** fieldset ********');
        // console.log(_fieldset);
        // console.log(fieldset);
        // console.log('******** fieldset ********');
        const fields = fieldset.fields.map(i => {
            let input;
            i.required = Boolean(i.required);
            const colSize = typeof i.colSize === "object" ? i.colSize : {xs: i.colSize || 12};

            switch (i.type || 'text') {
                case 'legend':
                    legend = <legend>{i.label}</legend>;
                    break;
                case 'checkbox':
                    input = <FormCheckbox {...i} options={i.options}/>;
                    break;
                case 'radio':
                    input = <FormRadio {...i} options={i.options}/>;
                    break;
                case 'select':
                    input = <FormSelect {...i} options={i.options}/>;
                    break;
                case 'tipo_documento':
                    input = <FormInputDocumentType {...i} options={i.options || []}/>;
                    break;
                case 'visibilidad':
                    input = <FormInputVisibility {...i} options={i.options || []}/>;
                    break;
                default:
                    input = <FormInput {...i} />;
            }
            return input && <Col {...colSize}>{input}</Col>;
        });
        const rowTag = <Row>{fields}</Row>;
        return legend ? <fieldset>{legend}{rowTag}</fieldset> : rowTag;
    }

    renderButtons(buttons) {
        // console.log(buttons);
        const buttons_rendered = buttons.map(b => {

            const maybeEvent = b.onClick || this.props['on' + b.name.inflectorClassify()];

            switch (b.type || 'submit') {
                case 'submit':
                    b.onClick = maybeEvent || this.props.onSubmit || (e => e.preventDefault());
                    break;
                case 'reset':
                    b.onClick = maybeEvent || this.props.onReset || (e => e.preventDefault());
                    break;

            }

            return <Col>
            <FormButton {...b} >{this.props.children}</FormButton>
            </Col>;
        });
        return <Row>{buttons_rendered}</Row>
    }

    renderAllFieldsets() {
        const {
            inline,
            data,
            onChange
        } = this.props;
        const fields = this.props.fields
            .map(fs => {
                const fieldset = fs.map(f => {
                    let v;
                    if (data && typeof (data) === 'object' && data.hasOwnProperty(f.name)) {
                        v = data[f.name];
                    }
                    const fieldset = Object.assign({}, f, {
                        inline: inline,
                        onChange: onChange,
                        value: v
                    });

                    return fieldset
                });
                return fieldset;
            });

        return fields
            .map(this.renderFields);
    }

    render() {

        const {
            handleSubmit,

        } = this.props;

        const fieldSet = this.renderAllFieldsets();
        const buttons = this.props.buttons.map(this.renderButtons);
        const title = this.props.title && <Row><Col><h4>{this.props.title}</h4></Col></Row>;
        const subtitle = this.props.subtitle &&
            <Row className="pt-3 pb-4"><Col><h5>{this.props.subtitle}</h5></Col></Row>;

        return <Container className="p-3">
            {title}
        {subtitle}
    <form onSubmit={handleSubmit}>
            {fieldSet}{buttons}
    </form>
        </Container>
    }
}

FormTag.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    between: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func,
    fields: PropTypes.array.isRequired,
    buttons: PropTypes.array,
    inline: PropTypes.bool,
};
FormTag.defaultProps = {
    name: false,
    title: '',
    subtitle: '',
    fields: [],
    inline: true,
    buttons: [[ButtonEnviar]],
};
export default FormTag
