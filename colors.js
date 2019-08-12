var Links = {
  setColor:function(color){
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i<links.length){
      links[i].style.color=color;
      i=i+1;
    }
  }
}
var Body = {
  setColor:function(color){
      document.querySelector('body').style.color = color;
  },
  setBackColor:function(color){
      document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
    if(self.value === 'night'){
        Body.setBackColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
      } else {
        Body.setBackColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
      }
    }
