import axios from 'axios';

function getVideos(termoPesquisado) {
  const youtubeAPI = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search/?q=${termoPesquisado}&part=snippet&key=AIzaSyCKkUjL9N-LNCWlFiWxSgV2W7oZqf33Nlc`
  });

  return youtubeAPI.get('').then(response => response.data);
}

export default getVideos