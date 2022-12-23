class Game {
  constructor() {}

  //firebase values
  getstate() {
    var gamestateroot = database.ref("gamestate");
    gamestateroot.on("value", function (data) {
      Mygamestate = data.val();
    });
  }
  updatestate(stateNumber) {
    database.ref("/").update({
      gamestate: stateNumber,
    });
  }



  //gamestage=0
  start() {
    form = new Form();
    form.display();

    player=new Player()
    player.getcount()

    car1= createSprite(width/2-50,height-100)
    car1.addImage("car1",car1Image)
    car1.scale=0.03
    car2= createSprite(width/2-50,height-140)
    car2.addImage("car2",car2Image)
    car2.scale=0.03
  }
  //gamestage=1
  handleElements(){
    form.hide()
  }

  play() {
    this.handleElements()
    drawSprites()
  
  }

  //gamestage=2
  end() {}
}
