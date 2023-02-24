// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    let leftRightTracker = 265;
    let upDownTracker = 255;

    function setDefaultLocation(){
        rocket.style.left = "265px";
            rocket.style.top = "255px";
            leftRightTracker = 265;
            upDownTracker = 255;
            spaceShuttleHeight.innerHTML = 0;
    }

    function rocketTakeOff(){
        spaceShuttleHeight.innerHTML = (~~spaceShuttleHeight.innerHTML) + 10000;
        const takeoffAnimation = setInterval(function(){
            upDownTracker -= 10;
            rocket.style.top = `${upDownTracker}px`;
            spaceShuttleHeight.innerHTML = (~~spaceShuttleHeight.innerHTML) + 10000;
        }, 200);
        const takeoffAnimationStop = setTimeout(function(){
            clearInterval(takeoffAnimation);
        }, 5000);
    }

    function rocketLand(){
        const landingAnimation = setInterval(function(){
            upDownTracker += 10;
            rocket.style.top = `${upDownTracker}px`;
            spaceShuttleHeight.innerHTML = (~~spaceShuttleHeight.innerHTML) - 10000;
        }, 100);

        const landingAnimationStop = setTimeout(function(){
            setDefaultLocation();
            clearInterval(landingAnimation);
        }, 2500);
    }

    takeoff.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            rocketTakeOff();
        }
    });
    
    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green";
        rocketLand();
    });

    missionAbort.addEventListener("click", function(){
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted! Space shuttle returning home."
            shuttleBackground.style.backgroundColor = "green";
            setDefaultLocation();
        }
    });

    left.addEventListener("click", function() {
        leftRightTracker -= 10;
        rocket.style.left = `${leftRightTracker}px`;
    });

    right.addEventListener("click", function() {
        leftRightTracker += 10;
        rocket.style.left = `${leftRightTracker}px`;
    });

    up.addEventListener("click", function() {
        upDownTracker -= 10;
        rocket.style.top = `${upDownTracker}px`;
        spaceShuttleHeight.innerHTML = (~~spaceShuttleHeight.innerHTML) + 10000;
    });

    down.addEventListener("click", function() {
        upDownTracker += 10;
        rocket.style.top = `${upDownTracker}px`;
        spaceShuttleHeight.innerHTML = (~~spaceShuttleHeight.innerHTML) - 10000;
    });
});