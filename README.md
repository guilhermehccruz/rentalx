# Requisitos do sistema

## Cadastro de carro

**RF** => Requisitos Funcionais

Deve ser possível cadastrar um novo carro

Deve ser possível listar todas as categorias

**RN** => Regra de negócio

Não deve ser possível cadastrar um carro com uma placa já cadastrada

Não deve ser possível alterar a placa de um carro já cadastrado

O carro deve ser cadastrado com um disponibilidade por padrão

Apenas usuários admnistradores podem cadastrar um carro

## Listagem de Carros

**RF** => Requisitos Funcionais

Deve ser possível listar os carros disponíveis

Deve ser possível listar todos os carros disponíveis pelo nome da categoria

Deve ser possível listar todos os carros disponíveis pelo nome da marca

Deve ser possível listar todos os carros disponíveis pelo nome da carro

**RN** => Regra de negócio

O usuário não precisa estar logado no sistema

## Cadastro de especificações do carro

**RF** => Requisitos Funcionais

Deve ser possível cadastrar uma especificação para um carro

Deve ser possível listar todas as especificações

Deve ser possível listar todos os carros

**RN** => Regra de negócio

O carro precisa estar cadastrado

Não deve ser possível cadastrar uma especificação já existente para o mesmo carro

O usuário não precisa estar logado no sistema

## Cadastro de imagens do carro

**RF** => Requisitos Funcionais

Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF** => Requisitos não funcionais

Utilizar o multer para upload de arquivos

**RN** => Regra de negócio

O usuário deve poder cadastrar mais de uma imagem para o mesmo carro

O usuário responsável pelo cadastro deve ser um usuário administrador

## Aluguel de carro

**RF** => Requisitos Funcionais

Deve ser possível cadastrar um aluguel

**RN** => Regra de negócio

O aluguel deve ter duração mínima de uma hora

Não deve ser possível cadastrar um logo aluguel caso já exista um aberto para o mesmo usuário

Não deve ser possível cadastrar um logo aluguel caso já exista um aberto para o mesmo carro
