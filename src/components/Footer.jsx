import React from 'react';
import footerMenuJson from './json/footer.json';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <div>
      <div className="px-[20px] xl:px-0 flex flex-wrap gap-[20px] xl:gap-[40px] justify-between text-[#454655]">
        {footerMenuJson?.map((menuCategory, index) => (
          <div className="py-[10px] lg:py-[80px] w-[180px] lg:w-[220px] flex-wrap" key={index}>
            <h2 className="text-[#23356B] font-[500] uppercase"><FormattedMessage id={menuCategory.headerId}/></h2>
            {menuCategory.headerproperty.map((menuItem, index) => (
              <div key={index} className='my-[16px] text-[14px] xl:w-[206px] hover:text-[#D0A616]'>
                <a href={`${menuItem.url}`}><FormattedMessage id={menuItem.proId}/></a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;