import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import shoee from '../../assets/images/bannershoe.jpeg'

const Listing = () => {
  return (
    <div>
      <section className='product_listing'>
        <div className='container'>
          <div className="productListing d-flex">
            <div className="sidde">
            <Sidebar/> 

            </div>
            <div className="content_right">
              <img className=''style={{height:"250px",width:"85%",borderRadius:"7px"}} src={shoee} alt="banner" />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Listing
