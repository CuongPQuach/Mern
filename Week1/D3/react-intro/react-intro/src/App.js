import logo from './logo.svg';
import './App.css';
import Personinfo from './components/Personinfo';
function App() {
  return (
    <div className="App">
      <h1>Hello New React</h1>
      <Personinfo
        firstname={'Doe'}
        lastname={'Jane'}
        age={'45'}
        hair_color={'Black'}
      />
            <Personinfo
        firstname={'Smith'}
        lastname={'John'}
        age={'88'}
        hair_color={'Brown'}
      />
            <Personinfo
        firstname={'Fillmore'}
        lastname={'Millard'}
        age={'50'}
        hair_color={'Brown'}
      />
            <Personinfo
        firstname={'Smith'}
        lastname={'Maria'}
        age={'62'}
        hair_color={'Brown'}
      />
            <Personinfo
        firstname={'Unknow'}
        lastname={'Unknow'}
        age={'infi'}
        hair_color={'$$$$'}
      />
      
      
    </div>
  );
}

export default App;
