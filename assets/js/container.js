
//start catalog

var sCatalog= "";
for (var i = 0; i < catalogArr.length; i++) {
  sCatalog += `<li>
  <a href="catalog.html">
    <img src= "${ catalogArr[i].image }" alt="">
    <h3>${ catalogArr[i].name }</h3>
  </a>
  </li>`
}
document.getElementById("catalog-list").innerHTML = sCatalog;

//end catalog

//start trending

var sTrending = "";
for (var i = 0; i < trendingArr.length; i++) {
  console.log(trendingArr[i]);
  sTrending +=
    `<div class="trending-list-product">
      <a href="trending.html?${ trendingArr[i].id }">
        <img src="${ trendingArr[i].image }" alt="">
      </a>
      <div class="trending-list-product-bottom">
        <h3>${ trendingArr[i].name }</h3>
        <div class="price">
          <div>
            <span>vietnam retail</span>
            <span class="from">from</span>
          </div>
          <span>$ ${ trendingArr[i].price }</span>
        </div>
      </div>
    </div>`;
}
document.getElementById("product-list").innerHTML = sTrending;
//end trending
