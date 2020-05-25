import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GoodsService } from '../service/goods.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(
    private goodService:GoodsService,
    private Route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var _this = this;
    $.ajax({
      type: "GET",
      url: _this.goodService.domain+"goods/"+_this.Route.snapshot.params.id,
      async: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      success: function (data) {
        console.log(data);
       
      
        // 图片填充
        $("#mainBox img").attr("src",_this.goodService.domain+"file/download/"+data.goodsPicture[0]+"/")
        for(var k = 0; k < data.goodsPicture.length; k++){
          console.log($("#picList img")[k].src = _this.goodService.domain+"file/download/"+data.goodsPicture[k]+"/");
        }
        
        $("#picList img").on("click",function(){
          console.log($("#mainBox img").attr("src",this.src));
        });

        // 绑定移动端滑动事件
        var startX,startY,moveEndX,moveEndY,X,Y;
        $("#mainBox img").on("touchstart", function(e) {
          startX = e.originalEvent.changedTouches[0].pageX,
          startY = e.originalEvent.changedTouches[0].pageY;
        });

        $("#mainBox img").on("touchend", function(e) {			
          moveEndX = e.originalEvent.changedTouches[0].pageX,
          moveEndY = e.originalEvent.changedTouches[0].pageY,
          X = moveEndX - startX,
          Y = moveEndY - startY;

          var src = $("#mainBox img").attr("src").match(/\/\w*\.\w*\//)[0];
          console.log(src.slice(1,src.length-1));
          for(var l = 0; l < data.goodsPicture.length; l++){
            console.log(data.goodsPicture[l] == src.slice(1,src.length-1));
            if(data.goodsPicture[l] == src.slice(1,src.length-1)){


            if ( X > 0 ) {
              if(l == data.goodsPicture.length-1){
                src = data.goodsPicture[0]
              }else
              src = data.goodsPicture[l+1]
            } else if ( X < 0 ) {
              if(l == 0){
                src = data.goodsPicture[data.goodsPicture.length-1]
              }else
              src = data.goodsPicture[l-1]
            }
              $("#mainBox img").attr("src",_this.goodService.domain+"file/download/"+src+"/");

            }
          }

         //右滑
          if ( X > 0 ) {
          // alert('右滑');		    	
          }
          //左滑
          else if ( X < 0 ) {
            // alert('左滑');	
          }
      });


        // 商品参数
        $("#right h3").html(data.goodsSubName);
        $("#right>p:nth-of-type(1) span").html("¥"+data.goodsPrice);
        $("#right>p:nth-of-type(2) span").html(data.goodsSource);
        $("#right>p:nth-of-type(4) span span").html(data.goodsInventory);

        // 商品选项
        var str = "";
        $("#parameter").html("");
        for(var i = 0;i< data.goodsParameter.length; i++){
          console.log(data.goodsParameter[i].goodsParameter);
          str += "<p style='font-size: 12px; height: 40px; color: gray;'>"+data.goodsParameter[i].goodsParameter+"<span style='  font-size: 15px; margin-left: 30px; color: black;'>";
          
          for(var j = 0; j< data.goodsParameter[i].goodsParameterOption.length; j++){
            if(data.goodsParameter[i].goodsParameterOption[j].goodsPicture){
              str += "<img style='width:40px; margin-right: 10px' title=\""+data.goodsParameter[i].goodsParameterOption[j].goodsOption+"\" src='"+_this.goodService.domain+"file/download/"+data.goodsParameter[i].goodsParameterOption[j].goodsPicture+"/' >";
            }else
              str += "<button style='border: #eee solid 1px; border-radius: 5px; margin-right: 5px; outline: none; background: white;'>"+data.goodsParameter[i].goodsParameterOption[j].goodsOption+"</button>"
          }
          
          str += "</span></p>";
        }
        $("#parameter").html(str);
        function resize(){
          if(innerWidth > 840){
            $("#parameter p").css("font-size","12px").css("height","40px");
            $("#parameter span").css("font-size","15px").css("margin-left","30px");
            $("#right>p:nth-of-type(1) span").css("font-size","26px").css("margin-left","30px");
            $("#right p:nth-of-type(1)").css("margin-top","30px");
            $("#parameter button").css("font-size","16px");

          }else if(innerWidth < 840 && innerWidth > 580){
            $("#parameter p").css("font-size","10px").css("height","25px");
            $("#parameter span").css("margin-left","8px");
            $("#right>p:nth-of-type(1) span").css("font-size","20px").css("margin-left","8px");
            $("#right p:nth-of-type(1)").css("margin-top","10px");
            $("#parameter button").css("font-size","12px");
          }else if(innerWidth < 580){
            console.log("sdfsdf");
            $("#parameter p").css("font-size","14px").css("height","35px").css("font-weight","500");
            $("#parameter span").css("margin-left","8px");
            $("#right p:nth-of-type(1) span").css("margin-left","8px").css("margin-top","20px").css("font-size","20px");
            $("#parameter button").css("font-size","16px").css("font-weight","600");
          }
        }
        resize();
        $(window).on("resize",resize);



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
