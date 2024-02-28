// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "applicationjson" });
//     resp.write(
//       JSON.stringify({ Name: "azfar imam", email: "azfarimam785@gmail.com" })
//     );
//     resp.end;
//   })
//   .listen(9000);
// console.log("hello");

const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.write(JSON.stringify(data));
    resp.end(); // corrected to resp.end()
  })
  .listen(9000);

console.log("Server running at http://localhost:9000/");
const d = new Date();
for (let index = 0; index < 10; index++) {
  console.log(d.getSeconds());
}
