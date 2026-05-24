import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  // const [isLiked, setLike] = useState(false);

  // function like(){
  //   setLike(!isLiked);
  // }
  useEffect(()=>{
    alert("Componend successfully loaded")
    console.log("Component loaded")
  },[])

  return (
    // <div>
    //     <h1>Picture</h1>
    //     {isLiked && <p>liked</p>}
    //     {!isLiked && <p>Unliked</p> }
    //     <button onClick={like}>Like</button>
    // </div>
    <div>
      <h1>hello react</h1>
    </div>
  );
}
