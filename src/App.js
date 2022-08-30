import logo from './logo.svg';
import './App.css';

import EightBall from './EightBall';
import answers from './Answers';

/** Renders EightBall
 *
 * App -> EightBall
 */

function App() {
  return (
    <div className="App">
     < EightBall resp = { answers }/>
    </div>
  );
}

export default App;
