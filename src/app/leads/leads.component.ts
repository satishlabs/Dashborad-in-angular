import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html'
})
export class LeadsComponent implements OnInit {
  
  myLeadsData ={
    leadCount : 5,
    showLeads : true,
    leads :[
      {leadId:101,name:"Satish",email:"sat@gmail",phone:1234,course:"Angular"},
      {leadId:102,name:"MsDhoin",email:"ms@gmail",phone:1234,course:"ReactJS"},
      {leadId:103,name:"Virat",email:"vi@gmail",phone:3234,course:"ES6"},
      {leadId:104,name:"Rohit",email:"roh@gmail",phone:5234,course:"SpringBoot"},
      {leadId:105,name:"Sachin",email:"sa@gmail",phone:7234,course:"Java"},
    ]
  }
  
  public showLeadsInfo():void{
    this.myLeadsData.showLeads = !this.myLeadsData.showLeads;
  }

  public removeLead(leadId):void{
    this.myLeadsData.leads = this.myLeadsData.leads.filter((item) => {
        if(item.leadId !== leadId) {
          return item;
        }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
