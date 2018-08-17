import { Component, OnInit, Input } from '@angular/core';
import { Criteria } from '../../models/criteria'


@Component({
  selector: 'app-criteriatree',
  templateUrl: './criteriatree.component.html',
  styleUrls: ['./criteriatree.component.css']
})
export class CriteriatreeComponent implements OnInit {
  @Input('criteriaList') criteriaList: Array<Criteria>

  constructor() { }

  ngOnInit() {
  }

}
