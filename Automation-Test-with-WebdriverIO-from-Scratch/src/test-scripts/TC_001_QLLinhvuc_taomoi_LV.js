let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');
let WelcomePage = require('../page-objects/Welcome');

let noidungbtn = "//h3[contains(text(),'i dung')]";
let tuyendungbtn = "//a[contains(text(),'n d')]";
let linhvucbtn = "//a[contains(text(),'nh v')]";
let dslinhvucselector = "//h1[contains(@class,'page-title mr-3 mb-2')]";
let taomoi_btn = "[id='btnCreateCareerField']";
let crea_new = "[id='name']";
let new_btn = "//button[contains(@class,'btn btn btnPrimary')]";
let r = Math.random().toString(36).substring(7);


describe('LOGIN', () => {

    const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;

    before(() => {
        browser.url('/cms/dashboard');
    });

    it('Kiểm tra chức năng tạo mới của lĩnh vực', () => {
        // 1.Đăng nhập vào trang web của cms:
        LoginPage
            .inputUsername(VALID_LOGIN_CREDS.username)
            .inputPassword(VALID_LOGIN_CREDS.password)
            .clickOnLoginBtn();

        // 2. Chi đường dẫn đến lĩnh vực.
            $(noidungbtn).click();
            $(tuyendungbtn).click();
            $(linhvucbtn).click();
            $(dslinhvucselector).waitForDisplayed(5000);
            dslinhvuc = $(dslinhvucselector).getText();
            console.log(dslinhvuc);
    
            //3/ kiểm tra chức năng tạo mới của lĩnh vực
            $(taomoi_btn).waitForDisplayed(5000);
            $(taomoi_btn).click();
            $(crea_new).setValue(r);
            $(new_btn).click();
    
        

    });

});