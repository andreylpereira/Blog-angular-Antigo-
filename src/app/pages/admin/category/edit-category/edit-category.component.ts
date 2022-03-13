import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* Service */
import { CategoriesService } from 'src/app/services/categories/categories.service';

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
    private categoriesService: CategoriesService,
    private router: Router
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
    this.router.navigateByUrl('/admin/panel-control', { skipLocationChange: true });

  }
}
