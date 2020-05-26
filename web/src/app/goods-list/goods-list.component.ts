import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import * as $ from 'jquery';
import { GoodsService } from '../service/goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css',
    './goods-list.component.list.css',
    './goods-list.component.large.css']
})
export class GoodsListComponent implements OnInit {

  constructor(
    private Route: ActivatedRoute,
    private Router: Router,
    private goodService:GoodsService
  ) { }

  ngOnInit(): void {
    var _this = this;
    
    // 默认禁用 list 样式规则
    var listStyle = <CSSStyleSheet>document.styleSheets[8];
    listStyle.disabled = true;

    $.ajax({
      type: "GET",
      url: _this.goodService.domain+"goods/list/"+_this.Route.snapshot.params.key,
      async: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      success: function (data) {
        console.log("goodslist:",data);

        var section = document.querySelector("section");  // 查找父元素
        var article =  section.querySelector("article");  // 查找子元素

        var cloneArticle = article.cloneNode();     // Clone a node
        article.childNodes.forEach(function(node){  // and clone all child node of cloned node 
          cloneArticle.appendChild(node.cloneNode());
        });

        console.log(cloneArticle);

        for(var j = section.childElementCount; j > 0; j--) {  // 清空已有的子节点
          section.removeChild(section.childNodes[j-1]);
        }

        for(var i = 0; i < data.length; i++){   // Fill data and append to parent node
          var df = new DocumentFragment();      // Create a DocumentFragment
          df.appendChild(cloneArticle.cloneNode());   // Append a node of cloned node above
          cloneArticle.childNodes.forEach(function(element){  // and clone all child node of cloned node
            df.childNodes[0].appendChild(element.cloneNode());
          });
          df.querySelector("article").setAttribute("goods",data[i].goodsId);
          df.childNodes[0].childNodes[1].textContent = "¥ "+ data[i].goodsPrice;  // Fill price
          df.childNodes[0].childNodes[2].textContent = data[i].goodsName;         // File goodsName
          df.childNodes[0].childNodes[3].textContent = data[i].goodsSubName;         // File goodsName
          df.querySelector("img").src = _this.goodService.domain + "file/download/" + data[i].goodsPicture[0]+"/";  // File picture
          section.appendChild(df);
        } 

        document.querySelectorAll("article").forEach(function(e){
          e.addEventListener("click",function(){
            console.log(this.getAttribute("goods"));
            _this.Router.navigate(['goods/'+this.getAttribute("goods")]);
          })
        }) // Handler ending

      }, error: function () {
        console.log("error")
      }
    })
  }

  list(){   // 列表显示
    console.log("列表显示");
    var listStyle = <CSSStyleSheet>document.styleSheets[8];
    var largeStyle = <CSSStyleSheet>document.styleSheets[9];
    listStyle.disabled = false;
    largeStyle.disabled = true;
  }

  large(){  // 方格显示
    console.log("方格显示");
    var listStyle = <CSSStyleSheet>document.styleSheets[8];
    var largeStyle = <CSSStyleSheet>document.styleSheets[9];
    largeStyle.disabled = false;
    listStyle.disabled = true;
  }
}
