import React from 'react';

interface TvIconProps extends React.SVGProps<SVGSVGElement> {}

const MovieIcon: React.FC<TvIconProps> = (props) => (
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
>
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 5h14v14H5V5zm7 10h2v2h-2v-2zm0-4h2v2h-2V11z"/>
</svg>
);

export default MovieIcon;
