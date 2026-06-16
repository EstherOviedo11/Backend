const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from detalleventa',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {iddetventa}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from detalleventa WHERE iddetventa=1', [iddetventa], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into detalleventa SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {iddetventa}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update detalleventa SET ? WHERE iddetventa=?', [nuevo_req, iddetventa], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {iddetventa}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from detalleventa WHERE iddetventa=?', [iddetventa], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
