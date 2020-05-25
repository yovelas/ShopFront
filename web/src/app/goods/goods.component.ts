import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GoodsService } from '../service/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(
    private goodService:GoodsService
  ) { }

  ngOnInit(): void {
    var _this = this;
    $.ajax({
      type: "GET",
      url: _this.goodService.domain+"goods/1",
      async: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      success: function (data) {
        console.log(data);
        $("#right h3").html(data.goodsSubName);
        $("#price span").html("¥"+data.goodsPrice);
        $("#right>p:nth-of-type(2) span").html(data.goodsSource);
        $("#right>p:nth-of-type(4) span span").html(data.goodsInventory);

        for(var i = 0;i< data.goodsParameter.length; i++){
          console.log(data.goodsParameter[i]);
        }



        // 格式化商品详情文本
        var result, pattern = /\(\w*\,(\#)?\w*,\w*,\w*\)\:\:/g,text = data.goodsDescribe;
        while((result = pattern.exec(text)) != null) {  // 转样式表记为CSS样式格式
          var itmes = result[0].match(/\w*\,(\#)?\w*,\w*,\w*/)[0].split(",");
          console.log(itmes);
          itmes[0] = "text-align:" + itmes[0];
          itmes[1] = "color:" + itmes[1];
          itmes[2] = "display:" + itmes[2];
          itmes[3] = "font-size:" + itmes[3] + "px";
          var style = " style=\""+itmes.join(";")+"\"";
          text = text.slice(0,result.index)+"<p"+style+">"+text.slice(pattern.lastIndex,text.length-1)
        }
        // 转换结束标记，图片标记
        text = text.replace(/%%%/g,"</p>").replace(/\!\[\]\(/g,"<img style='width:100%' src='"+_this.goodService.domain+"/file/download/").replace(/\)/g,"/' />");
        console.log("a",text);
        $("#details").html(text);
      },
      error: function () {
        console.log("error")
      }
    })
  }

}
