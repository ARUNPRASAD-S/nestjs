import * as mongoose from 'mongoose';
export const EmployeeSchema = new mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Email:String,
    Contactno:String,
    City:String,
    Gender:String,
    Role:String,
    Experience:String,
    State:String,
  });