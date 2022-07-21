
const express = require('express');
const route = express();


route.get('/products', (req, res)=>{
    const products = [
        {
            id:"1",
            title:"Reloj color oro",
            price:"6000",
            is_offer:false
        },
        {
            id:"2",
            title:"Reloj Negro",
            price:"2000",
            is_offer:true
        },
        {
            id:"3",
            title:"Reloj rojo",
            price:"5000",
            is_offer:false
        },
    ]
        res.json(products);
})


module.exports = route;