
function Vehicle(event) {
  if (event == "One") {
    document.getElementById("redcar").style.display = "block";
    document.getElementById("bulebicyle").style.display = "none";
    document.getElementById("m").style.display = "none";
  } else if (event == "two") {
    document.getElementById("redcar").style.display = "none";
    document.getElementById("bulebicyle").style.display = "block";
    document.getElementById("m").style.display = "none";
  } else if (event == "three") {
    document.getElementById("redcar").style.display = "none";
    document.getElementById("bulebicyle").style.display = "none";
    document.getElementById("m").style.display = "block";
  } else if (event == "All") {
    document.getElementById("redcar").style.display = "block";
    document.getElementById("bulebicyle").style.display = "block";
    document.getElementById("m").style.display = "block";
  }

}
