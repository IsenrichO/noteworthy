var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Noteworthy</title>
      <base href="/">
    </head>
    <body>
      <h1>Hello, World!</h1>
      <div ui-view></div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}!`) });
