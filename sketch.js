var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple_img;
var leafsGroup;

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  apple_img = loadImage("apple.png");

  leaf1_img = loadImage("leaf.png");
  leaf2_img = loadImage("orangeLeaf.png");
  leaf3_img = loadImage("redImage.png");









}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  //console.log("hello World :"+9)
  // creating the rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  
  leafsGroup=new Group()
  
}


function draw() {
  background(220);


  
  spawnapples();
  spawnleaves();
  
  rabbit.x = World.mouseX;
 
  edges= createEdgeSprites();
  rabbit.collide(edges);

 
 
  drawSprites();
}

function spawnapples(){
  if(frameCount%80===0){
  apple = createSprite(200,1,30,30)
  apple.lifetime=80;
  apple.x = Math.round(random(100,300));
  apple.addImage("apple",apple_img);
  apple.scale= 0.05;
  apple.velocityY=5;
  console.log(apple.depth)
  console.log(rabbit.depth)
  apple.depth = rabbit.depth;
  rabbit.depth=rabbit.depth+1;
 
  
  }
}

function spawnleaves(){
 if(frameCount % 90 === 0){
   leaf = createSprite(200,1,30,30)


   leaf.velocityY=5;

   var rend = Math.round(random(1,3))
   switch(rend){
     case 1: leaf.addImage(leaf1_img)
     leaf.x= Math.round(random(100,300))
     break;
     case 2: leaf.addImage(leaf2_img)
     leaf.x= Math.round(random(100,300))
     break;
     case 3: leaf.addImage(leaf3_img)
     leaf.x= Math.round(random(100,300))
     break;
    }
    leaf.scale =0.05;

    leaf.lifetime=80;

    console.log(leaf.depth)
    leaf.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1; 

    leafsGroup.add(leaf)
  }
}






















