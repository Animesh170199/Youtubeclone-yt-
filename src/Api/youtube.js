import axios from "axios";
const KEY = "AIzaSyBVy40QDiI21RPDhaV9FzAn1K25CNlhPww";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 7,
    key: KEY,
  },
});