const routes = {
    home: {
        index: '/home',
        albums: '/home/albums/',
        artists: '/home/artists/',
        songs: '/home/songs/',
        create: (id) => `/home/${id}`
    } ,
    artists: '/artists/',

    contacts: '/contacts/'
};

export default routes;