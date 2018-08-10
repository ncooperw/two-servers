// Require/import the HTTP module
//var http = require("http");

//const means constant
const http = require('http');

// Define a port to listen for incoming requests
//var PORT = 8080;
const PORT = 7000;
const PORT2 = 7500;
// Create a generic function to handle requests and responses
function kindRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You is smart. You is kind. You is important! " + request.url);
}

function meanRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You is dumb. You is mean. You is insignificant! " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(kindRequest);
var server2 = http.createServer(meanRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});
