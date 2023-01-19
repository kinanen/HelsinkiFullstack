import { useState } from "react"

const Search = ({contacts,visible,setVisible}) => {
    
    const handleFilter = (event) => {
        setFilter(event.target.value);
        setVisible(contacts.filter(contact =>contact.name.toLowerCase().includes(event.target.value.toLowerCase())));
    }
    const [filter, setFilter] = useState('');

    const filterContacts = (event) => {
        event.preventDefault();
        setVisible(contacts.filter(contact =>contact.name.toLowerCase().includes(filter.toLowerCase())));
    }

    return(
        <div>
            <form onSubmit={filterContacts}>
               filter shown with : <input value={filter} onChange={handleFilter}/>
               <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Search