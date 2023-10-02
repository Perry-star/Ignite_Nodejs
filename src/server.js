import http from 'node:http'

// - Criar usuários
// - Listagem usuários
// - Edição usuários
// - Remoção de usuários

// - HTTP
// - Método HTTP
// - URL

// GET, POST , PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

//Stateful - Stateless

//Cabeçalhos (Requisição/resposta) => Metadados

//HTTP Status Code



const users = []

const server = http.createServer(async (request, response) => {
    const {method, url } = request

    const buffers  = []

    for await (const chunk of request) {
        buffers.push(chunk)
    }

    // deu erro
    const body = JSON.parse(Buffer.concat(buffers).toString())

    console.log(body.name)

    if (method == "GET" && url == '/users') {
        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
       
    }

    if (method == 'POST' && url == '/users') {
     
        users.push({
            id:1,
            name: 'John Doe',
            email: 'johndoe@gmail.com',
        })

        return response.writeHead(201).end()
    }
    
    return response.writeHead(404).end()
})

server.listen(3333);