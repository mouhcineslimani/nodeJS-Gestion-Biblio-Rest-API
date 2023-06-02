const Server = require("./server");

const server = new Server(process.env.PORT || 9000);
server.start();
