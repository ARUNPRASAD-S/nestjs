import {Document} from 'mongoose';
export interface Employee extends Document{
    readonly Firstname:String;
    readonly Lastname:String;
    readonly Email:String;
    readonly Contactno:String;
    readonly City:String;
    readonly Gender:String;
    readonly Role:String;
    readonly Experience:String;
    readonly State:String;
}