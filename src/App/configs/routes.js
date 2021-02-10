const routes = [
    {
        index: '/home/',
        mask: '/home/:id/',
        artists: '/home/artists/',
        tags: '/home/tags/',
        create: (id) => `/home/${id}`,
        name: 'Home'
    } ,
    {
        index: '/artists/',
        name: 'Artists',
    },

    {
        index: '/tags/',
        name: 'Tags',
    }
];

export default routes;