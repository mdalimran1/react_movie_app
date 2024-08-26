import React from 'react';
import HomeIcon from '../iconsComponents/homeIcon';
import MovieIcon from '../iconsComponents/movieIcon';
import TvSeriesIcon from '../iconsComponents/seriesIcon';
import BookmarkIcon from '../iconsComponents/bookmarkIcon';
import { Link, useLocation } from 'react-router-dom';
import { Box, Hidden, Typography } from '@mui/material';

const navLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
    link: '/'
  },
  {
    name: 'Movie',
    icon: MovieIcon,
    link: '/movie'
  },
  {
    name: 'Tv Series',
    icon: TvSeriesIcon,
    link: '/tv-series'
  },
  {
    name: 'BookMarks',
    icon: BookmarkIcon,
    link: '/bookmarks'
  }
];

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={{ 
      backgroundColor: '#161d2f',
      padding: 2,
      borderRadius: 2,
      display: 'flex',
      flexDirection: {
        xs: 'row',
        lg: 'column'
      },
      alignItems: 'center',
      justifyContent: 'space-between',
      width: {
        xs: '100%',
        lg: 200
      }
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'row',
          lg: 'column'
        },
        gap: 5,
        alignItems: {
          xs: 'center',
          lg: 'start'
        },
        width: '100%'
      }}>
        <Box>
          <Hidden smDown>
            <Typography variant='h5' component='h1'>
              PikaShowApp
            </Typography>
          </Hidden>
          <Box sx={{
            padding: {
              xs: '0px',
              lg: '10px'
            },
            display: 'flex',
            flexDirection: {
              xs: 'row',
              lg: 'column'
            },
            gap: 4,
            marginTop:5
          }}>
            {navLinks.map((item) => (
              <Link key={item.name} to={item.link} style={{ textDecoration: 'none' }}>
                <Box sx={{
                  display:'flex',
                  alignItems: 'center',
                  gap:2,
                  textDecoration: 'none',
                  color:'white',
                  marginTop:'10px'
                }}>
                  <Box 
                    sx={{ 
                      width: '18px',
                      filter: pathname === item.link ? 'invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(95%)' : 'invert(84%)'
                    }} 
                  >
                    <item.icon />
                  </Box>
                  <Hidden smDown>
                    <Typography variant='h6' component='h2'>
                      {item.name}
                    </Typography>
                  </Hidden>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
