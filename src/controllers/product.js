

const getProducts = (req, res) =>{
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
      
    ];
    res.json(products);
}

app.get('/', (req, res)=>{
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