import './App.css';
import Application from './components/Application/Application';
import Counter from './components/Counter/Counter';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={['HTML', 'CSS', 'JS']} /> */}
      <Counter />
    </div>
  );
}

export default App;
