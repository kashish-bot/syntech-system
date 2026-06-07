import './banner.css'
export default function Banner(){
    const bannerCard =[
        {
            heading: "Employee Laptop Setup",
            image: "employeeLaptop.png",
            para: "Ready to use system for new employees."
        },
        {
            heading: "Office Syatem Maintenance",
            image: "officeSystem.png",
            para: "Regular check-up and system optimization."
        },
        {
            heading: "Monthly / Annual AMC",
            image: "verify.png",
            para: "Husolefree maintenance with priority support."
        },
        {
            heading: "Emergency Repair Support",
            image: "emergencyRepair.png",
            para: "Quick respose on critical breakdown"
        },
        {
            heading: "Hardware Procurement",
            image: "hardware.png",
            para: "Get genuine hardware at best prices."
        },
        {
            heading: "Printer & Network Support",
            image: "printer.png",
            para: "Complete printer & network maintenance."
        },
    ]
    return (
        <section className='corporate-banner'>
            <div className='left-banner'>
                <div className='title-tag'>
                    <p className='title-tag-content'>CORPORATE SOLUTIONS</p>
                </div>
                <div className='left-banner-content'>
                <h3>Complete IT Solutions for Your Business</h3>
                <p>From hardware supply to maintenance & support, we business to run smoothly with reliable & efficient IT solutions.</p>
                <div className="callButton">
                <a href="tel:+918802814999"> <img src="call_icon.png"/> Call Now </a>
                </div>
                </div>
            </div>
            <div className='right-banner'>
                    {bannerCard.map((banner, index) => (
                        <div className='banner-card-container'>
                            <div className='banner-img'>
                                <img src={banner.image} alt= {banner.heading} />
                            </div>
                            <div className='banner-content'>
                              <h4>{banner.heading}</h4>
                              <p> {banner.para} </p>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    )
}