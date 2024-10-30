//A) O metódo PUT atualiza o item por inteiro enquanto o PATCH atualiza somente a parte que lhe interessa
//B)
app.put('/users/:id', (req, res) => {
         const id = parseInt(req.params.id);
         const user = users.find(user => user.id === id);
         if (user) {
             user.name = req.body.name;
             res.status(200).json(user);
         } else {
             res.status(404).json({ message: 'Usuário não encontrado' });
     }
    }); 
app.patch('/items/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if (!item){
        return res.status(404).json({message: 'Item não existe ou não encontrado'});
    }
    if (req.body.name){
        if(typeof req.body.name === string && req.body.name.length < 10){
            item.name = req.body.name;
        }else{
            return res.status(404).json({message : 'Inválido'}
            )};
        {

        }
    res.status(200).json(item)}
})
