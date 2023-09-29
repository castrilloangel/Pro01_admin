import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from '../../interfaces/IControl.interface';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})
export class DynamicControlComponent implements OnInit {
  @Input() parentFormGroup!: FormGroup;
  @Input() thisFormControlName!: string;
  @Input() control!: IControl;
  @Input() action!: (() => Promise<any>) | null;

  ngOnInit(): void {
    if (this.control.attributes?.value !== undefined) {
      this.parentFormGroup.controls[this.control.name].setValue(this.control.attributes?.value);
    }
  }

  /**
   * Use function passed by the parent
   */
  public async employAction() {
    if (this.control.fills && this.action !== null) {
      console.log('form group', this.parentFormGroup)
      console.log('target', this.control.fills)
      let result = await this.action();
      console.log('result', result);

      this.parentFormGroup.controls[this.control.fills].setValue(result)
    } else {
      console.log('no function')
    }
  }
}
