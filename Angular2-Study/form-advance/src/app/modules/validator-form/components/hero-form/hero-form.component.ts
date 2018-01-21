import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { forbiddenNameValidator } from '../../../../shared/forbidden-name.directive';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  heroForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo, [Validators.required]),
      'power': new FormControl(this.hero.power, [Validators.required])
    });
  }

  get name() { return this.heroForm.get('name'); }

  get alterEgo() { return this.heroForm.get('alterEgo'); }

  get power() { return this.heroForm.get('power'); }

}
