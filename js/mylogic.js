(function (app) {

    var urlToRequest = "http://www.filltext.com/?rows=6&firstName={firstName}&lastName={lastName}&city={city}&address={streetAddress}&email={email}&phone={phone}";
    var request = new XMLHttpRequest();
    var result;
    var element = document.getElementById("cards");
    var builtHtml = "";

    request.onreadystatechange = function() {

        var firstName;
        var lastName;
        var city;
        var address;
        var email;
        var phone;

        if (request.readyState == 4 && request.status == 200) {
            result = JSON.parse(request.responseText);

            for (var person in result) {

                firstName = result[person].firstName;
                lastName = result[person].lastName;
                city = result[person].city;
                address = result[person].address;
                email = result[person].email;
                phone = result[person].phone;

                builtHtml += '<div class="panel panel-info" style="width: 31%; display: inline-block; margin-right: 20px;">';
                builtHtml += '<div class="panel-heading">';
                builtHtml += '<h3 class="panel-title"><b>' + firstName + ' ' + lastName + '</b></h3>';
                builtHtml += '</div>';
                builtHtml += '<div class="panel-body">';
                builtHtml += '<p> <span class="glyphicon glyphicon-home"></span> ' + city + ', ' + address + '</p>';
                builtHtml += '<p> <span class="glyphicon glyphicon-envelope"></span> ' + email + '</p>';
                builtHtml += '<p> <span class="glyphicon glyphicon-earphone"></span> ' + phone + '</p>';
                builtHtml += '</div>';
                builtHtml += '</div>';

            };

            document.getElementById("cards").innerHTML = builtHtml;
        }
    };
    request.open("GET", urlToRequest, true);
    request.send();

})(window.FilltextAPI = window.FilltextAPI || {});
