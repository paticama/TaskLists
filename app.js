const express = require('express');
const path = require('path');
const port = 5050;
const app = express();

//routes
app.get('/', (req,res) => res.sendFile(path.resolve('public/index.html')));
app.use(express.static(path.join(__dirname, '/public')));
//views, ejs
//app.use('/upload',Upfile);
//app.use('/download',DownFile);
//app.use('/dir',DirRouter);

app.listen(port, () => console.log('Server is runing in the port', port));