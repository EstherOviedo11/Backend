const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from formapago',(err,rows) =>{
            if(err){
                res.json(err);
            }
            res.json(rows);
        });

    });

};

controller.edit = (req, res) => {

    const {idfpago}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from formapago WHERE idfpago=1   ', [idfpago], (err,row) => {
            res.json(row[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into formapago SET ?', [data], (err,row) => {
        res.json(row);
       });  
   })
};

controller.update = (req,res) =>{

    const {idfpago}= req.params;
    const nuevo_req = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update formapago SET ? WHERE idfpago=?', [nuevo_req, idfpago], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idfpago}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from formapago WHERE idfpago=?', [idfpago], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
