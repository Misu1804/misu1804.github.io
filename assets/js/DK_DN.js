function checkName() {
    var name_input = document.getElementById("txt_name").value;
    var name_span = document.getElementById("loi_ten");
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    // Kiểm tra họ tên
    if(name_input == "" || name_input == null){
        name_span.innerHTML = "Vui lòng nhập họ tên!";
    }else if (!regexName.test(name_input)){ // nếu họ tên khác regexName
        name_span.innerHTML = "Họ tên không hợp lệ!";
    }else{  // nếu họ tên đúng
        name_span.innerHTML = "";
        return name_input; 
    }
}

// Kiểm tra số điện thoại
function checkPhone(){
    var phone_input = document.getElementById("txt_phone").value;
    var phone_span = document.getElementById("loi_sdt");
    var regexPhone = /^[0]{1}[1-9]{1}[0-9]{8}$/;

    // Kiểm tra họ tên
    if(phone_input == "" || phone_input == null){
        phone_span.innerHTML = "Vui lòng nhập số điện thoại! (Có 10 chữ số)";
    }else if (!regexPhone.test(phone_input)){ // nếu họ tên khác regexName
        phone_span.innerHTML = "Số điện thoại không hợp lệ!";
    }else{  // nếu họ tên đúng
        phone_span.innerHTML = "";
        return phone_input; 
    }
}

// Kiểm tra email
function checkEmail(){
    var email_input = document.getElementById("txt_email").value;
    var email_span = document.getElementById("loi_email");
    var regexEmail = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i;

    // Kiểm tra họ tên
    if(email_input == "" || email_input == null){
        email_span.innerHTML = "Vui lòng nhập email!";
    }else if (!regexEmail.test(email_input)){ // nếu họ tên khác regexName
        email_span.innerHTML = "Email không hợp lệ!";
    }else{  // nếu họ tên đúng
        email_span.innerHTML = "";
        return email_input; 
    }
}

// Kiểm tra Mật khẩu đăng kí
function checkMK(){
    var matkhau_input = document.getElementById("txt_mk").value;
    var matkhau_span = document.getElementById("loi_mk");
    var regexMK = /^[0-9]{10}$/;

    // Kiểm tra họ tên
    if(matkhau_input == "" || matkhau_input == null){
        matkhau_span.innerHTML = "Vui lòng nhập mật khẩu!";
    }else if (!regexMK.test(matkhau_input)){ // nếu họ tên khác regexName
        matkhau_span.innerHTML = "Mật khẩu phải là 10 số bất kì!";
    }else{  // nếu họ tên đúng
        matkhau_span.innerHTML = "";
        return matkhau_input; 
    }
}

// Kiểm tra Nhập lại Mật khẩu
function checkMKL(){
    var matkhaulai_input = document.getElementById("txt_mkl").value;
    var matkhaulai_span = document.getElementById("loi_mkl");
    var mk = checkMK();

    // Kiểm tra họ tên
    if(matkhaulai_input == "" || matkhaulai_input == null){
        matkhaulai_span.innerHTML = "Vui lòng nhập mật khẩu!";
    }else if (matkhaulai_input != mk){ // nếu họ tên khác regexName
        matkhaulai_span.innerHTML = "Mật khẩu không trùng khớp!";
    }else{  // nếu họ tên đúng
        matkhaulai_span.innerHTML = "";
        return matkhaulai_input; 
    }
}

// Kiểm tra Mật khẩu đăng nhập
function checkMKDN(){
    var matkhaudn_input = document.getElementById("txt_mkdn").value;
    var matkhaudn_span = document.getElementById("loi_mkdn");
    var regexMKDN = /^[0-9]{10}$/;

    // Kiểm tra họ tên
    if(matkhaudn_input == "" || matkhaudn_input == null){
        matkhaudn_span.innerHTML = "Vui lòng nhập mật khẩu!";
    }else if (!regexMKDN.test(matkhaudn_input)){ // nếu họ tên khác regexName
        matkhaudn_span.innerHTML = "Mật khẩu sai!";
    }else{  // nếu họ tên đúng
        matkhaudn_span.innerHTML = "";
        return matkhaudn_input; 
    }
}