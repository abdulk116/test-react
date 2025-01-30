import logo from './logo.svg';
import './App.css';
import SideBar from './pages/SideBar';

function App() {
  return (
    <div className="App">
      <div className='sidebar-container'>
        <SideBar />
      </div>
      <div className='content-container'>
        <h1>Home page</h1>
      </div>
    </div>
  );
}

export default App;
