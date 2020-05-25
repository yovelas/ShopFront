import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GoodsService } from '../../service/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private goodService:GoodsService
  ) { }

  ngOnInit(): void {
    var _this = this;
    $.ajax({
      type: "GET",
      url: _this.goodService.domain+"goods",
      async: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      success: function (data) {
        console.log(data);
        console.log($("article")[0]);
        var article = $("article");
        for(var i = 0;i<article.length;i++){
          console.log(data[i].goodsDescribe);
          $($($(article)[i]).children("p")[0]).html(data[i].goodsName);
          $($($(article)[i]).children("p")[1]).html(data[i].goodsSubName);
          console.log($($($(article)[i]).children("img")[0]).attr("src",_this.goodService.domain+"file/download/"+data[i].goodsPicture[0]+"/"));
        }
      },
      error: function () {
        console.log("error")
      }
    })

  }

}
