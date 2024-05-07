  
  let url = "https://api.spoonacular.com/recipes/"


  function findFood(){
    let ing1 = $('.ing1').val();
    let ing2 = $('.ing2').val();
    let ing3 = $('.ing3').val();

    let url2 = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=a1dc2f1731664ae1b0fa347c34c67223&ingredients="+ing1+","+ing2+","+ing3+"&number=1";

    // let request = new XMLHttpsRequest();
    let request = new XMLHttpRequest();
    //get stuff

    request.open("GET", url2, true);

    request.onload = function(){

      let data = JSON.parse(this.response);
      //make sure it runs good
      if(request.status >= 200 && request.status <400)
      {
        console.log(data);

        foodImage = data[0].image;
        foodTitle = data[0].title;
        foodID = data[0].id;
        $(".foodName").text(foodTitle);
        $(".foodImg").attr(`src` , foodImage);

        let urlN = "https://api.spoonacular.com/recipes/"+foodID+"/information?apiKey=a1dc2f1731664ae1b0fa347c34c67223";

        let request2 = new XMLHttpRequest();

        request2.open("GET", urlN, true);

        request2.onload = function(){

          let newData = JSON.parse(this,response);

          if(request.status >= 200 && request.status <400){
             let resInstruct = newData.instructions;
             console.log(resInstruct);
            if(resInstruct == null){
              $(".instructions").text("No instructions available");
            }
            else {
              $(".instructions").text(resInstruct);
            }      
          }


        };
        request2.send();
      }

      //optional stuff but will prolly add on ltr
     /* if(request.status >= 200 && request.status <400){
       let resInstruct = newData.instructions;
       console.log(resInstruct);
      if(resInstruct == null){
        $(".instructions").text("No instructions available");
      }
      else{
        $(".instructions").text(resInstruct);
      }      
    }
  */

   };
    request.send();



  }
