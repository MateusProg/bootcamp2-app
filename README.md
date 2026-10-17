# Projeto Bootcamp 2 - Buscador de pokémon

## Autor
Mateus Gomes de Oliveira — Matrícula 22609084

## Descrição
Busca um pokémon a partir do nome do mesmo, útil para saber informações simples e rápidas sobre um pokémon específico. Agora com capacidade de persistência de times em um banco de dados.

## API utilizada
- PokéAPI: [link da documentação](https://pokeapi.co/docs/v2)
- [Endpoint(s) consumido(s)](https://pokeapi.co/api/v2/)

## Funcionalidades
- Mostra os sprites do pokémon (Normal e Shiny)
- Mostra a sua altura
- Mostra o seu peso
- Mostra o(s) seu(s) tipo(s)
- Criar um time de 6 pokémons e persistir o mesmo em um banco de dados PostgreSQL hosteado no SUPABASE
- Realizar as ações de listar os times persistidos e excluir os desejados a partir do ID dos mesmos.

## Persistência
Banco de dados PostgreSQL hosteado no SUPABASE, possui ID, data de quando foi persistido, 6 JSONs de pokémons que compoem um time e um nome para caso queiram nomear o mesmo.

## Como executar localmente
1. Clone: `git clone https://github.com/MateusProg/bootcamp2-app`
2. Abra o arquivo `index.html` no navegador

## Comando Docker RUN
docker run -d -p 8080:80 mateusprog/bootcamp2-app

## Links
- **Aplicação no ar (GitHub Pages):** https://mateusprog.github.io/bootcamp2-app/
- **Repositório:** https://github.com/MateusProg/bootcamp2-app
- **Repositório DockerHUB:** https://hub.docker.com/r/mateusprog/bootcamp2-app

## NOTAS 

Foram alocadas políticas abertas para ANON, o que pode ser um problema, mas funciona no contexto de aprendizado.

dockerignore -> Deixa a build mais rápida por se livrar do lixo que não necessário para rodar a aplicação.

## "se eu tivesse 100 containers, como gerenciaria?"
Gerenciar 100 containers manualmente seria inviável, mas o **Kubernetes** simplifica esse processo automatizando a orquestração em um **cluster** unificado. Ele agrupa os containers em **pods** — as unidades básicas de execução que compartilham recursos de rede e memória — e gerencia sua escala por meio de **réplicas**. Assim, a plataforma monitora o estado do ambiente continuamente e ajusta o número de instâncias ativas de forma automática, garantindo alta disponibilidade, balanceamento de carga e recuperação de falhas sem a necessidade de intervenção manual.
