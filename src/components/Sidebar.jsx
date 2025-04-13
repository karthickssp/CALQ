import React, { useEffect, useRef } from 'react';

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach((arrow) => {
      const handleArrowClick = (e) => {
        const arrowParent = e.target.closest('li');
        arrowParent.classList.toggle('showMenu');
      };
      arrow.addEventListener('click', handleArrowClick);

      // Store handler for cleanup
      arrow._handler = handleArrowClick;
    });

    const sidebar = sidebarRef.current;
    const sidebarBtn = menuBtnRef.current;

    const toggleSidebar = () => {
      if (sidebar) sidebar.classList.toggle('close');
    };

    if (sidebarBtn) {
      sidebarBtn.addEventListener('click', toggleSidebar);
    }

    return () => {
      arrows.forEach((arrow) => {
        arrow.removeEventListener('click', arrow._handler);
      });
      if (sidebarBtn) {
        sidebarBtn.removeEventListener('click', toggleSidebar);
      }
    };
  }, []);

  return (
    <>
      <div className="sidebar close" ref={sidebarRef}>
        <div className="logo-details">
          <i className='bx bxl-bitcoin'></i>
          <span className="logo_name">Menu</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className='bx bx-home'></i>
              <span className="link_name">Home</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Home</a></li>
            </ul>
          </li>

          <li>
            <div className="icon-link">
              <a href="#">
                <i className='bx bx-bulb'></i>
                <span className="link_name">Solutions</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Solutions</a></li>
              <li><a href="#">Payments API</a></li>
              <li><a href="#">Accounts API</a></li>
              <li><a href="#">Finance API</a></li>
            </ul>
          </li>

          <li>
            <div className="icon-link">
              <a href="#">
                <i className='bx bx-news'></i>
                <span className="link_name">Posts</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Posts</a></li>
              <li><a href="#">Recent</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Most Visited</a></li>
            </ul>
          </li>

          <li>
            <div className="icon-link">
              <a href="#">
                <i className='bx bx-file-find'></i>
                <span className="link_name">Insights</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Insights</a></li>
              <li><a href="#">Money Movement</a></li>
              <li><a href="#">Enterprise Spotlight</a></li>
              <li><a href="#">Financial Burnout</a></li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i className='bx bxs-credit-card'></i>
              <span className="link_name">Pricing</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Pricing</a></li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i className='bx bx-bar-chart'></i>
              <span className="link_name">Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Chart</a></li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i className='bx bx-compass'></i>
              <span className="link_name">Explore</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Explore</a></li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i className='bx bx-cog'></i>
              <span className="link_name">Setting</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Setting</a></li>
            </ul>
          </li>

          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img
                  src="https://sachinsamal.netlify.app/static/media/sachin-samal.d451ea9b3c53ed984bf7.png"
                  alt="profile"
                />
              </div>
              <div className="name-job">
                <div className="profile_name">John Doe</div>
                <div className="job">Crypto Expert</div>
              </div>
              <i className='bx bx-log-out'></i>
            </div>
          </li>
        </ul>
      </div>

      <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu' ref={menuBtnRef}></i>
          <span className="text">Crypto App</span>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
