import axios from "axios";

const axiosClient = axios.create({

    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'

    }
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('loi o day ',error.response);
        const {config,status, data} = error.response
        if(config.url == '/uses/' && status == 400) {
            throw new Error(data.message)
        }
    return Promise.reject(error);
  });

  
export default axiosClient