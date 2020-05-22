const ExampleForm = {
    'name': 'ExampleForm',
    'title': 'Agenda tu Visita',
    'description': 'Manten distancia social usando filas virtuales',
    'fields': {
        'country': {
            'type': 'dropdown',
            'items': ['chile', 'argentina', 'brazil', 'peru', 'colombia'],
            'required': true
        },
        'name': {
            'type': 'text',
            'required': true
        },
        'email': {
            'type': 'email',
            'placeholder': 'your@mail.com',
            'required': true
        },

        'notifications': {
            'type': 'checkbox',
            'label': 'want to receive notifications',
            'value': 'yes',
            'checked': false
        },
        'sex': {
            'type': 'radio',
            'label': 'Your Sex',
            'items': {
                'F': "Female",
                'M': 'Male',
                'O': 'LGBTI+'
            },

        },

    }

}

export default ExampleForm
