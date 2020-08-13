import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const myfirstelement = (<div><h1>Hello world :) </h1><h2>PI: {Math.PI} </h2></div>)

// function SetName(props) {
//   this.props.name = props.name;
// }

// function GetName() {
// return <h1>{props.name}</h1>;
// }

function CallOther() {
  const everyone = ['RM', 'Jin', 'SUGA', 'J-Hope', 'Jimin', 'V', 'Jong Kook'];
  var anyone = everyone[Math.floor(Math.random()* everyone.length)];

  return (<span>and {anyone}</span>);
}

class Hello extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fname: "JJ",
      lname: "Tango on the moon",
      age: 25
    }

  }

  changeName = () => {
    const friends = ['Pair', 'Ploy'];
    var anyone = friends[Math.floor(Math.random()* friends.length)];
    this.setState({
      fname: anyone,
      lname: "^^"
    })
  }

  render() {
    return (<div>
            <h1>Hello world from class :) </h1>
            <h1>Hello world {this.state.fname} <CallOther/></h1>
            <button type="button" onClick= {this.changeName}>Change Name</button>
            </div>)
  }
}
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // myfirstelement
  // <Hello2 name='JJ' />
<Hello name='JJ'/>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
