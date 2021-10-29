import blog from '../../assets/projects_images/blog.png'
import swad_sansar from '../../assets/projects_images/swad_sansar.jpg'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import agriconnect from '../../assets/projects_images/agriconnect.jpg'
import chat from '../../assets/projects_images/chat.jpg'
import mla from '../../assets/projects_images/mla.jpg'
import dashboard from '../../assets/projects_images/dashboard.jpg'
import groceno from '../../assets/projects_images/groceno.jpg'

const data_projects = [
    {
        name: 'Analytical Dashboard',
        image: dashboard,
        deployed_url: 'https://megawatershedcg.in/dashboard.php',
        github_url: '#',
        category: ['core_php', 'wordpress', 'javascript']
    },

    {
        name: 'Multi Vendor E-Commerce',
        image: groceno,
        deployed_url: 'https://groceno.com/',
        github_url: '#',
        category: ['codeigniter', 'javascript']
    },

    {
        name: 'E-Commerce for Local Store',
        image: swad_sansar,
        deployed_url: 'https://swad-sansar.com/',
        github_url: '#',
        category: ['wordpress']
    },

    {
        name: 'Blog Website',
        image: blog,
        deployed_url: 'https://phptechblog.000webhostapp.com/',
        github_url: '#',
        category: ['codeigniter']
    },

    {
        name: 'Clothing E-Commerce',
        image: hardware_store,
        deployed_url: '!#',
        github_url: '#',
        category: ['wordpress']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: '#',
        github_url: '#',
        category: ['react']
    },

    {
        name: 'News Website',
        image: agriconnect,
        deployed_url: 'http://agriconnect.live/',
        category: ['wordpress']
    },

    {
        name: 'Chat App',
        image: chat,
        deployed_url: 'https://react-chat-ancoor.netlify.app/',
        github_url: 'https://github.com/ancoor/CharApp',
        category: ['react']
    },

    {
        name: 'Data Management Software',
        image: mla,
        deployed_url: '#',
        github_url: '#',
        category: ['core_php', 'javascript']
    }
]

export default data_projects;