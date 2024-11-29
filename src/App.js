import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
