import './industry.css'

export default function Industry (){
    const industry_list = [
        {
            industry_img: "startup.png",
            industry_title: "Startups"
        },
        {
            industry_img: "offices.png",
            industry_title: "Offices"
        },
        {
            industry_img: "School.png",
            industry_title: "Schools & Institute"
        },
        {
            industry_img: "legal.png",
            industry_title: "CA & Legal Firms"
        },
        {
            industry_img: "retail.png",
            industry_title: "Retail Businesses"
        },
        {
            industry_img: "sme.png",
            industry_title: "SMEs"
        },
    ] 
    return (
        <section className='industry-section' id='industries'>
            <h2>Industries We Serve</h2>
            <div className='industry-container'>
            <div className='industry-container-grid'>
                {industry_list.map((industry, index) => (
                    <div className='industry-card'>
                        <div className='industry-img'>
                            <img src= {industry.industry_img} alt= {industry.industry_title} />
                        </div>
                        <h4> {industry.industry_title} </h4>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}