import { Link } from 'react-router-dom'
function HeaderBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <a className="navbar-brand text-white" href="/">Odyssey AI Travels</a>
                <div className="navbar-nav ">
                    <a className="nav-a text-white text-decoration-none px-2" href="/">Home</a>
                    <a className="nav-a text-white text-decoration-none px-2" href="/about">About</a>
                    <a className="nav-a text-white text-decoration-none px-2" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default HeaderBar;