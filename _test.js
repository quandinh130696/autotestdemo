const puppeteer = require('puppeteer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
Feature('IDentify App Sanity Test');

Scenario('1', I => {
  I.amOnPage('https://www.skysports.com/');
});

Scenario('2', I => {
  I.click('//*[@id="site-nav-desktop-sports-more"]');
  I.wait(5);
  I.click('//*[@id="site-nav-desktop-sports-more-nav"]/div/ul/li[1]/a');
  I.wait(10);
  I.amOnPage('https://www.skysports.com/football');
  I.wait(5);
  I.click('//*[@id="page-nav"]/ul/li[3]/a');
  I.waitForNavigation();
  I.wait(5);
  I.click('//*[@id="widgetLite-2"]/div[1]/div[3]/div[1]/ul/li[1]/ul/li[1]');
  I.waitForNavigation();
 

});

Scenario('looking for Chelsea at the first position ?', I => {
  let checkforchel = I;
  checkforchel.wait(5);
  checkforchel.moveCursorTo('#widgetLite-6 > div.standing-table.standing-table--promo > table > tbody > tr:nth-child(1)');
  checkforchel.wait(5);
  checkforchel.see('Chelsea','#widgetLite-6 > div.standing-table.standing-table--promo > table > tbody > tr:nth-child(1)');
  checkforchel.wait(5);
});


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'SMTP',
//   auth: {
//     user: 'quannd6754@seta-international.vn',
//     pass: 'Plan@2019'
//   }
// });

// var mailOptions = {
//   from: 'quannd6754@seta-international.vn',
//   to: 'quandinhdinh130696@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



// console.log(Scenario('3',I));
