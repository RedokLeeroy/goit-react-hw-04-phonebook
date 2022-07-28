import { Component } from "react";
import { FormSubmit } from "./FormSubmit";
import { NameInput } from "./NameInput";
import { PhoneInput } from "./PhoneInput";
import PropTypes from "prop-types"

export class PhonebookForm extends Component {
    state = {
        name : "",
        phone: ""
    }

    static propTypes = {
    onSubmit: PropTypes.func
    }

    handlerInput = (event) => {
        const {name, value} = event.target
        return this.setState({[name] : value})
    }

    handSubmit= (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({ name : "",
        phone: ""})
    }

render () {
    const {name, phone} = this.state
    return (
        <form onSubmit={this.handSubmit}>
        <NameInput value={name} name="name" func={this.handlerInput}></NameInput>
        <PhoneInput value={phone} name="phone" func={this.handlerInput}></PhoneInput>
        <FormSubmit title="Add contact"></FormSubmit>
        </form>
    )
}
}

