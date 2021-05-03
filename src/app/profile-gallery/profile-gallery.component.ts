import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  selectedPet: Pet;
  searchText: string;
  addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: 0
  });
  showAdd: boolean = false;

  constructor(private petService: PetService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  addPet(pet: Pet) {
    this.petService.addPet(pet).subscribe(() => this.getPets());
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }

  deletePet() {
    this.petService.deletePet(this.selectedPet.id);
    this.getPets();
    this.selectedPet = null;
  }

  onSubmit(): void {
    this.addPet(this.addPetForm.value);
    this.addPetForm.reset();
  }

  toggleShowAdd() {
    this.showAdd = !this.showAdd;
  }


}
