import './amc.css'

export default function AMC () {
    const amc = [
        {
            amc_img: 'basic.png',
            amcTitle: 'Basic AMC',
            amcDescription: 'Ideal for small businesses with limited system and basic support need.',
            check: 'check.png',
            point1: 'Regular System Checkup',
            point2: 'Remote Support',
            point3: 'On-Site Visit',
            point4: 'Hardware Check'
        },
        {
            amc_img: 'standerd.png',
            amcTitle: 'Standard AMC',
            amcDescription: 'Best for growing teams who need regular maintenance & priority support.',
            check: 'check.png',
            point1: 'Everything in basic',
            point2: 'Priority Support',
            point3: 'On-Site Visit',
            point4: 'Software Update'
        },
        {
            amc_img: 'premium.png',
            amcTitle: 'Premium AMC',
            amcDescription: 'For companies that need priority assistance and comprehensive support.',
            check: 'check.png',
            point1: 'Everything in standard',
            point2: '24/7 priority support',
            point3: 'On-Site Visit',
            point4: 'Hardware consultation'
        }
    ]
    return (
        <section className='plan-section' id='plan'>
            <h2>AMC Plans</h2>
            <div className='plan-container'>
                <div className='plan-container-grid'>
                    {amc.map((plan, index) => (
                        <div className='plan-container-card' key={index}>
                    <div className='plan-header'>
                        <div className='plan-img'>
                            <img src={plan.amc_img} alt={plan.amcTitle} />
                        </div>
                        <div className='plan-right-content'>
                            <h3>{plan.amcTitle}</h3>
                            <p>{plan.amcDescription}</p>
                        </div>
                    </div>
                    <div className='plan-divider'></div>
                            <div className='plan-check'>
                                <p className='check1'>  <img src={plan.check} /> {plan.point1} </p>
                                <p className='check2'> <img src={plan.check} /> {plan.point2} </p>
                                <p className='check3'> <img src={plan.check} /> {plan.point3} </p>
                                <p className='check4'> <img src={plan.check} /> {plan.point4} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}