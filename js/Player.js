class Player {
  constructor() {
   
  }
  getcount() {
    var playercountroot = database.ref("playercount");
  playercountroot.on("value", function (data) {
      myplayercount = data.val();
    });
  }
  updatecount(playerNumber) {
    database.ref("/").update({
      playercount: playerNumber,
    });
  }
  
}
