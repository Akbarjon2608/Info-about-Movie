import { Footer, Header } from "@components/index";
import { HomePage, MoviePage, InfoPage, Search } from "@pages/index";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Routing } from "./libs/Routing";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
