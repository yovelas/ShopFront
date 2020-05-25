import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import * as $ from 'jquery';
import { GoodsService } from '../service/goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  constructor(
    private Route: ActivatedRoute,
    private goodService:GoodsService
  ) { }

  ngOnInit(): void {
    var _this = this;
    console.log(_this.Route.snapshot.params.key);
    $.ajax({
      type: "GET",
      url: _this.goodService.domain+"goods/list/"+_this.Route.snapshot.params.key,
      async: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      success: function (data) {
        console.log(data);
        function f(){for(var i = 0; i < data.length; i++){
          var article =  document.createElement("article");
          article.style.width = "200px";
          article.style.border = "#eee solid 1px";
          article.style.borderRadius = "5px";
          article.style.margin = "0 auto 10px";
          article.style.fontSize = "18px";
          var img =  document.createElement("img");
          img.style.width = "100%";
          img.style.marginBottom = "5px";
          img.style.borderTopLeftRadius = "5px";
          img.style.borderTopRightRadius = "5px";
          var p1 =  document.createElement("p");
          p1.style.fontWeight = "700px";
          p1.style.padding = "0px";
          p1.style.margin = "0px";
          p1.style.color = "#f40";
          p1.style.fontSize = "14px";
          p1.style.fontWeight = "700";
          p1.style.padding = "0px 5px";
          var p2 =  document.createElement("p");
          p2.style.padding = "0px";
          p2.style.margin = "0px";
          p2.style.padding = "0px 5px 10px 5px";
          p2.style.fontSize = "14px";

          p1.innerHTML = "¥ "+ data[i].goodsPrice;
          p2.innerHTML = data[i].goodsName;
          img.src = _this.goodService.domain + "file/download/" + data[i].goodsPicture[0]+"/";

          article.appendChild(img);
          article.appendChild(p1);
          article.appendChild(p2);
          $("section").append(article);
        }}
        function resize(){
          if(window.innerWidth < 480){
            var article = $("article");
            var img = $("article img");
            article.style.width = "200px";
          article.style.border = "#eee solid 1px";
          article.style.borderRadius = "5px";
          article.style.margin = "0 auto 10px";
          article.style.fontSize = "18px";  
          img.style.width = "100%";
          img.style.marginBottom = "5px";
          img.style.borderTopLeftRadius = "5px";
          img.style.borderTopRightRadius = "5px";

          }
          if(window.innerWidth < 480 && window.innerWidth > 370){
            $("article").css("width","180px");
          }else if(window.innerWidth < 370){
            $("article").css("width","calc(100% - 10px)");
            $("article img").css("width","80px").css("borderTopLeftRadius","5px")
              .css("borderBottomLeftRadius","5px").css("borderTopRightRadius","0px").css("marginBottom","0px").css("float","left");
            $("article p").css("float","left").css("width","calc(100% - 90px)").css("paddingLeft","10px");
            $("article p:nth-of-type(1)").css("paddingTop","6px");
            $("article p:nth-of-type(2)").css("line-height","1.5rem").css("height","3rem").css("overflow","hidden");
          }
        }
        resize();

        $(window).on("resize",resize);
        



        

      }, error: function () {
        console.log("error")
      }
    })

  }

}
