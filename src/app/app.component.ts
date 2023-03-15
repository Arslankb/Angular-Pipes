import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{
  title = 'AngularPipes';
  students!: Student[];
  totalMarks!: number;
  _filterText: string = '';
  filteredStudents!: Student[];
  totalStudent = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(this.filteredStudents.length);
    });
  });

  get filterText(){
    return this.filterText;
  }

  set filterText(value: string){
    this.filterText = value;
    this.filteredStudents = this.filterStudentByGender(value);
  }

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
      this.students = this.studentService.students;
      this.totalMarks = this.studentService.totalMarks;
      this.filteredStudents = this.students;
  }


  filterStudentByGender(filterTerm: string){
    if(this.students.length === 0 || this.filterText === ''){
      return this.students;
  } 
  else{
    return this.students.filter((student) =>{
      return student.gender.toLowerCase() === filterTerm.toLowerCase()
    })
  }
  }
}
