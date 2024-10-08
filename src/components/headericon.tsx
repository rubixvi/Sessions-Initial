import React from 'react';

interface HeaderIconProps {
  active: boolean;
  Icon: React.ReactElement;
}

const HeaderIcon: React.FC<HeaderIconProps> = ({ active, Icon }) => {
  return (
    <div
      className="flex items-center 
    cursor-pointer md:px-10 sm:h-14
    md:hover:bg-gray-100 rounded-xl
    active:border-b-2 group"
    >
      <Icon
        className={`h-5 text-gray-500
        text-center sm:h-7 mx-auto
       group-hover:text-teal-600 ${active && 'text-teal-600'}`}
      />
    </div>
  );
};

export default HeaderIcon;