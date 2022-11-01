import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header> 
  )
}

function Main(props) {
  return (
    <main>
      <p> {props.adjective} recipes ever.</p>
      <ul>
        {props.recipes.map((recipe) => <li key={recipe.id}>{recipe.title}</li>)}
      </ul>
    </main>
  )
}

function Footer(props) {
  return (
      <p>Copyright &copy; {props.year} </p>
  )
}

const recipes = [
  "Breakfast recipes",
  "Lunch recipes",
  "Brunch recipes",
  "Dinners recipes"
]

const recipeObjects = recipes.map((recipe, recipe_id) => (
  {
    id: recipe_id,
  title: recipe
  }
));

function App() {
  return (
    <div className="App">
      <Header name="My Strange recipe"/>
      <Main adjective="Delicious" recipes={recipeObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App;