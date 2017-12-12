"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.animals = [
            new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
            new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest', 6, 'Male', 'Laying in the Sunshine', 'Toys that are not rope based')
        ];
        this.selectedAnimal = null;
        this.appendNewItems = function (species, name, age, diet, location, caretakers, sex, likes, dislikes) {
            this.animals.push(new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes));
        };
    }
    AppComponent.prototype.editAnimal = function (currentItem) {
        this.selectedAnimal = currentItem;
    };
    AppComponent.prototype.finishedEditing = function (species, name, age, diet, location, caretakers, sex, likes, dislikes) {
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
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n      <h1>Zoo Tracker</h1>\n      <form>\n        Species:\n        <input type=\"text\" #species><br>\n        Name:\n        <input type=\"text\" #name><br>\n        Age:\n        <input type=\"text\" #age><br>\n        Diet:\n        <input type=\"text\" #diet><br>\n        Location:\n        <input type=\"text\" #location><br>\n        Caretakers:\n        <input type=\"text\" #caretakers><br>\n        Sex:\n        <input type=\"text\" #sex><br>\n        Likes:\n        <input type=\"text\" #likes><br>\n        Dislikes:\n        <input type=\"text\" #dislikes><br>\n        <button (click) = \"appendNewItems(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)\">Add</button>\n      </form>\n\n      <div *ngIf=\"selectedAnimal\">\n      <h3>{{selectedAnimal.species}}</h3>\n      <h3>{{selectedAnimal.name}}</h3>\n      <h3>{{selectedAnimal.age}}</h3>\n      <h3>{{selectedAnimal.diet}}</h3>\n      <h3>{{selectedAnimal.location}}</h3>\n      <h3>{{selectedAnimal.caretakers}}</h3>\n      <h3>{{selectedAnimal.sex}}</h3>\n      <h3>{{selectedAnimal.likes}}</h3>\n      <h3>{{selectedAnimal.dislikes}}</h3>\n      <h3>Edit Animal</h3>\n      Edit Species:\n      <input type=\"text\" #species><br>\n      Edit Name:\n      <input type=\"text\" #name><br>\n      Edit Age:\n      <input type=\"text\" #age><br>\n      Edit Diet:\n      <input type=\"text\" #diet><br>\n      Edit Location:\n      <input type=\"text\" #location><br>\n      Edit Caretakers:\n      <input type=\"text\" #caretakers><br>\n      Edit Sex:\n      <input type=\"text\" #sex><br>\n      Edit Likes:\n      <input type=\"text\" #likes><br>\n      Edit Dislikes:\n      <input type=\"text\" #dislikes><br>\n\n      <button (click) = \"finishedEditing(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)\">Done</button>\n  </div>\n\n    </div>\n\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Animal = (function () {
    function Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.location = location;
        this.caretakers = caretakers;
        this.sex = sex;
        this.likes = likes;
        this.dislikes = dislikes;
    }
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=app.component.js.map