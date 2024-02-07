import { Header } from "./components/index";
import { HomePage, AboutPage } from "./pages/index";
import { Routes } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
    </>
  );
}

export default App;
