# Backend-challenge

neste desafio proposto usei nodejs na versão 21 e express pela praticidade e facilidade da linguaguem em si, não utilizei typescript pois o javascript acaba sendo mais fluído e rápido na hora de programar.
Abaixo segue as instruçoes de execução do projeto com alguns recursos.

# Instalando das dependências do projeto
Para instalar as dependências do projeto basta executar o npm(node package manager)

```
npm install ou npm i
```


# Executando o projeto
Para executar o projeto que está em docker precisamos executar apenas 1 comando.

```
docker-compose up --build
```

Esse comando irá construir a imagem docker e executar o container via compose.
Aqui tomei uma decisão de não colocar os testes para rodarem durante o build para não comprometer o build da imagem já que o padrão correto da switch de testes é estarem rodando em um pipeline de CI(Continuos Integration)
Também é possível subir o projeto sem o docker, basta usar o comando

```
npm run start:dev
```

# Executando os testes do projeto
Para executar os testes dentro do container basta seguir a cadeia de comandos abaixo

```
docker exec -it <id-do-container> sh
```

Sendo que o id-do-container é seu respectivo id

Após entrar no container já estará no diretório /app

```
npm run test:build
```
Irá executar os testes dentro do container e exibir o coverage.


Para executar os testes do projeto fora do docker, depois acessar a pasta coverage e conferir os resultados

```
npm run test
```

# Comentários
Tenho apenas um comentário para fazer que é a função isPrime, que tem como intuito checar se o número é primo, eu não consegui encontrar um algoritmo que tivesse um desempenho bom olhando para a tabela BIG O NOTATION. 
Deixei um comentário no código sobre isso.

![Exemplo de imagem](https://miro.medium.com/max/1200/1*j8fUQjaUlmrQEN_udU0_TQ.jpeg)

# Recursos
Dentro da raiz do projeto está a collection do postman.
