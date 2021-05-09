import logo from './images/logo.svg';
import mockup from './images/illustration-mockups.svg';
import './App.css';


function App() {
  return (
    <>

    <header>
      <img src={logo} alt="logo"/>
    </header>

<main className="content">
      <div className="main-image">
        <img src={mockup} alt="mockup"/>
      </div>

      <div className="main-text">
        <h1>Build The Community Your Fans Will Love</h1>

        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <button>Register</button>
      </div>
</main>

<footer>
      <ul className="links">
        <li><i className="fab fa-facebook-f"></i></li>
        <li><i className="fab fa-twitter"></i></li>
        <li><i className="fab fa-instagram"></i></li>
      </ul>
    </footer>
    </>
  );
}

export default App;
