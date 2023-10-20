/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
    return (
        <div className='bg-white'>
            <div style={{ display: 'flex', paddingTop: "1rem", alignItems: 'center', borderBottom: "1px solid gray", paddingBottom: "8px", justifyContent: 'space-evenly', margin: '0 auto' }}>
                <div style={{ display: "flex", height: "2rem", alignItems: 'center' }}>
                    <div style={{ display: "flex", backgroundColor: "lightcyan", padding: "8px 16px", gap: '8px', alignItems: 'center', fontSize: '12px', justifyContent: 'center', borderRadius: '8px' }}>
                        <img style={{ width: '12px' }} src='/Contact-us/phone.svg' alt='phone' />
                        <p>Call Us: <strong>888-409-8976</strong></p>
                    </div>
                    <div style={{ display: 'flex', height: "2rem", alignItems: "center", gap: "1rem", borderLeft: '2px solid gray', paddingLeft: "1rem", marginLeft: "1rem" }} className='flex'>
                        <p>Follow Us:</p>
                        <img width={25}  src='/Contact-us/instagram.svg' alt='instagram' />
                        <img width={25}  src='/Contact-us/facebook.svg' alt='facebook' />
                        <img width={25}  src='/Contact-us/twitter.svg' alt='twitter' />
                    </div>
                </div>
                <div style={{ display: 'flex', fontWeight: "500", alignItems: "center", height: "2rem" }} className='text-sky-800' >
                    <div>For Therapists</div>
                    <div style={{ borderLeft: '2px solid gray', paddingLeft: "1rem", marginLeft: "1rem" }}>For Businesses</div>
                </div>
            </div>

            <div style={{width:"60rem",margin:"auto",display:"flex", padding:"1rem",justifyContent:"space-between",fontSize:"14px"}}>
                <img src='/logo.png' alt='logo' />
                <div style={{ display: 'flex', gap: "1rem", alignItems: "center" }}>
                    <div>About Us</div>
                    <div>Insurance & Payment</div>
                    <div>Resources</div>
                    <div>Careers</div>
                    <div>Contact Us</div>
                    <div className='text-pink-500'>Login in</div>
                    <div style={{color:"white",borderRadius:"8px" ,padding:"0.8rem 1rem"}} className='bg-pink-500'>Free Consultation</div>
                </div>

            </div>
        </div>
    )
}

export default Header