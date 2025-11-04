import digitalcomicsLogo from '../assets/img/buy-comics-digital-comics.png'
import merchandiseLogo from '../assets/img/buy-comics-merchandise.png'
import shoplocatorLogo from '../assets/img/buy-comics-shop-locator.png'
import subscriptionLogo from '../assets/img/buy-comics-subscriptions.png'
import powervisaLogo from '../assets/img/buy-dc-power-visaa.png'


export default function Main() {
    return (
        <main>
            <div className="bg-dark py-4">
                <div className="container d-flex align-items-center">
                    <p className="text-white fw-bolder m-0"> → Content goes here ← </p>
                </div>
            </div>

            <div className="bg-primary py-4">
                <div className="container">
                    <ul className='w-100 d-flex align-items-center justify-content-between list-unstyled'>
                        <li className='d-flex align-items-center gap-2 text-white'>
                            <img src={digitalcomicsLogo} alt="" />
                            <p>DIGITAL COMICS</p>
                        </li>
                        <li className='d-flex align-items-center gap-2 text-white'>
                            <img src={merchandiseLogo} alt="" />
                            <p>DC MERCHANDISE</p>
                        </li>
                        <li className='d-flex align-items-center gap-2 text-white'>
                            <img src={subscriptionLogo} alt="" />
                            <p>SUBSCRIPTION</p>
                        </li>
                        <li className='d-flex align-items-center gap-2 text-white'>
                            <img src={shoplocatorLogo} alt="" />
                            <p>COMIC SHOT LOCATOR</p>
                        </li>
                        <li className='d-flex align-items-center gap-2 text-white'>
                            <img src={powervisaLogo} alt="" />
                            <p>DC POWER VISA</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}