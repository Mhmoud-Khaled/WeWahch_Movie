import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseURL:string = 'https://api.themoviedb.org/3/'
  APIkey:string = 'api_key=42e82cf8cc14e69e50b2f1369c96c8f4'

  constructor(private http:HttpClient) { }

  getTrending(){
    return this.http.get(this.baseURL + 'trending/all/day?' + this.APIkey)
  }

  getTopRate(){
    return this.http.get(this.baseURL + 'movie/top_rated?' + this.APIkey)
  }

  getAction(){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=28')
  }

  getAdventure(){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=12')
  }

  getAnimation(){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=16')
  }

  getComedy(){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=35')
  }

  getDocumentary(){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=99')
  }

  getScienceFiction(){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=878')
  }

  getThriller(){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=53')
  }

  getSpecificGenres(id:number){
    return this.http.get(this.baseURL + 'discover/movie?' + this.APIkey + '&with_genres=' + id)
  }

  getGenresList(){
    return this.http.get(this.baseURL + 'genre/movie/list?' + this.APIkey)
  }

  getMovieById(id:number){
    return this.http.get(this.baseURL + 'movie/' + id + '?' + this.APIkey)
  }

  getMovieCast(id:number){
    return this.http.get(this.baseURL + 'movie/' + id + '/credits?' + this.APIkey)
  }

}
