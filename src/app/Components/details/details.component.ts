import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  id!: number;
  MovieDate:any = []
  movieGenre:any[] = []
  movieActors:any[] = []
  posterPath:string = 'https://image.tmdb.org/t/p/original/'


  constructor(private router: Router, private activatedRouter: ActivatedRoute, private _moviesServices:MoviesService) {}

  ngOnInit(): void {
    this.getMovieId()
  }

  getMovieId(){
    this.id = +this.activatedRouter.snapshot.paramMap.get('id')!;
    this.getMovieDate()
    this.getCast()
  }

  getMovieDate(){
    this._moviesServices.getMovieById(this.id).subscribe((data:any)=>{
      this.MovieDate = data
      data.genres.forEach((element:any) => {
        this.movieGenre.push(element.name)
      });
    })
  }

  getCast(){
    this._moviesServices.getMovieCast(this.id).subscribe((data:any)=>{
      // this.movieActors = data.cast
      // console.log(this.movieActors)
        data.cast.forEach((ele:any)=>{
        if(ele.profile_path != null){
          this.movieActors.push(ele)
          // console.log(this.movieActors)
        }
      })
    })
  }



}
