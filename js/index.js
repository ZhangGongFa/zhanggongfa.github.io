$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  var validUser = false;

  for (var i = 1; i <= 999; i++) {
    var formattedNumber = ("000" + i).slice(-3); // Định dạng số thành chuỗi 3 chữ số với số 0 đứng trước
    var targetUserName = "030239230" + formattedNumber;
    
    if (userName === targetUserName && pwd === "MISerK39") {
      validUser = true;
      break; // Khi tìm thấy tài khoản hợp lệ, thoát khỏi vòng lặp
    }
  }

  if (validUser) {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "index2.html";
    }, 2000);
  } else {
    alert("Wrong Username or Password");
  }
});
