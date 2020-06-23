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
      state.sectionMovies[section] = sectionInfo
    }
  }
})

export const fetchMovies = () => {
  return (dispatch) => {
    fetch(`https://rex-database2019.herokuapp.com/movies`)
      .then(res => res.json())
      .then(json => dispatch(moviesReducer.actions.setMovies(json)))
  }
}

export const fetchMovie = (title) => {
  return (dispatch) => {
    fetch(`https://rex-database2019.herokuapp.com/movies/${title}`)
      .then(res => res.json())
      .then(json => dispatch(moviesReducer.actions.setMovie({ title, movieInfo: json })))
  }
}

export const fetchMemories = (section) => {
  return (dispatch) => {
    fetch(`https://rex-database2019.herokuapp.com/section/memories`)
      .then(res => res.json())
      .then(json => dispatch(moviesReducer.actions.setMemories({ section, movieInfo: json })))
  }
}

export const fetchSection = (section) => {
  return (dispatch) => {
    fetch(`https://rex-database2019.herokuapp.com/section/${section}`)
      .then(res => res.json())
      .then(json => dispatch(moviesReducer.actions.setSection({section, movieInfo: json})))
  }
}