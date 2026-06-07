import './process.css'
 export default function Process (){
    const process = [
        {
            process_img: 'enquiry.png',
            process_title: 'Inquiry',
            process_desc: "You contact us with your requirement."
        },
        {
            process_img: 'requrement.png',
            process_title: 'Requirement Check',
            process_desc: "We analyize the issue or requirement."
        },
        {
            process_img: 'quotation.png',
            process_title: 'Quotation',
            process_desc: "We provide the best possible quote."
        },
        {
            process_img: 'repair.png',
            process_title: 'Repair/Supply/Support',
            process_desc: "We repair, supply & support IT products."
        },
        {
            process_img: 'delievery.png',
            process_title: 'Delivery & Follow-Up',
            process_desc: "We deliver & ensure everything works fine."
        },
    ]
    return (
        <section className='process-section' id='process'>
            <h2>Our Work Process</h2>
            <div className='process-container'>
                <div className='process-container-grid'>
                    {process.map((process, index) => (
                        <div className='process-card'>
                            <div className='process-img'>
                                <img src= {process.process_img} />
                            </div>
                            <h4> {process.process_title} </h4>
                            <p> {process.process_desc} </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}