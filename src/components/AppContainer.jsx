import React from 'react';
const AppContainer =({ children })=>{
  return (
    <div className="container max-w-7xl mx-auto text-[#454655] bg-no-repeat">
      {children}
    </div>
  );
}

export default AppContainer