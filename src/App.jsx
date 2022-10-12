import './App.css';

import POWERED_BY from './Presentation/Modules/ModuleConstantPoweredBy';
import PageComments from "./Presentation/Pages/PageComments";

function App() {
  return (
    <div className="App">
      <PageComments/>
      <POWERED_BY/>
    </div>
  );
}

export default App;
