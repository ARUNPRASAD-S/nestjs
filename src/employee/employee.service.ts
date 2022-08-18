import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './interface/employee.interface';
import { EmployeeDTO } from './dto/employee.dto';
@Injectable()
export class EmployeeService {
    constructor(@InjectModel('Employee') private EmployeeModel: Model<Employee>) {}
    async getemployee():Promise<Employee[]>{
        return await this.EmployeeModel.find().exec();
    }
    async getoneemployee(id:string):Promise<Employee>{
        return await this.EmployeeModel.findById(id).exec();
    }
    async updateoneemployee(id:string,data:EmployeeDTO):Promise<Employee>{
        return await this.EmployeeModel.findOneAndUpdate({id:id},data,{new:true}).exec();
    }
    async deleteoneemployee(id:string):Promise<Employee>{
        return await this.EmployeeModel.findOneAndDelete({id:id}).exec();
    }
    async createEmployee(data:EmployeeDTO):Promise<Employee>{
        const Employee=new this.EmployeeModel(data);
        return await Employee.save();
    }
}
