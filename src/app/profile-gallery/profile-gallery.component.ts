import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

}
