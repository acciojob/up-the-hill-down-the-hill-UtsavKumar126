function aveSpd(upTime, upSpd, downSpd) {
  // your code here
	let distanceUp=(upSpd*(upTime/60));
	let downTime=distanceUp/downSpd;
	return((2*distanceUp)/((upTime/60)+downTime));
}

// Do not change the code below
const upTime = prompt("Enter upTime: ");
const downTime = prompt("Enter downTime: ");
const downSpd = prompt("Enter downSpd: ");

alert(aveSpd(upTime, downTime, downSpd))
