function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ii7pHQTmgS":
        Script1();
        break;
      case "5v9Oq4O65ht":
        Script2();
        break;
      case "6r627Mc0c5B":
        Script3();
        break;
      case "5hs3K7e4Z12":
        Script4();
        break;
      case "6ivzCqcqrM1":
        Script5();
        break;
      case "5unpEGlLRT6":
        Script6();
        break;
      case "5okSWh4GkiP":
        Script7();
        break;
      case "6eC9IO0xHQB":
        Script8();
        break;
      case "5hE80Z3Oq9x":
        Script9();
        break;
      case "6brX8xtDg4k":
        Script10();
        break;
  }
}

function Script1()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script2()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script3()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script4()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script5()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script6()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script7()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script8()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script9()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

function Script10()
{
  //Anything with "//" in front of it is a comment and will not effect the code below.
//You may want to expand this window to see everything better!

//Get the flash player so JavaScript and Storyline can chat with each other.
var player = GetPlayer();

//Storyline and JavaScript variables are different. Here we set the JavaScript variables to be the same as the Storyline variables.
//You can change the GetVar("YOUR_VARIABLE"); to your Storyline variable if you need to.
var CurrentPos = player.GetVar("CurrentPos");
var EndPos = player.GetVar("EndPos");

//This is the time it takes to move from one place to another.
var TimeLength = .8

//This creates an object with associated variables associated. No need to change this.
var obj = {ThePos:CurrentPos};

// Uncomment this for a linear motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Power0.easeNone, onUpdate:drawCanvas});
// Uncomment this for an ease out motion
TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeOut, onUpdate:drawCanvas});
// Uncomment this for an ease in/out motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Expo.easeInOut, onUpdate:drawCanvas});
// Uncomment this for a bounce motion
//TweenLite.to(obj, TimeLength, {ThePos:EndPos, ease:Bounce.easeOut, onUpdate:drawCanvas});

//The onUpdate call above causes this to run every time the TweenLite function recalculates.
function drawCanvas() {
    player.SetVar("CurrentPos",Math.ceil(obj.ThePos));
console.log('work');
}
}

