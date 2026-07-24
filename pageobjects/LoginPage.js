module.exports = class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.username = page.locator("[id='userEmail']");
        this.password = page.locator("[id='userPassword']");
        this.login = page.locator("[id='login']");
    };

async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
}

async validLogin(username,password)
{
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
        await this.page.waitForLoadState('networkidle')
}

}