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
        resume: {
            experience: {
                url: 'https://portfolio-user-service.herokuapp.com/api/portfolio/resume/experience',
                dev: 'http://localhost:8080/api/portfolio/resume/experience'
            },
            skillset: {
                url: 'https://portfolio-user-service.herokuapp.com/api/portfolio/resume/skillset',
                dev: 'http://localhost:8080/api/portfolio/resume/skillset'
            },
            resume: {
                url: 'https://portfolio-user-service.herokuapp.com/api/portfolio/resume',
                dev: 'http://localhost:8080/api/portfolio/resume'
            }
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