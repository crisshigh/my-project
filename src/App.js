// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import img_pizza from "./images/recipe_images_pizza.jpg"
function HiddenOne() {
  return (
    <h1>secret</h1>
  )
}

function Normal() {
  return (
    <h1>Normal</h1>
  )
}

function App(props) {
  return(
    <>
    {props.cond}?<HiddenOne/>:<Normal/>
    </>
  )
}

export default App;