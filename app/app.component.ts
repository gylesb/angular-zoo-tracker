import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Zoo Tracker</h1>
      <form>
        Species:
        <input type="text" #species><br>
        Name:
        <input type="text" #name><br>
        Age:
        <input type="text" #age><br>
        Diet:
        <input type="text" #diet><br>
        Location:
        <input type="text" #location><br>
        Caretakers:
        <input type="text" #caretakers><br>
        Sex:
        <input type="text" #sex><br>
        Likes:
        <input type="text" #likes><br>
        Dislikes:
        <input type="text" #dislikes><br>
        <button (click) = "appendNewItems(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Add</button>
      </form>

      <div *ngIf="selectedAnimal">
      <h3>{{selectedAnimal.species}}</h3>
      <h3>{{selectedAnimal.name}}</h3>
      <h3>{{selectedAnimal.age}}</h3>
      <h3>{{selectedAnimal.diet}}</h3>
      <h3>{{selectedAnimal.location}}</h3>
      <h3>{{selectedAnimal.caretakers}}</h3>
      <h3>{{selectedAnimal.sex}}</h3>
      <h3>{{selectedAnimal.likes}}</h3>
      <h3>{{selectedAnimal.dislikes}}</h3>
      <h3>Edit Animal</h3>
      Edit Species:
      <input type="text" #species><br>
      Edit Name:
      <input type="text" #name><br>
      Edit Age:
      <input type="text" #age><br>
      Edit Diet:
      <input type="text" #diet><br>
      Edit Location:
      <input type="text" #location><br>
      Edit Caretakers:
      <input type="text" #caretakers><br>
      Edit Sex:
      <input type="text" #sex><br>
      Edit Likes:
      <input type="text" #likes><br>
      Edit Dislikes:
      <input type="text" #dislikes><br>

      <button (click) = "finishedEditing(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Done</button>
  </div>

    </div>

  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest', 6, 'Male', 'Laying in the Sunshine', 'Toys that are not rope based')
  ]
  selectedAnimal = null;

  appendNewItems = function(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    this.animals.push(new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes));
  }

  editAnimal(currentItem) {
    this.selectedAnimal = currentItem;
  }

  finishedEditing(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
    this.selectedAnimal.species = species;
    this.selectedAnimal.name = name;
    this.selectedAnimal.age = age;
    this.selectedAnimal.diet = diet;
    this.selectedAnimal.location = location;
    this.selectedAnimal.caretakers = caretakers;
    this.selectedAnimal.sex = sex;
    this.selectedAnimal.likes = likes;
    this.selectedAnimal.dislikes = dislikes;
    this.selectedAnimal = null;
  }

}

export class Animal {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number){ }

}
