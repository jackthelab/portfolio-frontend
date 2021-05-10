import './App.css';
import './containers/navbar/navbar'

// Containers
import NavBar from './containers/navbar/navbar';
import Main from './containers/main/main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
