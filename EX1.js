 //A) O código não contém uma resposta para erros e nem procura pelo usuário criado no método POST.
//B)Deve ser inserido uma resposta para caso a id seja inexistente e uma forma de buscar pela ID
const res = require("express/lib/response");

app.post('/users/create', (req, res) => {
         const newUser = { id: users.length + 1, ...req.body };
         users.push(newUser);
     res.status(201).json(newUser);
});
      
     app.get('/users/getAll', (req, res) => {
         const id = parseInt(req.params.id)
         const item = items.find(item => item.id === id)
         res.status(200).json(users);
     });
        else {
    res.status(404).json({message: "Item inexistente"});
       }

