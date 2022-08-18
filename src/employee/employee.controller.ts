import { Body, Controller, Delete, Get, Param, Post,Put} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDTO } from './dto/employee.dto';
import { Employee } from './interface/employee.interface';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employee:EmployeeService){}
    @Get()
    async getemployee():Promise<Employee[]>{
        return await this.employee.getemployee();
    }
    @Get(':id')
    async getoneemployee(@Param('id')id:string):Promise<Employee>{
        return await this.employee.getoneemployee(id);
    }
    @Put(':id')
    async updateoneemployee(@Param('id')id:string,@Body()data:EmployeeDTO):Promise<Employee>{
        return await this.employee.updateoneemployee(id,data);
    }
    @Delete(':id')
    async deleteoneemployee(@Param('id')id:string):Promise<Employee>{
        return await this.employee.deleteoneemployee(id);
    }
    @Post()
       async createEmployee(@Body()data:EmployeeDTO):Promise<Employee>{
        return await this.employee.createEmployee(data);
        }
    }
    
