import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit{

  idParam!:any
  movieData:any = []
  posterPath:string = 'https://image.tmdb.org/t/p/original/'
  GenreTitle:string = ''
  GenreList:any = []

  constructor(private ActivatedRoute:ActivatedRoute, private Router:Router, private _moviesServices:MoviesService){}


  ngOnInit(): void {
    this.getGenreList()
    this.getIdParams()
  }


  getIdParams(){
    this.ActivatedRoute.queryParams.subscribe((params:any)=>{
      this.idParam = params.id
    })
    this.getMovieData()
  }

  getMovieData(){
    if(this.idParam === 'trending'){
      this._moviesServices.getTrending().subscribe((data:any)=>{
        this.movieData = data.results
        this.GenreTitle = 'Trending Movies'
      })
    }else{
      this.idParam = +this.idParam
      this._moviesServices.getSpecificGenres(this.idParam).subscribe((data:any)=>{
        this.movieData = data.results
        this.GenreList.forEach((element: { id: number; name: string; }) => {
          if(element.id === this.idParam){
            this.GenreTitle = element.name
          }
        });
      })
    }
  }

  getGenreList(){
    this._moviesServices.getGenresList().subscribe((data:any)=>{
      this.GenreList = data.genres
    })
  }

  getMovieId(id:number){
    // console.log(id)
    this.Router.navigate(['/details', id])
  }

}
