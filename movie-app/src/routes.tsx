import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Error from "./pages/error"
import Movie from "./pages/movie"
import TvSeries from "./pages/tv-series"
import BookMarks from "./pages/bookmark"

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement:<Error />
  },  {
    path: "/movie",
    element:<Movie/>,
    errorElement:<Error />
  },  {
    path: "/tv-series",
    element:<TvSeries/>,
    errorElement:<Error />
  }, {
    path: "/bookmarks",
    element:<BookMarks/>,
    errorElement:<Error />
  },
])