import { createSlice } from '@reduxjs/toolkit'

export const moviesReducer = createSlice({
  name: 'moviesReducer',
  initialState: {
    all: [],
    movieDetails: {},
    sectionDetails: {}
  },
  reducers: {
    setMovies: (state, action) => {
      state.all = action.payload
    },
    setMovie: (state, action) => {
      const { title, movieInfo } = action.payload
      state.movieDetails[title] = movieInfo
    },
    setSection: (state, action) => {
      const { section, sectionInfo } = action.payload
      state.sectionDetails[section] = sectionInfo
    }
  }
})