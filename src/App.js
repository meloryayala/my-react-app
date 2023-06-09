import { Routes, Route } from "react-router-dom"

import TemplateDefault from './templates/Default'

import Home from "./pages/Home"
import ListCustomers from "./pages/customers/ListCustomers"
import AddCustomers from "./pages/customers/AddCustomers"
import EditCustomers from "./pages/customers/EditCustomers"

const App = () => {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customers" element={<ListCustomers />} />
        <Route path="customers/add" element={<AddCustomers />} />
        <Route path="customers/edit/:id" element={<EditCustomers />} />
      </Routes>
    </TemplateDefault>
  )
}

export default App