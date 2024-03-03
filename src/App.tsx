import './App.css';
import Application from './components/Application/Application';
import Counter from './components/Counter/Counter';
import { MuiMode } from './components/Mui/MuiMode';
import Skills from './components/Skills/Skills';
import { AppProviders } from './components/providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={['HTML', 'CSS', 'JS']} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
