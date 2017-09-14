import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentCollection: Array<object> = [];
  studentRecord: object;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  messages = ' ';
  printing = false;

  onSubmit(reg){
    console.log(reg);
  }


  private checkPatterns(value: any, pattern: RegExp): boolean {
    if (pattern.test(value))
      return true;
    else
      return false;
  }

  addStudentEntry(): Boolean{
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const numberPattern = /^[0-9]+$/;
    const yearPattern = /^[1-5]+$/;

     this.studentRecord = {
          studNumber: this.studNo,
          studFirstName: this.studFname,
          studLastName: this.studLname, 
          studProgram: this.studProg,
          studYear: this.studYr
        };

        this.studentCollection.push(this.studentRecord);

        this.messages = null;
        this.clearList();
        return true;
    /*if (this.checkPatterns(this.studNo, numberPattern) && this.checkPatterns(this.studFname, stringPattern) &&
      this.checkPatterns(this.studLname, stringPattern) && this.checkPatterns(this.studProg, stringPattern) &&
      this.checkPatterns(this.studYr, yearPattern)){

       
      } else {
        this.messages =  'Errors have been encountered therefore cannot continue process requested operation';
        return false;
      }*/
  }


  listStudentEntry(): void{
    this.printing = true;
    console.log('Displays values input!');
  }
  

  clearList(): void {
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;
  }
}
