function priceCard(){
    const data = [
        {
            plantype : 'FREE',
            price : '$0/month',
            user : '🗸 Single User',
            storage : '🗸 50Gb Storage',
            publicproject : '🗸 Unlimited Public Projects',
            access : '🗸 Community Access',
            privateproject : '✖  Unlimited Private Projects',
            support : '✖  Dedicated Phone Support',
            domain : '✖ Free Subdomain',
            report : '✖ Monthly Status Reports',
        },
        {
            plantype : 'PLUS',
            price : '$9/month',
            user : '🗸 5 Users',
            storage : '🗸 50Gb Storage',
            publicproject : '🗸 Unlimited Public Projects',
            access : '🗸 Community Access',
            privateproject : '🗸 Unlimited Private Projects',
            support : '🗸 Dedicated Phone Support',
            domain : '🗸 Free Subdomain',
            report : '✖  Monthly Status Reports',
        },
        {
            plantype : 'PRO',
            price : '$49/month',
            user : '🗸 Unlimited Users',
            storage : '🗸 50Gb Storage',
            publicproject : '🗸 Unlimited Public Projects',
            access : '🗸 Community Access',
            privateproject : '🗸 Unlimited Private Projects',
            support : '🗸 Dedicated Phone Support',
            domain : '🗸 Free Subdomain',
            report : '🗸 Monthly Status Reports',
        },
        
        
    ]  
return (
    <div className="plans">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                    <p style={{color: "grey"}}>{item.plantype}</p>
                    <h1>{item.price}</h1>
              </div>
              <div className="line" />
              <div className="card-body">
                    <p>{item.user}</p>
                    <p>{item.storage}</p>
                    <p >{item.publicproject}</p>
                    <p>{item.access}</p>
                    <p style={{color: item.plantype === "FREE" ? "grey" : "black"}}>{item.privateproject}</p>
                    <p style={{color: item.plantype === "FREE" ? "grey" : "black"}}>{item.support}</p>
                    <p style={{color: item.plantype === "FREE" ? "grey" : "black"}}>{item.domain}</p>
                    <p style={{color: item.plantype === "FREE" || item.plantype === "PLUS" ? "grey" : "black" , }} >{item.report}</p>
                    
              </div>
              
                    <button className="btn">BUTTON</button>
            </div>
          ))}
        </div>
   
)
 }



export default priceCard;