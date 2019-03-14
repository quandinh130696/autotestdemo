Feature('IDentify App Sanity Test');

Scenario('Go to the website', I => {
  I.amOnPage('https://www.skysports.com/');
});

Scenario('Going to Premier League', I => {
  I.click('//*[@id="site-nav-desktop-sports-more"]');
  
  I.click('//*[@id="site-nav-desktop-sports-more-nav"]/div/ul/li[1]/a');
  
  I.amOnPage('https://www.skysports.com/football');
  I.click('//*[@id="page-nav"]/ul/li[3]/a');
  I.waitForNavigation();
 
  I.click('//*[@id="widgetLite-2"]/div[1]/div[3]/div[1]/ul/li[1]/ul/li[1]');
  I.waitForNavigation();
 

});

Scenario('looking for Man City at the first position ?', I => {
  I.moveCursorTo('#widgetLite-6 > div.standing-table.standing-table--promo > table > tbody > tr:nth-child(1)');

  I.see('Chelsea','#widgetLite-6 > div.standing-table.standing-table--promo > table > tbody > tr:nth-child(1)');
  
});



