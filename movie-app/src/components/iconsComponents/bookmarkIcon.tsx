import React from 'react';

interface BookmarkIconProps extends React.SVGProps<SVGSVGElement> {}

const BookmarkIcon: React.FC<BookmarkIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}
  >
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-4 7 4V5c0-1.1-.9-2-2-2z"/>
  </svg>
);

export default BookmarkIcon;
