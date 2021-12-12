import {React} from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import LoginForm from './components/web/LoginForm'
import UserDashboard from './components/web/UserDashboard';

function App() {
    return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <LoginForm />} />
      <Route path="/web/user-dasboard" element={ <UserDashboard />} />

      </Routes>
    </BrowserRouter>
        </>
    )
}

export default App
