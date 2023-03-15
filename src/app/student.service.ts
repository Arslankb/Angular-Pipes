import { Student } from "./student";

export class StudentService{
    students: Student[]=[
        {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1990'), gender: 'Male'},
        {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('11-12-1999'), gender: 'Male'},
        {name: 'Merry jane', course: 'MBA', marks: 512, DOB: new Date('11-12-1995'), gender: 'Female'},
        {name: 'John Doe', course: 'BTECH', marks: 670, DOB: new Date('11-12-1990'), gender: 'Male'},
        {name: 'Sarah Smith', course: 'M.SC', marks: 430, DOB: new Date('11-12-1980'), gender: 'Female'},
        {name: 'Jonas Weber', course: 'M.SC', marks: 520, DOB: new Date('11-12-1990'), gender: 'Male'},
    ];

    totalMarks: number = 700;
}