import { Component, OnInit } from '@angular/core';
import * as pokemonData from '../assets/pokemon.json'; // Import the JSON file
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Add this import
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CommonModule]
})
export class AppComponent implements OnInit {
  pokemonList: any[] = [];
  showImage: boolean[] = [];
  title = 'Angular 17 pokemons'
  currentPokemonIndex= 0;
  isImageVisible = false;
  ngOnInit() {
    // Directly assign the data from the imported JSON
    this.pokemonList = pokemonData.results; // Access the "results" array
    this.showImage = this.pokemonList.map(() => false);
  }
  toggleImage(index: number): void {
    this.showImage[index] = !this.showImage[index];
  }
  get currentPokemon() {
    return this.pokemonList[this.currentPokemonIndex];
  }

  // Go to the previous Pokémon
  goToPreviousPokemon() {
    if (this.currentPokemonIndex > 0) {
      this.currentPokemonIndex--;
    }
  }

  // Go to the next Pokémon
  goToNextPokemon() {
    if (this.currentPokemonIndex < this.pokemonList.length - 1) {
      this.currentPokemonIndex++;
    }
  }
    // Toggle the visibility of the Pokémon image
    toggleImageVisibility() {
      this.isImageVisible = !this.isImageVisible;
    }
}
