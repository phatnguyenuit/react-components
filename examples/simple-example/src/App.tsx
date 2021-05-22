import { SayHello } from '@phatnguyenuit/react-components';
import Page1 from 'containers/page1';
import './App.css';

function App() {
  return (
    <div className="App">
      <Page1 />
      <SayHello name="Fast Nguyen" />
    </div>
  );
}

export default App;
