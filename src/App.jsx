//Libraries
import { Routes, Route } from "react-router-dom";

//Componentss
import Footer from "./components/Footer";
import Header from "./components/header";
import List from './components/List'
import Login from './components/Login'
import Detail from "./components/Detail";
import Results from "./components/Results";

//Styles
import './styles/bootstrap.min.css'
import './App.css'
function App() {


  return (
    <>
      <Header />
      <div className="container-fluid pt-3">
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
