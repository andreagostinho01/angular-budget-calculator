import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem): void {
    this.budgetItems.push(newItem);
  }

  deleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }

}
