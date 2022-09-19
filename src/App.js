
import React,{useState} from 'react';

import  axios   from "axios";
 
import './App.css';


function App() {

  const [data,setData] = useState([]);
  const getData=()=>{
    axios.get("http://a7ca5ed9e114b45e096f748989625ddb-1177704058.us-east-2.elb.amazonaws.com:8080/WeatherForecast")
      .then((resp)=>{
         setData(resp.data);
      }).catch((error)=>{
        setData(error);
      });  
  };

  return (
    <div className="App">
         <h1>The React app on AWS deployed using AWS Amplify</h1>
         <button onClick={getData}>Get Data</button>
         <br/>
         {JSON.stringify(data)}
    </div>
  );
}

export default App;
