import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* Services */
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public categoryForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]]
  });

  createCategory() {
    let category = {
      title: this.categoryForm.get('title')?.value
    };

    this.categoriesService. createCategory(category);
    this.categoryForm.reset();
    this.router.navigate(['/admin/panel-control'])
  }
}
