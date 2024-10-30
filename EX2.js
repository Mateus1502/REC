 //A)Falta os os códigos de status 200 para sucesso e 404 para not found
 //B)
 app.delete('/users/:id', (req, res) => {
         const id = parseInt(req.params.id);
         const userIndex = users.findIndex(user => user.id === id);
         if (userIndex !== -1) {
             users.splice(userIndex, 1);
             res.json(200)({ message: 'Usuário excluído' });
        } else {
             res.json(404)({ message: 'Usuário não encontrado' });
         }
   });
