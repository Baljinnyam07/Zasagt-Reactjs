import React from 'react';
import footerMenuJson from './json/footer.json';

const Footer = () => {
  return (
    <div>
      <div className="flex gap-[40px] justify-between text-[#454655]">
        {footerMenuJson?.map((menuCategory, index) => (
          <div className="py-[80px] w-[280px] flex-wrap" key={index}>
            <h2 className="text-[#23356B] uppercase">{menuCategory.headerTitle}</h2>
            {menuCategory.headerproperty.map((menuItem, index) => (
              <div key={index} className='my-[16px] text-[14px]'>
                <a href={`${menuItem.url}`}>{menuItem.property}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;