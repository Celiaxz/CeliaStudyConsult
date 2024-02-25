import "./App.css";
import Header from "./Header/Header";
import Calendly from "./Calendly/Calendly";

function App() {
  return (
    <>
      <div id="container" className=" flex flex-col h-full content-center">
        <Header />
        <Calendly />
      </div>
    </>
  );
}

export default App;
