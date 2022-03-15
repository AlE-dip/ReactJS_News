const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const url = "https://vnexpress.net/rss/tin-moi-nhat.rss";

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const http = require('http'),
      https = require('https');

    let client = http;

    if (url.toString().indexOf("https") === 0) {
      client = https;
    }

    client.get(url, (resp) => {
      let chunks = [];

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        chunks.push(chunk);
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve(Buffer.concat(chunks));
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10

  (async(url) => {
    var buf = await httpGet(url);

    var parseString = require('xml2js').parseString;

    var xmldata = buf.toString('utf-8');
    
    parseString(xmldata, function (err, result) {
      // Result contains XML data in JSON format
      var arr = result.rss.channel[0].item.map(el => {
        //console.log(el.description);
        var buf = String(el.description)
        var start = buf.indexOf('src="') + 5
        if(start == -1){
          el.push
        } else {
          var end = buf.indexOf('" ></a></br>')
          el.description = buf.substring(start, end)
        }
        console.log(start);
      })

      res.send(result);
    });
    
  })(url);

}); //Line 11