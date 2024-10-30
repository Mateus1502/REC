//A) Não temos nenhuma validação para o item, o que não nos garante que estamos com o item correto
//B
if (req.body.name){
    if(typeof req.body.name === string && req.body.name.length < 10){
        item.name = req.body.name;
    }else{
        return res.status(404).json({message : 'Inválido'}
        )};
    {

    }
res.status(200).json(item)}
if (req.body.name){
    if(typeof req.body.name === string && req.body.name.length >= 3){
        item.name = req.body.name;
    }
res.status(200).json(item)}
