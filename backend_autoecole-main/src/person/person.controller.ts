import {
  Body,
  Controller,
  Get,
  Put,
  Post,
  ParseIntPipe,
  Param,
  Delete,
  Res
} from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './entity/person.entity';
import { PersonDto } from './entity/PersonDto';


@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
 

  @Post('')
  async addperson(
    @Body('cin') cin: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: number,
    @Body('lastname') lastname: string,
    @Body('firstname') firstname: string,
    @Body('birthdate') birthdate: Date,
    @Body('phone') phone: string,
    @Body('adress') adress: string,
    @Body('username') username: string,
  ) {
    return this.personService.create({
     cin,email,password,role,lastname,firstname,birthdate,phone,adress,username
    });
  }
  @Post('/addperson')
  create(@Body() personDto: PersonDto) {
    return this.personService.create(personDto);
  }
  @Get('/')
  async getAllperson(): Promise<Person[]> {
    return await this.personService.getAllPerson();
  }

  @Get('/:id')
  async getpersonById(@Param('id', ParseIntPipe) id: number): Promise<Person> {
    return await this.personService.getPersonById(id);
  }
 

  @Delete('/:id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return await this.personService.deleteOne(Number(id));
  }

  @Put('edit/:id')
  async update(@Param('id') id, @Body() contactData: Person): Promise<any> {
    contactData.id = Number(id);
    console.log('Update #' + contactData.id);
    return this.personService.update(id, contactData);
  }

  
}
