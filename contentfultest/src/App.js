
import React, {useEffect, useState} from "react";
import './App.css';
import Home from "./components/Home.js"

function App() {

  const [entries, setEntries]=useState([])
  const [assets,setAssets]= useState("")


  const contentful = require('contentful') 

  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.REACT_APP_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.REACT_APP_API_ACCESS_TOKEN,
  })

  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
  useEffect(()=>{
      client
      .getEntries()
      .then((entries) => setEntries(entries.items))
      .catch((err) => console.log(err)) 
  },[])

  return (
    <div className="App">
     <Home entries={entries}/>
    </div>
  );
}

export default App;
