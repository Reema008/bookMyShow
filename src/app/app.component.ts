import { Component } from '@angular/core';
import { movie } from './app.interface';
import { theater } from './app.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {
 
  movies:movie[]=[
    {
      mname:'Bahubali'
    },
    {
      mname:'Adhurs'
    },
    {
      mname:'Jai lava kusa'
    }
  ]
  theaters:theater[]=[
    {
      mname:'Jagadamba',
      id:1
    },
    {
      mname:'Kinnera',
      id:2
    },
    {
      mname:'Melody',
      id:0
    },
    {
      mname:'Kameswari',
      id:0
    },
    {
      mname:'STBL',
      id:1
    },
    {
      mname:'Varun INOX',
      id:1
    },
    {
      mname:'Satyam',
      id:2
    },
    {
      mname:'Vmax',
      id:2
    },
    {
      mname:'Cinemax',
      id:0
    },
  ]
  a:number=0;
  b:number=0;
  theatres:theater[]=[];
  theatr:string;
  title:string;
  tckts:string='';
  phn:string='';
mvs(id:any){
    for(this.a=0;this.a<=this.theatres.length+1;this.a++)
    {
      this.theatres.pop();
    }

    for(this.b=0;this.b<=this.theaters.length;this.b++){
      if(id==this.theaters[this.b].id)
      {
        this.theatres.push(this.theaters[this.b])
        console.log(this.theatres)
        this.title=this.movies[id].mname;
        
      }    
      this.theatr='';
    }
}
theatrs(id:any){
      this.theatr=this.theatres[id].mname;
}
tickets(event:any){
  this.tckts=event.target.value;
  console.log(this.tckts)
  
}
pno(event:any){
  this.phn=event.target.value; 
}
onclick(event:any){
  if(this.tckts==''|| this.phn=='')
  alert("Fill all the fields");
  else
  alert("Booking Successful")
}
}
