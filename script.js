function tableGenerator(num, length) {
	console.log("Function called");
	console.log(num);
	console.log(length);
	console.log(typeof num);
	console.log(typeof length);
	var x = "";
	for (let index = 1; index < length+1; index++) {
		x = x + "<p id=\"table" + index + "\"></p>";
		document.getElementById("table-area").innerHTML = x;
	}
	for (let index = 1; index < length+1; index++) {
		// To append html
		// var textToAdd = document.createTextNode(`${num} x ${index} = ${index * num}`);
		// document.getElementById(`table${index}`).appendChild(textToAdd);
		// to clear before and add new html to element
		document.getElementById(`table${index}`).innerHTML = `${num} x ${index} = ${index * num}`;

	}
}

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