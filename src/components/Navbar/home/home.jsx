import './home.css';

export default function Hero () {
    return (
        <section className='home' id='home'>
            <div className='home_container'>
                {/* right-side */}
                <div className='left-container'>
                   <div className='tag'>
                       <h4 className='tag-text'>Trusted IT Partner for Businesses</h4>
                   </div>

                   <h1 className='heading'>Reliable <span className='hardware'>IT Hardware</span> & <br/> <span className='hardware'>Repair Support</span> for Businesses </h1>
                   <p>We provide laptop, desktop, printer & monitor repair, bulk hardware supply, AMC services, & on-site technical support for offices and companies.</p>

                   <div className='left-button'>
                     <a href="mailto:syntechsystems.info@gmail.com?subject=Corporate Support Request" className='primary-btn'>Get Corporate Support <img src='right-arow.png' /></a>
                     <a href='#services' className='secondary-btn'>Our Services</a>
                   </div>
                </div>

                {/* right side img */}
                   <div className='img-container'>
                       <img src='home_img.png'/>
                   </div>
                </div>
            

        </section>
    )
}