const GOOGLE_API_KEY = 'AIzaSyBqTjXDOCsVtUQM7Z1WyOS6BaUZQxiRg7U';

export const YOUTUBE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";