const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from empresa',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {idempresa}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from empresa WHERE idempresa=1 ', [idempresa], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into empresa SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {idempresa}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update empresa SET ? WHERE idempresa=?', [nuevo_req, idempresa], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idempresa}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from empresa WHERE idempresa=?', [idempresa], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
