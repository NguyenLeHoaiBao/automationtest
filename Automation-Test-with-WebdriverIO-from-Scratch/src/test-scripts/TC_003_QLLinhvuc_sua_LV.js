let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');
let WelcomePage = require('../page-objects/Welcome');

let noidungbtn = "//h3[contains(text(),'i dung')]";
let tuyendungbtn = "//a[contains(text(),'n d')]";
let linhvucbtn = "//a[contains(text(),'nh v')]";
let dslinhvucselector = "//h1[contains(@class,'page-title mr-3 mb-2')]";
let dropDownSelector = "#dropdownMenuLink13";
let dropDownOption = "//a[@class='dropdown-item'][contains(text(),'Chi ti')]";
let tieude_txt = "#name";
let save_btn = "//button[@class='btn btn btnPrimary']";
let r = Math.random().toString(36).substring(7);
//a[contains(text(),'Xóa')]

describe('Quan Ly Linh Vuc', () => {

    const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;

    before(() => {
        browser.url('/cms/dashboard');
    });

    it('Kiểm tra chức năng edit của lĩnh vực', () => {
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
    
            //3/ kiểm tra chức năng chỉnh sửa lĩnh vực đơn lẻ
            $(dropDownSelector).waitForDisplayed(5000);
            $(dropDownSelector).click();
            $(dropDownOption).click();
            $(tieude_txt).setValue(r);
            $(save_btn).click();


    
        

    });

});