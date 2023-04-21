import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref ([
        {
            id: 1,
            title: 'Flowershop Dögg',
            description: 'HTML - CSS - JS',
            // when ready to deploy
            //  image: '../assets/dogg.webp',
            // and copy all of ../src/assets into assets (after doing npm run build)
            image: '../assets/dogg.webp',
            category: 'Web',
            color: '../assets/dogg.png',
            h4:'COLOR-PALLATE :',
            detail: 'This is the first website I designed and coded from scratch, also being my first web development project. Its for a flowershop in Iceland but has not been made public yet. First I designed the look in AdobeXD and then I made with HTML, CSS & JS',
        },
        {
            id: 2,
            title: 'Longhorn BBQ',
            description: 'HTML - CSS - PHP',
            image: '../assets/longhorn.webp',
            category: 'Web',
            color: '../assets/bbqpallate.png',
            h4:'COLOR-PALLATE :',
            detail: 'This is an outcome from final exam project for first semester in Multimedia Design, We were a group of 3 people that designed and coded this website for a real client. The client chose this website as a winner over all groups. It was made from HTML and CSS and then I transfered it to a PHP format so the client could use it in wordpress.',

        },
        {
            id: 3,
            title: 'West Exploration',
            description: ' HTML - DESIGN - WIX',
            image: '../assets/westexplo.webp',
            link: 'https://westexplo.com',
            color: '../assets/westexplo.png',
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
            image: '../assets/distillery.webp',
            detail: 'This is a design we had to do in school for Hidden Ship Distillery, We were in a group and this was the outcome we came up with. Inspired by pirates we made the logo with a "hidden" pirate ship. ',
            category: 'Design',
            color:'../assets/distillerycolor.png',
            h4:'COLOR-PALLATE :',
            logo1: '../assets/distillery.png'
        },
        {
            id: 5,
            title: 'Weekly Menu App',
            description: ' UX - DESIGN',
            heading: 'APP:',
            image: '../assets/weenu.png',
            color: '../assets/colorweekly.png',
            h4:'COLOR-PALLATE :',
            webp:'../assets/weenu.webp',
            category: 'Design',
            detail: 'The Weeklu Menu app is an app that is supposed to help people to decide what they will have for dinner, it was our understanding that alot of people have this problem every day. The app is also a delivery app and will give people recipe suggestions for what they allready have in their fridge to help with foodwaste.  '
        },
     
        {
            id: 6,
            title: 'Kölski',
            description: 'PREMIERE PRO',
            image: '../assets/kolski.webp',
            linkname: 'WEBSITE',
            link: 'https://www.kolski.is/',
            category: 'Video',
            detail: 'Kölski is a suit company in Iceland that specializes in classy and stylish suits. They had a gentlemens night and asked me to record it and edit a video for future advertising. '
        },
        {
            id: 7,
            title: 'NOROM',
            description: 'CAMERA - LIGHTROOM',
            image: '../assets/norom.webp',
            linkname: 'WEBSITE',
            link: 'https://norom.net/',
            category: 'Photos',
            detail: 'NOROM is an online clothing store operating in Miami, USA. Its focus is to provide people opportunities. I have done some fashion photography for the online store. Those projects have been both in Miami and in Iceland. '
        },
        {
            id: 8,
            title: 'EINKAMÁL',
            description: 'DESIGN - LOGO',
            // eslint-disable-next-line no-undef
            image: '../assets/sarasex.png',
            linkname: 'WEBSITE',
            link: 'https://www.instagram.com/einkamal_/',
            category: 'Design',
            logo1: '../assets/saralogo.png',
            detail: 'I made this logo for a project that will be launched on 24th of April, until then I am not allowed to say much about it. The Client wanted a logo/art image that is representing secrets.'
        },
        {
            id: 6,
            title: 'Kölski',
            description: 'PREMIERE PRO',
            image: '../assets/kolski.webp',
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