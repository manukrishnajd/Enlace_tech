import React, { useState } from 'react';
import { BsPersonFillExclamation } from 'react-icons/bs';
import { RiCoupon3Fill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { PiStudentFill } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidDownArrow, BiSolidUpArrow, BiSolidReport } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';
import { MdPayment } from 'react-icons/md';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Separate state variables for different dropdowns
  const [requestsOpen, setRequestsOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const [togstatus, settogstatus] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    settogstatus(!togstatus);
  };

  const toggleRequests = () => {
    setRequestsOpen(!requestsOpen);
  };

  const toggleReport = () => {
    setReportOpen(!reportOpen);
  };

  const links = [
    {
      name: 'Requests',
      icon: <BsPersonFillExclamation size={28} />,
      link: '',
      toggle: requestsOpen ? <BiSolidUpArrow size={15} /> : <BiSolidDownArrow size={15} />,
      dropdown: [
        { name: 'Trainer', link: 'trainer_request', icon: <BsFillPersonFill size={28} /> },
        { name: 'Student', link: 'student_request', icon: <PiStudentFill size={28} /> },
      ],
    },
    {
      name: 'Courses',
      icon: <GiBookshelf size={28} />,
      link: 'course',
    },
    {
      name: 'Reports',
      icon: <MdPayment size={28} />,
      link: '',
      toggle: reportOpen ? <BiSolidUpArrow size={15} /> : <BiSolidDownArrow size={15} />,
      dropdown: [
        { name: 'Trainer', link: 'trainer_reports', icon: <BsFillPersonFill size={28} /> },
        { name: 'Student', link: 'student_request', icon: <PiStudentFill size={28} /> },
      ],
    },
    {
      name: 'Refferals',
      icon: <RiCoupon3Fill size={28} />,
      link: '',      
    }
  ];

  return (
    <>
      <div className={`${styles.sidebar} ${isSidebarOpen ? '' : styles.collapsed}`}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <span className='toggle_up'> <AiOutlineMenu size={30} /></span>
        </button>
        {togstatus ?
          <ul className={styles.sidebarLinks}>
            {links.map((item, index) => (
              <li key={index}>
                <div
                  className='d-flex gap-3  justify-content-between w-100'
                  onClick={() => {
                    if (item.dropdown) {
                      if (item.name === 'Requests') {
                        toggleRequests();
                      } else if (item.name === 'Reports') {
                        toggleReport();
                      }
                    }
                  }}
                >
                  <div className=''>
                    <Link href={item.link}>
                      <span className='p-2 link'>{item.icon}</span>
                      <span className='p-2 link' style={{ textDecoration: 'none' }}>{item.name}</span>
                    </Link>
                  </div>
                  <div className={styles.togArrow}>
                    <span>{item.toggle}</span>
                  </div>
                </div>
                {isSidebarOpen && (
                  <ul className={styles.dropdown}>
                    {item.name === 'Requests' && requestsOpen && item.dropdown && item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <span className='sidebar_icon'>{subItem.icon}</span>
                        <Link className='link' href={subItem.link}>  {subItem.name}</Link>
                      </li>
                    ))}
                    {item.name === 'Reports' && reportOpen && item.dropdown && item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <span className='sidebar_icon'>{subItem.icon}</span>
                        <Link className='link' href={subItem.link}>  {subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          :
          <ul className={styles.sidebarLinks}>
            {links.map((item, index) => (
              <li key={index}>
                <div
                  className='d-flex justify-content-between w-100'
                  onClick={() => {
                    if (item.dropdown) {
                      if (item.name === 'Requests') {
                        toggleRequests();
                      } else if (item.name === 'Reports') {
                        toggleReport();
                      }
                    }
                  }}
                >
                  <div>
                    {item.icon}
                  </div>
                  <div className={styles.togArrow}>
                    <span></span>
                  </div>
                </div>
                {isSidebarOpen && (
                  <ul className={styles.dropdown}>
                    {item.name === 'Requests' && requestsOpen && item.dropdown && item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <span className='sidebar_icon'>{subItem.icon}</span>
                      </li>
                    ))}
                    {item.name === 'Reports' && reportOpen && item.dropdown && item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <span className='sidebar_icon'>{subItem.icon}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export default Sidebar;
