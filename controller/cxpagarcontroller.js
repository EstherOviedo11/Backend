const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from cxpagar',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {idcxp}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from cxpagar WHERE idcxp=1   ', [idcxp], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into cxpagar SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {idcxp}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update cxpagar SET ? WHERE idcxp=?', [nuevo_req, idcxp], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idcxp}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from cxpagar WHERE idcxp=?', [idcxp], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
