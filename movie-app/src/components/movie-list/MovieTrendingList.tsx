import React from 'react'
import { MovieDataType } from '../../data/data'
import { Box, Grid, Paper } from '@mui/material'
import MovieTrendCard from '../movie-card/MovieTrendCard'

interface MovieTrendingProps{
  movieTrending:MovieDataType[]
}
const MovieTrendingList = ({movieTrending}:MovieTrendingProps) => {
  return (
    <Box sx={{display:'flex',gap:2, overflowX:'scroll'}}>
             {movieTrending.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}

    </Box>
  )
}

export default MovieTrendingList