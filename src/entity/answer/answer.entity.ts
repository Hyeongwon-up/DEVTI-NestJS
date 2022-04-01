import { Entity, PrimaryGeneratedColumn } from "typeorm";

export enum AnswerType {
    PRESET,
    GAGE,
    INFO
}

export class AnswerAttribute {
    id: number,
    answerType: AnswerType
}

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    id: number;


}
