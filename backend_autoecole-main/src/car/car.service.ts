import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entity/car.entity';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CarDto } from './entity/CarDto';
@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private readonly carRepository: Repository<Car>) {}

  async create(carDto: CarDto): Promise<Car> {
    const newCar = this.carRepository.create(carDto);
    return this.carRepository.save(newCar);
  }

  async getAllCar(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async getCarById(id: number): Promise<Car> {
    return await this.carRepository.findOne(id);
  }

  async deleteOne(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }

  public async update(id: number, newValue: CarDto): Promise<Car> {
    const car = await this.carRepository.findOneOrFail(id);
    if (!car.id) {
      console.error("Todo doesn't exist");
    }
    await this.carRepository.update(id, newValue);
    return await this.carRepository.findOne(id);
  }
}
