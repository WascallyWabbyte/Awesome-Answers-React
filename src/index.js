import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// All React component names must begin with a capital letter


// function AnswerDetails(){
//   return (
//     <div className="Reviews">
//       <p>This is a review</p>
//       <p>
//         <strong>Created At:</strong> 2018-02-01
//       </p>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
