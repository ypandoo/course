import Axios from 'axios'
var Mock = require('mockjs');

export const fetchCourse = () => {
  const URL = 'http://rap.taobao.org/mockjs/10959/api/creations';
  return Axios.get(URL)
    .then((response) => {
      // console.log(Mock.mock(response.data));
      return Mock.mock(response.data);
    })
};