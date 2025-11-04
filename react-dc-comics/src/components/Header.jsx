import dcLogo from '../assets/img/dc-Logo.png'

export default function Header() {
    return (
        <header className='bg-light'>
            <nav className="container navbar d-flex justify-content-between">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src={dcLogo} alt="Logo" width="30" height="24" />
                    </a>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}