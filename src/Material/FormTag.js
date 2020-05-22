import React from 'react'
import PropTypes from 'prop-types';
import renderFields from "./RenderFields";
import FormHeader from "./FormHeader";

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
            .map(renderFields);
    }

    render() {

        const {
            handleSubmit,

        } = this.props;

        const fieldSet = this.renderAllFieldsets();
        const buttons = this.props.buttons.map(this.renderButtons);
        const title = this.props.title && <FormHeader>{this.props.title}</FormHeader>;
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
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
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
