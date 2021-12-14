# Projeto 1º Hackathon Trybe - Grupo 2

Olá bem vindos e bem vindas ao nosso repositório de front-end do grupo 2 do primeiro evento hackathon realizado por pessoas estudantes aqui da [Trybe](https://www.betrybe.com/):rocket:.

## Sumário

- [Introdução](#introducao)
- [Nossa ideia](#ideia)
- [Características do Site](#caracteristicas)
  - [Página Ínicial](#home-page)
  - [Página de Informaçoẽs do Lugar](#partner-page)
  - [Página de Cadastro de Usuários](#create-account-page)
- [Técnologias Utilizadas](#tecnologies)

# <a name="introducao"></a> Introdução

Tivemos a oportunidade de escolher um desses dois temas nesse evento.

1. Aprendizado de programação para pessoas sem experiência com
desenvolvimento.

2. Turismo alternativo e como promover as cidades pós Pandemia.

Escolhemos a **segunda** opção com base nessas informações:

Durante esse período de pandemia, uma das áreas mais afetadas, foi de
fato o Turismo Global. Segundo dados da Organização Mundial do
Turismo (OMT), os prejuízos devem somar US 1,1 trilhão em receitas
internacionais. No Brasil, o setor de turismo, ao final de 2019, gerou
cerca de 7,4 milhões de empregos.
Segundo uma estimativa da Confederação Nacional do Comércio de
Bens, Serviços e Turismo, durante a pandemia, no período de março de
2020 a abril de 2021, o Brasil chegou a ter uma perda aproximada de
R$ 341,1 bilhões.
O setor de turismo se encontra 44% abaixo do patamar de fevereiro de
2020 . Pensando nas cidades que foram impactadas por esse cenário:
Como aumentar a visibilidade do turismo local através da tecnologia, no
mundo pós-pandemia?  Lembrar que o turismo não é apenas os pontos
turísticos mais conhecidos e famosos, mas, como fomentar novas opções
e gerar oportunidades na economia dessas cidades?

# <a name="ideia"></a> Nossa Ídeia

Com base nesses questionamentos desenvolvemos o **Safe Route** um aplicativo que permite ao usuário qualificar e indicar lugares seguros para visitar e conhecer.

Mas como assim seguro?

Sabemos que nossa atual situaçao, exige que tenhamos segurança de onde ir e quando ir, foi assim que pensamos e desenvolvemos esse site, o úsuario pode ter referências de locais para visitar e somente se preocupar com a parte boa, sair de casa com segurança.

O usuário podera procurar e ranquear esses lugares com base em sua localização, qualificando critérios muito importânte para nossa atual situação, sendo elas:

- Regras de distânciamento social
- Alcool em gel disponíveis
- Limpeza do local
- Uso de máscaras

Os lugares melhores ranqueados terão destaque em nossa página e futuramente podendo desenvolver parcerias com outras empresas, disponibilizando vantagens para os visitantes e avaliadores.

# <a name="caracteristicas"></a> Características do Site

Nosso site foi desenvolvido de ponta a ponta, ou seja, tudo o que consumimos no site, foi desenvolvido, manipulado e controlado por nós no back-end.

[Link Repositório Backend](https://github.com/samuel-constantino/hackathon-trybe/tree/dev)

Pensamos em uma palheta de cores bem "clean" para manter o site legível e de fácil entendimento.

## <a name="home-page"></a> Página inicial

A página ínicial temos um header com a logo da [Trybe](https://www.betrybe.com/), futuramente iremos implementar a logo oficial da **Safe Route**, seguida do nome de nossa marca e um botão para **login**.

No corpo da página temos uma imagem em homenagem ao evento que estamos participando com uma barra de pesquisas que filtra todos os cards de locais por nome, facilitando a busca.

Logo a baixo temos três filtros que auxiliam a busca da barra de pesquisa, ordenando nossos resultados por:

- Cidades
- Avaliações
- Categorias

Em seguida, temos a renderização dos cards dos lugares filtrados.

Por fim, temos um rodapé com todas as informações de contato dos integrantes do grupo e tecnologias utilizadas.

## <a name="partner-page"></a> Página de Informações do Lugar

Essa página é acessada ao clicar em um dos cards das empresas cadastradas que são mostradas na página inicial.

Nela temos informações sobre o local, postagens de reclamações, indicações e todo o sitema de notas e ranqueamento do local.

## <a name="login-page"></a> Página de Login

Essa página é acessada ao clicar no botão de login que está no cabeçalho da página inicial.

Nela temos um formulário que necessita de email e senha para realizar o login, temos uma validação de usuários implementada no nosso BackEnd, feito com sucesso o login no site, o usuário ira receber por meio de localStorage um token único que lhe garantirá acesso ao site estando logado por um período.

Toda essa manipulação é feita por meio de autenticação com token JsonWebToken.

## <a name="create-account-page"></a> Página de Login

Caso o usuário não tenha cadastro estando na página de login, clicando no botão "Criar Conta", o usuário é redirecionado para essa página, essa página fica responsavel por cadastrar nosso usuário no banco de dados, garantindo o seu acesso para realizar comentários em lugares, avaliações em geral.

## <a name="tecnologies"></a> Técnologias Útilizadas

Front-end:

- React
- React Router Dom
- Context API
- Bootstrap
- React Testing Library
- ESLint
- Deploy com Heroku

Back-end:

- Express
- Nodemon
- Atlas
- JWT
- Cloundinary
- Deploy com Heroku
