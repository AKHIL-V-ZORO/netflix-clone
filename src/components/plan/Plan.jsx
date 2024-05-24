import React from 'react'
import './Plan.css'



const plansData = [
    { name: 'Free Plan', price: 0.00 + " " + '₹', details: '480p',active:true },
    { name: 'Basic plan', price: 199.00 + " " + '₹', details: '720p',active:false },
    { name: 'Standard plan', price: 499.00 + " " + '₹', details: '1080p + HD',active:false },
    { name: 'Premium plan', price: 799.00 + " " + '₹', details: '4K +HDR',active:false }

]

const Plan = () => {
    return (
        plansData.map((plan, id) => (
                <div className='plan'>
                    <h4>{plan.name} : {plan.price}</h4>
                    {plan.active?<button className='active-plan'>active</button>:<button>click here</button>}
                    
                </div>
        ))

    )
}

export default Plan
