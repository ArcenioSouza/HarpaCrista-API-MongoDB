import mongoose from "mongoose";

const hinoSchema = new mongoose.Schema(
   {
      id: {
         type: String,
         required: true
      },
      number: {
         type: Number, 
         required: true
      },
      title: {
         type: String,
         required: true
      },
      chorus: {
         type: String,
         required: false
      },
      music: {
         type: Object,
         required: true,
         verso1: {
            type: String,
            required: false
         },
         verso2: {
            type: String,
            required: false
         },
         verso3: {
            type: String,
            required: false
         },
         verso4: {
            type: String,
            required: false
         },
         verso5: {
            type: String,
            required: false
         },
         verso6: {
            type: String,
            required: false
         },
         verso7: {
            type: String,
            required: false
         },
         verso8: {
            type: String,
            required: false
         },
         verso9: {
            type: String,
            required: false
         },
         verso10: {
            type: String,
            required: false
         }
      },
      video: {
         type: String,
         required: false
      }
   }
);

const hinos = mongoose.model('hinos', hinoSchema);

export default hinos;