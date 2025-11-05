import facebook from '../assets/img/footer-facebook.png'
import periscope from '../assets/img/footer-periscope.png'
import pinterest from '../assets/img/footer-pinterest.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'

export default function Footer() {
    return (
        <footer>
            <div className='container h-100'>
                <div className='row pt-5 footer-list'>
                    <div className="col-3">
                        <h5 className='text-uppercase fw-bold text-white'>dc comics</h5>
                        <ul className='list-unstyled footer-links'>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>

                        <h5 className='text-uppercase fw-bold text-white mt-4'>shop</h5>
                        <ul className='list-unstyled footer-links'>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h5 className="text-uppercase fw-bold text-white">DC</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h5 className="text-uppercase fw-bold text-white">sites</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='footer-social py-3'>
                <div className="container d-flex align-items-center justify-content-between">
                    <button className="btn btn-transparent border-primary fw-bolder text-light text-uppercase">sign-up now!</button>

                    <div className="socials d-flex align-items-center">
                        <a href="#" className='text-uppercase text-primary fw-bolder px-4'>follow us</a>
                        <img src={facebook} />
                        <img src={periscope} />
                        <img src={pinterest} />
                        <img src={twitter} />
                        <img src={youtube} />
                    </div>
                </div>
            </div>
        </footer>
    );
}