var sys = require('sys'),
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path  = require("path"),
    fourzerofour, orderpage; 
    
fs.readFile('./index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});
         
fs.readFile('./order1.html', function (err, data) {
    if (err) {
        throw err;
    }
    order1 = data;
});

fs.readFile('./order2.html', function (err, data) {
    if (err) {
        throw err;
    }
    order2 = data;
});


fs.readFile('./404.html', function (err, data) {
    if (err) {
        throw err;
    }
    fourzerofour = data;
});
  
  // mac setting
  //http.createServer(onRequest).listen(1234, '127.0.0.1');
  // cloud9ide setting	
  http.createServer(onRequest).listen(process.env.C9_PORT, '0.0.0.0');
  
  console.log("Server has started.");

  function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        if((pathname.match(/\d{1,2}$/)) || (pathname.match(/^\/$/)) ){
            if (pathname.match(/^\/$/)) {
            returnHome(response);
            }
            else 
            {
                address = request.url;
                address = address.match(/\d{1,2}$/);

                 returnOrderPage(address, response);                
            }
            
        } else {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write(fourzerofour);
        response.end();
        }
  }
  
  function returnHome(response){      
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(index);
        response.end();
  }
  
  function returnOrderPage(orderID, response){
       if (address == '1') 
       {
       		response.writeHead(200, {"Content-Type": "text/html"});
	 		response.write(order1);
			response.end();
       }
       else 
       {
       		response.writeHead(200, {"Content-Type": "text/html"});
	 		response.write(order2);
			response.end();                   	
       }          

  }
 


