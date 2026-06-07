import "./whyUs.css"
export default function Us (){
    const feature =[
        {
            feature_img: 'experienced.png',
            feature_title: 'Experienced Technician'
        },
        {
            feature_img: 'quickResponse.png',
            feature_title: 'Quick Response'
        },
        {
            feature_img: 'repair.png',
            feature_title: 'Genuine Parts & Quality Service'
        },
        {
            feature_img: 'doorstepService.png',
            feature_title: 'On-site / Doorstep Support'
        },
        {
            feature_img: 'multideviceSupport.png',
            feature_title: 'Support for Multiple Devices'
        },
        {
            feature_img: 'partnership.png',
            feature_title: 'Long-term Business Partnership'
        },
    ]
    return (
        <section className="us-section" id="whyUs">
            <h2>Why US?</h2>
            <div className="us-container">
                <div className="us-container-grid">
                    {feature.map((us, index) => (
                        <div className="us-content-container">
                            <div className="us-img">
                                <img src= {us.feature_img} alt= {us.feature_title} />
                            </div>
                            <h4> {us.feature_title} </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}