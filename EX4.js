//A)HATEOAS é o nível máximo dentro do modelo RMM serve para ajudar na localização dentro da API 
//B)

function generateUserLinks(user) {
    return {
        self: { href: /user/${user.id} }
    

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.status(200).json({ user, links: generateUserLinks(user) });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});
