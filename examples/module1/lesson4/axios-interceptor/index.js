import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: new Date() };
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const {
    config: { url, metadata },
  } = response;
  const elapsedTime = new Date().getTime() - metadata.startTime.getTime();
  console.log(`Request to ${url} took ${elapsedTime}ms`);
  return response;
});

const { data } = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = data[0].content;
