var names = ['Aaron Aves','Alex Duda','Colton Jett','Elliott Birch','Jamin Ewell','Jane Vaden','Jared Cairns','Jason Sierra','Joshua Peng','Nick Partridge','Rachel Noble','Richard Mathera','Robert Ballard','Sammy Icaza','Samy Kebaish','Silvia Fernandez','Vandeth Nop','Vy Trinh'];

var copyNames = [];

var namesCalled = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function coldCall(array){
  if(copyNames.length === 0){
    console.log("Make a new copy of the original array.")
    copyNames = array.slice();
    namesCalled = [];
  }
  var random = getRandomInt(0, copyNames.length);
  var selectedName;
  for (var i = 0; i < copyNames.length; i++){
    selectedName = copyNames[random];
  }
  namesCalled.push(selectedName);
  copyNames.splice(random, 1);
  console.log("What's the length of copyNames: ", copyNames.length);
  console.log("What's the length of namesCalled: ", namesCalled.length);
  return selectedName;
}

coldCall(names);
