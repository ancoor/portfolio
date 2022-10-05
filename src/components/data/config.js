export const service = {
    portfolio: {
        about: {
            url: 'https://portfolio-user-service.herokuapp.com/api/portfolio/about',
            dev: 'http://localhost:8080/api/portfolio/about'
        },
        contact: {
            url: 'https://portfolio-user-service.herokuapp.com/api/portfolio/contact',
            dev: 'http://localhost:8080/api/portfolio/contact'
        },
        upload: {
            url: 'https://portfolio-user-service.herokuapp.com/api/portfolio/upload',
            dev: 'http://localhost:8080/api/portfolio/upload'
        },
        files: {
            url: 'https://portfolio-user-service.herokuapp.com/uploads',
            dev: 'http://localhost:8080/uploads'
        }
    },

}