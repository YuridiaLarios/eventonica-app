const fetch = require('node-fetch');

let promise = fetch('http://localhost:3000/events');
promise.then((res) => {
  return res.json();
}).then((json) => {
  console.log(json);
});


var data = {data: {name: "I love you"}};
var body = JSON.stringify(data);
var sentiments = await fetch(SEN_URL, { method: "POST", body: body });


const req = https.request(options, (res) => {console.log(`statusCode: ${res.statusCode}`)
res.on('data', (d) => { process.stdout.write(d)})})