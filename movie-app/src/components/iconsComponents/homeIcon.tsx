import React from 'react';

interface HomeIconProps extends React.SVGProps<SVGSVGElement> {}

const HomeIcon: React.FC<HomeIconProps> = (props) => (
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  width="26" 
  height="26"
>
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
</svg>
);

export default HomeIcon;
