var student1 = {
    firstName: "khaled",
    lastName: "mansour",
    age: 28,
    location: "Egypt"
};
var student2 = {
    firstName: "elhussen",
    lastName: "hamed",
    age: 25,
    location: "Sudan"
};
var studentsList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var rowHead = thead.insertRow(0);
var cell1Head = rowHead.insertCell(0);
var cell2Head = rowHead.insertCell(1);
cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
table.append(thead);
studentsList.forEach(function (student) {
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
table.append(tbody);
body.append(table);
