import React from 'react';

const DestinationNav = (prop) => {
  console.log(prop.destination); // Optional, for debugging

  return (
    <div className='destination-nav-container'>
      <ul className='flex gap-2 justify-start items-center'>
        <li
          className={`cursor-pointer ${prop.destination === 0 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(0) }}
        />
        <li
          className={`cursor-pointer ${prop.destination === 1 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(1) }}
        />
        <li
          className={`cursor-pointer ${prop.destination === 2 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(2) }}
        />
        <li
          className={`cursor-pointer ${prop.destination === 3 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(3) }}
        />
        <li
          className={`cursor-pointer ${prop.destination === 4 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(4) }}
        />
		<li
          className={`cursor-pointer ${prop.destination === 5 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(5) }}
        />
		<li
          className={`cursor-pointer ${prop.destination === 6 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(6) }}
        />
		<li
          className={`cursor-pointer ${prop.destination === 7 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(7) }}
        />
		<li
          className={`cursor-pointer ${prop.destination === 8 ? "dot-active" : 'dot'}`}
          onClick={() => { prop.setdestination(8) }}
        />
        {/* Add more planets as needed */}
      </ul>
    </div>
  );
};

export default DestinationNav;
