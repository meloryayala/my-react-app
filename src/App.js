import { Routes, Route } from "react-router-dom"

import TemplateDefault from './templates/Default'

import Home from "./pages/Home"
import Customers from "./pages/Customers"

const App = () => {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />}/>
        </Routes>
    </TemplateDefault>
  )
}

export default App