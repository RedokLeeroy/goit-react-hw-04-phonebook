import { useState } from "react";
import { FormSubmit } from "./FormSubmit";
import { NameInput } from "./NameInput";
import { PhoneInput } from "./PhoneInput";
import PropTypes from "prop-types"



export const PhonebookForm = ({onSubmit}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    
    const handSubmit= (event) => {
        event.preventDefault()
        onSubmit({name, phone})
        setName("")
        setPhone("")
    }

    const handlerInput = (event) => {
        const {name, value} = event.target
        if (name === "name") {
        setName(value)
        }else if (name === "phone"){
        setPhone(value)
        }
    }
    
    return (
        <form onSubmit={handSubmit}>
        <NameInput value={name} name="name" func={handlerInput}></NameInput>
        <PhoneInput value={phone} name="phone" func={handlerInput}></PhoneInput>
        <FormSubmit title="Add contact"></FormSubmit>
        </form>
    )
}

PhonebookForm.propTypes = {
    onSubmit: PropTypes.func
    }
