/**
 * Created by luwenxu on 2015/3/19.
 */

(function(){
    var canvas=document.getElementById('canvas1'),ctx=canvas.getContext('2d');
    var lastX,lastY;
    var randomColors=[ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423','#5669A7','#D667E7','#B4D7B2'],
        randomRadius=[2,4,6,8,10,12,14,16,18,20],
        offsets=[-30,-24,18,-12,-6,6,12,18,24,30];
    function revise(event){
        var coordinate=[], x,y;
        var corObj=canvas.getBoundingClientRect();
        x=event.clientX-corObj.left;
        y=event.clientY-corObj.top;
        coordinate.push(x);
        coordinate.push(y);
        return coordinate;
    }
    function randomInt(){
        return Math.floor(Math.random()*10);
    }
    function draw(){
        var coordinate=revise(event);
        for(var i= 0;i<5;i++){
            if(i==0){
                ctx.beginPath();
                ctx.fillStyle=randomColors[randomInt()];
                ctx.arc(coordinate[0],coordinate[1],15,0,2*Math.PI);
                ctx.fill();
                ctx.closePath();
            }
            ctx.beginPath();
            var radius=randomRadius[randomInt()],
            x=coordinate[0]+offsets[randomInt()],y=coordinate[1]+offsets[randomInt()];
            ctx.arc(x,y,radius,0,2*Math.PI);
            ctx.fillStyle=randomColors[randomInt()];
            ctx.fill();
            ctx.closePath();
        }

    }
    $('#canvas1').on('mousemove',function(event){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        draw();
    })
})();

/*
console.log(canvas.getBoundingClientRect());
var topC='#FDF7EB',bottom='#04937F',shadowTop='#EAE3D9',shadowBottom='#016E59';
*/
/*first*//*

ctx.fillStyle=topC;
ctx.fillRect(0,0,150,300);
ctx.fillStyle=bottom;
ctx.fillRect(0,300,150,40);
*/
/*first-shadow*//*

ctx.fillStyle=shadowTop;
ctx.fillRect(150,0,50,230);
ctx.beginPath();
ctx.moveTo(150,300);
ctx.lineTo(150,230);
ctx.lineTo(200,230);
ctx.lineTo(150,300);
ctx.fill();
ctx.beginPath();
ctx.moveTo(150,300);
ctx.lineTo(200,300);
ctx.lineTo(200,230);
ctx.lineTo(150,300);
ctx.fillStyle=shadowBottom;
ctx.fill();
ctx.fillRect(150,300,50,40);
*/
/*second*//*

ctx.fillStyle=topC;
ctx.fillRect(200,0,150,230);
ctx.fillStyle=bottom;
ctx.fillRect(200,230,150,110);
*/
/*second-shadow*//*

ctx.beginPath();
ctx.moveTo(350,0);
ctx.lineTo(400,0);
ctx.lineTo(400,170);
ctx.lineTo(350,230);
ctx.lineTo(350,230);
ctx.fillStyle=shadowTop;
ctx.fill();
ctx.beginPath();
ctx.moveTo(350,230);
ctx.lineTo(400,170);
ctx.lineTo(400,340);
ctx.lineTo(350,340);
ctx.lineTo(350,230);
ctx.fillStyle=shadowBottom;
ctx.fill();
*/
/*third*//*

ctx.fillStyle=topC;
ctx.fillRect(400,0,200,170);
ctx.fillStyle=bottom;
ctx.fillRect(400,170,200,170);*/
