// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import MyComponent from "./MyComponent";

// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "6rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <MyComponent></MyComponent>
    </main>
  );
}

export default App;
