import { Schema, model } from "mongoose";


const todoSchema = new Schema({
  id: { type: Number, required: true },      
  text: { type: String, required: true },     
  done: { type: Boolean, default: false },    
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date, default: Date.now },
});


const Todo = model("Todo", todoSchema);

export default Todo;