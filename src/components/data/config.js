export const service = {
    portfolio: {
        about: {
            url: 'https://portfolio-dashboard-service.vercel.app/api/portfolio/about',
            dev: 'http://localhost:8080/api/portfolio/about'
        },
        contact: {
            url: 'https://portfolio-dashboard-service.vercel.app/api/portfolio/contact',
            dev: 'http://localhost:8080/api/portfolio/contact'
        },
        resume: {
            experience: {
                url: 'https://portfolio-dashboard-service.vercel.app/api/portfolio/resume/experience',
                dev: 'http://localhost:8080/api/portfolio/resume/experience'
            },
            skillset: {
                url: 'https://portfolio-dashboard-service.vercel.app/api/portfolio/resume/skillset',
                dev: 'http://localhost:8080/api/portfolio/resume/skillset'
            },
            resume: {
                url: 'https://portfolio-dashboard-service.vercel.app/api/portfolio/resume',
                dev: 'http://localhost:8080/api/portfolio/resume'
            }
        },
        upload: {
            url: 'https://portfolio-dashboard-service.vercel.app/api/portfolio/upload',
            dev: 'http://localhost:8080/api/portfolio/upload'
        },
        files: {
            url: 'https://portfolio-dashboard-service.vercel.app/uploads',
            dev: 'http://localhost:8080/uploads'
        },
        project: {
            url: 'https://portfolio-dashboard-service.vercel.app/api/portfolio/projects',
            dev: 'http://localhost:8080/api/portfolio/projects'
        },
    },

}