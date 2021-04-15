
var url = window.location.href;
console.log(url);
var temp = url.split("?");
console.log(temp);
var a = 0;

for (var i = 0; i < trendingArr.length; i++) {
  if (trendingArr[i].id == temp[1]) {
    a = i;
    break;
  }
}
console.log(a);


  trendingTemplate =
    `<div class="width80">
        <div class="image">
          <img src="${ trendingArr[a].image }" alt="">
        </div>
      <div class="section-right">
        <div class="section-right-top">
          <p>${ trendingArr[a].name }</p>
          <p>${ trendingArr[a].price }</p>
        </div>
        <div class="section-right-bottom">
          <div class="product-attribute">
            <label>model</label>
            <p>${ trendingArr[a].model }</p>
          </div>
          <div class="product-attribute">
            <label>fabric</label>
            <p>${ trendingArr[a].fabric }</p>
          </div>
          <div class="product-attribute">
            <label>finish</label>
            <p>${ trendingArr[a].finish }</p>
          </div>
        </div>
      </div>
    </div>`

document.getElementById("trending-container").innerHTML = trendingTemplate;