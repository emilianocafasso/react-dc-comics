import dcLogo from '../assets/img/dc-Logo.png'

export default function Header() {
    return (
        <header className='bg-light'>
            <nav className="container navbar d-flex justify-content-between">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src={dcLogo} alt="Logo" width={60} />
                    </a>
                </div>
                <ul className="nav fs-6">
                    <li className="nav-item">
                        <a className="nav-link text-dark active" aria-current="page" href="#">CHARACTERS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark active" aria-current="page" href="#">COMICS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark active" aria-current="page" href="#">MOVIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark active" aria-current="page" href="#">TV</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">GAMES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">COLLECTIBLES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">VIDEOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">FANS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">NEWS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">SHOP</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}