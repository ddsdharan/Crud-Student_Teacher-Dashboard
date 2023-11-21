import React from 'react';
import Footer from '../Helpers/Footer';


const Home = ({ inactive, toggleoff }) => {
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >

        <div className="container">
          
          <div className="container col-xs-6 col-sm-10 col-md-12 col-lg-12">
            <blockquote className='blockquote'>
              <p>Find out what you like doing best, and get someone to pay you for doing it. - <b>Katharine Whitehorn</b></p>
              </blockquote> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nihil, 
              porro inventore suscipit cum voluptatem laborum et officia eos nobis pariatur rerum sapiente quam totam a. 
              Placeat, consequatur nihil!</p>
            <img src={"https://cdn.dribbble.com/users/1235346/screenshots/3252385/job.gif"} id="homeImage" alt=""/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home