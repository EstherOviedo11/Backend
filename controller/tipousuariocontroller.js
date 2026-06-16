const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from tipousuario',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {idtpusuario}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from tipousuario WHERE idtpusuario=1   ', [idtpusuario], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into tipousuario SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {idtpusuario}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update tipousuario SET ? WHERE idtpusuario=?', [nuevo_req, idtpusuario], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtpusuario}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from tipousuario WHERE idtpusuario=?', [idtpusuario], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
