import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IFilterForm } from './interfaces/IFilterForm.interface';

/**
 * This component creates a general section tab and can contain forms and others filterForms inside, all it needs is a IFilterForm object.
 */
@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent {
  /**
   * FilterForm (structure tab) coming from the backend
   */
  @Input() filterForms!: IFilterForm[];

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}
