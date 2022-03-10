import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import  Categories  from '../../../../models/categories/categories.model';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {

  public id: number = 0;
  public category: any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => (this.id = params['id']));
    this.categoriesService.getCategory(this.id).subscribe((data) => this.category = data)
  }

  public categoryForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
  });

  editCategory() {
    let category = {
      id: this.id,
      title: this.categoryForm.get('title')?.value,
    };

    this.categoriesService.updateCategory(category);
    this.categoryForm.reset();
  }
}
