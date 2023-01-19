import './App.css';
import {useState} from 'react'
import Numbers from './components/Numbers'
import Form from './components/Form'


const App = ({persons}) => {


  const [contacts, setContacts] = useState(persons)


  return (
    <div>
      <h2>Phonebook</h2>
      <Form contacts={contacts} setContacts={setContacts}/>
      <h2>Numbers </h2>
      <Numbers contacts={contacts} />
    </div>
  );
}

export default App;
