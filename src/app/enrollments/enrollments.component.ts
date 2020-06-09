import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html'
})
export class EnrollmentsComponent implements OnInit {

  myEnrollmentData ={
    enrollmentCount : 5,
    showEnrollments : true,
    enrollments :[
      {leadId:101,sid:501,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0},    
       {leadId:102,sid:502,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0},     
       {leadId:103,sid:503,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0},     
       {leadId:104,sid:504,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0},     
       {leadId:105,sid:505,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0},
    ]
  }

  showEnrollmentInfo():void{
    this.myEnrollmentData.showEnrollments = !this.myEnrollmentData.showEnrollments;
  }
  public removeEnrollment(leadId):void{
    this.myEnrollmentData.enrollments = this.myEnrollmentData.enrollments .filter((item) => {
        if(item.leadId !== leadId) {
          return item;
        }
    });
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
