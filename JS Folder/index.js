var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
  var allcountries = JSON.parse(xhr.responseText);
  console.log(allcountries);
  
  for (var i = 0; i < allcountries.length; i++){
    console.log(allcountries[i].name.common + ": " + allcountries[i].flag);
    console.log("Populations: ", allcountries[i].population);
    console.log("Regions: ", allcountries[i].region);
    console.log("Sub-regions: ", allcountries[i].subregion);
    } 
};

xhr.send();