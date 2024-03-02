import './App.css';
import Application from './components/Application/Application';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={['HTML', 'CSS', 'JS']} />
    </div>
  );
}

export default App;
