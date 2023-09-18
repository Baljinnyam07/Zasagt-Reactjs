import React from 'react';
import footerMenuJson from './json/footer.json';

const Footer = () => {
  return (
    <div>
      <div className="px-[20px] xl:px-0 flex flex-wrap gap-[40px] justify-between text-[#454655]">
        {footerMenuJson?.map((menuCategory, index) => (
          <div className="py-[10px] lg:py-[80px] w-[180px] lg:w-[220px] flex-wrap" key={index}>
            <h2 className="text-[#23356B] font-[500] uppercase">{menuCategory.headerTitle}</h2>
            {menuCategory.headerproperty.map((menuItem, index) => (
              <div key={index} className='my-[16px] text-[14px] w-[206px] hover:text-[#D0A616]'>
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