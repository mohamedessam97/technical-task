import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('mymodal') mymodalElm!: ElementRef;
  constructor() { 

  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit():void{
    

    
  }
  show(e:any){
    this.mymodalElm.nativeElement.style.display="block"

  }
  hide(e:any){
    e.stopPropagation();
    this.mymodalElm.nativeElement.style.display="none"

  }
}
