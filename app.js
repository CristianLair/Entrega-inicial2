const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000 ;
const { link } = require('fs');
const data = require('./utils/data')
const title = 'Facultad de ciencias naturales';
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.post('/registrarse', (req, res)=>{
    data.getRegistro((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('registrarse', {
            title,  
            JSONBody
        });

    })
  
});
        

app.get('', (req, res) => {
    res.render('index', {
        title: 'Facultad de ciencias naturales',
    
    });
}) ;

app.get('/contactanos', (req,res)=>{
    res.render('pages/contactanos',{
        title:'Facultad de ciencias naturales',
    })
});

app.get('/index', (req,res)=>{
    res.render('index' ,{
    title:'Facultad de ciencias naturales',
});
});
app.get('/nutricion', (req,res)=>{
    res.render('pages/nutricion',
    {   title:'Facultad de ciencias naturales',
})
});
app.get('/medicina', (req,res)=>{
    res.render('pages/medicina',{
        title:'Facultad de ciencias naturales',
    })
});
 
app.get('/kinesiologia', (req,res)=>{
    res.render('pages/kinesiologia',{
        title:'Facultad de ciencias naturales'
    })
});

app.get('/registrarse', (req,res)=>{
    res.render('pages/registrarse',{
        title:'Facultad de ciencias naturales'
    })
});

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
})


