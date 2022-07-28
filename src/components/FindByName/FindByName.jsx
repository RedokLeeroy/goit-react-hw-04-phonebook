import PropTypes from "prop-types"
import s from "./Input.module.css"
export const FindByName = ({value, onChange}) => {
    return <label className={s.label}> Find Contacts By name: <input className={s.input}
  name="filter"
  value={value}
  onChange={onChange}
/>
</label>
}

FindByName.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}