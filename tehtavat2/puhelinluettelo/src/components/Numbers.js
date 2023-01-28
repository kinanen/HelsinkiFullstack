import Persons from "../services/Persons";

const Numbers = ({contacts}) => {

    const remove = (event) => { 
        console.log(event.target.target);
        
    }

    

    return (
        <ul>
            {contacts.map(contact => 
                <li key={contact.name}>{contact.name} p. {contact.number} 
                <button onClick={() => Persons.remove(contact.id)} > Delete </button></li>
                )}
        </ul>
    );
}

export default Numbers