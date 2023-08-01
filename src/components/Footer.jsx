import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import footerMenuJson from './json/footer.json';

const Footer = () => {
  return (
    <div>
      <div className="flex gap-[40px] justify-between text-[#454655]">
        {footerMenuJson?.map((menuCategory, index) => (
          <div className="py-[80px] w-[280px] flex-wrap" key={index}>
            <h2 className="text-[#23356B] uppercase">{menuCategory.headerTitle}</h2>
            {menuCategory.headerproperty.map((menuItem, index) => (
              <div key={index}>
                {/* Use Link instead of a regular anchor tag */}
                <div className='my-[16px] text-[14px]'>
                  <Link to={menuItem.url}>{menuItem.property}</Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;