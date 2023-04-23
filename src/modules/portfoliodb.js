import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref ([
        {
            id: 1,
            title: 'Flowershop Dögg',
            description: 'HTML - CSS - JS',
            // when ready to deploy
            //  image: '../../assets/dogg.webp',
            // and copy all of ../../src/assets into assets (after doing npm run build)
            image: new URL('../assets/dogg.webp', import.meta.url),
            category: 'Web',
            color: new URL('../assets/dogg.png', import.meta.url),
            h4:'COLOR-PALLATE :',
            detail: 'This is the first website I designed and coded from scratch, also being my first web development project. Its for a flowershop in Iceland but has not been made public yet. First I designed the look in AdobeXD and then I made with HTML, CSS & JS',
        },
        {
            id: 2,
            title: 'Longhorn BBQ',
            description: 'HTML - CSS - PHP',
            image: new URL('../assets/longhorn.webp', import.meta.url),
            category: 'Web',
            color: new URL('../assets/bbqpallate.png', import.meta.url),
            h4:'COLOR-PALLATE :',
            detail: 'This is an outcome from final exam project for first semester in Multimedia Design, We were a group of 3 people that designed and coded this website for a real client. The client chose this website as a winner over all groups. It was made from HTML and CSS and then I transfered it to a PHP format so the client could use it in wordpress.',

        },
        {
            id: 3,
            title: 'West Exploration',
            description: ' HTML - DESIGN - WIX',
            image: new URL('../assets/westexplo.webp', import.meta.url),
            link: 'https://westexplo.com',
            color: new URL('../assets/westexplo.png', import.meta.url),
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
            image: new URL('../assets/distillery.webp', import.meta.url),
            detail: 'This is a design we had to do in school for Hidden Ship Distillery, We were in a group and this was the outcome we came up with. Inspired by pirates we made the logo with a "hidden" pirate ship. ',
            category: 'Design',
            color: new URL('../assets/distillerycolor.png', import.meta.url),
            h4:'COLOR-PALLATE :',
            logo1: new URL('../assets/distillery.png', import.meta.url)
        },
        {
            id: 5,
            title: 'Weekly Menu App',
            description: ' UX - DESIGN',
            heading: 'APP:',
            image: new URL('../assets/weenu.png', import.meta.url),
            color: new URL('../assets/colorweekly.png', import.meta.url),
            h4:'COLOR-PALLATE :',
            webp: new URL('../assets/weenu.webp', import.meta.url),
            category: 'Design',
            detail: 'The Weeklu Menu app is an app that is supposed to help people to decide what they will have for dinner, it was our understanding that alot of people have this problem every day. The app is also a delivery app and will give people recipe suggestions for what they allready have in their fridge to help with foodwaste.  '
        },
     
        {
            id: 6,
            title: 'Kölski',
            description: 'PREMIERE PRO',
            image: new URL('../assets/kolski.webp', import.meta.url),
            linkname: 'WEBSITE',
            link: 'https://www.kolski.is/',
            category: 'Video',
            detail: 'Kölski is a suit company in Iceland that specializes in classy and stylish suits. They had a gentlemens night and asked me to record it and edit a video for future advertising. '
        },
        {
            id: 7,
            title: 'NOROM',
            description: 'CAMERA - LIGHTROOM',
            image: new URL('../assets/norom.webp', import.meta.url),
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
            image: new URL('../assets/sarasex.png', import.meta.url),
            linkname: 'WEBSITE',
            link: 'https://www.instagram.com/einkamal_/',
            category: 'Design',
            logo1: new URL('../assets/saralogo.png', import.meta.url),
            detail: 'I made this logo for a project that will be launched on 24th of April, until then I am not allowed to say much about it. The Client wanted a logo/art image that is representing secrets.'
        },
        {
            id: 9,
            title: 'ESBJERG TASTE OFF',
            description: 'PREMIERE PRO - UX - PP',
            image: new URL('../assets/kolski.webp', import.meta.url),
            linkname: 'WEBSITE',
            
            category: 'Video',
            detail: 'This is my groups Idea of how to rebrand Esbjerg, Denmark. We decided to plan an event and tought about how we would promote it. We made an video, SoMe calendar & thought about alot of steps for content creations. PowerPoint slides an '
        },
    ])
    return {
        state
    }
}

export default getPortfolio