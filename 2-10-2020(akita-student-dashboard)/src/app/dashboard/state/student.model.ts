import { ID, guid } from '@datorama/akita';
//maintaining a collection of entities
export interface Student {
    id: ID;
    name: string;
    sex: 'Male' | 'Female';
    standard: number;
    quarterlyScore: number;
    halfyearlyScore: number;
    annualScore: number;
}

export function createStudent({
    name = '',
    standard = null,
    sex = null,
    quarterlyScore = 0,
    halfyearlyScore = 0,
    annualScore = 0
}: Partial<Student>): Student {
    return {
      //guid() method to generate globally unique id
        id: guid(),
        name,
        sex,
        standard,
        quarterlyScore,
        halfyearlyScore,
        annualScore
    };
}
