//GET Request

function GETrequest(URL,callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         //Action
         callback(this.responseText);
      }
  };
  
  xhttp.open("GET", URL, true);
  xhttp.send();
  
}

//POST

function POSTrequest(URL,obj,callback) {
  var objJSON = JSON.stringify(obj);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
    }
  };
  
  xhttp.open("POST", URL, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(objJSON);
  
}
