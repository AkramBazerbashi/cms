import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-input',
  styleUrls: ['./input.component.scss'],
  templateUrl: './input.component.html',
})
export class InputComponent {
  constructor() { }
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  @Input() isRequired: boolean = false;

  @Input() parentForm: NgForm;
  
  @Input() inputClass: string = '';
  @Input() labelClass: string = '';
  
  @Input() inputType: string = 'text';
  @Input() inputName: string = 'baseInput';
  @Input() inputTitle: string = '';
  @Input() inputMessage: string = '';

  @Input() placeholder: string = '';
  @Input() labelValue: string = '';
  @Input() labelDirection: string = 'ltr';

  public inputDomStatus(inputDom: NgControl, formDom: NgForm): boolean {
    return (inputDom.touched&&inputDom.invalid) ||
      (formDom.submitted&&inputDom.invalid)
  }
}
