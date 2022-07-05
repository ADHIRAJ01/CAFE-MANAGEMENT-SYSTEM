// 1 - for creating server
// after createing dotenv file 

require('dotenv').config(); 



 const http = require('http');
 const app = require('./index');

 const server = http.createServer(app);
 server.listen(process.env.PORT);
 console.log(`server started at port = ${process.env.PORT}`);