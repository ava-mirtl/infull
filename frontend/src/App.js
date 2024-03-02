import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Error from "./pages/error/Error.jsx";
import Auth from "./pages/auth/Auth.jsx";
import Account from "./pages/account/Account.jsx";

function App() {
    return (
        <Router>
            <Routes>

            
                <Route path="/" element={<Auth />} />
                <Route path="/account" element={<Account />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
