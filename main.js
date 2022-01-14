	function myFunction() {
  		let htmlString = document.getElementById("raw").value;
		//let plainText = htmlString.replace(/<[^>]+>/g, '');
		var patt = /\(?\[?\d+[^=:\r\n]+[=]\s?(?:\d|\.|,)+/g;
  		var matches = htmlString.matchAll(patt);
  		for (const match of matches) {
		  console.log(match[0]);
		  console.log(match.index);
		  console.log(2 +  2)
		  document.getElementById("unraw").value += match +"\n"

		}
		myFunction2();
	}

	function myFunction2() {
  		let htmlString = document.getElementById("unraw").value;
		//let plainText = htmlString.replace(/<[^>]+>/g, '');
		var patt = /([1-9]\d+)\.(?=\d{3}(\D|$))/g;
  		var newstr = htmlString.replace(patt, "$1")
  		document.getElementById("unraw2").value = newstr
  		myFunction3();
  		
	}
	function myFunction3() {
  		let htmlString = document.getElementById("unraw2").value;
		//let plainText = htmlString.replace(/<[^>]+>/g, '');
		var patt = /[^0-9\s]+[\/][^0-9]/g;
  		var newstr = htmlString.replace(patt, "")
  		document.getElementById("unraw3").value = newstr
  		myFunction4();
	}

	function myFunction4() {
  		let htmlString = document.getElementById("unraw3").value;
		//let plainText = htmlString.replace(/<[^>]+>/g, '');
		var patt = /(m2|m3|[a-zA-z]+\.)/g;
  		var newstr = htmlString.replace(patt, "")
  		document.getElementById("unraw4").value = newstr
  		myFunction5();
	}

	function myFunction5() {
  		let htmlString = document.getElementById("unraw4").value;
		//let plainText = htmlString.replace(/<[^>]+>/g, '');
		var patt = /[^0-9+\-*x\/=,\s\.\)\(\[\]]/g;
  		var newstr = htmlString.replace(patt, "")
  		document.getElementById("unraw5").value = newstr
  		myFunction6();
	}

	function myFunction6() {
  		var area = document.getElementById("unraw5");             
		var lines = area.value.replace(/\r\n/g,"\n").split("\n");

		for (const line of lines){
			var linex = 0
			var patt = /\(?\d+[^=:\r\n]+[=]/g;
	  		var matches = line.matchAll(patt);
	  		for (const match of matches) {
			  console.log(match[0]);
			  console.log(match.index)
			  match[0] = match[0].slice(0, -1); 
			  match[0] = match[0].replaceAll("x","*")
			match[0] = match[0].replaceAll("X","*")
			  match[0] = match[0].replaceAll(",",".")
			  console.log(match);
			  try {
			  document.getElementById("unraw6").value += line + " || " + eval(match[0]) +"\n"
				} catch (error) {
				  console.error(error);
				  document.getElementById("unraw6").value += match[0] + "##error##" +"\n"
				  // expected output: ReferenceError: nonExistentFunction is not defined
				  // Note - error messages will vary depending on browser
				}
		
			}
		}	
	}
