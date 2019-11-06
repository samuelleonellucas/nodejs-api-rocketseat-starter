Construindo uma api com nodejs do zero.

O que usamos para a construção da api:
Nodejs: version 10.0.0
Npm: 6.12.1
Express: Nos ajuda a lidar com rotas para instalar, npm install express
Docker: version 18.09.7, baixando a imagem do Mongodb{
    sudo docker pull mongo // baixa a imagem do mongo
    sudo docker run --name mongodb -p 27017:27017 -d mongo // cria um container com o mongo
    sudo docker ps// lista os containers rodando
    sudo docker ps a// lista todos os containers
    docker start (nome do container)// para inicar o container

},
Mongoose: é um orm que encapsula 
          a lógica das operações
          do banco de dados através do codigo,

