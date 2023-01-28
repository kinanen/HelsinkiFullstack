import './App.css';
import {useState, useEffect} from 'react';
import Numbers from './components/Numbers';
import Form from './components/Form';
import Search from './components/Search';
import Persons from './services/Persons';



const App = () => {
  
  const [contacts, setContacts] = useState([]);
  const [visible, setVisible] = useState(contacts);
  
  const hook = () => {
    Persons.getAll().then(data => setContacts(data));
  }
 
  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Search contacts={contacts} visible={visible} setVisible={setVisible}/>
      <Form contacts={contacts} setContacts={setContacts}/>
      <h2>Numbers </h2>
      <Numbers contacts={visible} />
    </div>
  );
}

export default App;
