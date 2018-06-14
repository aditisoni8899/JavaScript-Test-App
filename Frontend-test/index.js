(function () {

    var data = new Array();

//code to add data to the html table by retrieving it from array(data)
$(window).load(function () {

    data = [
        { "name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
        { "name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
        { "name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
        { "name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
        { "name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
        { "name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
        { "name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
    ];

    var tbl = $("<table/>").attr("id", "mytable");
    $("#div1").append(tbl);
    for (var i = 0; i < data.length; i++) {
        var tr = "<tr>";
        var conCat = data[i]["name"] + ' , ' + data[i]["date"];
        var td1 = "<td>" + conCat + "</td>";
        var td2 = "<td>" + data[i]["assigned"] + "</td></tr>";

        $("#mytable").append(tr + td1 + td2);

    }
});
    // submiting form value to the function for converting it to the JSON Strings
    function toJSONString(form) {

        var obj = {};
        //getting Json Object 'obj' from the below block of code
        var elements = form.querySelectorAll("input, select, textarea");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }
        //adding recently created JSON object(obj) to the array (data)
        data.push(obj);

        //code to add data to the html table by retrieving it from array(data)
        $(document).ready(function () {

            var tbl = $("<table/>").attr("id", "mytable");
            $("#div1").append(tbl);
            for (var i = data.length-1; i < data.length; i++) {
                var tr = "<tr>";
                var conCat = data[i]["name"] + ' , ' + data[i]["date"];
                var td1 = "<td>" + conCat + "</td>";
                var td2 = "<td>" + data[i]["assigned"] + "</td></tr>";

                $("#mytable").append(tr + td1 + td2);

            }
        });

        //below two lines are for debugging purpose.

        // converting array of Json objects to String
        var string = JSON.stringify(data);
        //updated array or whole table
        console.log(string);
    }

    //event listener for the html form having id "myForm"
    document.addEventListener("DOMContentLoaded", function () {
        //getting the from element
        var form = document.getElementById("myForm");
        //adding listener to the submit button
        form.addEventListener("submit", function (e) {
            //event.preventDefault() method stops the default action of an element
            // from happening. for example -- Prevent a submit button from submitting a form.
            e.preventDefault();
            //getting array of JSON Objects in 'json var' by calling toJSONString() function
            var json = toJSONString(this);
        }, false);

    });

})();

