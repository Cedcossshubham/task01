var num = 0;

display();

function increase(){
  if(num>=0){
    num ++;
  }

  display();
    
}


function decrease(){
    if(num>0){
        num = num-1;
      }
      
  display();  
}

function display(){
    document.getElementById("display").innerHTML=num;
}