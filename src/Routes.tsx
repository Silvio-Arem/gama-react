import { Routes as WraperRoutes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

export default function Routes() {
    return (
        <WraperRoutes>
            <Route  path="/" element={<Home />}/>
            <Route path="/contato" element={<Contato />}/>
        </WraperRoutes>
    );
}