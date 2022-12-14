import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './categoty.component.html',
  styleUrls: ['./categoty.component.css'],
  providers :[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  title="Kategori Listesi"
  categories! :Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    });
    
  }

}
