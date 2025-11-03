import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entity/person.entity';
import { PersonDto } from './entity/PersonDto';
@Injectable()
export class PersonService {
  constructor(@InjectRepository(Person) private readonly PersonRepository: Repository<Person>) {}

  async create(PersonDto: PersonDto): Promise<Person> {
    const newPerson = this.PersonRepository.create(PersonDto);
    return this.PersonRepository.save(newPerson);
  }

  async getAllPerson(): Promise<Person[]> {
    return this.PersonRepository.find();
  }
   // Récupère tous les candidats
  async getAllCandidates(): Promise<Person[]> {
    return this.PersonRepository.find({ where: { role: 'candidat'} });
  }

  async getPersonById(id: number): Promise<Person> {
    return await this.PersonRepository.findOne(id);
  }

  async deleteOne(id: number): Promise<void> {
    await this.PersonRepository.delete(id);
  }

  public async update(id: number, newValue: PersonDto): Promise<Person> {
    const Person = await this.PersonRepository.findOneOrFail(id);
    if (!Person.id) {
      console.error("Todo doesn't exist");
    }
    await this.PersonRepository.update(id, newValue);
    return await this.PersonRepository.findOne(id);
  }

 
}
