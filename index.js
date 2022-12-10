const express=require('express')
const app=express()
const products=[
    {id:1,name:'juice',amount:100,price:0.8},
    {id:2,name:'cookie',amount:40,price:0.4},
    {id:3,name:'butter',amount:35,price:3},
    {id:4,name:'cheese',amount:20,price:4},
    {id:5,name:'chips',amount:41,price:4},
    {id:6,name:'apple',amount:42,price:6},
    {id:7,name:'tea',amount:100,price:3.5},
    {id:8,name:'chocolate',amount:90,price:3},
    {id:9,name:'coffee',amount:7,price:4.5},
    {id:10,name:'orange',amount:4,price:8}
]

app.get('/products/', function(req,res){
    res.send(products)
})

app.get('/products/:id',function(req,res){
    const product=products.find((el)=>el.id==req.params.id)
    if(product){
    res.status(200).json(product)

    }
    else{
        res.status(404).send()

    }
})


app.listen(3000, () =>{
    console.log('Project is launched')
})