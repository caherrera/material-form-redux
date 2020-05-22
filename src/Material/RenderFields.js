import React from "react";
import FormInput from 'FormInput';

export default function renderFields(_fieldset) {
    const fieldset = _fieldset instanceof Array ? {
        inline: false,
        fields: _fieldset
    } : _fieldset;
    let legend;
    const fields = fieldset.fields.map(i => {
        let input;
        i.required = Boolean(i.required);

        switch (i.type || 'text') {
            // case 'legend':
            //     legend = <legend>{i.label}</legend>;
            //     break;
            // case 'checkbox':
            //     input = <FormCheckbox {...i} options={i.options}/>;
            //     break;
            // case 'radio':
            //     input = <FormRadio {...i} options={i.options}/>;
            //     break;
            // case 'select':
            //     input = <FormSelect {...i} options={i.options}/>;
            //     break;
            default:
                input = <FormInput {...i} />;
        }
        return input;
    });
    const rowTag = fields;
    return legend ? <fieldset>{legend}{rowTag}</fieldset> : rowTag;
}
