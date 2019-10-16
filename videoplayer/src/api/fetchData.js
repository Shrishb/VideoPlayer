import axios from "axios";

const apiKey="";

export default axios.create({
baseURL:"https://www.googleapis.com/youtube/v3",
params:{
    part:'snippet',
    maxResults:5,
    key:apiKey
}
});