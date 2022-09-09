import './sass/main.scss';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import ImagesAPIService from './js/APIService';
import Markup from './js/markup';

const formSearch = document.querySelector('.search-form');
const galleryRef = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');
