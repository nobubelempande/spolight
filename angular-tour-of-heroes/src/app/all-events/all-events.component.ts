import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

var allEvents: string[][] = new Array();

allEvents.push(["https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","Music Festival","City Park , Parktown","24 April, 2022 from 8:00 to 17:30","Ticket Price: R250","Music Festival hosted at City Park. Join us for a night of music."]);
allEvents.push(["https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","Wits Museum Opening","Museum of University of Witwatersrand ","25 April, 2022 from 9:00 to 17:30","Ticket Price: R50","Wits Museum Opening this Monday, 25 April, 2022! Come and find out the culture and history of University of Witwatersrand. "]);
allEvents.push(["https://www.retrorabbit.co.za/content/images/2021/05/0033973_0.jpeg","Retro Rabbit Jump Session", "University of Witwatersrand, MSL Lab","23 April, 2022 from 8:00 to 17:30","Ticket Price: R250","The Retrorabbit jump session unites the designers and the developers to move South Africa foward. Students are placed in teams, these are randomly selected and are given a task to complete within a given time period. There are cool prizes to be won!!!!. "]);

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  doEvent(index){
    this.router.navigate(['details'],{ queryParams: { index: index }});
    
  }
}
