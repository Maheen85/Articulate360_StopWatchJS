function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Vh5CQFscwH":
        Script1();
        break;
  }
}

function Script1()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
	sec += 1;
	player.SetVar("timer",sec);
	if (sec== 100){
		clearInterval(timerId);
	}
}

//Start the timer
timerId = setInterval(startTimer, 1000);
}

