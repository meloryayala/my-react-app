import { Routes, Route } from "react-router-dom"

import TemplateDefault from './templates/Default'
import TemplateClean from "./templates/Clean"

import Home from "./pages/Home"
import ListCustomers from "./pages/customers/ListCustomers"
import AddCustomers from "./pages/customers/AddCustomers"
import EditCustomers from "./pages/customers/EditCustomers"
import Login from "./pages/Login"

import { AuthProvider } from "./state/auth"

const App = () => {
  return (
    <>
      <TemplateDefault>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="customers" element={<ListCustomers />} />
          <Route path="customers/add" element={<AddCustomers />} />
          <Route path="customers/edit/:id" element={<EditCustomers />} />
        </Routes>
      </TemplateDefault>
      <TemplateClean>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </TemplateClean>
    </>
  )
}

export default App