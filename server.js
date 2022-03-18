const express = require('express'); //Line 1
const { send } = require('process');
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const trang_chu = "https://vnexpress.net/rss/tin-moi-nhat.rss"
const giai_tri = "https://vnexpress.net/rss/giai-tri.rss"
const the_thao = "https://vnexpress.net/rss/the-thao.rss"
const du_lich = "https://vnexpress.net/rss/du-lich.rss"
const cuoi = "https://vnexpress.net/rss/cuoi.rss"
const khoa_hoc = "https://vnexpress.net/rss/khoa-hoc.rss"

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
app.get('/trang_chu', (req, res) => {
  getData(res, trang_chu)

}); //Line 11

app.get('/giai_tri', (req, res) => {
  getData(res, giai_tri)
})

app.get('/the_thao', (req, res) => {
  getData(res, the_thao)
})

app.get('/du_lich', (req, res) => {
  getData(res, du_lich)
})

app.get('/cuoi', (req, res) => {
  getData(res, cuoi)
})

app.get('/khoa_hoc', (req, res) => {
  getData(res, khoa_hoc)
})

function getData(res, url){
  (async (url) => {
    var buf = await httpGet(url);

    var parseString = require('xml2js').parseString;

    var xmldata = buf.toString('utf-8');

    parseString(xmldata, function (err, result) {
      // Result contains XML data in JSON format
      result.rss.channel[0].item.map(el => {
        //console.log(el.description);
        var buf = String(el.description)
        var start = buf.indexOf('src="') + 5
        if (start == -1) {
          el.push
        } else {
          var end = buf.indexOf('" ></a></br>')
          el.description = buf.substring(start, end)
        }
      })
      res.send(result)
      console.log(url, result)
    });
  })(url);
}
