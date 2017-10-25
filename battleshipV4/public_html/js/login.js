


function Login(){}

var login=new Login();

Login.prototype.isValid = function () {
    var reg = /^[a-z0-9_-]{3,15}$/;
    var url = document.location.href;
    var $_GET = this.getForm(url);
    if (reg.test($_GET.user) === false) {
        alert("Invalid User Name. Please Enter a Valid One.");
        window.location.replace("login.html");
        return false;
    }
};

Login.prototype.askU = function () {
    document.write('<div id="ask"><p class="title">Login</p><form id="form"  action="play.html" method="get">');
    document.write('<input type="text" class="questions" name="user"><label>User Name</label><ul><li>a-z, 0-9 , underscore , hyphen</li><li>Length at least 3 characters and maximum length of 15</li></ul><input class="button button1" value="Submit"  type="submit" /></form></div></br></form></div>');
};

Login.prototype.getForm = function (url) {
    var info = url.split("?");
    var nameValuePairs = info[1].split("&");
    var $_GET = new Object;
    for (var i = 0; i < nameValuePairs.length; i++) {
        var map = nameValuePairs[i].split("=");
        var name = map[0];
        var value = map[1];
        $_GET[name] = value;
    }
    return $_GET;
};