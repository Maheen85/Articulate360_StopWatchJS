function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5y2m0TeYRhl":
        Script1();
        break;
      case "6A79c5A1mC2":
        Script2();
        break;
      case "67boCBPysdC":
        Script3();
        break;
  }
}

function Script1()
{
  
//* CODE # 01


//Getting the player
const player = GetPlayer();


let dummy = player.GetVar("timerDisplay_pv");

player.SetVar("secondsOnTimer_pv",dummy );
player.SetVar("stopTimer_pv","True");




clearInterval(timerId);


}

function Script2()
{
  	//* CODE # 01


//Getting the player
const player = GetPlayer();


clearInterval(timerId);

//Where to start
let secondsOnTimer = 0;
player.SetVar("secondsOnTimer_pv",0);


//Set up the timer
function startTimer(){
	secondsOnTimer += 1;
	player.SetVar("timerDisplay_pv",secondsOnTimer);
	if (secondsOnTimer == 25){
		clearInterval(timerId);
		player.SetVar("timerComplete_pv","True");
	}
}

//Start the timer
timerId = setInterval(startTimer, 1000);

// END CODE # 01 */

}

function Script3()
{
  
//Getting the player
const player = GetPlayer();

//Where to start
let secondsOnTimer = player.GetVar("secondsOnTimer_pv");


//Set up the timer
function startTimer(){
	secondsOnTimer += 1;
	player.SetVar("timerDisplay_pv",secondsOnTimer);
	

	if (secondsOnTimer == 45){
		clearInterval(timerId);
		player.SetVar("timerComplete_pv","True");
	}
}

//Start the timer

	timerId = setInterval(startTimer, 1000);
	player.SetVar("startTimer_pv","True");
	

	
// END CODE # 01 */









}

