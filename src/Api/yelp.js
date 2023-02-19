import axios  from 'axios';

export default axios.create({
  headers: {
    Authorization:
      "Bearer HLWzCxkQYhlnFK_GY7LKxPUaytCJMX98MIKClg-xpoq9Vmtxjey6RT2NUWyd3NQFbmEkr7SwsEhedMb4bP6O-Mv_UMNLnIltPFE-wKF0o7Zdsl7CnXuRkd2K6cm6Y3Yx",
  },
  baseURL: "https://api.yelp.com/v3/businesses",
});
