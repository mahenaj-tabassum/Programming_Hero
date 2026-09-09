"use strict";
// Union Type
const situation = "";
function getTrafficAction(light) {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Slow Down";
  } else {
    return "Go";
  }
}
console.log(getTrafficAction(situation));
