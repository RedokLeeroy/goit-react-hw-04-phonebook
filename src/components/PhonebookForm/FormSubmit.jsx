import PropTypes from "prop-types"
import s from "./Button.module.css"

export const FormSubmit = ({title}) => {
    return <button className={s.button} type="submit">{title}</button>
}


FormSubmit.propTypes = {
    title:  PropTypes.string.isRequired
}