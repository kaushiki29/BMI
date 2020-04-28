function calculatebmi(height, weight)
{
    h=document.getElementById("height").value;
    w=document.getElementById("weight").value;

    var bmi1= w/(h*h);
    bmi1= Math.round(bmi1);

    document.getElementById("bmi").innerHTML = "<br> BMI is: " + bmi1;
  if (bmi1 < 18) {
    document.getElementById("result").innerHTML = "<p> You are underweight </p>";
    document.getElementById("result").style.backgroundColor="#fffe7a";
  } 
  
  else if (bmi1 > 18 && bmi1 < 25) {
    document.getElementById("result").innerHTML ="<p> You are healthy </p>";
    document.getElementById("result").style.backgroundColor="#7cfc00";
  }
  
  else if (bmi1 > 25 && bmi1 < 30) {
    document.getElementById("result").innerHTML ="<p> You are overweight </p>";
    document.getElementById("result").style.backgroundColor="#ffa500";
  }
  
  else if (bmi1 > 30) {
    document.getElementById("result").innerHTML ="<p> You are obese </p>";
    document.getElementById("result").style.backgroundColor="#ff3800";
  };
};