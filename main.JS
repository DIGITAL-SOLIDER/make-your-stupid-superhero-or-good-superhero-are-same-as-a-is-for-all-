var canvas=new fabric.Canvas ("superhero_canvas");
player_x= 10;
player_y= 10;
block_height= 30;
block_width= 30;
player_object= "";
block_object= "";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(player_object);
    });
}

function image_update(getimage)
{
    fabric.Image.fromURL(getimage, function(Img) {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function  my_keydown(e)
{
keyPressed= e.keyCode;

console.log(keyPressed);
if(e.shiftKey==true && keyPressed=="80")
{
    console.log("shift and p are pressed toghter");
    block_height=block_height+10;
    block_width=block_width+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}

if(e.shiftKey==true && keyPressed=="77")
{
    console.log("shift and m are pressed toghter");
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(keyPressed == "38")
{
    up();
    console.log("up");
}
if(keyPressed == "40")
{
    down();
    console.log("down");
}
if(keyPressed == "39")
{
    right();
    console.log("right");
}
if(keyPressed == "37")
{
    left();
    console.log("left");
}
if(keyPressed == "76")
{
    image_update("captain_america_left_hand.png");
    console.log("l");
}
if(keyPressed == "82")
{
    image_update("thor_right_hand.png");
    console.log("r");
}
if(keyPressed == "72")
{
    image_update("hulk_legs.png");
    console.log("h");
}
if(keyPressed == "66")
{
    image_update("spiderman_body.png");
    console.log("b");
}
if(keyPressed == "70")
{
    image_update("ironman_face.png");
    console.log("f");
}
if(keyPressed == "65")
{
    image_update("Final_output.png");
    console.log("a");
}
}
function  up()
{
    if(player_y>=0)
    {
       player_y=player_y-block_height;
       console.log("block_height="+block_height);
       console.log("player_y="+player_y+"player_x="+player_x);
       canvas.remove(player_object);
       player_update();
    }
}
function  down()
{
    if(player_y<=500)
    {
       player_y=player_y+block_height;
       console.log("block_height="+block_height);
       console.log("player_y="+player_y+"player_x="+player_x);
       canvas.remove(player_object);
       player_update();
    }
}
function  left()
{
    if(player_x>=0)
    {
       player_x=player_x-block_width;
       console.log("block_width="+block_width);
       console.log("player_y="+player_y+"player_x="+player_x);
       canvas.remove(player_object);
       player_update();
    }
}
function  right()
{
    if(player_x<=900)
    {
       player_x=player_x+block_width;
       console.log("block_width="+block_width);
       console.log("player_y="+player_y+"player_x="+player_x);
       canvas.remove(player_object);
       player_update();
    }
}
