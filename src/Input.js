class FormInput extends React.Component {

    _render() {
        return (

            <FormControl {...formControlProps} className={formControlClasses}>
                {labelText !== undefined ? (
                    <InputLabel
                        className={classes.labelRoot + " " + labelClasses}
                        htmlFor={id}
                        {...labelProps}
                    >
                        {labelText}
                    </InputLabel>
                ) : null}
                <Input
                    classes={{
                        input: inputClasses,
                        root: marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses
                    }}
                    id={id}
                    {...inputProps}
                />
                {helperText !== undefined ? (
                    <FormHelperText id={id + "-text"} className={helpTextClasses}>
                        {helperText}
                    </FormHelperText>
                ) : null}
            </FormControl>
        )
            ;
    }
    render() {
        const renderLabel = this.renderLabel();
        const renderInput = this.renderInput();
        const renderErrors = this.renderErrors();

        return this.props.check ? this._renderCheck() : this._render({
            row: this.props.row,
            check: true,
            className: this.state.inputErrors.length ? 'form-group has-error' : 'form-group',
            renderLabel,
            renderInput,
            renderErrors
        });
    }

}

FormInput.propTypes = {
    onChange: PropTypes.func,
    row: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.any,
    default: PropTypes.any,
    before: PropTypes.string,
    between: PropTypes.string,
    after: PropTypes.string,
    renderErrors: PropTypes.array,

};
FormInput.defaultProps = {
    onChange: function () {
    },
    label: '',
    default: '',
    value: '',
    name: '',
    row: true,
    className: '',
    required: false,
    type: 'text',
    before: '',
    after: '',
    between: '',
    renderErrors: []
};
export default FormInput
