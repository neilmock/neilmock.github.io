var captionLength = 0;

$(document).ready(function()
{
  setInterval ( "cursorAnimation()", 600 );
});

function type() 
{
  var caption = "neil mock";

  $('h1 span.title').html(caption.substr(0, captionLength++));
  if(captionLength < caption.length+1)
  {
    setTimeout("type()", 100);
  }
  else {
    captionLength = 0;
    $("span.cursor").hide();
  }	
}

function cursorAnimation() 
{
  $("span.cursor").animate(
  {
    opacity: 0
  }, "medium", "swing").animate(
  {
    opacity: 1
  }, "medium", "swing");
}
