const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from tipoproducto',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {idtpprod}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from tipoproducto WHERE idtpprod=1   ', [idtpprod], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into tipoproducto SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {idtpprod}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update tipoproducto SET ? WHERE idtpprod=?', [nuevo_req, idtpprod], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtpprod}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from tipoproducto WHERE idtpprod=?', [idtpprod], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
