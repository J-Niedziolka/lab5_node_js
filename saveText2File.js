const fs = require('fs');
fs.appendFile('file1.txt', 'Text to file!!', function(err){
    if(err)
        throw err;
    console.log('file saved');
});