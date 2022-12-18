var modals = document.getElementsByClassName("modal");

for (let index = 0; index < modals.length; index++) {
  var btn = document.getElementById("myBtn" + index);
  let modal = document.getElementById("myModal" + index)
  var span = document.getElementsByClassName("close")[index];
  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    var modal = document.getElementById("myModal" + index)
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    // var modal = document.getElementById("myModal"+index)
    modal.style.display = "none";
  }
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  for (let index = 0; index < modals.length; index++) {
    var modal = document.getElementById("myModal" + index)
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


const boutonTraductionAnglaise = document.querySelector('#bouton_traduction_anglaise');
const boutonTraductionFr = document.querySelector('#bouton_traduction_fr');
const traductionAnglaise = document.querySelector('#traduction_anglaise')

boutonTraductionAnglaise.addEventListener('click', function () {

  traductionAnglaise.innerHTML = "I'm learning how to use the library <a href=https://threejs-journey.com/>three.js</a>, to add 3D to my web pages. These examples may look familiar to you, that's because I'm following Bruno Simon's training: <a href=https://threejs-journey.com/ </a> Three JS journey.";
  boutonTraductionAnglaise.style.textDecoration = "underline";
  boutonTraductionFr.style.textDecoration = "none";
})

boutonTraductionFr.addEventListener('click', function () {

  window.location.reload();
})
