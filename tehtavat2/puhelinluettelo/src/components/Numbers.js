
const Numbers = ({contacts}) => {
    return (
        <ul>
            {contacts.map(contact => 
                <li key={contact.name}>{contact.name} p. {contact.number}</li>

                )}
        </ul>
    );
}

export default Numbers