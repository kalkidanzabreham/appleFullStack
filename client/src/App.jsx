import Header from "./components/Header"
import Footer from "./components/Footer"
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import Main from "./components/Main"
import Iphone from "./components/iphone"
import { Route, Routes } from "react-router-dom"
import SingleAppleProduct from "./components/SingleAppleProduct"
import FOUR04 from "./components/FOUR04"


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:id" element={<SingleAppleProduct/>} />
        <Route path="*" element={<FOUR04/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App
