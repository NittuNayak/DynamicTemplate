export class Criteria {
    operator: string;
    rangeOperator: string;
    fieldName: string;
    fieldValue: string;
    isNested: boolean;
    nestedCriteria: Array<Criteria>;
    constructor(oper: string, rangeOper: string, fname: string, fvalue: string, nestCriteria:Array<Criteria> , isnest: boolean = false ) {
        this.operator = oper;
        this.rangeOperator = rangeOper;
        this.fieldName = fname;
        this.fieldValue = fvalue;
        this.isNested = isnest;
        this.nestedCriteria =nestCriteria;

    }
}

export class CriteriaDetail {
    criteria: Criteria;
    nestedCriteria: Array<Criteria>;
    constructor(cri: Criteria, nestedCriteriaList: Array<Criteria>) {
        this.criteria = cri;
        this.nestedCriteria = nestedCriteriaList;
    }
}