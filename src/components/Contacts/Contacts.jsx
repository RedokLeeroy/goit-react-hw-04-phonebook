import PropTypes from "prop-types"
import s from "./Contacts.module.css"

import { Item } from "./Item"
export const Contacts = ({contact, onDelete}) => {return <ul className={s.list}>{contact.map(({id, name, phone}) => <Item key={id} name={name} phone={phone} onDelete={onDelete} id={id} />)}</ul> }

Item.propTypes = {
    contact: PropTypes.array,
    onDelete: PropTypes.func.isRequired
}