import Main from "./Components/Main";
import MainNav from "./Components/MainNav";
import ("./Body.css")


function App() {
  return (
    <div className="app">
      <MainNav/>
      <Main/>
    </div>
  );
}

export default App;
