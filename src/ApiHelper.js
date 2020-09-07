const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/';
const GIPHY_API_KEY = 'GbKo3eTsEeuyreu3r9hbhSh8M3SAniSG';

export const getUrlByEndpoint = (endpoint) => {
    return `${GIPHY_API_URL}${endpoint}?api_key=${GIPHY_API_KEY}`
}