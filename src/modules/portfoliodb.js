import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref ([
        {
            id: 1,
            title: 'Flowershop Dögg',
            description: 'HTML - CSS - JS',
            image: '../../src/assets/dogg.webp',
            category: 'Web',
            color: '../../src/assets/dogg.png',
            h4:'COLOR-PALLATE :',
            detail: 'This is the first website I designed and coded from scratch, also being my first web development project. Its for a flowershop in Iceland but has not been made public yet. First I designed the look in AdobeXD and then I made with HTML, CSS & JS',
        },
        {
            id: 2,
            title: 'Longhorn BBQ',
            description: 'HTML - CSS - PHP',
            image: '../../src/assets/longhorn.webp',
            category: 'Web',
            color: '../../src/assets/bbqpallate.png',
            h4:'COLOR-PALLATE :',
            detail: 'This is an outcome from final exam project for first semester in Multimedia Design, We were a group of 3 people that designed and coded this website for a real client. The client chose this website as a winner over all groups. It was made from HTML and CSS and then I transfered it to a PHP format so the client could use it in wordpress.',

        },
        {
            id: 3,
            title: 'West Exploration',
            description: ' HTML - DESIGN - WIX',
            image: '../../src/assets/westexplo.webp',
            link: 'https://westexplo.com',
            color: '../../src/assets/westexplo.png',
            h4:'COLOR-PALLATE :',
            linkname: 'WEBSITE',
            category: 'Web',
            detail: 'I was asked to design a website for a quieding company in the West part of Iceland, I used Wix and also some html coding. I also designed their logo.',
            logo: 'https://static.wixstatic.com/media/d55e41_47a7a09d73c54df19f4194530ead87b9~mv2.png/v1/fill/w_298,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d55e41_47a7a09d73c54df19f4194530ead87b9~mv2.png'
        },     
        {
            id: 4,
            title: 'Hidden Ship Distillery',
            description: 'DESIGN',
            image: '../../src/assets/distillery.webp',
            detail: 'This is a design we had to do in school for Hidden Ship Distillery, We were in a group and this was the outcome we came up with. Inspired by pirates we made the logo with a "hidden" pirate ship. ',
            category: 'Design',
            color:'../../src/assets/distillerycolor.png',
            h4:'COLOR-PALLATE :',
            logo1: '../../src/assets/distillery.png'
        },
        {
            id: 5,
            title: 'Weekly Menu App',
            description: ' UX - DESIGN',
            heading: 'APP:',
            image: '../../src/assets/weenu.png',
            color: '../../src/assets/colorweekly.png',
            h4:'COLOR-PALLATE :',
            webp:'../../src/assets/weenu.webp',
            category: 'Design',
            detail: 'The Weeklu Menu app is an app that is supposed to help people to decide what they will have for dinner, it was our understanding that alot of people have this problem every day. The app is also a delivery app and will give people recipe suggestions for what they allready have in their fridge to help with foodwaste.  '
        },
     
        {
            id: 6,
            title: 'Kölski',
            description: 'PREMIERE PRO',
            image: '../../src/assets/kolski.webp',
            linkname: 'WEBSITE',
            link: 'https://www.kolski.is/',
            category: 'Video',
            detail: 'Kölski is a suit company in Iceland that specializes in classy and stylish suits. They had a gentlemens night and asked me to record it and edit a video for future advertising. '
        },
        {
            id: 7,
            title: 'NOROM',
            description: 'CAMERA - LIGHTROOM',
            image: '../../src/assets/kolski.webp',
            linkname: 'WEBSITE',
            link: 'https://norom.net/',
            category: 'Photos',
            detail: 'Kölski is a suit company in Iceland that specializes in classy and stylish suits. They had a gentlemens night and asked me to record it and edit a video for future advertising. '
        },
        {
            id: 6,
            title: 'Kölski',
            description: 'PREMIERE PRO',
            image: '../../src/assets/kolski.webp',
            linkname: 'WEBSITE',
            link: 'https://www.kolski.is/',
            category: 'Video',
            detail: 'Kölski is a suit company in Iceland that specializes in classy and stylish suits. They had a gentlemens night and asked me to record it and edit a video for future advertising. '
        },
        {
            id: 6,
            title: 'Kölski',
            description: 'PREMIERE PRO',
            image: '../../src/assets/kolski.webp',
            linkname: 'WEBSITE',
            link: 'https://www.kolski.is/',
            category: 'Video',
            detail: 'Kölski is a suit company in Iceland that specializes in classy and stylish suits. They had a gentlemens night and asked me to record it and edit a video for future advertising. '
        },
    ])
    return {
        state
    }
}

export default getPortfolio