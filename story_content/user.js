function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gn1bhgmqUL":
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
	if (sec == 12){
		clearInterval(timerId);
	}
}

//Start the timer
timerId = setInterval(startTimer, 1000);
}

