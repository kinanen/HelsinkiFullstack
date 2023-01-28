import { useState } from "react";
import Persons from '../services/Persons';
import Message from "./Message";       

const Form = ({contacts, setContacts}) => {
    const [newEntry, setNewEntry] = useState({
        name:'Enter the name to add',
        number:'Enter phone number' 
    });
    
    const [message,setMessage] = useState(null, true);

    const addPerson = (event) => {
        event.preventDefault();

        const entryToAdd = { name: newEntry.name.trim(), number: newEntry.number.trim()};
        console.log(entryToAdd);
        if(contacts.some(contact => contact.name.toLowerCase() === entryToAdd.name.toLowerCase())){
            setMessage([`${entryToAdd.name} already exsists in the Phonebook`, false]);
            setTimeout(() => {
                setMessage(null);
            }, 2000);
        }
        else{
            Persons.create(entryToAdd);
            setContacts(contacts.concat(entryToAdd));
            setMessage([`Added ${entryToAdd.name}`, true]);
            setTimeout(() => {
                setMessage(null);
            }, 2000);
            setNewEntry({name: '', number:''});
        }
        console.log(contacts)
    }
    //let entry = {name:"", number:""};
    const handleChangeName = (event) => setNewEntry({...newEntry, name: event.target.value});
    const handleChangeNumber = (event) => setNewEntry({...newEntry, number: event.target.value});

    return (
        <form onSubmit={addPerson}>
            <h2>Add Person</h2>
            <div>
                name : <input value={newEntry.name} onChange={handleChangeName}/>
            </div>
            <div>
                number: <input value={newEntry.number} onChange={handleChangeNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <div>
                <Message message={message}/>
            </div>
        </form>
    )
}

export default Form;