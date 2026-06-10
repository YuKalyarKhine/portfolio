import https from 'https';
import fs from 'fs';

https.get('https://frenify.com/work/envato/frenify/html/rewall/css/style.css', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data.substring(0, 4000));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
