const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// class player{
//    constructor(x,y,radius,color)
//    {
//        this.x = x;
//        this.y = y;
//        this.radius = radius;
//        this.color = color;

//    }

   
//   draw() {
//       context.beginPath();
//       context.arc(this.x, this.y, this.radius,0,2*Math.PI);
//       context.fillstaly = this.color;
//       context.fill();
      
//   }

// }

 class bullet{
    
 

    constructor(){
        this.name = 'bullet';
    }}

    canvas.onclick = function(event){
        
        const x = event.clientX - context.canvas.offsetLeft;
        const y = event.clientY - context.canvas.offsetTop;


        context.fillRect(x-15, y-15, 30, 30); }

    


//var char_player = new player(100,100,20,'blue');
char_player.draw();
//클릭한곳에 네모 생기도록 = 과제