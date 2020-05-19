import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Button } from 'protractor';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $.ajax({
      type: "GET",
      url: "http://localhost:8080/goods/type",
      async: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      success: function (data) {
        console.log(data);
        $(".list-group").html("");
        for(var i = 0;i<data.length;i++){
          var button = <HTMLButtonElement>document.createElement("button");
          button.innerHTML = data[i].goodsMainTypeName;
          $(button).addClass("list-group-item list-group-item-action");
          $(button).hover(
            function(){
              $(this).css("color","red");
            },function(){
              $(this).css("color","#495057");
          })
          $(button).attr("id",data[i].goodsMainTypeId);

          $(".list-group").append($(button));
        }
        
        console.log($("#rightContent").html(""));
        for(var j = 0; j<data[0].goodsSubTypes.length; j++){
            console.log(data[0].goodsSubTypes[j]);
            var article = <HTMLElement>document.createElement("article");
            $(article).css("text-align","center");
            if(window.innerWidth<450){
              article.innerHTML = "<img width=80 height=80 src='http://localhost:8080/file/download/"+data[0].goodsSubTypes[j].goodsSubTypePicture+"/'><p style='text-align:center'>" + data[0].goodsSubTypes[j].goodsSubTypeName + "</p>";
            }else{
              article.innerHTML = "<img src='http://localhost:8080/file/download/"+data[0].goodsSubTypes[j].goodsSubTypePicture+"/'><p style='text-align:center'>" + data[0].goodsSubTypes[j].goodsSubTypeName + "</p>";
            }
            console.log($("#rightContent").find("article"));
            $("#rightContent").append(article);
          }


        var resize = function(){
          console.log(window.innerWidth);
          if(window.innerWidth<450){
            $("#rightContent img").css("width","80px").css("height","80px")
          }
        }
        $(window).on("resize",resize)
        
        $(".list-group").on("click","button",function(e){
          var list = data[--e.target.id].goodsSubTypes;
          console.log("www",e.target.id,list);
          console.log($("#rightContent").html(""));
          for(var i = 0; i<list.length; i++){
            console.log(list[i]);
            var article = <HTMLElement>document.createElement("article");
            $(article).css("text-align","center");
            if(window.innerWidth<450){
              article.innerHTML = "<img width=80 height=80 src='http://localhost:8080/file/download/"+list[i].goodsSubTypePicture+"/'><p style='text-align:center'>" + list[i].goodsSubTypeName + "</p>";
            }else{
              article.innerHTML = "<img src='http://localhost:8080/file/download/"+list[i].goodsSubTypePicture+"/'><p style='text-align:center'>" + list[i].goodsSubTypeName + "</p>";
            }
            console.log($("#rightContent").find("article"));
            $("#rightContent").append(article);
          }
        });

      },
      error: function () {
        console.log("error")
      }
    })
  }

}
