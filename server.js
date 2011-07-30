var sys = require('sys'),
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path  = require("path"),
    fourzerofour, orderpage;
    
fs.readFile('./mobilehome.html', function (err, data) {
    if (err) {
        throw err;
    }
    mobilehome = data;
}); 
    
fs.readFile('./home.html', function (err, data) {
    if (err) {
        throw err;
    }
    home = data;
});
         
/*fs.readFile('./location1.html', function (err, data) {
    if (err) {
        throw err;
    }
    location1 = data;
});*/


fs.readFile('./404.html', function (err, data) {
    if (err) {
        throw err;
    }
    fourzerofour = data;
});
  
  // mac setting
  http.createServer(onRequest).listen(1234, '127.0.0.1');
  // cloud9ide setting	
  //http.createServer(onRequest).listen(process.env.C9_PORT, '0.0.0.0');
  
  console.log("Server has started.");

  function onRequest(request, response) {
  	
  		var deviceIphone = "iphone";
  		var deviceIpad = "ipad";
  		var deviceAndroid = "android";
  		var deviceXoom = "xoom";
  		var deviceHtcFlyer = "htc_flyer";
  		var deviceKindle = "kindle"; 
  		var deviceBB = "blackberry";
  		var devicePalm = "palm";
		var deviceWebOS = "webos"; //For Palm's line of WebOS devices
		var deviceWebOShp = "hpwos"; //For HP's line of WebOS devices
		var deviceTablet = "tablet";

  		var useragent = request.headers['user-agent'].toLowerCase();

        var pathname = url.parse(request.url).pathname;
            if (pathname.match(/^\/$/)) 
            {            	  		
	  		 	if ((useragent.search(deviceIphone) > -1) || (useragent.search(deviceAndroid) > -1)) 
	  		 	{ 
	  		 		returnMobileHome(response);
	  		 	}
	  		 	else 
	  		 	{ 
	  		 		returnHome(response); 
	  		 	}
            }
            /*else if(request.url.match(/\d{1,2}$/)) 
            {
                address = request.url;
                address = address.match(/\d{1,2}$/);
				returnLocationPage(address, response);                
            }*/
            
            else 
            {
		        response.writeHead(404, {"Content-Type": "text/html"});
		        response.write(fourzerofour);
		        response.end();
       		 }
  }
  
  function returnMobileHome(response){      
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(mobilehome);
        response.end();
  }
  
  function returnHome(response){      
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(home);
        response.end();
  }
  
  function returnLocationPage(LocationID, response){
       if (address == '1') 
       {
       		response.writeHead(200, {"Content-Type": "text/html"});
	 		response.write(location1);
			response.end();
       }
       else 
       {
       		response.writeHead(200, {"Content-Type": "text/html"});
	 		response.write(location2);
			response.end();                   	
       }          

  }
 


