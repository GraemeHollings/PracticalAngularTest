import { Component } from '@angular/core';
const axios = require('axios');

var id;
var name; 
var email;

//This query is sent to to the post method, it declares what values we want out of fakeJson.
let payload = {
  token: "wDVCeG8qswfdYnqRC205qQ",
  data: {
    id: "numberInt",
    name: "nameFirst",
    email: "internetEmail",
    //change this value for the amount of times you want the data to be requested. 
    _repeat: 1
  }
};

/*
  This post method takes the previously declared 'payload', and sends it to fakeJson. 
  To do this, we use axios, and then following the sending of this payload, the JSON object 
  is returned into "resp". with resp we can get access to all of the values that fakeJson has returned for us. 

*/
axios({
  method: "post",
  url: "https://app.fakejson.com/q",
  data: payload
}).then(function(resp) {
  //This is where the fake data is handled.
  id = resp.data.id;
  name = resp.data.name;
  email = resp.data.email;
  
  //this outputs the response data correctly to the browser console window.
  console.log(resp.data.id);
  console.log(resp.data.name);
  console.log(resp.data.email);

});


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Technical Test';
}
