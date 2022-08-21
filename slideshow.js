$(function(){
    let imageList = ["imgs/sunset1.jpg","imgs/sunset2.jpg","imgs/sunset3.jpg","imgs/sunset4.jpg","imgs/sunset5.jpg"];
    var iterator = 0;
    $("#leftHalf").css("display","none");
    $("#rightHalf").css("display","none");
    $("#img1").click(function(){
        iterator = 0;
        setUpPic()


    });
    $("#img2").click(function(){
        iterator = 1;
        setUpPic();


    });
    $("#img3").click(function(){
        iterator = 2;
        setUpPic();


    });
    $("#img4").click(function(){
        iterator = 3;
        setUpPic();


    });
    $("#img5").click(function(){
        iterator = 4;
        setUpPic();


    });

    $("#bigImg").focusin(function(){
        $("#background-fade").css("pointer-events","none");
    });
    $("#bigImg").focusout(function(){
        $("#background-fade").css("pointer-events","all");
    });
    
    $("#background-fade").click(function(){
        $(this).animate({
            opacity: "0"
        },1000);
        
        
        $("#bigImg").animate({
            opacity: "0"
        },1000,function(){
            $("#image-container").css({"z-index": "auto"});
            $(this).css({"display":"none",
                "z-index":"auto"});
        });
    });

    $("#leftHalf").click(function(){
        if(iterator !== 0){
            iterator--;
            $("#leftHalf").css("display","none");
            $("#rightHalf").css("display","none");
            $("#mainImg").css("display","none");
            $("#mainImg").attr("src",imageList[iterator]);
            $("#bigImg").animate({
                width: `${Number($("#mainImg").css("width").replace("px","")) + 50}px`,
                height: `${Number($("#mainImg").css("height").replace("px","")) + 50}px`,
                marginLeft: `${((-Number($("#mainImg").css("width").replace("px","")) + 50) / 2)}px`,
                marginTop: `${((-Number($("#mainImg").css("height").replace("px","")) + 50) / 2)}px`
            },1500,function(){
                $("#mainImg").css("display","block");
                $("#leftHalf").css("display","block");
                $("#rightHalf").css("display","block");
            });
        }
        
    });
    $("#rightHalf").click(function(){
        if(iterator !== (imageList.length - 1)){
            iterator++;
            $("#leftHalf").css("display","none");
            $("#rightHalf").css("display","none");
            $("#mainImg").css("display","none");
            $("#mainImg").attr("src",imageList[iterator]);
            $("#bigImg").animate({
                width: `${Number($("#mainImg").css("width").replace("px","")) + 50}px`,
                height: `${Number($("#mainImg").css("height").replace("px","")) + 50}px`,
                marginLeft: `${((-Number($("#mainImg").css("width").replace("px","")) + 50) / 2)}px`,
                marginTop: `${((-Number($("#mainImg").css("height").replace("px","")) + 50) / 2)}px`
            },1500,function(){
                $("#mainImg").css("display","block");
                $("#leftHalf").css("display","block");
                $("#rightHalf").css("display","block");
            });
        }
    });
    $("#leftHalf").hover(function(){
        if(iterator !== 0){
            
            $("#left").css("display","block");
        }
        
    },function(){
        $("#left").css("display","none");
    });
    $("#rightHalf").hover(function(){
        if(iterator !== (imageList.length - 1)){
            
            $("#right").css("display","block");
        }
        
    },function(){
        $("#right").css("display","none");
    });
        
    function setUpPic(){
        $("#leftHalf").css("display","none");
        $("#rightHalf").css("display","none");
        $("#image-container").css({"z-index": "-1"});
        $("#background-fade").animate({
            opacity: ".7"
        },1500);
        $("#bigImg").css({"display":"flex",
                          "z-index":"2"});
        $("#mainImg").css("display","none");
        $("#mainImg").attr("src", imageList[iterator]);
        $("#bigImg").animate({
            width: `${Number($("#mainImg").css("width").replace("px","")) + 50}px`,
            height: `${Number($("#mainImg").css("height").replace("px","")) + 50}px`,
            marginLeft: `${((-Number($("#mainImg").css("width").replace("px","")) + 50) / 2)}px`,
            marginTop: `${((-Number($("#mainImg").css("height").replace("px","")) + 50) / 2)}px`,
            opacity: "1"
        },1500,function(){
            $("#mainImg").css("display","block");
            $("#leftHalf").css("display","block");
            $("#rightHalf").css("display","block");

        });
    }

    
});