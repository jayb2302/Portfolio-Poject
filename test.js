import { Selector, fixture, test } from 'testcafe';

fixture`Navbar Link Test`
    .page('https://jayportfolio-2023-int.web.app/'); // Replace 'your-website-url' with the actual URL of your website

test('Clicking Portfolio Link Navigates to Portfolio Page', async t => {
    // Define the selector for the Portfolio link
    const portfolioLink = Selector('#app > header > div > nav > a:nth-child(2)');

    // Click on the Portfolio link
    await t.click(portfolioLink);

   

    // You can add additional assertions specific to your portfolio page as needed
});


  
    
