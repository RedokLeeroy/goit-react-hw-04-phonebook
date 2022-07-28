import PropTypes from "prop-types"
import s from "./Input.module.css"
export const NameInput = ({name, value, func}) => {
    return <label className={s.label}>Name<input
  className={s.input}
  type="text"
  name={name}
  value={value}
  onChange={func}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/></label>
}

NameInput.propTypes = {
    name:  PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
}