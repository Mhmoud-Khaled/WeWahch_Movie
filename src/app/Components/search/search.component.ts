import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  movieName:string=''
  allmovieData:any[] = []
  specificDate:any[] = []
  poserPath:string = 'https://image.tmdb.org/t/p/original/'

  constructor(private MovieServeses:MoviesService, private Router:Router){

  }

  ngOnInit(): void {
    this.getAllMovie()
  }

  getAllMovie(){
    this.MovieServeses.getTrending().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
                    });
        this.unique()
    })
    this.MovieServeses.getAction().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
      });
      this.unique()
    })
    this.MovieServeses.getComedy().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
      });
      this.unique()
    })
    this.MovieServeses.getAnimation().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
      });
      this.unique()
    })
    this.MovieServeses.getAdventure().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
      });
      this.unique()
    })
    this.MovieServeses.getDocumentary().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
      });
      this.unique()
    })
    this.MovieServeses.getScienceFiction().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
      });
      this.unique()
    })
    this.MovieServeses.getThriller().subscribe((data:any)=>{
      this.allmovieData = data.results
      this.allmovieData.forEach((element: { id: number; title: string; poster_path:string; vote_average:string; name:string}) => {
        this.specificDate.push({
                        id:element.id,
                        title: element.title|| element.name,
                        poster:element.poster_path,
                        rate:element.vote_average
                      })
      });
      this.unique()
    })
  }

  unique(){
    this.specificDate = this.specificDate.filter((value, index, self) =>
      index === self.findIndex((t) => (
      t.title === value.title && t.name === value.name
      ))
      )
      // console.log(this.specificDate)
  }

  getMovieId(id:number){
    // console.log(id)
    this.Router.navigate(['/details', id])
  }
}
