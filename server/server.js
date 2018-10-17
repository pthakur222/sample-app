const express = require('express');
        app = express();
        path = require('path');
        data = require('../data').transactionData;
        cors = require('cors');


app.use(cors());
app.use('/',express.static(path.join(__dirname, 'src')));



app.get('/transactions',function(req,res){
    var transactions = data;
   
    res.status(200).json({transactions:transactions});

})


app.listen(3000,function(){
    console.log('Server listening on port 3000');
})