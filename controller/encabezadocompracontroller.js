const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from encabezado_compra',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {num_compra}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from encabezado_compra WHERE num_compra=1 ', [num_compra], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into encabezado_compra SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {num_compra}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update encabezado_compra SET ? WHERE num_compra=?', [nuevo_req, num_compra], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {num_compra}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from encabezado_compra WHERE num_compra=?', [num_compra], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
