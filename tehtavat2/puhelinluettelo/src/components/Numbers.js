import Persons from "../services/Persons";
import { useState } from "react";
import Message from "./Message";

const Numbers = ({contacts}) => {

    const [message,setMessage] = useState(null, true);
    const remove = (id) => Persons.remove(id)
                .catch(error => {
                    setMessage([`Information of ${contacts.find(contact => contact.id === id).name} has already been removed from server`, true]);
                    setTimeout(() => {
                    setMessage(null);
                    }, 2000);
                });
    return (
        <div>
            <Message message={message}/>
        <ul>
            {contacts.map(contact => 
                <li key={contact.name}>{contact.name} p. {contact.number} 
                <button onClick={()=>remove(contact.id)}> Delete </button></li>
                )}
        </ul>
        </div>
    );
}

export default Numbers