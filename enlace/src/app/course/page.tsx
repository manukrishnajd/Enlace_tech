"use client"
import React, { useState } from 'react';
import Sidebar from '../components/Navbar';
import '../student_request/page.css';
import { BsFillEyeFill } from 'react-icons/bs';
import Tables from '../components/Table';
import Dropdowns from '../components/Dropdown';
import styles from '../styles/Table.module.css'
// import './globals.css'
import {AiFillEye,AiFillEdit,AiFillDelete,AiFillPlusCircle} from 'react-icons/ai'
import Link from 'next/link';
import CourseAddPopup from '../components/CourseAddPopup';




export default function Page() {
  const itemsPerPage = 10; // Number of rows to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
    // Function to open the Add Course popup
    const openAddPopup = () => {
      setAddPopupOpen(true);
    };
  
    // Function to close the Add Course popup
    const closeAddPopup = () => {
      setAddPopupOpen(false);
    };

    

  const table = [
    {
      CourseName: "xyz",
      Duration: "24/03/2023",
      TrainerName:"xyz",
      Amount:"25000",
      DateCreated:"25/03/2023",
      Status: 'status',
    },
    {
        CourseName: "xyz",
        Duration: "24/03/2023",
        TrainerName:"xyz",
        Amount:"25000",
        DateCreated:"25/03/2023",
        Status: 'status',
      },
      {
        CourseName: "xyz",
        Duration: "24/03/2023",
        TrainerName:"xyz",
        Amount:"25000",
        DateCreated:"25/03/2023",
        Status: 'Pending',
      },
    // Add more data items as needed
  ];

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTableData = table.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className='d-flex flex-column'>
          <h4 className='head'>Courses</h4>
          <div className='d-flex justify-content-between '>

       
            <button className='border-0 SearchRBg float-start   ' onClick={openAddPopup}><span className='p-2'>Add</span><AiFillPlusCircle size={25}/></button><br></br>
          <form className=' input-group w-50 align-self-end p-3 ju  '>
            <input type="text" placeholder='search' className='search ps-3 form-control   '/>
            <div className='input-group-append'></div>
            <input type="submit" className='SearchBg border-0 btn-outline-secondary  'value='search' />
          </form>
          </div>
  
<div className='req_table'>

          <table className='border_table' >
            <thead className='tableHead'>
              <tr>
                <th>
                    Course
                </th>
                <th>
                    Duration
                </th>
                <th>
                    Trainer 
                </th>
                <th>
                    Amount
                </th>
                <th>
                    Date Created
                </th>
                <th>
                    Status
                </th>
                
                <th className='width'>Actions</th>
                
              </tr>
            </thead>
            <tbody>
 {table.map((item)=>(
    <tr>
        <td>{item.CourseName}</td>
        <td>{item.Duration}</td>
        <td>{item.TrainerName}</td>
        <td>{item.Amount}</td>
        <td>{item.DateCreated}</td>
        <td>{item.Status}</td>
        <td className='width d-flex justify-align-align-content-around gap-4 '>
            
        <svg xmlns="http://www.w3.org/2000/svg"   width="25" height="25" fill="green" className="bi bi-person-check-fill" viewBox="0 0 16 16">
        <title>Activate course</title>
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>

            {/* <button className=' activeButton bg-success border-0 text-white  rounded-1 w-100 p-2'>Active</button> */}
        
        
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<linearGradient id="GCWVriy4rQhfclYQVzRmda_hRIvjOSQ8I0i_gr1" x1="9.812" x2="38.361" y1="9.812" y2="38.361" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#GCWVriy4rQhfclYQVzRmda_hRIvjOSQ8I0i_gr1)" d="M24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,12.955,35.045,4,24,4z M24,38	c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14S31.732,38,24,38z"></path><linearGradient id="GCWVriy4rQhfclYQVzRmdb_hRIvjOSQ8I0i_gr2" x1="6.821" x2="41.08" y1="6.321" y2="40.58" gradientTransform="translate(-.146 .354)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><polygon fill="url(#GCWVriy4rQhfclYQVzRmdb_hRIvjOSQ8I0i_gr2)" points="13.371,38.871 9.129,34.629 34.629,9.129 38.871,13.371"></polygon>
<title>Disable course</title>
</svg>
        
        {/* <button className='bg-danger text-white  border-0  rounded-1 w-100 p-2 h-50  '>Disable</button> */}
       
       
        <AiFillEye size={25} title="details"/>
       
        <AiFillEdit size={25} title="Edit"/>
      
        <AiFillDelete size={25} title="Delete"/>
        </td>
    </tr>
 ))}

            </tbody>
          </table>
          </div>
<div className='align-self-center'>

          <nav aria-label="Page navigation center_page" >
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {[...Array(Math.ceil(table.length / itemsPerPage))].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                    >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(table.length / itemsPerPage) ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === Math.ceil(table.length / itemsPerPage)}
                  >
                  Next
                </button>
              </li>
            </ul>
          </nav>
                  </div>
        </div>
        <CourseAddPopup isOpen={isAddPopupOpen} onClose={closeAddPopup} />
      </div>
    </>
  );
}
