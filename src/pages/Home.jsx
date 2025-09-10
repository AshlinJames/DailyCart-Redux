import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <Header />
            <div style={{paddingtop:'100px'}} className='mx-5 mt-5'>
                <div className="grid grid-cols-4 gap-4">
                    <div className="rounded  p-2 shadow-xl/30">
                        {/* image */}
                        <img height={'200px'} src="https://www.reneecosmetics.in/cdn/shop/files/Volumax-Mascara_Listing-PI_01.jpg?v=1742483402" alt="" />
                      <div className='text-center'>
                            {/* title of product */}
                            <h3 className='font-bold text-xl'>Volumax Mascara</h3>
                            {/* link */}
                            <Link to={`id/view`} className='bg-purple-900 p-1 rounded text-white mt-3 inline-block'>View More...</Link>
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home