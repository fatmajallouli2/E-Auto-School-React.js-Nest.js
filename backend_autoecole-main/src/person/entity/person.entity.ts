/*import { Session } from "inspector";*/
import internal from 'stream';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Session } from '../../session/entity/session.entity';
import { Exam } from '../../exam/entity/exam.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column('varchar', { nullable: false }) cin: string;
  @Column('varchar', { nullable: false }) email: string;
  @Column('varchar', { nullable: false }) password: string;
  @Column('int', { nullable: false }) role: number;
  @Column('varchar', { nullable: false }) lastname: string;
  @Column('varchar', { nullable: false }) firstname: string;
  @Column('date', { nullable: false }) birthdate: Date;
  @Column('varchar', { nullable: false }) phone: string;
  @Column('varchar', { nullable: false }) adress: string;
  @Column('varchar', { nullable: false, unique: true })
  username: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];
  @OneToMany(() => Exam, (exam) => exam.user)
  exams: Exam[];
}
