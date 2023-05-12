const net = require("net");
const {HOST, PORT} = require("./constants");

const conn = net.createConnection({
  host: HOST, // change to IP address of computer, more on that below
  port: PORT,
});

// client.js
conn.on("data", (data) => {
  console.log("Server says: ", data);
});

conn.on("connect", () => {
  conn.write("Hello from client!");
});

conn.setEncoding("utf8"); // interpret data as text