import './services.css'

export default function Services (){
    const serviceCard = [
        {
            title: "Laptop & Dekstop Repair",
            img: 'laptop.png',
            desc: "We fix all brands of laptops & desktops with fast & reliable service."
        },
        {
            title: "Printer & Scanner Repair",
            img: 'printer.png',
            desc: "Printer, scanner & mutifunction device repair with genuine parts."
        },
        {
            title: "Monitor & CPU Repair",
            img: 'monitor.png',
            desc: "Screen, motherboard, SMPS & CPU repair for all major brands."
        },
        {
            title: "Hardware sales & Replacement",
            img: 'hardware.png',
            desc: "RAM, SSD, laptop screens, adaptor & all computer hardware."
        },
        {
            title: "Corporate AMC Services",
            img: 'verify.png',
            desc: "Annual maintenance contacts for businesses with priority support."
        },
        {
            title: "On-site IT Support",
            img: 'it_support.png',
            desc: "Doorstep technical support for offices and corporate clients."
        },
        {
            title: "Networking & Office Setup",
            img: 'networking.png',
            desc: "Network setup, troubleshooting, router, switch & structured cabling."
        },
        {
            title: "Bulk-Hardware Supply",
            img: 'bulk_hardware.png',
            desc: "Bulk supply for IT hardware for offices, schools & organization."
        },
        {
            title: "CCTV & Security Solution",
            img: 'cctv.png',
            desc: "Basic CCTV installation, monitoring setup and office security support."
        },
    ]

    return (
        <section className='services' id='services' >
            <div className='service-container'>
                <h2 className='service-heading'>Our Services</h2>
                <div className='service-card-grid'>
                    {serviceCard.map((service, index) => (
                        <div className='serviceBox' key={index}>
                            <div className='imageBox'>
                                <img src= {service.img} alt={service.title} />
                            </div>
                            <div className='service-card-content'>
                                <h4>{service.title}</h4>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}