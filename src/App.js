// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import img_bk from './images/bk_design.jpeg'

function Header() {
  return (
    <header>
      <h1>My strange recipe</h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      <p>My recipe list</p>
    </main>
  )
}

function Footer() {
  return(
    <footer>
      <p>Copyright &copy;2022</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;