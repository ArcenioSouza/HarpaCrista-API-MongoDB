import hinos from "../model/hino.js";

class HinosController {
   
   static getAllHinos = (req, res) => {
      hinos.find((error, hinos) => {
         if(!error)
         res.status(200).json(hinos)
      }) 
   }

   static getNumberHino = (req, res) => {
      let number = parseInt(req.params.number);
      hinos.findOne({number: number}, (error, hino) => {
         if(!error)
         res.status(200).json(hino)
      })
   }
   
   static getTitleHino = (req, res) => {
      let title = req.params.title;
      hinos.find({title: new RegExp(title, 'i')}, (error, hino) => {
         if(!error)
         res.status(200).json(hino)
      })
   }
   
   static getChorusHino = (req, res) => {
      let chorus = req.params.chorus;
      hinos.find({chorus: new RegExp(chorus, 'i')}, (error, hino) => {
         if(!error)
         res.status(200).json(hino)
      })
   }

   static saveHino = (req, res) => {
      let hino = new hinos(req.body);
      hino.save((error) => {
         if(error){
            res.status(500).send({message: `Fail to save - ${error}`})
         } else {
            res.status(201).json(hino)
         }
      })
   }

   static updateHino = (req, res) => {
      let id = req.params.id

      hinos.findByIdAndUpdate(id, {$set: req.body}, (error) => {
         if(error){
            res.status(500).send({message: `Fail to update - ${error}`})
         } else {
            res.status(201).send({message: `Update done successfully`})
         }
      })
   }
}

export default HinosController;