const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    transparent: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload () {
    this.load.spritesheet('fullscreen', 'pic/fullscreen.png', {
        frameWidth: 64, frameHeight: 64});

    this.load.image('cyc', 'pic/circular.png');

    this.load.audio('sound_test', 'sound/sound1.mp3');


}

function create ()
{
    this.sound.add('sound_test');
    text1 = this.add.text(10, 10, '', { fill: '#00ff00' });
    text2 = this.add.text(500, 10, '', { fill: '#00ff00' });

    this.input.mouse.disableContextMenu();

    let cir = this.add.image(50, 200, 'cyc');
    // let circle1 = new Phaser.Geom.Circle(10, 200, 10);
    let rect    = new Phaser.Geom.Rectangle(500, 200, 500 ,25);
    let graphics_rect = this.add.graphics({ fillStyle: { color: '#000000' } });
    graphics_rect.fillRectShape(rect);
    // let graphics_circle = this.add.graphics({ fillStyle: { color: '#000000' } });
    // graphics_circle.fillCircleShape(circle1);


    let button_fs = this.add.image(800-16, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();
    button_fs.on('pointerup', function () {
        if (this.scale.isFullscreen){
            button_fs.setFrame(0);
            this.scale.stopFullscreen();
        }
        else {
            button_fs.setFrame(1);
            this.scale.startFullscreen();
        }
    }, this);


    let tween = this.tweens.add({
        targets: cir,
        x: 800,
        ease: 'Power1',
        duration: 10000,
        delay: 2000
    });
    // console.log(tween);

    //  Make them all input enabled
    cir.setInteractive();


    //  The images will dispatch a 'clicked' event when they are clicked on
    cir.on('clicked', clickHandler, this);


    //  If a Game Object is clicked on, this event is fired.
    //  We can use it to emit the 'clicked' event on the game object itself.
    this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);



}

function update ()
{
    let pointer1 = scene.input.activePointer;
    // let pointer = this.input.activePointer;


    text1.setText([
        'x: ' + pointer1.worldX,
        'y: ' + pointer1.worldY,
        'isDown: ' + pointer1.isDown
    ]);


}

function clickHandler (cir)
{
    cir.off('clicked', clickHandler);
    cir.input.enabled = false;
    cir.setVisible(false);
}

function move ()
{
    this.input.off('gameobjectup');
}


