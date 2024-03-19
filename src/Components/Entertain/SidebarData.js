import { faFilm, faTv, faMusic, faDragon, faFootballBall } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [
    {
        title:'Movies',
        path:'movies',
        icon: faFilm,
        cName: 'nav-text'
    },
    {
        title:'Web Series',
        path:'web-series',
        icon: faTv,
        cName: 'nav-text'
    },
    {
        title:'Music',
        path:'music',
        icon: faMusic,
        cName: 'nav-text'
    },
    {
        title:'Anime',
        path:'anime',
        icon: faDragon,
        cName: 'nav-text'
    },
    {
        title:'Sports',
        path:'sports',
        icon: faFootballBall,
        cName: 'nav-text'
    }
];

export default SidebarData;
