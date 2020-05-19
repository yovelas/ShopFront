import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/goods",
      async: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      success: function (data) {
        console.log(data);
        console.log($("article")[0]);
        var article = $("article");
        for(var i = 0;i<article.length;i++){
          $($($(article)[i]).children("p")[0]).html(data[i].goodsName);
          $($($(article)[i]).children("p")[1]).html(data[i].goodsSubName);
          console.log($($($(article)[i]).children("img")[0]).attr("src","http://localhost:8080/file/download/"+data[i].goodsPicture+"/"));
        }
      },
      error: function () {
        console.log("error")
      }
    })

  }

}
