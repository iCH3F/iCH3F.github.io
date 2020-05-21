function sendHttpRequest(w){
	var url = "http://www.md5.cz/getmd5.php";
	var idWhat = document.getElementById('what');
	var params = "what=" + idWhat.value;

	if (window.ActiveXObject) {
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		http = new XMLHttpRequest();
	}

	http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", params.length);
	http.setRequestHeader("Connection", "close");

	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4){
			if (http.status == 200) {
				var responseTxt = http.responseText;
				var aResponseTxt = responseTxt.split("|");
				var idChecksum = document.getElementById('checksum');
	      		var idColorcode = document.getElementById('colorcode');
				if (w) idChecksum.value = aResponseTxt[0];
				idColorcode.innerHTML = aResponseTxt[1];
			}else{
		        alert("AJAX error "+ http.status +":"+ http.statusText);
		    }
		}
	};
	http.send(params);
}
