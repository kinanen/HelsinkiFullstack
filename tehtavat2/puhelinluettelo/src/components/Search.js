import { useState } from "react"

const Search = ({contacts, visible ,setVisible}) => {
    
    const handleFilter = (event) => {
        setFilter(event.target.value);
        setVisible(contacts.filter(contact =>contact.name.toLowerCase().includes(event.target.value.toLowerCase())));
    }

    const [filter, setFilter] = useState('');

    return(
        <div>
            <form>
               filter shown with : <input value={filter} onChange={handleFilter}/>
            </form>
        </div>
    )
}

export default Search