import { ref } from 'vue'

const getHomestuff = () => {
    const state = ref ([
        {
            id: 1,
            title: 'Flowerstore Dögg',
            description: 'HTML - CSS - JS',
            image: '../../src/assets/dogg.gif',
            link: 'https://google.com',
            category: 'Web'
        },
        {
            id: 2,
            title: 'Longhorn BBQ',
            description: 'HTML - CSS - PHP',
            image: '../../src/assets/longhorn.gif',
            link: 'https://google.com',
            category: 'Web'
        },
        {
            id: 3,
            title: 'Portfolio 2',
            description: ' This is portfolio 2',
            image: 'https://picsum.photos/200/120',
            link: 'https://google.com',
            category: 'Video'
        },  
        {
            id: 2,
            title: 'Portfolio 2',
            description: ' This is portfolio 2',
            image: 'https://picsum.photos/200/120',
            link: 'https://google.com',
            category: 'Video'
        },
        {
            id: 2,
            title: 'Portfolio 2',
            description: ' This is portfolio 2',
            image: 'https://picsum.photos/200/120',
            link: 'https://google.com',
            category: 'Video'
        },
        {
            id: 2,
            title: 'Portfolio 2',
            description: ' This is portfolio 2',
            image: 'https://picsum.photos/200/120',
            link: 'https://google.com',
            category: 'Video'
        },
    ])
    return {
        state
    }
}

export default getHomestuff