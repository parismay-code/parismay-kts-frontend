const routes = {
    home: {
        index: '/home/'
    },
    artists: {
        index: '/artists/',
        mask: '/artists/:name',
        create: (name) => `/artists/${name}`
    }
};

export default routes;