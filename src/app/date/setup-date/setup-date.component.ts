import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  constructor(private petService: PetService, private route: ActivatedRoute, private formBuilder: FormBuilder, private location: Location) { }
  pet: Pet;
  sendTextForm = this.formBuilder.group({
    name: '',
  });

  ngOnInit(): void {
    this.getPet();
  }

  getPet(){
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.petService.getPetByName(name)
      .subscribe(pet => this.pet = pet);
  }

  setUpDate(){
    //this.petService.sendMessage(this.sendTextForm.get('name').value).subscribe(() => this.sendTextForm.reset());
    this.petService.sendMessage(this.sendTextForm.value).subscribe(() => this.sendTextForm.reset());
  
    this.petService.incrementPopularity(this.pet.name).subscribe(() => this.getPet());
    this.sendTextForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}
