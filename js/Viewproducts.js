window.addEventListener("load",function(){
   
    // ----------------SLIDER SCRIPT START---------------------
    var checkbox = document.querySelector(".glide");
    var obj = {
    type: "carousel",
    hoverpause: checkbox.checked,
    autoplay: 2500,
    startAt: 0,
    perView: 1,
    };

    new Glide(".glide", obj).mount();

    checkbox.addEventListener("change", function () {
    glide.update({
        hoverpause: checkbox.checked,
    });
    });
 // ----------------SLIDER SCRIPT END---------------------

 displayItem();


 //Adding animations and event listners

    var card=document.getElementsByClassName("card");
    for(var i=0;i<card.length;i++)
    {
        card[i].addEventListener("mouseover",function(){
            this.firstChild.style.display="";
            
        });

        card[i].addEventListener("mouseout",function(){
           
           this.firstChild.style.display="none";
        });
    }

 // Adding functionality to cart button
 
    var products_data=JSON.parse(localStorage.getItem("products"));
    var user_data=JSON.parse(localStorage.getItem("user"));
    var currentUser_data=JSON.parse(localStorage.getItem("currentUser"));   

    var cart_btn=document.getElementsByClassName("cart_btn");
    var wish_btn=document.getElementsByClassName("wish_btn");
    var both_div=document.getElementsByClassName("both_div");
    for(var i=0;i<cart_btn.length;i++)
    {
        cart_btn[i].addEventListener("click",function(){
           var index=+this.getAttribute("value");
           var obj=products_data[index];
           for(var j=0;j<user_data.length;j++)
           {
               if(user_data[j].email==currentUser_data.email)
               {
                   if(user_data[j].cart==null)
                   {
                       user_data[j].cart=[];
                      
                   }
                  
                       user_data[j].cart.push(obj);
                       localStorage.setItem("user",JSON.stringify(user_data));
                       alert("Added to cart");
               }
           }
            
        });

        wish_btn[i].addEventListener("click",function(){
            var index=+this.getAttribute("value");
            var obj=products_data[index];
            for(var j=0;j<user_data.length;j++)
            {
                if(user_data[j].email==currentUser_data.email)
                {
                    if(user_data[j].wishlist==null)
                    {
                        user_data[j].wishlist=[];
                        
                    }
                    
                        user_data[j].wishlist.push(obj);
                        localStorage.setItem("user",JSON.stringify(user_data));
                        alert("Added to wishlist");
                }
            }
        });

        both_div[i].addEventListener("click",function(){
            var details=this.parentElement.firstChild.firstChild.getAttribute("value");
            localStorage.setItem("currentProduct",details);
            window.location.href="../Product.html";

        });
        
    }

});
function addCartButton()
{

}
function displayItem()
{
    
    var category_data=JSON.parse(localStorage.getItem("category"));
    var type_data=JSON.parse(localStorage.getItem("type"));
    var subtype_data=JSON.parse(localStorage.getItem("subtype"));
    var products_data=JSON.parse(localStorage.getItem("products"));
    var show=document.getElementById("show");
    
    if(category_data!=null && type_data!=null && subtype_data!=null && products_data!=null)
    {
        show.innerHTML="";
        for(var i=0;i<category_data.length;i++)
        {
            var found=false;
            var h3=document.createElement("h3");
            h3.innerHTML=category_data[i].name;
            var div1=document.createElement("div");
            div1.setAttribute("class","content");

            for(var j=0;j<products_data.length;j++)
            {
                if(products_data[j].category==category_data[i].name)
                {
                    var div2=document.createElement("div");
                    div2.style.overflow="hidden";
                    div2.setAttribute("class","card");

                    ///////////////////////////////////////////////

                    var div2_1=document.createElement("div");
                    div2_1.setAttribute("id","icons");
                    div2_1.style.display="none";

                    var div2_1_1=document.createElement("div");
                    div2_1_1.setAttribute("class","cart_btn");
                    div2_1_1.setAttribute("value",j);
                    var i1=document.createElement("i");
                    i1.setAttribute("class","fas fa-shopping-cart");
                    var i2=document.createElement("i");
                    i2.setAttribute("class","far fa-heart");
                    var div2_1_2=document.createElement("div");
                    div2_1_2.setAttribute("class","wish_btn");
                    div2_1_2.setAttribute("value",j);
                    div2_1_1.append(i1);
                    div2_1_2.append(i2);
                    div2_1.append(div2_1_1,div2_1_2);
                    //this.append(div2_1);
                    div2.append(div2_1);
           

                    ///////////////////////////////////////////////

                    var div_both=document.createElement("div");
                    div_both.setAttribute("class","both_div");

                    var img=document.createElement("img");
                    img.style.position="absolute";
                    img.setAttribute("src",products_data[j].image_url_1);

                    var div2_2=document.createElement("div");
                    div2_2.setAttribute("id","details");
                    var p1=document.createElement("p");
                    p1.innerHTML=products_data[j].name.substring(0,20)+" ...";
                    var p2=document.createElement("p");
                    p2.innerHTML="&#8377; "+products_data[j].price;
                    div2_2.append(p1,p2);
                    div_both.append(img,div2_2);
                    div2.append(div_both);
                    div1.append(div2);
                    found=true;
                }
            }
            if(found==false)
            {
                var h4=document.createElement("h4");
                h4.innerHTML="-------&nbsp;&nbsp;No Data Available&nbsp;&nbsp;-------";
                div1.append(h4);
            }

            show.append(h3,div1);
        }
    }
    else
    {
        alert("No data available to show");
    }

}
