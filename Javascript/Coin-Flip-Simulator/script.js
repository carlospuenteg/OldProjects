var zero = one = two = three = four = five = six = seven = eight = nine = ten = eleven = twelve = thirteen = fourteen = fifteen = sixteen = seventeen = eighteen = nineteen = twenty = twentyOne = twentyTwo = twentyThree = twentyFour = twentyFive = twentySix = twentySeven = twentyEight = twentyNine = thirty = thirtyOne = thirtyTwo = thirtyThree = thirtyFour = thirtyFive = thirtySix = thirtySeven = thirtyEight = thirtyNine = fourty = fourtyOne = fourtyTwo = fourtyThree = fourtyFour = fourtyFive = fourtySix = fourtySeven = fourtyEight = fourtyNine = fifty = others = 0;
var myVariables;
var flips;
var info = "";
var oddestVar = 0;
var ivar;

function coinFlip() {

  flips = document.getElementById("flips").value;

  if (flips > 600000000) {
    alert("The maximum are 500,000,000 flips");
  } else {
    for (ivar = 0; ivar < flips; ivar++) {
      for (a = 0, z = Math.floor(Math.random()*2); z == 0; z = Math.floor(Math.random()*2), a++) {
      }

      switch (a) {
        case 0:
          zero++;
          break;
        case 1:
          one++;
          break;
        case 2:
          two++;
          break;
        case 3:
          three++;
          break;
        case 4:
          four++;
          break;
        case 5:
          five++;
          break;
        case 6:
          six++;
          break;
        case 7:
          seven++;
          break;
        case 8:
          eight++;
          break;
        case 9:
          nine++;
          break;
        case 10:
          ten++;
          break;
        case 11:
          eleven++;
          break;
        case 12:
          twelve++;
          break;
        case 13:
          thirteen++;
          break;
        case 14:
          fourteen++;
          break;
        case 15:
          fifteen++;
          break;
        case 16:
          sixteen++;
          break;
        case 17:
          seventeen++;
          break;
        case 18:
          eighteen++;
          break;
        case 19:
          nineteen++;
          break;
        case 20:
          twenty++;
          break;
        case 21:
          twentyOne++;
          break;
        case 22:
          twentyTwo++;
          break;
        case 23:
          twentyThree++;
          break;
        case 24:
          twentyFour++;
          break;
        case 25:
          twentyFive++;
          break;
        case 26:
          twentySix++;
          break;
        case 27:
          twentySeven++;
          break;
        case 28:
          twentyEight++;
          break;
        case 29:
        twentyEight++;
        break;
        case 29:
        twentyNine++;
        break;
        case 30:
        thirty++;
        break;
        case 31:
        thirtyOne++;
        break;
        case 32:
        thirtyTwo++;
        break;
        case 33:
        thirtyThree++;
        break;
        case 34:
        thirtyFour++;
        break;
        case 35:
        thirtyFive++;
        break;
        case 36:
        thirtyEight++;
        break;
        case 37:
        thirtyNine++;
        break;
        case 38:
        thirtyNine++;
        break;
        case 39:
        thirtyNine++;
        break;
        case 40:
        fourty++;
        break;
        case 41:
        fourtyOne++;
        break;
        case 42:
        fourtyTwo++;
        break;
        case 43:
        fourtyThree++;
        break;
        case 44:
        fourtyFour++;
        break;
        case 45:
        fourtyFive++;
        break;
        case 46:
        fourtySix++;
        break;
        case 47:
        fourtySeven++;
        break;
        case 48:
        fourtyEight++;
        break;
        case 49:
        fourtyNine++;
        break;
        case 50:
        fifty++;
        break;
        default:
          others++;
      }
    }

    myVariables = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven, twentyEight, twentyNine, thirty, thirtyOne, thirtyTwo, thirtyThree, thirtyFour, thirtyFive, thirtySix, thirtySeven, thirtyEight, thirtyNine, fourty, fourtyOne, fourtyTwo, fourtyThree, fourtyFour, fourtyFive, fourtySix, fourtySeven, fourtyEight, fourtyNine, fifty, others];

    for (i = 0; i < myVariables.length; i++) {
      if (myVariables[i] > 0) {
        oddestVar = i;
      }
    }

    for (i = 0; i < myVariables.length; i++) {
      if (myVariables[i] > 0 || oddestVar > i) {
        if (i == 51) {
          info += i-1 + "+ times in a row -> &nbsp&nbsp" + myVariables[i] + " times" + "<br>";
        }
        info += "<span id='timesInARowNumber'>" + (i+1) + " times in a row -> &nbsp&nbsp" + "<span id='timesInARowCount'>" + "Simulated (" + myVariables[i] + " times" + ")"  + " , Theoretical average in " + flips + " times (" + Math.floor(flips * (2 ** -(i+1))) + ") , " + "Theoretical odds (" + (2 ** -(i+1)) * 100 + "%)" + "</span>" + "<br>";
      }
    }

    document.getElementById("simulationInfo").innerHTML = info;
  }
}