import './App.css';
import Personalcard from './components/personalcard';
function App() {
  return (
    <div className="App">
      <h1>WelCome To The Never Ending Mean Club</h1>
      <Personalcard
      fname = {'Jane'}
      lname = {'Doe'}
      age = {45}
      haircolor = {'Black'}
      />
      <Personalcard
      fname = {'John'}
      lname = {'Smith'}
      age = {88}
      haircolor = {'Blone'}
      />
    </div>
  );
}

export default App;
