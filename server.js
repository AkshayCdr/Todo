import { createServer } from "http";
import { readFile } from "fs";
import path from "path";

createServer(function (req, res) {
  const urlMappings = {
    "/": { filePath: "public/index.html", contentType: "text/html" },
    "/script.js": {
      filePath: "public/script.js",
      contentType: "text/javascript",
    },
    "/style.css": { filePath: "public/style.css", contentType: "text/css" },
    "/repopulateTask.js": {
      filePath: "public/repopulateTask.js",
      contentType: "text/javascript",
    },
    "/savingData.js": {
      filePath: "public/savingData.js",
      contentType: "text/javascript",
    },
    "/EventListeners.js": {
      filePath: "public/EventListeners.js",
      contentType: "text/javascript",
    },
    "/modal.js": {
      filePath: "public/modal.js",
      contentType: "text/javascript",
    },
  };
  if (urlMappings[req.url]) {
    const { filePath, contentType } = urlMappings[req.url];
    readFile(filePath, function (error, data) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.write(data);
        res.end();
      }
    });
  }
}).listen(3000, console.log("Listening"));
