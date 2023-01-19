import { useState } from "react"

const Form = ({contacts, setContacts}) => {
    const [newEntry, setNewEntry] = useState('Enter a name to add');
    
    const addPerson = (event) => {
        event.preventDefault();
        
        const entryToAdd = { name: newEntry.trim() };

        if(contacts.some(contact => contact.name.toLowerCase() === entryToAdd.name.toLowerCase())){
            alert(`${entryToAdd.name} already exsists in the Phonebook`);
        }
        else{
            setContacts([...contacts, entryToAdd]);
            setNewEntry("");
        }
    }
    
    const handleChangeName = (event) => setNewEntry(event.target.value);


    return (
        <form onSubmit={addPerson}>
            <div>
                name : <input value={newEntry} onChange={handleChangeName}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form;