import { UnprocessableEntityException } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Answer } from '../answer/answer.entity';

@Entity()
export class Devti {
  @PrimaryGeneratedColumn()
  id: number;

  answer: Answer;

  devti: string;

  devtiResult: string;
}
