import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import './App.css';

function App() {
  return (
    <div className="App" id="app">
      <nav>
        <img src={logo} alt="Ironhack logo" id="logo"/>
        <img src={menu} alt="Menu" id="menu"/>
      </nav>

      <section id="section1">
        <h1>Say hello to <br /> ReactJS</h1>
        <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super ninja developer.</p>
        <button>Awesome!</button>
      </section>

      <section id="section2">
        <div>
        <img src={icon1} alt="icon1"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
        <img src={icon2} alt="icon2"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
        <img src={icon3} alt="icon3"/>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
        <img src={icon4} alt="icon4"/>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
