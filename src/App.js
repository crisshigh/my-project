// import logo from './logo.svg';
import './App.css';
// import img_bk from './images/bk_design.jpeg'
import img_profil from './images/black.jpg'

function Design(props) {
  return (
    <main>
      <form>
        <div class="container">
          <img src={img_profil} height={150} alt="profil"/><br/>
          <h3>{props.accueil} {props.name}</h3>
          <input type="email" id="email" placeholder="Email" required  pattern=".+@convertmoney.com"
          title="Merci de fournir uniquement une adresse @Convertmoney">
          </input><br/>
          
          <input type="password" id="password" placeholder="Password" required></input>
          {/*eslint-disable-next-line*/} 
          <p>Don't have an account? <a href="#">Sign Up</a> Here!</p>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </main>
  )
}
function App() {
  return (
    <div className='App'>
      <Design accueil="Welcome" name="Singa Nada"/>
    </div>
  )
}
export default App;