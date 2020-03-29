document.getElementById('boldB').addEventListener('click',function(){
    if(document.getElementById('textArea').style.fontWeight=='bold'){
        document.getElementById('textArea').style.fontWeight= 'normal'
    }else{
        document.getElementById('textArea').style.fontWeight='bold'
    }
})
document.getElementById('italic').addEventListener('click',function(){
    if(document.getElementById('textArea').style.fontStyle=='italic'){
        document.getElementById('textArea').style.fontStyle=''
    }else{
        document.getElementById('textArea').style.fontStyle='italic'
    }
})
document.getElementById('underline').addEventListener('click',function(){
    if(document.getElementById('textArea').style.textDecoration=='underline'){
        document.getElementById('textArea').style.textDecoration=''
    }else{document.getElementById('textArea').style.textDecoration='underline'}
    }
)
document.getElementById('size').onchange=function(){
    document.getElementById('textArea').style.fontSize = document.getElementById('size').value
}
document.getElementById('fam').onchange=function(){
    document.getElementById('textArea').style.fontFamily = document.getElementById('fam').value

}
    $(".b").hide()
    $(".c").mouseleave(function(){
        $(".b").hide()
        $(".c").css("opacity",1)
    })


    $("#im1").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b1").show();
    })
    
    $("#im2").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b2").show();
        
    })


    $("#im3").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b3").show();
    })

    $("#im4").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b4").show();
    })

    $("#im5").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b5").show();
    })

    $("#im6").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b6").show();
    })

