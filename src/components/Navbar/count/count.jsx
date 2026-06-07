import './count.css'

export default function Count (){
    const count_banner = [
        {
            count_img: 'white_tool.png',
            count_num: '500+',
            count_dics: 'Devices Repaired'
        },
        {
            count_img: 'white_hardware1.png',
            count_num: '100+',
            count_dics: 'Hardware Products'
        },
        {
            count_img: 'white_quick.png',
            count_num: 'Fast',
            count_dics: 'Quick Response'
        },
        {
            count_img: 'whit_verified.png',
            count_num: 'Corporate',
            count_dics: 'AMC Available'
        },
    ]
    return (
        <section className='count-section'>
            <div className='count-container'>
                <div className='count-container-grid'>
                    {count_banner.map((count_1, index) => (
                        <div className='count-card'>
                            <div className='count_img'>
                                <img src= {count_1.count_img} alt= {count_1.count_num} />
                            </div>
                            <div className='count-content'>
                                <h3> {count_1.count_num} </h3>
                                <p> {count_1.count_dics} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}