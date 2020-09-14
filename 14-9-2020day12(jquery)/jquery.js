$(document).ready(function () {//when doc is ready then do execution
    console.log('I am in a new file now');
//click
$("p").click(function(){
    $(this).hide();
  });

//double click
$("p").dblclick(function(){
    $(this).hide();
  });

//mouse enter
$("p").mouseenter(function(){
    alert("You entered p1!");
  });
  });

$('p').mouseleave(function(){
    alert("leaving ")
});


// function is executed, when the left, middle or right mouse button is pressed down
$("#p1").mousedown(function(){
    alert("Mouse down over p1!");
  });
  

  //mouse hover
  $("p").hover(function(){
    alert("You entered p1!");
  },
  function(){
    alert("Bye! You now leave p1!");
  });

  //focus
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
//on 
$('p').on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
  // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload