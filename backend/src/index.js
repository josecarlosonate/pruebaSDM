const express = require('express');
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

//Middlewares
app.use(express.json());

//Rutas
app.use(require('./routes/users'));
app.use(require('./routes/books'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});