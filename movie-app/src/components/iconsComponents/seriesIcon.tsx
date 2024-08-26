import React from 'react';

interface RadioIconProps extends React.SVGProps<SVGSVGElement> {}

const SeriesIcon: React.FC<RadioIconProps> = (props) => (
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  width="24" 
  height="24"
>
  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3 17V5h18v12H3z"/>
</svg>

);

export default SeriesIcon;
