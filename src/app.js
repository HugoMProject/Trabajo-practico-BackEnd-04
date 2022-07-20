const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/view'))

// Resgistrar como publica/static la carpeta public
app.use(express.static('public'));

app.use('/desktop',express.static('public'));

app.get('/', (req, res)=>{
    res.render('index',{
        usuario: {
            name:'hugo',
            email:'hugo@gmail.com'
        }
    });
})



app.get("/",(req, res)=>{
    res.send('Bienvenido a la pagina Principal')
});


app.listen(3000, () => console.log('Proyecto en el puerto 3000'))