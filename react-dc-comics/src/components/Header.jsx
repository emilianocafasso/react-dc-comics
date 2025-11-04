import dcLogo from '../assets/img/dc-Logo.png'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={dcLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                </div>
            </nav>
        </header>
    );
}