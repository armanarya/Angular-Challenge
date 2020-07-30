import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  content='';
  title = 'Arman Arya';
}

function myFunction(){
  document.getElementById("text").style.visibility = "visible"
}