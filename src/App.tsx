import MyProvider from "./context/Provider";
import Routers from "./routers/Router";
import "./styles/global.css";

function App() {
  return (
    <MyProvider>
      <Routers />
    </MyProvider>
  );
}

export default App;
