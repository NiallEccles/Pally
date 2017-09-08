var svg = document.querySelectorAll('.colour');
var clip = new Clipboard(svg);

clip.on('success', function(e) {
    console.log(e);
});
clip.on('error', function(e) {
    console.log(e);
});

function showNotif() {
	var notif = document.getElementById('notification');
  	notif.style.display = "block";
  	setTimeout(function(){ 
  		document.getElementById('notification').style.display = "none";
  	}, 1000);
}

