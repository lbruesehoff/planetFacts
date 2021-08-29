function overview() {
  document.getElementById("earth").innerHTML = 
  "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
  document.getElementById("planetImg").src="./assets/planet-earth.svg";
  document.getElementById("geo").style.visibility="hidden";

}

function internal() {
  // document.getElementById("mercurySum").style.visibility = "hidden";
  document.getElementById("earth").innerHTML = "  Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
  document.getElementById("planetImg").src="./assets/planet-earth-internal.svg"
  document.getElementById("geo").style.visibility="hidden";
 


}

function surface(){
  document.getElementById("earth").innerHTML = "  The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
  document.getElementById("geo").style.display="block";
  document.getElementById("geo").style.visibility="visible";
  document.getElementById("planetImg").src="./assets/planet-earth.svg";
}

