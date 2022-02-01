function tableGenerator(num, length) {
	// Add all the p tags with appropriate id
	var x = "";
	for (let index = 1; index < length+1; index++) {
		x = x + "<p id=\"table" + index + "\"></p>";
		document.getElementById("table-area").innerHTML = x;
	}
	// using id of p tags add table text to it
	for (let index = 1; index < length+1; index++) {
		
		document.getElementById(`table${index}`).innerHTML = `${num} x ${index} = ${index * num}`;

	}
}
// creating arrow function to be called when Generate Button is clicked
document.getElementById('generateBtn').addEventListener("click", () => {
	var numVal = document.getElementById("num").value;
	var numLen = document.getElementById("len").value;
	numVal = Number(numVal);
	numLen = Number(numLen);
	if (numVal == 0 || numLen == 0) {
		alert("Please fill both fields to Generate you Table");
	} else {
		tableGenerator(numVal, numLen);
	}
})