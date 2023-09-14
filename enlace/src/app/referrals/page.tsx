"use client"
import Sidebar from "../components/Navbar"
import Topbar from "../components/Topbar"

export default function page() {
  return (
    <>
    
    <Topbar/>
      <div className="d-flex">
        <Sidebar />
        <div className='d-flex flex-column'>
          <h4 className='head'>Refferals</h4>
          <div className='d-flex justify-content-between '>

       
          <form className=' input-group w-50 align-self-end p-3 ju  '>
            <input type="text" placeholder='search' className='search ps-3 form-control   '/>
            <div className='input-group-append'></div>
            <input type="submit" className='SearchBg border-0 btn-outline-secondary  'value='search' />
          </form>
          </div>
  
</div>
</div>

</>
  )
}
