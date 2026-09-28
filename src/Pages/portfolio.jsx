import './portfolio.css'
function Port() {
    return (
        <>
            <div className='Port-con' id='portfolio'>
                <div className='Port-heading'>
                <h1>Our Portfolio</h1>
                <p>This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
                </div>
        
            <div className='Port-nav'>
                <ul>
                    <li>All</li>
                    <li>Web Design</li>
                    <li>Photography</li>
                    <li>Illustration</li>
                    <li>Branding</li>
                </ul>
            </div>
        {/* imges grid start */}
        <div className='Port-grid-sec'>
            <div className='Port-grid'>
       <div className="Port-box"><img src="/1 (3).jpg" alt="" /></div>
       <div className="Port-box1"><img src="/2 (2).jpg" alt="" /></div>
       <div className="Port-box"><img src="/9.jpg" alt="" /></div>
       <div className="Port-box1"><img src="/4 (2).jpg" alt="" /></div>
       <div className="Port-box"><img src="/6 (2).jpg" alt="" /></div>
       <div className="Port-box1"><img src="/9.jpg" alt="" /></div>
       <div className="Port-box1"><img src="/4 (2).jpg" alt="" /></div>
       <div className="Port-box"><img src="/7.jpg" alt="" /></div>
       {/* <div className="Port-box1"><img src="/public/9.jpg" alt="" /></div> */}
            </div>
            </div>
        {/* imges grid end */}
        
            </div>
        </>
    )
}
export default Port;