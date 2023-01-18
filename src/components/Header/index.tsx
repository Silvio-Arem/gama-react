import Link from "../Link";

import Logo from "../../assets/images/logo-header.png"

import "./styles.css";
function Header() {
    return (
        <header>
            <div>
            <img src={Logo} alt="Logo do dindin" />
            </div>
            <div>
            <nav>
                <Link texto="Cursos" redirect="/cursos"/>
                <Link texto="Blog" redirect="/blog"/>
                <Link texto="Contato" redirect="/contato"/>
            </nav>
            </div>
        </header>
    );
}

export default Header;