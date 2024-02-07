// Require the http module
const http = require('http');

// Define the URL you want to fetch
const url = 'http://www.example.edu/';

// Make a GET request to the URL
http.get(url, (res) => {
    console.log(`STATUS: ${res.statusCode}`);


const fs = require('fs');
const path = './index.html';

let data = '';

res.on('data', (chunk) => {
    data += chunk;
});

res.on('end', () => {
    fs.writeFile(path, data, (err) => {
        if (err) throw err;
        console.log(`Downloaded and saved ${data.length} bytes to ${path}`);
    });
});
});


/*
const net = require('net');
const conn = net.createConnection({ 
  host: 'example.edu',
  port: 80
});
conn.setEncoding('UTF8');
conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});
conn.on('data', (data) => {
  console.log(data);
  conn.end();
});
*/