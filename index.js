
const express = require("express")
const uuid = require('uuid')
const port = 3000

const app = express()
app.use(express.json())

const pedidos = []

//Rota para consultar todos os pedidos criados 
app.get('/users', (request, response) => {

    return response.json(pedidos)
})
// Rota para criar novos pedidos
app.post('/users', (request, response) => {

    const { order, clienteName, price, } = request.body
    const status = "Em preparação"

    const pedido = { id: uuid.v4(), order, clienteName, price, status }

    pedidos.push(pedido)
    return response.status(201).json(pedido)
})

// Rota atualizar pedido pelo id
app.put('/users/:id', (request, response) => {
    const { id } = request.params
    const { order, clienteName, price, status } = request.body


    const updatedpedido = { id, order, clienteName, price, status: "Em preparação" }

    const index = pedidos.findIndex(pedido => pedido.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    pedidos[index] = updatedpedido

    return response.json(updatedpedido)
})
// Deletando rota pedido pelo id
app.delete("/users/:id", (request, response) => {
    const { id } = request.params

    const index = pedidos.findIndex(pedido => pedido.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    pedidos.splice(index,1)

    return response.status(204).json()

    })
// Rota consulta pedido pelo id
    app.get('/users/:id',(request,response) => {

    const { id } = request.params
    const pedido = pedidos.find(pedido => pedido.id === id)

    if (pedido < 0) {
        return response.status(404).json({ message: "Pedido não encontrado" })
    }
    return response.json(pedido)
    })
// Rota atualização do status do pedido
    app.patch('/users/:id',(request,response) =>{

        const { id } = request.params
        const { status } = request.body
        const pedido = pedidos.find(pedido => pedido.id === id)

        if (pedido < 0) {
            return response.status(404).json({ message: "Pedido não encontrado" })
        }
        pedido.status="Pronto"
        return response.json(pedido)
    })

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})