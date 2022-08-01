import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  button =document.getElementsByClassName('filter')
  courseList=[
    {id:1 , title:"Product Management Basic - Course" , img:"../../assets/images/image 20.png" , catg:"product"},
    {id:2 , title:"Front End Developer - Basic" , img:"../../assets/images/image 20 (1).png" , catg:"web"},
    {id:3 , title:"Back End Developerr -Basic" , img:"../../assets/images/image 20 (2).png" , catg:"web"},
    {id:4 , title:"UX Design - Branstroming" , img:"../../assets/images/image 20 (3).png" , catg:"design"},
    {id:5 , title:"UI Design - Sketch" , img:"../../assets/images/image 20 (4).png" , catg:"design"},
    {id:6 , title:"Graphic Design - Fundamental Design" , img:"../../assets/images/image 20 (5).png" , catg:"design"},
  ]
  filterdCourseList:any=[]
  constructor() {

   }

  ngOnInit(): void {
    this.filterdCourseList=this.courseList;
  }
  selection(e:any ){
  for(let i=0 ; i<this.button.length ; i++){
    this.button[i].classList.remove("selected")
  }
  e.target.classList.toggle("selected")
  if(e.target.id === "all"){
    this.filterdCourseList=this.courseList;
  }else{

    this.filterdCourseList=this.courseList.filter(c=>{
      
      return c.catg === e.target.id
    })
  }
  }
}
