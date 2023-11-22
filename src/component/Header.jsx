import React from 'react'
function Header() {
  return (
    <div>
      <div style={{backgroundColor:'white'}} className='d-flex justify-content-between fixed-top'>
        <div className='d-flex justify-content-evenly'>
          <img className='me-2 fs-2 p-2' src="https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo-700x394.png" alt="" style={{width:'50px'}} />
          <a style={{textDecoration:'none',color:'black',}} href=''><h5 className='me-2 fs-2 p-2'>Company</h5></a>
          <a style={{textDecoration:'none',color:'black'}}  href=''><h5 className='me-2 fs-2 p-2'>Innovation</h5></a>
          <a style={{textDecoration:'none',color:'black'}}  href=''> <h5 className='me-2 fs-2 p-2'>Sustainabilty</h5></a>         
          <a style={{textDecoration:'none',color:'black'}}  href=''><h5 className='me-2 fs-2 p-2'>Careers</h5></a>
          <a style={{textDecoration:'none',color:'black'}}  href=''><h5 className='me-2 fs-2 p-2'>Audi in sport</h5></a>
        </div>
        <div className='d-flex justify-content-center'>
        <i class="fa-solid fa-magnifying-glass me-4 fs-3 p-2"></i>
        <a style={{textDecoration:'none',color:'black'}}  href=''><h5 className='me-4 fs-2 p-2'>Search</h5></a>
        <p className='me-4 p-2'>|</p>
        <img className='p-2' src="https://vectorflags.s3-us-west-2.amazonaws.com/flags/in-circle-01.png" style={{width:'50px'}}  alt="" />
        <p>Audi in your region <br />India</p>
         
        </div>
      </div>
    </div>
  )
}

export default Header