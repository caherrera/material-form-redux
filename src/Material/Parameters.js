const FixObject = {
    keys() {
        let k = [];
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                k.push(i);
            }
        }
        return k;
    }
};

export const StyleColors = {
    ...FixObject,
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    light: 'light',
    dark: 'dark'
};
export const StyleSizes = [...Array(12).keys()].map(i => i + 1);
export const StyleButtonTypes = {
    ...FixObject,
    submit: 'submit',
    reset: 'reset',
    button: 'button'
};
