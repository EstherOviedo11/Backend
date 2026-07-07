const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from encabezado_venta',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {num_venta}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from encabezado_venta WHERE num_venta=1 ', [num_venta], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into encabezado_venta SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {num_venta}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update encabezado_venta SET ? WHERE num_venta=?', [nuevo_req, num_venta], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {num_venta}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from encabezado_venta WHERE num_venta=?', [num_venta], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
