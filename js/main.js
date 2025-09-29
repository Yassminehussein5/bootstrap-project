

var images = [
    "http://placekitten.com/500/200",
    "http://placekitten.com/499/200",
    "http://placekitten.com/501/200",
    "http://placekitten.com/500/199"
]
var mydiv = document.getElementById("mydiv");

var myimageindex = 0;
function hello(){
    mydiv.style.backgroundImage = `url("${images[myimageindex]}")`
    myimageindex += 1; 

    if(myimageindex == images.length){
        myimageindex = 0;
    }
}


//  setInterval(hello , 1500);





// $("#btn").click(function(){
//     $('#mydiv').animate({width: "100%" }, 1000 , function(){
//         $('#mydiv').animate({height: "90vh" }, 1000,function(){
             // setInterval(hello , 1500);
//         } )
//     })
// })


$("#mydiv").animate({width: '80%'} , 1000 , function(){
    $("#mydiv").animate({height: '90vh'} , 1000 , function(){
        $("#myh1").fadeIn(1000 , function(){
            $(".player").eq(0).fadeIn(1000 , function(){
                $(".player").eq(1).fadeIn(1000 , function(){
                    $(".player").eq(2).fadeIn(1000) 
                }) 
            })
        })
    })