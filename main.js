window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}

var user = prompt ("You are a Knight patrolling the perimeter of your camp, it was your turn to stand watch. A wild boar suddenly charges from the bushes! Think fast, do you - FIGHT the boar? ALERT the camp? or turn and RUN?").toLowerCase();

switch (user) {
    case"fight":
        console.log("You chose to " + user);
        var weapon = prompt ("Do you use your SWORD or SPEAR?").toLowerCase();
            if (weapon === "sword") {
                console.log("You chose " + weapon);
                console.log("The sword is not long enough, you miss one swing before the boar gores you with its tusks. R.I.P");
            }
            else if (weapon === "spear") {
                console.log("You chose " + weapon);
                console.log("The spears length enables you to stop the boar dead in its tracks before it can even get close! YOU WIN!");
            }
            else {
                console.log("You chose " + weapon);
                console.log("What? Too late the boar has gored you to death with its tusks. R.I.P");
            }
        break;
    case"alert":
        console.log("You chose to " + user);
        var alertMethod = prompt ("How do you alert the camp? SHOUT as loud as you can? or DISTRACT the boar and run into camp?").toLowerCase();
            if (alertMethod === "shout") {
                console.log("You chose " + alertMethod);
                console.log("Your shouting startles the boar! It charges you down before you can take a second breath. R.I.P");
            }
            else if (alertMethod === "distract") {
                console.log("You chose " + alertMethod);
                console.log("It works! The boar is distracted while you get to the camp and wake your companions. YOU WIN!");
            }
            else {
                console.log("You chose " + alertMethod);
                console.log("What? Too late the boar has gored you to death with its tusks. R.I.P");
            }
        break;
    case"run":
        console.log("You chose to " + user);
        var direction = prompt ("Do you run to the LEFT or RIGHT?").toLowerCase();
            if (direction === "left") {
                console.log("You chose " + direction);
                console.log("Good choice! The boar was looking to the right, you escaped! YOU WIN!");
            }
            else if (direction === "right") {
                console.log("You chose " + direction);
                console.log("Uh-oh, the boar somehow anticipated your move and countered you perfectly, blocking your escape...");
                var secondChoice = prompt ("Do you FIGHT, ALERT the camp, or RUN?").toLowerCase();
                switch (secondChoice) {
                    case("fight"):
                        console.log("You chose to " + secondChoice);
                        var secondWeapon = prompt ("Do you use your SWORD or SPEAR?").toLowerCase();
                            if (secondWeapon === "sword") {
                                console.log("You chose " + secondWeapon);
                                console.log("The sword is not long enough, you miss one swing before the boar gores you with its tusks. R.I.P");
                            }
                            else if (secondWeapon === "spear") {
                                console.log("You chose " + secondWeapon);
                                console.log("The spears length enables you to stop the boar dead in its tracks before it can even get close! YOU WIN!");
                                console.log("Congratulations - Secret Achievment Unlocked! After a close call with the boar you were victorious!");
                            }
                            else {
                                console.log("You chose " + secondWeapon);
                                console.log("What? Too late the boar has gored you to death with its tusks. R.I.P");
                            }
                        break;
                    case("alert"):
                        console.log("You chose to " + secondChoice);
                        var secondAlertMethod = prompt ("How do you alert the camp? SHOUT as loud as you can? or DISTRACT the boar and run into camp?").toLowerCase();
                            if (secondAlertMethod === "shout") {
                                console.log("You chose " + secondAlertMethod);
                                console.log("Your shouting startles the boar! It charges you down before you can take a second breath. R.I.P");
                            }
                            else if (secondAlertMethod === "distract") {
                                console.log("You chose " + secondAlertMethod);
                                console.log("It works! The boar is distracted while you get to the camp and wake your companions. YOU WIN!");
                                console.log("Congratulations - Secret Achievment Unlocked! After a close call with the boar you were victorious!");
                            }
                            else {
                                console.log("You chose " + secondAlertMethod);
                                console.log("What? Too late the boar has gored you to death with its tusks. R.I.P");
                            }
                        break;
                    case("run"):
                        console.log("You chose to " + secondChoice);
                        var secondDirection = prompt ("Do you run to the LEFT or RIGHT?").toLowerCase();
                            if (secondDirection === "left" || secondDirection === "right") {
                                console.log("You chose " + secondDirection);
                                console.log("The boar is tired, you got away! YOU WIN!");
                            }
                            else {
                                console.log("You chose " + secondDirection);
                                console.log("What? Too late the boar has gored you to death with its tusks. R.I.P");
                            }
                        if (direction === "right" && secondDirection === "left" || secondDirection === "right") {
                            console.log("Congratulations - Secret Achievment Unlocked! After a close call with the boar you were victorious!");
                        }
                        break;
                    
                }
            }
            else {
                console.log("You chose " + direction);
                console.log("What? Too late the boar has gored you to death with its tusks. R.I.P");
            }
        break;
    default:
        console.log("You chose to " + user);
        console.log("What? Too late the boar has gored you to death with its tusks. R.I.P");
}