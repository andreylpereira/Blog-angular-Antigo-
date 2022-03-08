import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
  }

  public categoryForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]]
  });

  register() {
    let category = {
      title: this.categoryForm.get('title')?.value
    };
    console.log(category);

    this.categoriesService.register(category);
    this.categoryForm.reset();
  }
}
