import React from 'react';

const DestinationNav = (prop) => {
	{
		console.log(prop.destination);
	}
	return (
		<div className='w-60 font-barlow tracking-[2.36px] text-sm mx-auto md:mx-0 sm:tracking-[2.7px] sm:text-base md:text-lg md:ml-8'>
			<ul className='flex w-full gap-9 justify-center text-secondary'>
                <li className={`cursor-pointer ${prop.destination==0?"secondNav":'blue'}`} onClick={()=>{prop.setdestination(0)}} >MOON</li>
                <li className={`cursor-pointer ${prop.destination==1?"secondNav":'blue'}`} onClick={()=>{prop.setdestination(1)}} >MARS</li>
                <li className={`cursor-pointer ${prop.destination==2?"secondNav":'blue'}`} onClick={()=>{prop.setdestination(2)}} >EUROPA</li>
                <li className={`cursor-pointer ${prop.destination==3?"secondNav":'blue'}`} onClick={()=>{prop.setdestination(3)}} >TITAN</li>
            </ul>
		</div>
	);
};

export default DestinationNav;
