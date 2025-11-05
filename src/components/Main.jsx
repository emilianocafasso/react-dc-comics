import digitalcomicsLogo from '../assets/img/buy-comics-digital-comics.png'
import merchandiseLogo from '../assets/img/buy-comics-merchandise.png'
import shoplocatorLogo from '../assets/img/buy-comics-shop-locator.png'
import subscriptionLogo from '../assets/img/buy-comics-subscriptions.png'
import powervisaLogo from '../assets/img/buy-dc-power-visaa.png'
import comics from '../assets/comics'

export default function Main() {
    return (
        <main>
            <div className="bg-dark py-4">
                <button className='btn btn-primary text-uppercase fw-bold border-radious-4'>current series</button>
                <div className="container d-flex align-items-center mt-4">
                    <ul className='list-unstyled d-flex justify-content-center' id='comics'>
                        {
                            comics.map(comic => (
                                <li key={comic.id} className='text-white text-uppercase'><img src={comic.thumb} width={150} height={150} /><p className='mt-2 text-center'>{comic.title}</p></li>
                            ))
                        }
                    </ul>

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