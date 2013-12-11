function _timer(callback)
{
    var time = 0;     
    var mode = 1;    
    var status = 0;   
    var timer_id;   
    
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        mode = -1;
        generateTime(time);
    }
    
    this.mode = function(tmode)
    {
    	timer.start(1000);
        mode = tmode;
    }
    this.resume = function()
    {
    	timer.start(1000);
        mode = tmode;
    }
    this.getTime = function()
    {
        return time;
    }
    
    this.getMode = function()
    {
        return mode;
    }
    
    this.getStatus
    {
        return status;
    }
    
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        var hour = Math.floor(time / 3600) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
        $('div.timer span.hour').html(hour);
    }
}
 
var timer;
$(document).ready(function(e) 
{
	
	$("#set").click(function(){
		  var hours= ($('#hours').val());
		  if(hours>24){
		    alert("Hoursshouldelesstha24")
		    
		  }
		  if(hours<10){
		    hours=0+""+hours;
		  }
		  var minutes=($('#minutes').val());
		  if(minutes<10){
		    
		    minutes=0+""+minutes;
		  }
		  var seconds=($('#seconds').val());
		   if(seconds<10){
		    
		    seconds=0+""+seconds;
		  }
		   
		  var time = (Number(hours)*3600) + (Number(minutes)*60) + Number(seconds);
		  timer = new _timer
		    (
		        function(time)
		        {
		            if(time == 0)
		            {
		                timer.stop();
		                alert('time out');
		            }
		        }
		    );
		  timer.reset(time);
	});
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('Time out');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});