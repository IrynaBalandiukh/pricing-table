function check() {
  const checkBox = document.getElementById("checbox");
  const monthly = document.getElementsByClassName("plan__price--monthly");
  const annualy = document.getElementsByClassName("plan__price--annualy");
  for (let i = 0; i < monthly.length; i++) {
    if (checkBox.checked == true) {
      monthly[i].style.display = "block";
      annualy[i].style.display = "none";
    } else if (checkBox.checked == false) {
      monthly[i].style.display = "none";
      annualy[i].style.display = "block";
    }
  }
}
check();