import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }
  onSave(): void {
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }else{
      console.log('el formulario no es valido');
    }
  }

isValidField(field: string): string{
const validatedField = this.contactForm.get(field);
return(!validatedField.valid && validatedField.touched)
? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
}

  private initForm(): void{
    this.contactForm = this.fb.group({
      name:['',[Validators.required]],
      lastName:[''],
      email:['',[Validators.required]],
      message:['',[Validators.required, Validators.minLength(10)]],
    })
  }

}
