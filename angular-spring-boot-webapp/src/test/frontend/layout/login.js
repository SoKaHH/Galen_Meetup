// These two values are passed from Galen test
var userLogin = arg.login,
    userPassword = arg.password,
    goToURL = arg.get;

function waitFor(func) {
    var timeout = 1000;

    while (timeout > 0 && !func()) {
        timeout = timeout - 1;
        Thread.sleep(1000);
    }

    if (!func()) {
        throw new Exception('Wait timeout');
    }
}


function loginPageIsLoaded() {
    return driver.findElement(By.id('login')) != null;
}

function appIsLoaded() {
    Thread.sleep(1000);
    return true;
}

// Waiting till login page is shown
waitFor(loginPageIsLoaded);

// Here we type user login and password on our login page
driver.findElement(By.cssSelector('#username')).sendKeys(userLogin);
driver.findElement(By.cssSelector('#password')).sendKeys(userPassword);

// Submitting the login page
driver.findElement(By.cssSelector('#login')).click();

// Waiting till app page is shown
waitFor(appIsLoaded);

driver.get(goToURL);

// Waiting till app page is shown
waitFor(appIsLoaded);
