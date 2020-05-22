import React from 'react'

import {ExampleComponent} from 'material-form-redux'
import 'material-form-redux/dist/index.css'
import FormTag from 'material-form-redux/Material/Form';
import ExampleForm from './api/ExampleForm'

console.log(ExampleForm)
const App = () => {
    return <ExampleComponent text="Create React Library Example 😄">
        <FormTag {...ExampleForm} />
    </ExampleComponent>
}

export default App
