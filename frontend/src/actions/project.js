import axios from 'axios';

import { GET_PROJECTS, ADD_PROJECTS } from './types';

// GET PROJECTS
export const getProjects = () => dispatch =>{
    axios
    .get('/api/projects/')
    .then((res => {
      dispatch({
        type: GET_PROJECTS,
        payload: res.data,
      });
    })
)};

// ADD PROJECTS
export const addProjects = project => (dispatch) => {
  axios
    .post('/api/projects/', project)
    .then((res) => {
      dispatch({
        type: ADD_PROJECTS,
        payload: res.data,
      });
    })
};