const functions = require('firebase-functions');

exports.crawlpost = functions.https.onRequest(async (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600, s-maxage=604800');
  if (req.get('user-agent') === "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)") {
    
    res.status(200).send(`
      <!doctype html>
        <head>
          <meta property="og:title" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/zasagto.png?alt=media&token=c5f2c233-23e5-4a61-8fb4-02bf5188b990" />
          <meta property="og:url" content="${req.protocol + "://" + req.headers['x-forwarded-host'] + req.originalUrl}" />
          <title>Засагт Хаан</title>
        </head>
        <body>
        </body>
      </html>
    `);
  } else {
    const url = req.protocol + "://" + req.headers['x-forwarded-host'] + req.originalUrl.replace("/", "/crawlpost");
    const response = await fetch(url);
    const content = await response.text();

    res.status(200).send(content);
  }
});