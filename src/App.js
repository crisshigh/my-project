// import logo from './logo.svg';
import React from 'react';
import './App.css';

const listRecettes=[
  "Premiere recette",
  "Deuxieme recette",
  "Troisieme rectte",
  "Quatrieme recette"
]

const listRecetteId= listRecettes.map((recette, recette_id)=>(
  {
  id:recette_id,
  nom_recette:recette
}
));
function Header(props) {
  return (
    <header>
      <h1>{props.titre}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <main>
      <p>La list de mes {props.mot}<br/>
      {props.listRecettes.map((recette)=>(<li key={recette.id}>{recette.nom_recette}</li>))}
      </p>
    </main>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright &copy;{props.annee}</p>
    </footer>
  )
}

function App() {
  return (
    <div className='App'>
      <Header titre="Mes recettes etranges"/>
      <Main mot="distinguees recettes" listRecettes={listRecetteId}/>
      <Footer annee={new Date().getFullYear()}/>
    </div>
  )
}

export default App;