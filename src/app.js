import express from 'express'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const hinos = [
   {  
      id: 0,
      number: 1,
      title: 'Chuvas de Graça',
      chorus: 'Chuvas de graça, chuvas pedimos, Senhor; manda-nos chuvas constantes, chuvas do consolador',
      music: {
            1: 'Deus prometeu com certeza chuvas de graça mandar; Ele nos dá fortaleza, e ricas bênçãos sem par.',
            2: 'Cristo nos tem concedido o santo Consolador, de plena paz nos enchido, para o reinado de amor.',
            3: 'Dá-nos, Senhor, amplamente, Teu grande gozo e poder; fonte de amor permanente, põe dentro de nosso ser.',
            4: 'Faze os teus servos piedosos, dá-lhes virtude e valor, dando os teus dons preciosos, do santo Preceptor. J.R.'
      },
      video: 'https://www.youtube.com/watch?v=EAcfvmA_xEE'
   }
]

export default app;