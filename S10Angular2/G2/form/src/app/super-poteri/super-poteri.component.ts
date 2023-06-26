import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-super-poteri',
  templateUrl: './super-poteri.component.html',
  styleUrls: ['./super-poteri.component.scss']
})
export class SuperPoteriComponent  {
  superheroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.superheroForm = this.formBuilder.group({
      name: ['', Validators.required],
      alterEgo: ['', Validators.required],
      power: ['', Validators.required],
      enemy: [''],
      planet: ['', [Validators.required, Validators.minLength(5)]],
      weakness: ['']
    });

    this.superheroForm.reset()
  }

}
