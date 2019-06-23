const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});
let platforms;
let circle2;
function preload() {
    game.load.image('background', 'pic/sky.png');
    game.load.image('square', 'pic/platform.png');
    game.load.audio('sound1', 'sound/sound1.mp3');
    game.load.image('circle', 'pic/circular.png');
    // game.load.audio('test1', 'sound/sound1.mp3')
    // game.load.image('diamond', 'pic/diamond.png');




}
// let soundTest;
// let loopcount = 0;
// let sounds;
// let current;
let music;
let spite;
let rectA;

function create() {
    game.stage.backgroundColor = '#ffffff';
    circle = new Phaser.Circle(game.world.centerX, 1,2.5);



    //tween
    // circleStart = game.add.sprite(100, 100, 'circle', 0);
    // circleEnd   = game.add.sprite(400, 100, 'circle', 1);

    spite = game.add.sprite(0, 280, 'circle');
    spite.inputEnabled = true;

    spite.events.onInputDown.add(move, this);



    //audio
    // music = game.add.audio('sound1');
    // music.play();

    // soundTest = game.add.audio('test1');
    // sounds = [soundTest];
    // game.sound.setDecodedCallback(sounds, start, this);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    // game.add.sprite(0, 0, 'background');

    platforms = game.add.group();
    platforms.enableBody = true;

    // let ground = platforms.create(0, game.world.height - 64, 'ground');
    // ground.scale.setTo(2,2);
    // ground.body.immovable = true;

    let ledge = platforms.create(400, 270, 'square');
    ledge.body.immovable = true;



    //fulScreen
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    // game.scale.onFullScreenChange.add(onFullScreenChange, this);
    game.input.onDown.add(gofull, this);

}

function move() {
    if (spite.x === 0) {
        game.add.tween(spite).to( { x: '+500'}, 2000, Phaser.Easing.Linear.None, true);
    }
    else if (spite.x === 400) {
        game.add.tween(spite).to( { x: '-300'}, 2000, Phaser.Easing.Linear.None, true);

    }
}

// function start() {
//     sounds.loopFull(0.6);
//     soundTest.onLoop.add(hasLooped, this);
// }

// function hasLooped(sound) {
//     loopcount++;
//
//     if (loopcount == 1){
//         sound.shift();
//         soundTest.loopFull(0.6);
//     }
//     else if (loopcount == 2) {
//         current = game.rnd.pick(sounds);
//         current.loopFull();
//     }
//     else if (loopcount > 2) {
//         current.stop();
//         current = game.rnd.pick(sounds);
//         current.loopFull();
//     }
// }

function update() {

}

function gofull() {
    game.scale.startFullScreen();
}

function render() {
    //fullscreen
    if (game.scale.isFullscreen){
        game.debug.text('ESC to leave fullscreen', 270, 16);
    }
    else {
        game.debug.text('Click / Tap to go fullscreen', 270, 16);
    }

    //create circle
    game.debug.geom(circle2, '#000000');


    //tween
    // if (spite.x === 100 || spite.x === 400)
    // {
    //     game.debug.text('Click sprite to tween', 32, 32);
    // }

    // game.debug.text('x: ' + circleStart.x, circleStart.x, circleStart.y - 4);
    // game.debug.text('x: ' + circleEnd.x, circleEnd.x, circleEnd.y - 4);


    game.debug.geom(circle,'#000000');
    game.debug.text('Diameter : '+circle.diameter, 50, 200);
    // game.debug.text('Circumference : '+circle.circumference(),50,230);

}