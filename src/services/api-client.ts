import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd6a8a1c353c7492389abefb893c8f6ae',
  },
})
