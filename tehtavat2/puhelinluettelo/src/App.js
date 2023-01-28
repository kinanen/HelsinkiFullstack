import './App.css';
import {useState, useEffect} from 'react';
import Numbers from './components/Numbers';
import Form from './components/Form';
import Search from './components/Search';
import axios from 'axios';


const App = () => {
  
  const [contacts, setContacts] = useState([]);
  const [visible, setVisible] = useState(contacts);
  
  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setContacts(response.data));
  }
 
  useEffect(hook, []);

  console.log("app", contacts);

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
