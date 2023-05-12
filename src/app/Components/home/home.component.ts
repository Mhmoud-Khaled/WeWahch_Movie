import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  toRate:any
  tranding:any
  action:any
  adventure:any
  animation:any
  comedy:any
  documentary:any
  scienceFiction:any
  thriller:any
  genreId:number = 0

  poserPath:string = 'https://image.tmdb.org/t/p/original/'

  constructor(private _movies:MoviesService, private router:Router){

  }

  ngOnInit(): void {
    this.getTopRate()
    this.getTrending()
    this.getAction()
    this.getAdventure()
    this.getAnimation()
    this.getComedy()
    this.getDocumentary()
    this.getScienceFiction()
    this.getThriller()
  }

  getTopRate(){
    this._movies.getTopRate().subscribe((data:any)=>{
      this.toRate = data.results
      // console.log(this.toRate)
    })
  }

  getTrending(){
    this._movies.getTrending().subscribe((data:any)=>{
      this.tranding = data.results
      // console.log(this.tranding)
    })
  }

  getAction(){
    this._movies.getAction().subscribe((data:any)=>{
      this.action = data.results
    })
  }

  getAdventure(){
    this._movies.getAdventure().subscribe((data:any)=>{
      this.adventure = data.results
    })
  }

  getAnimation(){
    this._movies.getAnimation().subscribe((data:any)=>{
      this.animation = data.results
    })
  }

  getComedy(){
    this._movies.getComedy().subscribe((data:any)=>{
      this.comedy = data.results
    })
  }

  getDocumentary(){
    this._movies.getDocumentary().subscribe((data:any)=>{
      this.documentary = data.results
    })
  }

  getScienceFiction(){
    this._movies.getScienceFiction().subscribe((data:any)=>{
      this.scienceFiction = data.results
    })
  }

  getThriller(){
    this._movies.getThriller().subscribe((data:any)=>{
      this.thriller = data.results
    })
  }

  setGenreId(event:any){
    if(event.target.innerHTML === 'Trending Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 'trending'}})
    }else if(event.target.innerHTML === 'Action Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 28}})
    }else if(event.target.innerHTML === 'Adventure Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 12}})
    }else if(event.target.innerHTML === 'Animation Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 16}})
    }else if(event.target.innerHTML === 'Comedy Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 35}})
    }else if(event.target.innerHTML === 'Documentary Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 99}})
    }else if(event.target.innerHTML === 'Science-Fiction Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 878}})
    }else if(event.target.innerHTML === 'Thriller Movies'){
      this.router.navigate(['/genres'],{queryParams:{id: 53}})
    }
    // console.log(event.target.innerHTML)
  }

  getMovieId(id:number){
    // console.log(id)
    this.router.navigate(['/details', id])
  }

  // slider

  topRateSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    dots: false,

    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  TrendingSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots: false,
    margin : 4,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false
  }

}
