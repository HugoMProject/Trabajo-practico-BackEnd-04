
const express = require('express');
const route = express();


route.get('/', (req, res)=>{
    res.render('index',{
        
        usuario:[ {
            name:'hugo',
            email:'hugo@gmail.com'
        },
        {
            name: 'lucas',
            email:'lucas@gmail.com'
        }
    
    ]});
})