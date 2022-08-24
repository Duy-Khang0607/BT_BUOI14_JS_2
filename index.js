// -----------------CÂU 1 :--------------------------
function date_month_year() {
    var date = 27;
    var month = 3;
    var year = 2022;
    console.log('Ngày nhập : ', date);
    console.log('Tháng nhập: ', month);
    console.log('Năm nhập: ', year);
    if (year > 0 && month > 0 && date <= 31) {
        date++;
        month++;
        year++;
    }
    else {
        console.log('Vui lòng nhập lại ngày tháng năm !');
    }
    console.log('Ngày tiếp theo:', date, month, year);
}
// date_month_year();
// -----------------CÂU 2 :--------------------------
function findDate() {
    var month = 4;
    var year = 2000;
    var date = 0;
    console.log('Nhập tháng: ', month);
    console.log('Nhập năm: ', year);
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            date = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            date = 30;
            break;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                date = 28;
            else date = 29;
            break;
        default:
            console.log('Vui lòng nhập lại!');
            break;
    }
    console.log('Số ngày trong tháng : ', date);
}
// findDate();

// -----------------CÂU 3 :--------------------------
function ex3() {
    var dig1 = 1;
    var dig2 = 1;
    var dig3 = 9;
    console.log(dig1, dig2, dig3);

    switch (dig1) {
        case 1: console.log("Một trăm"); break;
        case 2: console.log("Hai trăm"); break;
        case 3: console.log("Ba trăm"); break;
        case 4: console.log("Bốn trăm"); break;
        case 5: console.log("Năm trăm"); break;
        case 6: console.log("Sáu trăm"); break;
        case 7: console.log("Bảy trăm"); break;
        case 8: console.log("Tám trăm"); break;
        case 9: console.log("Chín trăm"); break;
        default:
            console.log('Vui lòng nhập lại số!')
            break;
    }
    switch (dig2) {
        case 1: console.log("mười"); break;
        case 2: console.log("Hai mươi"); break;
        case 3: console.log("Ba mươi"); break;
        case 4: console.log("Bốn mươi"); break;
        case 5: console.log("Năm mươi"); break;
        case 6: console.log("Sáu mươi"); break;
        case 7: console.log("Bảy mươi"); break;
        case 8: console.log("Tám mươi"); break;
        case 9: console.log("Chín mươi"); break;
        default:
            console.log('Vui lòng nhập lại số!')
            break;
    }
    switch (dig3) {
        case 1: console.log("Một "); break;
        case 2: console.log("Hai "); break;
        case 3: console.log("Ba "); break;
        case 4: console.log("Bốn "); break;
        case 5: console.log("Năm "); break;
        case 6: console.log("Sáu "); break;
        case 7: console.log("Bảy "); break;
        case 8: console.log("Tám "); break;
        case 9: console.log("Chín "); break;
        default:
            console.log('Vui lòng nhập lại số!')
            break;
    }
}
// ex3();

// -----------------CÂU 4 :--------------------------
function findNameStudent() {
    const mapSchool = 83;
    var nameStudent1 = 'Nhật Nam';
    var nameStudent2 = 'Khá Bảnh';
    var nameStudent3 = 'Bá Khang';
    var mapStudent1 = 122;
    var mapStudent2 = 20;
    var mapStudent3 = 212;
    if (mapStudent1 > mapSchool) {
        console.log(nameStudent1);
        if (mapStudent2 > mapSchool) {
            console.log(nameStudent2);
        }
        if (mapStudent3 > mapSchool) {
            console.log(nameStudent3);
        }
    }
    else {
        console.log('Không có sinh viên nào xa trường');
    }
}
// findNameStudent();