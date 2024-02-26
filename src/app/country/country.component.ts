import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
 @Input() flag : string = './assets/lebanon.png'
 @Input() name : string = 'Lebanon'
 @Input() population : number = 0;
  constructor() {
    // setInterval(()=>{
    //   this.flag = './assets/Jordan.png'
   // },2000) 
  }
  ngOnInit(): void {}

  ShowPopulation(){
    alert(this.population)
    }
}


// class Person implements ITalk{
//   name: string = '';
//   xyz(){
//     console.log(this.name)
//   }
//   test(){
//     console.log('zouzou')
//   }
// }

// class Teacher implements ITalk {
//   test(){
//     console.log('boubou')
//   }
// }

// class Student extends Person {}

// // an Interface is verrrry special class, where you JUST define methods but you don't inplement them
// // But inplement , we mean defining what a certain method does
// interface ITalk {
//   test() : any;
// }
 