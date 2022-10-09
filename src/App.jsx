import './App.css';

import POWERED_BY from './Modules/ModuleConstantPoweredBy';
import PageComments from "./Pages/PageComments";

function App() {
  return (
    <div className="App">
      <PageComments/>
      {POWERED_BY} 
    </div>
  );
}

export default App;
