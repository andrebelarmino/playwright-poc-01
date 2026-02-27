import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { MainPage } from '../pages/main-page'; 

test('User can login and logout', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.go();
    await homepage.goToLoginPage();

    const loginpage = new LoginPage(page);
    await loginpage.login('tomsmith', 'SuperSecretPassword!');

    const mainpage = new MainPage(page);
    await mainpage.userIsLogged();

    await mainpage.logout();

    await loginpage.userIsLoggedOut();
});
