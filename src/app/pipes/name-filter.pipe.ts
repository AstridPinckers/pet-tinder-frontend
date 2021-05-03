import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../model/pet';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], nameToSearch: string): any[] {
    if(nameToSearch==undefined){
      return pets;
    }
    return pets.filter(pet => {return pet.name.toLocaleLowerCase().includes(nameToSearch.toLocaleLowerCase())});
  }

}
