var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i=0;
        while(i < alist.length){
            alist[i].style.color = color;
            i += 1;
        }
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';

        var alist = document.querySelectorAll('a');
        var i=0;
        while(i < alist.length){
            alist[i].style.color = 'blue';
            i += 1;
    }
}
}
