const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from detalle_compra',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {iddetcomp}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from detalle_compra WHERE iddetcomp=1', [iddetcomp], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into detalle_compra SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {iddetcomp}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update detalle_compra SET ? WHERE iddetcomp=?', [nuevo_req, iddetcomp], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {iddetcomp}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from detalle_compra WHERE iddetcomp=?', [iddetcomp], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
