const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

let circle2;
let floor;

function preload() {


}


let spite;


function create() {
    game.stage.backgroundColor = '#ffffff';


    spite = game.add.sprite(0, 280, 'circle2');
    spite.inputEnabled = true;

    spite.events.onInputDown.add(move, this);

    this.circle2.destroy();








    //fulScreen
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    // game.scale.onFullScreenChange.add(onFullScreenChange, this);
    game.input.onDown.add(gofull, this);

}

function move() {
    if (spite.x === 0) {
        game.add.tween(spite).to( { x: '+800'}, 2500, Phaser.Easing.Linear.None, true);
    }
    else if (spite.x === 400) {
        game.add.tween(spite).to( { x: '-300'}, 2000, Phaser.Easing.Linear.None, true);

    }
}


function update() {

}

function gofull() {
    game.scale.startFullScreen();
}

function render() {
    game.debug.geom(floor, '#000000');



    //fullscreen
    if (game.scale.isFullscreen){
        game.debug.text('ESC to leave fullscreen', 270, 16);
    }
    else {
        game.debug.text('Click / Tap to go fullscreen', 270, 16);
    }

    //create circle
    game.debug.geom(circle2, '#000000');



    // game.debug.geom(circle,'#000000');
    // game.debug.text('Diameter : '+circle2.diameter,50,200);
    // game.debug.text('Circumference : '+circle.circumference(),50,230);

}