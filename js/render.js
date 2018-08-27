
function renderDD() {

	var parentDiv = document.getElementById("main");

	if (parentDiv == null) {
		console.log("main div doesn't exist!?");
		return;
	}

	var myDD = document.createElement("div");
	myDD.classList.add("border-gray");
	myDD.classList.add("fixed-height");
	myDD.innerHTML = "<div>You can put 11111111</div>";

	parentDiv.insertBefore(myDD, parentDiv.childNodes[0]);
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
      	alert("!!!!");
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://tien-yu.github.io/SYS/data/group_conformance.json',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    alert('Your query count: ' + data.parseScript);
  }
});

renderDD();