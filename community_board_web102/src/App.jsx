import './App.css';
import Grid from './components/CardGrid.jsx'

const App = (props) => {

  return (
    <div className="App">
      <h1>South Asian Spots in {props.city} </h1>

      <Grid>
        
      </Grid>
    </div>
  )
}

export default App