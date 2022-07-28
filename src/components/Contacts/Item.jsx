    import PropTypes from "prop-types"
    import s from "./Button.module.css"
    import i from "./Item.module.css"

export const Item = ({name, phone, onDelete, id }) => {return <li className={i.item}>
    <p className={i.P}>{name} : {phone}</p>
    <button className={s.button} onClick={()=>onDelete(id)}>delete</button>
 </li>}  


Item.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}