import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'



function App() {
  const [pokemon,setpokemon] = useState([])
  // const [searchInput,setSearchInput] = useState('')




  useEffect (() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then((response) => {
      console.log(response.data.results);
      setpokemon(response.data.results)
    })
    .catch(err => console.log(err))
  }, [])

  // const submitHandler = async(e) =>{
  //   e.preventDefault();
  //   try{
  //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
  //     console.log(response)
  //     setpokemon(response.date.results)
  //   }
  //   catch(err){
  //     console.log(err);
  //   }

  // }



  return (
    <div className="App">
      <h1>Pokemon Api</h1>

{/* Extra Search single monster Search funtion
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Searching for Your Monster</label>
        <input type="text" name="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
        <button>Search</button>
      </form> */}
      {
        pokemon.length > 0?
        pokemon.map((monster,idx) =>(
          <div key={idx}>
            <h3>{monster.name}</h3>
            <a href="{monster.url}">{monster.url}</a>
          </div>
        )):
        null
      }
    </div>
  );
}

export default App;
