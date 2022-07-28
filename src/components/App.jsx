import { useState, useEffect } from "react";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts";
import { FindByName } from "./FindByName/FindByName"




export const App = () => {
 const [filter, setFilter] = useState("")
 const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('localContacts')) || [])

    useEffect(()=> {localStorage.setItem('localContacts', JSON.stringify(contacts))},[contacts])

    const handlerSubmit = (contact) => { 
      const isHere = contacts.some(({name}) => name === contact.name)
      const obj = {...contact, id: nanoid()}
      if (isHere) {
        alert(`Name already in contacts`)
      return         
      }
      setContacts(ps => [...ps, obj] )
        
    }

    const handleChange = (event) => {
      const {value} = event.target
      setFilter(value)
    }

    const handleFilters = () => {
      return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }

    const handleDelete = (id) =>{
      setContacts((ps) => (ps.filter((el) => el.id !== id)))
    }



return (<>
       <Section title= "phonebook">
       <PhonebookForm onSubmit={handlerSubmit}/>
       </Section>
       <Section title= "Contacts">
         <FindByName value={filter} onChange={handleChange} />
         <Contacts contact= {handleFilters()} onDelete={handleDelete} />
       </Section>
       </>) 
    }










// export class App extends Component {
//   state= {
//   contacts: [  {id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'}],
//     filter: ""
//   }

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('localContacts')
//     if(savedContacts) {
//       this.setState({contacts:JSON.parse(savedContacts)})
//     } 
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("localContacts", JSON.stringify(this.state.contacts))
//     }
//   }

//     handlerSubmit = (contact) => { 
//       const isHere = this.state.contacts.some(({name}) => name === contact.name)

//       if (isHere) {
//         alert(`Name already in contacts`)
//       return         
//       }
//       this.setState((ps) => ({ contacts: [...ps.contacts, {...contact, id: nanoid()}] }) )
        
//     }
    
//     handleChange = (event) => {
//       const {value} = event.target
//       this.setState({filter : value})
//     }

//     handleFilters = () => {
//           const {contacts, filter} = this.state
//       return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
//     }

//     handleDelete = (id) =>{
//       this.setState((ps) => ({contacts :ps.contacts.filter((el) => el.id !== id)}))
//     }

//   render() {
//     const {filter} = this.state
//     return(<>
//       <Section title= "phonebook">
//       <PhonebookForm onSubmit={this.handlerSubmit}/>
//       </Section>
//       <Section title= "Contacts">
//         <FindByName value={filter} onChange={this.handleChange} />
//         <Contacts contact= {this.handleFilters()} onDelete={this.handleDelete} />
//       </Section>
//       </> 
//     )
//   }
// }


