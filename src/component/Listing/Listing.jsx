import React from 'react'
import Sidebar from '../sidebar/Sidebar'

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
              right_content
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Listing
