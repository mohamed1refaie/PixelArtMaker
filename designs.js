// Select color input
// Select size input
var color=document.getElementById("colorPicker").value;

$( '#pixel_canvas td' ).on( 'click', function( evt ) {
	console.log("test");
    $( evt.target ).css( 'background-color', color );
});

$('body').click(function(event) {
    var text = event.target;
    text=String(text);
    if(text==="[object HTMLTableCellElement]")
    	$( event.target ).css( 'background-color', color );
});

function makeGrid() {
	var row=document.getElementById("input_height").value;
	var column=document.getElementById("input_width").value;
	$("#pixel_canvas").remove();
	$("body").append("<table id="+"pixel_canvas"+"></table>")
	for(var i=0;i<row;i++)
	{
		$("#pixel_canvas").append("<tr id="+i+">");
		for(var j=0;j<column;j++)
		{
			$("#pixel_canvas").append("<td id="+i+"-"+j+"></td>");
		}
		$("#pixel_canvas").append("</tr>");
	}
	console.log(row);
	console.log(column);
	console.log(color);
}

$("#colorPicker").on('change',function()
{
	color=document.getElementById("colorPicker").value;
});

