import { Router } from "express";
import hinos from "../model/hino.js"

const router = Router();

router.get("/hinos", (req, res) => {
   hinos.find((error, hinos) => {
      if(!error)
      res.status(200).json(hinos)
   })   
})

router.get("/hinos/id/:id", (req, res) => {
   let id = parseInt(req.params.id);
   let response = hinos.filter(hino => hino.id === id)
   res.status(200).json(response)
})

router.get("/hinos/title/:title", (req, res) => {
   let title = req.params.title;
   let response = hinos.filter(hino => hino.title === title)
   res.status(200).json(response)
})

router.get("/hinos/chorusExcerpt/:chorus", (req, res) => {
   let chorus = req.params.chorus;
   hinos.filter((hino) => {
      let indexHino = hino.chorus.indexOf(chorus)
      console.log(indexHino)
      if(indexHino !== -1){
         return res.status(200).json(hino)
      }
      else{
         return res.status(404).json({msg: 'hino not found'})
      }
   })   
})

export default router;