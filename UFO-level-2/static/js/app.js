// from data.js
var tableData = data;

// select button
var button = d3.select('#filter-btn');

button.on("click", function()
{

    // select input element
    var inputElement = d3.select("#datetime");

    // get the value property of input element
    var inputValue = inputElement.property("value");

    // filter the data by date provided
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // function to get data and create a text node from it
    function getTextNode(i, reference)
    {
        var datum = filteredData[i][reference];
        return document.createTextNode(datum);
    }

    // select the table
    var table = document.getElementById("ufo-table");

    // clear the table
    for (var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }

    // loop through filtered data and populate the table
    for (i = 0; i < filteredData.length; i++)
    {

        // insert a row at the end
        var row = table.insertRow(-1);

        // function to insert cells and append data to them
        function makeCell(index, datum)
        {
            var cell = row.insertCell(index);
            cell.appendChild(datum);
            return cell;
        }

        // get text nodes of the data
        var datetime = getTextNode(i, "datetime");
        var city = getTextNode(i, "city");
        var state = getTextNode(i, "state");
        var country = getTextNode(i, "country");
        var shape = getTextNode(i, "shape");
        var duration = getTextNode(i, "durationMinutes");
        var comments = getTextNode(i, "comments"); 

        // insert cells and append data to them
        var datetimeCell = makeCell(0, datetime);
        var cityCell = makeCell(1, city);
        var stateCell = makeCell(2, state);
        var countryCell = makeCell(3, country);
        var shapeCell = makeCell(4, shape);
        var durationMinutesCell = makeCell(5, duration);
        var commentsCell = makeCell(6, comments);
    }
});