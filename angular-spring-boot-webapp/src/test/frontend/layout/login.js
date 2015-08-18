// These two values are passed from Galen test
var userLogin = arg.login,
    userPassword = arg.password,
    goToURL = arg.get;


this.LoginPage = $page("Login page", {
    loader: "xpath: //div[contains(@class,'block-ui-message-container')]//div[contains(@class,'block-ui-message')]",
    email: "#username",
    password: "#password",
    submitButton: "#login",

    load: function () {
        try {
            this.loader.waitToBeShown(1000);
        } catch (ignored) {
        }
        this.loader.waitToBeHidden(1000);
        return this;
    },
    loginAs: function (userName, password) {
        this.email.typeText(userName);
        this.password.typeText(password);
        this.submitButton.click();
        return this.load();
    },
    loadPage: function (url) {
        this.open(url);
        return this.load();
    }
});
// login
new LoginPage(driver).load()
    .loginAs(userLogin, userPassword)
    .loadPage(goToURL);


