import { Routes as WraperRoutes, Route} from "react-router-dom";
import Home from "./pages/Home";

export default function Routes() {
    return (
        <WraperRoutes>
            <Route  path="/" element={<Home />}/>
        </WraperRoutes>
    )
}