function overview() {
  document.getElementById("saturn").innerHTML = 
  "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.";
  document.getElementById("planetImg").src="./assets/planet-saturn.svg";
  document.getElementById("geo").style.visibility="hidden";

}

function internal() {
  // document.getElementById("mercurySum").style.visibility = "hidden";
  document.getElementById("saturn").innerHTML = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
  document.getElementById("planetImg").src="./assets/planet-saturn-internal.svg"
  document.getElementById("geo").style.visibility="hidden";
 


}

function surface(){
  document.getElementById("saturn").innerHTML = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.";
  document.getElementById("geo").style.display="block";
  document.getElementById("geo").style.visibility="visible";
  document.getElementById("planetImg").src="./assets/planet-saturn.svg";
}

