var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6f093775-83f0-4c97-a5d3-13ed7a919c6e","60584e68-a103-4262-9398-bd6853a8419f","7fbe7095-be21-4bcb-a0db-4bfa78ad0768","76d36e4b-e515-4780-96b4-9f5dc86b613a","c93571cd-2b10-4cb6-9f65-d0674c098188","3f820154-0a8c-4edd-a5a6-fdd4980b7888","baabf7ab-ed9a-415a-9583-628901b97042","b7ed8164-143e-4af3-be71-4fae75bd04b9","bc4c8e73-fbfe-49f8-aa13-2c5d1d44fc61","38e116a8-8b40-4e05-aa69-8ff84fb34b10","7c2394cd-f827-4faa-92bc-5dbb743d7279","a8649da8-267e-47a4-9baf-4ef462851542","b97f306c-1e88-41d3-bf7b-9d36b9f4f471"],"propsByKey":{"6f093775-83f0-4c97-a5d3-13ed7a919c6e":{"name":"blackrider-rider-sheet","sourceUrl":null,"frameSize":{"x":112,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"flja31I3MqhQTs7MCBa8.5uL_eaXML0I","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":50},"rootRelativePath":"assets/6f093775-83f0-4c97-a5d3-13ed7a919c6e.png"},"60584e68-a103-4262-9398-bd6853a8419f":{"name":"blackrider-horse-left","sourceUrl":null,"frameSize":{"x":62,"y":48},"frameCount":4,"looping":true,"frameDelay":5,"version":"POk.EMtwJSj0hr7Rjq6pbS5jyuHdkQjK","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":124,"y":96},"rootRelativePath":"assets/60584e68-a103-4262-9398-bd6853a8419f.png"},"7fbe7095-be21-4bcb-a0db-4bfa78ad0768":{"name":"blackrider-horse-right","sourceUrl":null,"frameSize":{"x":62,"y":48},"frameCount":4,"looping":true,"frameDelay":5,"version":"Bxs0sgUy3b2viWrLOuhXkpE2rSKEBaz_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":124,"y":96},"rootRelativePath":"assets/7fbe7095-be21-4bcb-a0db-4bfa78ad0768.png"},"76d36e4b-e515-4780-96b4-9f5dc86b613a":{"name":"blackrider-rider","sourceUrl":null,"frameSize":{"x":27,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"jF69XM6behDNNS_3qAJAl1hy_FTzjuNX","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":50},"rootRelativePath":"assets/76d36e4b-e515-4780-96b4-9f5dc86b613a.png"},"c93571cd-2b10-4cb6-9f65-d0674c098188":{"name":"protagonists-sheet","sourceUrl":null,"frameSize":{"x":318,"y":159},"frameCount":1,"looping":true,"frameDelay":12,"version":"gef0ZxnJJBqJfS26Auh2.oQcqBPEX6aA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":159},"rootRelativePath":"assets/c93571cd-2b10-4cb6-9f65-d0674c098188.png"},"3f820154-0a8c-4edd-a5a6-fdd4980b7888":{"name":"protagonists-sprite","sourceUrl":null,"frameSize":{"x":96,"y":132},"frameCount":1,"looping":true,"frameDelay":12,"version":"sh45kVgdzAqg_pF_6hXEYik4NVYLAGtj","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":132},"rootRelativePath":"assets/3f820154-0a8c-4edd-a5a6-fdd4980b7888.png"},"baabf7ab-ed9a-415a-9583-628901b97042":{"name":"blackrider-big","sourceUrl":null,"frameSize":{"x":88,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"QWlcXfCcPST_ksbfJia0ikMmHJaZ6fup","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":100},"rootRelativePath":"assets/baabf7ab-ed9a-415a-9583-628901b97042.png"},"b7ed8164-143e-4af3-be71-4fae75bd04b9":{"name":"explosion2-removebg-preview-min.png_1","sourceUrl":"assets/v3/animations/imog2q-13iXAMoe9k1ADipqG_blzuO-9hjezSBkoOeE/b7ed8164-143e-4af3-be71-4fae75bd04b9.png","frameSize":{"x":707,"y":353},"frameCount":1,"looping":true,"frameDelay":4,"version":"bNEKoGSWqJRGBhYWQe8kamteWVonHXNi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":707,"y":353},"rootRelativePath":"assets/v3/animations/imog2q-13iXAMoe9k1ADipqG_blzuO-9hjezSBkoOeE/b7ed8164-143e-4af3-be71-4fae75bd04b9.png"},"bc4c8e73-fbfe-49f8-aa13-2c5d1d44fc61":{"name":"explosion","sourceUrl":null,"frameSize":{"x":132,"y":134},"frameCount":26,"looping":true,"frameDelay":4,"version":"5yLeEhnZnwWXjCYqUwco23o.st13rgZu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":660,"y":804},"rootRelativePath":"assets/bc4c8e73-fbfe-49f8-aa13-2c5d1d44fc61.png"},"38e116a8-8b40-4e05-aa69-8ff84fb34b10":{"name":"startmenu","sourceUrl":"assets/v3/animations/imog2q-13iXAMoe9k1ADipqG_blzuO-9hjezSBkoOeE/38e116a8-8b40-4e05-aa69-8ff84fb34b10.png","frameSize":{"x":240,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":".QxtuMzAqAjEfaL7OHIyO5cJ3Okqzr9S","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":125},"rootRelativePath":"assets/v3/animations/imog2q-13iXAMoe9k1ADipqG_blzuO-9hjezSBkoOeE/38e116a8-8b40-4e05-aa69-8ff84fb34b10.png"},"7c2394cd-f827-4faa-92bc-5dbb743d7279":{"name":"introDescription","sourceUrl":null,"frameSize":{"x":960,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"DXTGlYGjyFlW.UpHNE9YhMGGYf0T1wdm","loadedFromSource":true,"saved":true,"sourceSize":{"x":960,"y":400},"rootRelativePath":"assets/7c2394cd-f827-4faa-92bc-5dbb743d7279.png"},"a8649da8-267e-47a4-9baf-4ef462851542":{"name":"outroDescription","sourceUrl":null,"frameSize":{"x":658,"y":185},"frameCount":1,"looping":true,"frameDelay":12,"version":"egb9G5zq.7SCOj9SOwzU9ZJzukwLZ3Iv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":658,"y":185},"rootRelativePath":"assets/a8649da8-267e-47a4-9baf-4ef462851542.png"},"b97f306c-1e88-41d3-bf7b-9d36b9f4f471":{"name":"black","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"_WFr1b1rKiKa.J_iv0RKMLyOhj8WEVZ3","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/b97f306c-1e88-41d3-bf7b-9d36b9f4f471.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Group of the horses and knights, not the Dangerous Boi
var enemyGroup = createGroup();
// Groups for the start menu and end menu sprites
var startMenuGroup = createGroup();
var explosion;
// Random number, defines how many enemies there will be
var randI = randomNumber(0, 5);



var protagonists = createSprite(200, 200);
protagonists.setAnimation("protagonists-sprite");
protagonists.scale = 0.4;
// If there are not enough horses, then a Dangerous Boi will spawn
if(randI <= 3) {
  var dangerousBoi = createSprite(randomNumber(40, 360), randomNumber(40, 360));
  dangerousBoi.setAnimation("blackrider-big");
  dangerousBoi.setVelocity(0, 0);
  dangerousBoi.scale = 0.8;
}
showMobileControls(true, true, true, true);
// counter keeps track of the time passed in-game, counter2 resets when the Dangerous Boi goes through a cycle of velocity changes
var counter = 0;
var counter2 = 0;
var counterAtEnd;
var endCounterCounted = false;

// These 2 keep track of if a velocity change has occurred, so it doesn't repeat and cause janky movement
var ch1Comp = false;
var ch2Comp = false;

var gameHasStarted = false;
var ridersHaveSpawned = false;
var gameHasEnded = false;

createEdgeSprites();

function draw() { 
  
  if(mouseDown("left")) { 
    gameHasStarted = true;
  }
  if(!gameHasStarted) {
    startMenuSpawn();
    drawSprites(startMenuGroup);
    return;
  }
  if(!ridersHaveSpawned) {
    spawnDarkRiders();
    startMenuGroup.setScaleEach(0);
    ridersHaveSpawned = true;
  }
  // Keep track of time at 30 FPS
  counter++;
  counter2++;
  background("white");
  // Velocity changes
  if(randI <= 3)
  if(counter2 >= randomNumber(4*30, 8*30) && ch1Comp == false){ 
  dangerousBoi.setVelocity(randomNumber(-7, 7), randomNumber(-7, 7)); 
  ch1Comp = true;
  } else if(counter2 >= randomNumber(9*30, 13*30) && ch2Comp == false) {
  dangerousBoi.setVelocity(randI != 0 ? randomNumber(-9, 9) : randomNumber(-12, 12), randI != 0 ?randomNumber(-9, 9) : randomNumber(-12, 12));
  ch2Comp = true;
  counter2 = 0;
  ch1Comp = false;
  ch2Comp = false;
  }
  // Everything bounces off of the edges
  enemyGroup.bounceOff(topEdge);
  enemyGroup.bounceOff(leftEdge);
  enemyGroup.bounceOff(rightEdge);
  enemyGroup.bounceOff(bottomEdge);
  
  if( randI <= 3) {
  dangerousBoi.bounceOff(topEdge);
  dangerousBoi.bounceOff(leftEdge);
  dangerousBoi.bounceOff(rightEdge);
  dangerousBoi.bounceOff(bottomEdge);
  dangerousBoi.displace(enemyGroup);
  }
  
  protagonists.bounceOff(topEdge);
  protagonists.bounceOff(leftEdge);
  protagonists.bounceOff(rightEdge);
  protagonists.bounceOff(bottomEdge);
  // Check if a collision has occurred and the immunity timer has ended, if so, kill the player
  if(counter >= 90 && randI <= 3 && protagonists.isTouching(dangerousBoi)) {
    explosion = createSprite(protagonists.x, protagonists.y);
    explosion.setAnimation("explosion");
    protagonists.remove();
    gameHasEnded = true;
 
  }
  
  if(counter >= 90 && protagonists.isTouching(enemyGroup) ) {
    explosion = createSprite(protagonists.x, protagonists.y);
    explosion.setAnimation("explosion");
    protagonists.remove();
    gameHasEnded = true;
  }
  if(gameHasEnded && !endCounterCounted) {
    enemyGroup.setScaleEach(0);
    if(randI <= 3) dangerousBoi.remove();
    counterAtEnd = counter + 2*30;
    endCounterCounted = true;
    console.log("end: " + counterAtEnd);
  }
  if(gameHasEnded) {
    if(counter >= counterAtEnd)endMenuSpawn();
  }
  moveControls();
    drawSprites();
}

function spawnDarkRiders() {
  // Spawns in horses and/or knights at random and sets their standard velocity
  for(var i = 0; i < randI; i++) {
    var rand = randomNumber(0, 3);
    if(rand < 1) { 
      var enemyRider = createSprite(randomNumber(20, 360), randomNumber(20, 360));
        enemyRider.setAnimation("blackrider-rider");
        enemyGroup.add(enemyRider);
        enemyRider.setVelocity(randomNumber(-4, 4),randomNumber(-4, 4));
      
      
    } else {
      var rand2 = randomNumber(0, 1);
      var enemyHorse = createSprite(randomNumber(20, 360), randomNumber(20, 360));
        enemyHorse.setAnimation(rand2 == 0 ? "blackrider-horse-right" : "blackrider-horse-left");
        enemyGroup.add(enemyHorse);
        enemyHorse.velocityY = randomNumber(-4, 4);
        rand2 == 0 ? enemyHorse.velocityX = randomNumber(1, 4) : enemyHorse.velocityX = randomNumber(-4, -1);
    }
  } 
}
function startMenuSpawn() {  
  var startMenu = createSprite(200, 200);
  var menuText = createSprite(200, 200);
  if(!gameHasStarted){
    startMenu.setAnimation("startmenu");
    menuText.setAnimation("introDescription");
    startMenu.scale = 2;
    menuText.scale = 0.45;
    startMenuGroup.add(menuText);
    startMenuGroup.add(startMenu);
  } else {
    startMenu.remove();
    menuText.remove();
    
  }

}
function endMenuSpawn() {
  explosion.remove();
  var outroScreen = createSprite(200, 200);
  var black = createSprite(200, 200);
  black.setAnimation("black");
  black.scale = 3;
  black.depth = 1;
  outroScreen.depth = 2;
  outroScreen.setAnimation("outroDescription");
  outroScreen.scale = 0.5;
}
function moveControls() {
  
  if(keyDown("up")) {
    protagonists.velocityY += -0.5;
  } else
  if(keyDown("down")) {
    protagonists.velocityY += 0.5;
  }
  if(keyDown("left")) {
    protagonists.velocityX += -0.5;
  } else 
  if(keyDown("right")) {
    protagonists.velocityX += 0.5;
  }
  if(keyDown("space")) {
    protagonists.setVelocity(0, 0);
  }
}








// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
