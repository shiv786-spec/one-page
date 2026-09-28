import './blog.css'
const blog = () => {
  return (
    <div className='blog' id='blog'>
        <h2>Latest Posts</h2>
        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida</p>

        <div className="blog-grid">
            <div className="blog-box">
                <div className="blog-img"><img src="/image1.jpg" alt="" /></div>
                <div className='blog-link'>
                    <p>MOBILE FRIENDLY COMMENTS DASHBORD LAUNCHED</p>
                </div>
                <p1>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p1>
            </div>
            <div className="blog-box">
                  <div className="blog-box">
                <div className="blog-img"><img src="/image2.jpg" alt="" /></div>
                <div className='blog-link'>
                    <p>MOBILE FRIENDLY COMMENTS DASHBORD LAUNCHED</p>
                </div>
                <p1>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p1>
            </div>
            </div>
            <div className="blog-box">
                  <div className="blog-box">
                <div className="blog-img"><img src="/image3.jpg" alt="" /></div>
                <div className='blog-link'>
                    <p>MOBILE FRIENDLY COMMENTS DASHBORD LAUNCHED</p>
                </div>
                <p1>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p1>
            </div>
            </div>
            <div className="blog-box">
                  <div className="blog-box">
                <div className="blog-img"><img src="/image4.jpg" alt="" /></div>
                <div className='blog-link'>
                    <p>MOBILE FRIENDLY COMMENTS DASHBORD LAUNCHED</p>
                </div>
                <p1>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</p1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default blog