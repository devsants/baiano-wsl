const nodeCmd = require('node-cmd');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))

app.get('/desligar', (req, res) => {
    res.send('Hello World!');
    nodeCmd.runSync(`shutdown -s -t ${req.query.timer}`, (err, data, stderr) => console.log(data));
});

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname });  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});