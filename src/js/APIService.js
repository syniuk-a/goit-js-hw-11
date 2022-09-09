import axios from "axios";
import Notiflix from "notiflix";
import 'notiflix/dist/notiflix-3.2.5.min.css';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '22757150-c2d7916cb8ffee93e4314d78c';

export default class ImagesAPIService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.PER_PAGE = 40;
    this.totalHits = null;
    this.totalPages = null;
    this.endOfHits = false;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  
}
