const express=require('express');
const cors=require('cors');
const prog=express();
prog.use(cors());
prog.use(express.json())
const mysql=require('mysql')
const dbs=mysql.createConnection({
    'user':'root',
    'password':'',
    'host':'localhost',
    'database':'list',
    'port':'3307'
})
prog.get('/',(req,res)=>{
  const sq="SELECT * FROM data" ;
  dbs.query(sq,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        res.json(info)
    }
  })
})
prog.post('/data',(req,res)=>{
    const sq1='INSERT INTO data (`id`,`email`,`password`) VALUES (?)'
    const values=[
        req.body.id,
        req.body.email,
        req.body.password
    ]
    dbs.query(sq1,[values],(err,info)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(info)
        }
    })
})
prog.listen(7070,()=>console.log('7070 is running'))