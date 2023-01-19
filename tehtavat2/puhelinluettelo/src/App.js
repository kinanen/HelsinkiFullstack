import './App.css';
import {useState} from 'react'
import Numbers from './components/Numbers'
import Form from './components/Form'
import Search from './components/Search'


const App = ({persons}) => {


  const [contacts, setContacts] = useState(persons);
  const [visible, setVisible] = useState(contacts);

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
