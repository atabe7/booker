import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Om oss',
        icon: 'glyphicon-flag',
        route: '/omoss',
        submenu: null
    },
    {
        text: 'Logga in',
        icon: 'glyphicon-wrench',
        route: '/loggain',
        submenu: null
    }
];