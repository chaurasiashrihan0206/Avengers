var canvas= new fabric.Canvas('myCanvas');

p_x=10;
p_y=10;

b_width=30;
b_height=30;

var p_object="";
var b_object="";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        p_object=Img;
        p_object.scaleToWidth(150);
        p_object.scaleToHeight(140);
        p_object.set({
            top: p_y,
            let: p_x 
        });
        canvas.add(p_object);
    }
    );
}

function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        b_object=Img;
        b_object.scaleToWidth(b_width);
        b_object.scaleToHeight(b_height);
        b_object.set({
            top: p_y,
            let: p_x 
        });
        canvas.add(b_object);
    }
    );
}