$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  var validUser = false;

  // Kiểm tra không phân biệt hoa thường
  if (userName.toLowerCase() === "tsv" && pwd.toLowerCase() === "tsv") {
    validUser = true;
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
