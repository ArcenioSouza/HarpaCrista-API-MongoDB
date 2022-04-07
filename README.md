# :construction: Harpa Cristã API (Em construção)

Essa aplicação é um banco de dados de consulta aos hinos da harpa cristã adotado nas Igrejas Pentecostais. Destinado aos desenvolvedores que desejam construir uma aplicação front-end com essas informações.

# :hammer: Ferramentais utilizadas

<div style="display: inline_block" align="center">
   <img align="center" width='50px' height='50px' src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg'>   
</div>

# :books: Como utilizar a aplicação

## Para contribuir

### **1 - Faça o clone do repositório**

Para fazer o clone desse repositório basta copiar o código abaixo e colar em seu terminal.
```
git clone https://github.com/ArcenioSouza/HarpaCrista-API-MongoDB.git
```

### **2 - Instale as dependencias necessárias**

Para instalar as dependencias entre na pasta HarpaCrista-API-MongoDB usando o comando:
```
cd HarpaCrista-API-MongoDB
```
Após o terminal entrar na pasta execute o comando abaixo para instalar todas as dependencias necessárias para execução da aplicação.
```
npm install
```

### **3 - Criação do Banco de dados**

O banco de dados usado na aplicação é o MongoDB, para utilização dele é necessário criar uma conta no MongoDB Atlas.
Depois da conta criada vc irá criar um banco de dados e uma coleção e atribuir os valores de conexão as variáveis de ambiente.

Para isso vc irá criar um arquivo `.env` na raiz do seu projeto e usar como exemplo o arquivo `.env.example` para atribuir os valores do seu banco de dados as variáveis de ambiente.

Caso a conexão retorne algum problema basta verificar inconsistencias na URL responsável por fazer a conexão com o banco de dados que se encontra em `src/config/dbConnect.js`.

### **3 - Execute a aplicação**

Para executar a aplicação basta executar o comando abaixo em seu terminal.
```
npm start
```

**Observação:** Essa aplicação será executada por padrão na porta 3000 do seu localHost, caso essa porta esteja sendo utilizada por outra aplicação basta mudar o valor da variável `port` do arquivo `src/app.js` para um valor de porta disponível em seu sistema.

## :pushpin: Para fazer requisição da API

Você pode utilizar essa api localmente seguindo as orientações acima e testando as rotas da API em seu localhost ou pode utilizá-la remotamente através dessa url que está hospedada no servidor do Heroku [https://harpa-crista.herokuapp.com](https://harpa-crista.herokuapp.com).

Essa aplicação possui um conjunto de rotas que torna possível a consulta de informações sobre os hinos da harpã cristã de diferentes formas, entre elas: 
- por numero ([https://harpa-crista.herokuapp.com/hinos/number/3](https://harpa-crista.herokuapp.com/hinos/number/3))
- por titulo ([https://harpa-crista.herokuapp.com/hinos/title/plena paz](https://harpa-crista.herokuapp.com/hinos/title/plena))
- por refrão ([https://harpa-crista.herokuapp.com/hinos/chorus/manda-nos chuvas](https://harpa-crista.herokuapp.com/hinos/chorus/manda-nos))
- todos os hinos ([https://harpa-crista.herokuapp.com/hinos](https://harpa-crista.herokuapp.com/hinos))

### :airplane: Rotas da API

<details>
<summary>
<b>GET todos os hinos</b>
</summary>
<br/>
<b>Endpoint:</b> `GET https://harpa-crista.herokuapp.com/hinos`
<br/><br/>
<b>Response:</b>
<br/>

```
[
  {
    "_id": "624b3b6bbe2f5759a27d65e7",
    "number": 1,
    "title": "Chuvas de Graça",
    "chorus": "Chuvas de graça, chuvas pedimos, Senhor; manda-nos chuvas constantes, chuvas do consolador",
    "music": {
      "verse1": "Deus prometeu com certeza chuvas de graça mandar; Ele nos dá fortaleza, e ricas bênçãos sem par.",
      "verse2": "Cristo nos tem concedido o santo Consolador, de plena paz nos enchido, para o reinado de amor.",
      "verse3": "Dá-nos, Senhor, amplamente, Teu grande gozo e poder; fonte de amor permanente, põe dentro de nosso ser.",
      "verse4": "Faze os teus servos piedosos, dá-lhes virtude e valor, dando os teus dons preciosos, do santo Preceptor. J.R."
    },
    "video": "https://www.youtube.com/watch?v=EAcfvmA_xEE"
  },
  {
    "_id": "624c9174bfc2686b079ed6d4",
    "number": 2,
    "title": "Saudosa Lembrança",
    "chorus": "Sim, eu porfiarei por essa terra de além; E lá terminarei as muitas lutas de aquém; lá está meu bom Senhor, ao qual eu desejo ver; Ele é tudo pra mim, e sem Ele não posso viver",
    "music": {
      "verse1": "Oh! Que saudosa lembrança tenho de ti, ó Sião, terra que eu tanto amo, pois és do meu coração. Eu para ti voarei, quando o Senhor meu voltar; pois Ele foi para o céu, e breve vem me buscar",
      "verse2": "Bela, mui bela, é a esperança, dos que vigiam por ti, pois eles recebem força, que só se encontra ali; os que procuram chegar ao teu regaço, ó Sião, livres serão de pecar e de toda a tentação.",
      "verse3": "Diz a Sagrada Escritura, que são formosos os pés daqueles que boas novas levam para os infiéis; e, se tão belo é falar dessas grandezas, aqui, que não será o gozar a graça que existe ali! A.N."
    },
    "video": "https://www.youtube.com/watch?v=EAcfvmA_xEE"
  },
  {
    "_id": "624d93f012b20c58562f61a7",
    "number": 3,
    "title": "Plena Paz",
    "chorus": "Oh! glória ao meu Jesus! Pois é digno de louvor; É meu Rei, meu bom Pastor, e meu Senhor. Como os anjos, que o louvam, eu também o louvarei, entoando aleluias ao meu Rei!",
    "music": {
      "verse1": "Plena paz e santo gozo, tenho em ti, ó meu Jesus! Pois eu cri em Tua morte sobre a cruz; No Senhor só confiando neste mundo viverei, entoando aleluias ao meu Rei!",
      "verse2": "O amor de Jesus Cristo é mui grande para mim,pois Sua graça me encheu de amor sem fim. Meu Jesus foi para a glória, mas um dia eu o verei, entoando aleluias ao meu Rei!",
      "verse3": "Este mundo não deseja tão bondoso Salvador, não sabendo agradecer Seu grande amor. Eu, porém, estou gozando do favor da Sua lei, entoando aleluias ao meu Rei!",
      "verse4": "Quando o povo israelita com Jesus se consertar,dando glória ao Seu nome, sem cessar. Nesse tempo, céu e terra hão de ser a mesma grei, entoando aleluias ao meu Rei! A.N."
    },
    "video": "https://youtu.be/g5bPSHRGcpU",
  }
]
```

</details>

<details>
<summary>
<b>GET hinos por número</b>
</summary>
<br/>
<b>Endpoint:</b> `GET https://harpa-crista.herokuapp.com/hinos/number/:number`
<br/><br/>
<b>Response:</b>
<br/>

```
{
  "_id": "624c9174bfc2686b079ed6d4",
  "number": 2,
  "title": "Saudosa Lembrança",
  "chorus": "Sim, eu porfiarei por essa terra de além; E lá terminarei as muitas lutas de aquém; lá está meu bom Senhor, ao qual eu desejo ver; Ele é tudo pra mim, e sem Ele não posso viver",
  "music": {
    "verso1": "Oh! Que saudosa lembrança tenho de ti, ó Sião, terra que eu tanto amo, pois és do meu coração. Eu para ti voarei, quando o Senhor meu voltar; pois Ele foi para o céu, e breve vem me buscar",
    "verso2": "Bela, mui bela, é a esperança, dos que vigiam por ti, pois eles recebem força, que só se encontra ali; os que procuram chegar ao teu regaço, ó Sião, livres serão de pecar e de toda a tentação.",
    "verso3": "Diz a Sagrada Escritura, que são formosos os pés daqueles que boas novas levam para os infiéis; e, se tão belo é falar dessas grandezas, aqui, que não será o gozar a graça que existe ali! A.N."
  },
  "video": "https://www.youtube.com/watch?v=EAcfvmA_xEE"
}
```

</details>

<details>
<summary>
<b>GET hinos por titulo ou parte do titulo</b>
</summary>
<br/>
<b>Endpoint:</b> `GET https://harpa-crista.herokuapp.com/hinos/title/:title`
<br/><br/>
<b>Response:</b>
<br/>

```
{
  "_id": "624c9174bfc2686b079ed6d4",
  "number": 2,
  "title": "Saudosa Lembrança",
  "chorus": "Sim, eu porfiarei por essa terra de além; E lá terminarei as muitas lutas de aquém; lá está meu bom Senhor, ao qual eu desejo ver; Ele é tudo pra mim, e sem Ele não posso viver",
  "music": {
    "verso1": "Oh! Que saudosa lembrança tenho de ti, ó Sião, terra que eu tanto amo, pois és do meu coração. Eu para ti voarei, quando o Senhor meu voltar; pois Ele foi para o céu, e breve vem me buscar",
    "verso2": "Bela, mui bela, é a esperança, dos que vigiam por ti, pois eles recebem força, que só se encontra ali; os que procuram chegar ao teu regaço, ó Sião, livres serão de pecar e de toda a tentação.",
    "verso3": "Diz a Sagrada Escritura, que são formosos os pés daqueles que boas novas levam para os infiéis; e, se tão belo é falar dessas grandezas, aqui, que não será o gozar a graça que existe ali! A.N."
  },
  "video": "https://www.youtube.com/watch?v=EAcfvmA_xEE"
}
```

</details>

<details>
<summary>
<b>GET hinos por refrão ou trecho do refrão</b>
</summary>
<br/>
<b>Endpoint:</b> `GET https://harpa-crista.herokuapp.com/hinos/chorus/:chorus`
<br/><br/>
<b>Response:</b>
<br/>

```
{
  "_id": "624c9174bfc2686b079ed6d4",
  "number": 2,
  "title": "Saudosa Lembrança",
  "chorus": "Sim, eu porfiarei por essa terra de além; E lá terminarei as muitas lutas de aquém; lá está meu bom Senhor, ao qual eu desejo ver; Ele é tudo pra mim, e sem Ele não posso viver",
  "music": {
    "verso1": "Oh! Que saudosa lembrança tenho de ti, ó Sião, terra que eu tanto amo, pois és do meu coração. Eu para ti voarei, quando o Senhor meu voltar; pois Ele foi para o céu, e breve vem me buscar",
    "verso2": "Bela, mui bela, é a esperança, dos que vigiam por ti, pois eles recebem força, que só se encontra ali; os que procuram chegar ao teu regaço, ó Sião, livres serão de pecar e de toda a tentação.",
    "verso3": "Diz a Sagrada Escritura, que são formosos os pés daqueles que boas novas levam para os infiéis; e, se tão belo é falar dessas grandezas, aqui, que não será o gozar a graça que existe ali! A.N."
  },
  "video": "https://www.youtube.com/watch?v=EAcfvmA_xEE"
}
```

</details>

