import React from 'react'
import { MovieDataType } from '../../data/data'
import { Grid, Paper } from '@mui/material'
import MovieCard from '../movie-card/MovieCard'


interface MovieListProps{
  movieRecomment:MovieDataType[]
}
const MovieRecommentList = ({movieRecomment}:MovieListProps) => {
  return (
    <Grid container spacing={2}>
      {
        movieRecomment.map((item) => (

          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={0} sx={{ backgroundColor:'transparent' }}>
              <MovieCard movie={item}/>
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default MovieRecommentList