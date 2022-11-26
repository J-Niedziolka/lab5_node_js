const fs = require('fs');
fs.appendFile('mojplik1.txt', 
            "Ten napis dodajemy do pliku!", 
            function(err){
                if (err)
                    throw err;
            console.log("plik zapisany");
            });