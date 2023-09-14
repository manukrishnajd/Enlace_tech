"use client"
import React, { useState } from 'react';
import Sidebar from '../components/Navbar';
import './page.css';
import { BsFillEyeFill } from 'react-icons/bs';
import Tables from '../components/Table';
import Dropdowns from '../components/Dropdown';
import styles from '../styles/Table.module.css'
import Topbar from '../components/Topbar';

export default function Page() {
  const itemsPerPage = 10; // Number of rows to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const table = [
    {
      Name: "abc",
      Course: "xyz",
      "Payment status": "success",
      Date: "24/03/2023",
      Status: <Dropdowns className={tableRowClass(0)} />,
      Details: <BsFillEyeFill size={24} />,
    },
    
    // Add more data items as needed
  ];
  function tableRowClass(index:any) {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  }
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
    <Topbar/>
      <div className="d-flex">
        <Sidebar />
        <div className='d-flex flex-column'>
          <h4 className='head'>Student request</h4>
          
 <form className=' input-group w-50 align-self-end p-3 ju  '>
            <input type="text" placeholder='search' className='search ps-3 form-control   '/>
            <div className='input-group-append'></div>
            <input type="submit" className='SearchBg border-0 btn-outline-secondary  'value='search' />
          </form>

<div className='req_table'>

          <table className='border_table' >
            <thead className='tableHead'>
              <tr>
                {Object.keys(table[0]).map((columnName, index) => (
                  <th key={index}>{columnName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedTableData.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(rowData).map((cellData, cellIndex) => (
                    <td key={cellIndex}>{cellData}</td>
                  ))}
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
      </div>
    </>
  );
}
