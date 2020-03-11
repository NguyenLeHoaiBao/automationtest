let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');
let WelcomePage = require('../page-objects/Welcome');

let noidungbtn = "//h3[contains(text(),'i dung')]";
let Dealer_btn = "//a[contains(text(),'Dealer')]";
let ATM_Floder = "//a[contains(text(),'ATM')]";
let taomoi_btn = "//span[contains(text(),'o m')]";

let tenATM_filed = "#name";
let diachiATM_filed = "#address";

let Thongtinchung_btn = "//a[@id='SettingTab']";
let label_filed = "//label[contains(text(),'nh/Thành Ph')]";

let tinhTP_dropdown = "//span[@id='select2-select-province-container']";
let tinhTP_search = "//input[@class='select2-search__field']";


let quanHuyen_dropdown = "#select2-select-district-container";
let quan_search = "//input[@class='select2-search__field']";

let kinhdo_filed = "#longitude";
let vido_filed = "#latitude";

let luu_btn = "//body/main/div/form/div/div/div/div/button[1]";

let r = Math.random().toString(36).substring(7);
let a = Math.random().toString(35).substring(7);
let b = Math.random();
let c = Math.random();
let d = Math.random();


describe('ATM ', () => {

    const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;

    before(() => {
        browser.url('/cms/dashboard');
        browser.maximizeWindow();
    });

    it('Kiểm tra chức năng tạo mới ATM', () => {
        // 1.Đăng nhập vào trang web của cms:
        LoginPage
            .inputUsername(VALID_LOGIN_CREDS.username)
            .inputPassword(VALID_LOGIN_CREDS.password)
            .clickOnLoginBtn();

        // 2. Chi đường dẫn đến phòng giao dịch:
            $(noidungbtn).waitForDisplayed(10000);
            $(noidungbtn).click();
            $(Dealer_btn).waitForDisplayed(10000);
            $(Dealer_btn).click();
            $(ATM_Floder).waitForDisplayed(10000);
            $(ATM_Floder).click();
        
        // 3. Chỉ đường dẫn đến trang tạo mới:
            $(taomoi_btn).click();

        // 4. Nhập các thong số tại trang thông tin chính:
            $(tenATM_filed).waitForDisplayed(5000);
            $(tenATM_filed).setValue(r);
            $(diachiATM_filed).setValue(a);

        // 5. Nhập các thông số tại trang thông tin chung:
            $(Thongtinchung_btn).click()
            $(label_filed).waitForDisplayed(5000);
            $(tinhTP_dropdown).click();
            $(tinhTP_search).setValue("Hồ Chí Minh");
            $(tinhTP_search).keys('Enter');
            
            $(quanHuyen_dropdown).click();
            $(quan_search).setValue("Quận 03");
            $(quan_search).keys('Enter');
            
            $(kinhdo_filed).setValue("1999923");
            $(vido_filed).setValue("4123123");

        // 6. Bấm chọn nút lưu:
            $(luu_btn).click();        

    });

});