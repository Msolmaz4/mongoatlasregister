
import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import { useState } from 'react';


const message = {
  'tr-TR':{
    title:'merhabe baba',
    description :'uc tane mesaj var'
  },

 'en-ENG' :{
    title:'hello WORLD',
    description:'you have three Message'
}}

function App() {

  const [lang,setLang] = useState('tr-TR')




  return (
    <div className="App">
     <IntlProvider messages={message[lang]}>
      <FormattedMessage
      id='title'
      />
      <p>
      <FormattedMessage
      id='description'
      />
      </p>
      <br/>
      <br/>
      
      <button onClick={()=>setLang('tr-TR')}>  TR</button>
      <button onClick={()=>setLang('en-ENG')}>  ENG</button>
     </IntlProvider>
    
      
    </div>
  );
}

export default App;
