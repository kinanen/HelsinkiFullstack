import './App.css';
import {useState, useEffect} from 'react';
import Numbers from './components/Numbers';
import Form from './components/Form';
import Search from './components/Search';
import Persons from './services/Persons';
import  Message from './components/Message';



const App = () => {
  
  const [contacts, setContacts] = useState([]);
  const [visible, setVisible] = useState([]);
  
  const hook = () => {
    Persons.getAll().then(data => setContacts(data));
  }
 
  let message;
  
  useEffect(hook, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Message message={message}/>
      <Search contacts={contacts} visible={visible} setVisible={setVisible}/>
      <Form contacts={contacts} setContacts={setContacts}/>
      <h2>Numbers </h2>
      <Numbers contacts={visible} />
    </div>
  );
}

export default App;
