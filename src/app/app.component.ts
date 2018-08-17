import { Component, OnInit } from '@angular/core';
import { Criteria, CriteriaDetail } from '../models/criteria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  CriteriaDetailList: Array<CriteriaDetail>;
  criteriaList:Array<Criteria>;
  title = 'app';
  constructor() { }

  initCriteria() {
    // var criteria = new Criteria('', '', '', '', new Array<Criteria>());
    // var criDetail = new CriteriaDetail(criteria, new Array<Criteria>());
    // this.CriteriaDetailList.push(criDetail);

    let criteria = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria1 = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria2 = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria3 = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria4 = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria5 = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria6 = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria7 = new Criteria('', '', '', '', new Array<Criteria>());
    let criteria8 = new Criteria('', '', '', '', new Array<Criteria>());
    
    criteria3.nestedCriteria.push(criteria4);
    criteria3.nestedCriteria.push(criteria5)
    criteria1.nestedCriteria.push(criteria2);
    criteria1.nestedCriteria.push(criteria3);

    criteria6.nestedCriteria.push(criteria7);
    criteria6.nestedCriteria.push(criteria8);


    this.criteriaList.push(criteria1);
    this.criteriaList.push(criteria);
    this.criteriaList.push(criteria1);




    
  }

  ngOnInit() {
    this.CriteriaDetailList = new Array<CriteriaDetail>();
    this.criteriaList = new Array<Criteria>();
    this.initCriteria();
  }

  addNewCriteria(): void {
    this.initCriteria();
  }

  addNestedCriteria(i: number): void {
    this.CriteriaDetailList[i].nestedCriteria.push(new Criteria('', '', '', '', new Array<Criteria>(), true));
    console.log(this.CriteriaDetailList);
  }

  updateFieldName(fieldValue) {
    var cri = fieldValue.criteria.isNested ?
      this.CriteriaDetailList.find(obj => obj.nestedCriteria == fieldValue.criteria) :
      this.CriteriaDetailList.find(obj => obj.criteria == fieldValue.criteria);
    cri.criteria.fieldName = fieldValue.value;
    console.log(this.CriteriaDetailList);
  }

  updateOperatorName(operatorValue) {
    var cri = this.CriteriaDetailList.find(obj => obj.criteria == operatorValue.criteria);
    cri.criteria.operator = operatorValue.value;
    console.log(this.CriteriaDetailList);
  }

  updateRangeOperatorName(rangeOperatorValue) {
    var cri = this.CriteriaDetailList.find(obj => obj.criteria == rangeOperatorValue.criteria);
    cri.criteria.rangeOperator = rangeOperatorValue.value;
    console.log(this.CriteriaDetailList);
  }

}
