import "./App.css";
import Koffer from "./components/Koffer";

// TODO check if we're running in the browser and do some work
if (typeof window !== "undefined") {
  // checkAuthToken();
  // loadDataFromLocalStorage();
  console.log("app ready");
}

function App() {
  return (
    <>
      <Koffer />
    </>
  );
}

export default App;
