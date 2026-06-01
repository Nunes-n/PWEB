let express = require('express');
let app = express(); //executando o express
app.listen(3000, function(){
    console.log("oi, servidor com express foi carregado com sucesso");
});