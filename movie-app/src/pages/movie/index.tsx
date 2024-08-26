import React, { useState, SetStateAction, useContext } from "react";
import Layout from "../../layout";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";


import SearchIcon from '@mui/icons-material/Search';

import MovieRecommentList from "../../components/movie-list/MovieRecommentList";
import { MovieDataType } from "../../data/data";
import { MovieContext } from "../../context/movie-context";

const Movie = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                {<SearchIcon sx={{ color:'white',fontSize:27 }}/>}
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Movies
            </Typography>
            <MovieRecommentList movieRecomment={search === "" ? movies : searchList} />
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"{""}
            </Typography>
            <MovieRecommentList movieRecomment={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Movie;