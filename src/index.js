import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import {Table} from './tablePlaceValue'; 
import {Schedule} from './WeeklySchedule'; 
// import Game1 from './Game1';
import * as serviceWorker from './serviceWorker';

var who="";
  
// console.log("document.location",document.location.href)
// console.log("document.location",document.location.href.split("who=")[1])

who=document.location.href.split("who=")[1];
let searchParams = new URLSearchParams("?who="+who);
who=searchParams.get("who")
console.log("who=",who)

// if (document.location.search!==null){
//   let searchParams = new URLSearchParams(document.location.search);

//   if (searchParams.has("who")){
//  who=searchParams.get("who");
//  console.log("who=",who)
//    }
//   }


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Schedule who={who}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<Game1  />, document.getElementById('game1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
