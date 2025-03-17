import React from 'react'
import Slider from "react-slick";

const HomeBanner  = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
        autoplay:true
      };

  return (
    <div>
       <div className='container mt-3'>
       <div className='homeBannerSection'>
          <Slider {...settings}>
            <div className='items'>
            
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h1e/hab/33261367164958/tommy-hilfiger-web--2024-08--02.jpg" className=' banner-image w-100' />
            </div>
            <div className='items'>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hed/h7f/33134901592094/Lid-Banner_Web--2024--06--06--new_j--w92.jpg" className='banner-image w-100' />
            </div>
            <div className='items'>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hd6/h83/33266737938462/MAC_Top%20Carousel_Web%20500%20%281%29--2024--08--03--hp-page.jpg" className='banner-image w-100' />
            </div>
            <div className='items'>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h96/hb6/32964078239774/luxe-sunglasses-web_500-4.jpg" className='banner-image w-100' />
            </div>
            
            <div className='items'>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h45/h5c/33142936698910/Handbags_Top%20carousal_Desktop_i--ks9.jpg" className='banner-image w-100' />
            </div>
          </Slider>
      
      </div>
       </div>
      
    </div>
  )
}

export default HomeBanner 
