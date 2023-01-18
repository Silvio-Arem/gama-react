import { Routes as WraperRoutes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

export default function Routes() {
    return (
        <BrowserRouter>
            <WraperRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/contato/:nome" element={<Contato />} />
            </WraperRoutes>
        </BrowserRouter>
    );
}