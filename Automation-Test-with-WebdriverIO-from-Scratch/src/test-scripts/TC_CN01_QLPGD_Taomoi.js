let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');
let WelcomePage = require('../page-objects/Welcome');

let noidungbtn = "//h3[contains(text(),'i dung')]";
let Dealer_btn = "//a[contains(text(),'Dealer')]";
let Phonggiaodich_btn = "//a[contains(text(),'Phòng Giao D')]";
let taomoi_btn = "//span[contains(text(),'o m')]";

let tenPGD_TXB = "#name";
let diachi_TXB = "#address";

let Thongtinchung_btn = "#showSetting";
let tinhTP_dropdown = "//span[@id='select2-select-province-container']";
let tinhTP_search = "//input[@class='select2-search__field']";


let quanHuyen_dropdown = "#select2-select-district-container";
let quan_search = "//input[@class='select2-search__field']";

let tele_TXB = "#phone";
let fax_TXB = "#fax";
let kinhdo_TXB = "#longitude";
let vido_TXB = "#latitude";
let email_TXB = "#email";
let sapxep_TXB = "#ordering";
let trangthai_TXB = "#status";

let luu_btn = "//div[@class='ml-2 d-inline-block']//button[@class='btn btnPrimary'][contains(text(),'u')]";
let r = Math.random().toString(36).substring(7);
let a = Math.random().toString(35).substring(7);
let b = Math.random();
let c = Math.random();
let d = Math.random();

describe('Quan Ly Phong Giao Dich', () => {

    const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;

    before(() => {
        browser.url('/cms/dashboard');
        browser.maximizeWindow();
    });

    it('Kiểm tra chức năng tạo mới Phong Giao Dich', () => {
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
            $(Phonggiaodich_btn).click();
        
        // 3. Chỉ đường dẫn đến trang tạo mới:
            $(taomoi_btn).click();

        // 4. Nhập các thong số tại trang thông tin chính:
            $(tenPGD_TXB).waitForDisplayed(5000);
            $(tenPGD_TXB).setValue(r);
            $(diachi_TXB).setValue(a);

        // 5. Nhập các thông số tại trang thông tin chung:
            $(Thongtinchung_btn).click()
            $(tele_TXB).waitForDisplayed(5000);
            $(tinhTP_dropdown).click();
            $(tinhTP_search).setValue("Hồ Chí Minh");
            $(tinhTP_search).keys('Enter');
            
            $(quanHuyen_dropdown).click();
            $(quan_search).setValue("Quận 03");
            $(quan_search).keys('Enter');

            $(tele_TXB).setValue(b);
            $(fax_TXB).setValue(b);
            $(email_TXB).setValue(r+ "@gmail.com");

            $(kinhdo_TXB).setValue(c);
            $(vido_TXB).setValue(d);

        // 6. Bấm chọn nút lưu:
            $(luu_btn).click();        

    });

});