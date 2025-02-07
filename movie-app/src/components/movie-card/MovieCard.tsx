import React, { useContext } from "react";
import { MovieDataType } from "../../data/data";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

import MovieIcon from '@mui/icons-material/Movie';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ConnectedTvRoundedIcon from '@mui/icons-material/ConnectedTvRounded';


interface MovieTrendCard{
  movie:MovieDataType
}

const MovieCard = ({movie}:MovieTrendCard) => {

  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };
  return (
<Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#E0E0E0", my: 3, border: "none" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              // src={movie.thumbnail.regular.large}
              src="/movie.jpg"
              alt={movie.title}
              style={{ width: "400px", height: "180px", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="year of movie"
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                {
                  movie.category === "Movies" ? <MovieIcon/> : <ConnectedTvRoundedIcon/>
                }
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie category"
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography aria-label="movie rating" padding={0}>
              {movie.title}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ position: "absolute", top: 0, right: 0 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: "1rem",
              }}
            >
              <Box
                sx={{
                  p: "1rem",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
                onClick={() => handleToggleBookmark(movie.id)}
              >
                {movie.isBookmarked ? (
                  <BookmarkRoundedIcon fill={"#E0E0E0"} />
                ) : (
                  <BookmarkBorderRoundedIcon />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MovieCard