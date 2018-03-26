/**
 * Created by kdkjPC on 2018/2/6.
 */
/**
 * 获取屏幕高度
 */
var h = document.documentElement.clientHeight;
$("#zero").css("height",h+'px');
$("#one").css("height",h+'px');
$("#three").css("height",h+'px');
/**
 * 点击制作
 */
$("#zero .button").on("click",function(){
    var height = document.documentElement.clientHeight;
    $("#zero").css({
        'margin-top':'-'+height+"px",
        'transition':'all 1s ease'
    })
});
/**
 * 确定制作
 */
$("#one .button").on("click",function(){
    var m=isNull();
    if(!m) {
        $("body").toast({
            isCenter:true,
            duration:1000,
            animateIn:'bounceIn-hastrans',
            animateOut:'bounceOut-hastrans',
            content:'请输入内容和选择内容！'
        });
        return false;
    }
    trans();
    $("#zero").css({
        'margin-top':"0",
        'transition':'all 0s ease'
    });
    $("#three").removeClass("hide");
    $("#zero").find(".logo").removeClass("hide");
    $("#zero").find("header").css("top","15px");
    $("#zero .year").addClass("yearPanit");
    $("#zero .address").addClass("addressPanit");
    $("#zero .button").addClass("hide");
    $("#zero .code").removeClass("hide");
    qrcode();
    $("#zero").find(".title").find("p").hide();
    panit();
});
function qrcode(){
    var url = window.location.href;
    $("#zero .code").qrcode(url); //任意字符串
}
function isNull(){
    var o=$("#one");
    var o1 = o.find(".input").find(".name").val();
    var o2 = o.find(".input").find(".l").val();
    var o3 = o.find(".input").find(".r").val();
    var o4 = o.find(".input").find(".ble").val();
    var o5 = o.find(".input").find(".addr").val();
    var o6 = o.find(".input").find(".yes").attr("data-id");
    console.log(o6);
    console.log(o5);
    if(o1==""||o2==""||o3==""||o4==""||o5==""||o6==undefined) {
        return false;
    }else {
        return true;
    }
}
/**
 * 重新制作
 */
$("#three .button").on("click",function(){
    window.location.reload()
});
function trans(){
    var z= $("#zero");
    var o = $("#one");
    var count = o.find(".input").find(".yes").attr("data-id");
    z.find(".title").find("div").text(o.find(".input").find(".name").val());
    $("title").text(o.find(".input").find(".name").val()+"邀您一起定制专属新年海报");
    var $t =z.find(".title").find("div").hide();
    $t.show().arctext({radius: 300});
    z.find(".img").find(".left").html(o.find(".input").find(".l").val());
    z.find(".img").find(".right").html(o.find(".input").find(".r").val());
    z.find(".img").find("img").attr("src","img/typeBg"+count+".jpg");
    z.find(".year").find(".yearY span").html(o.find(".input").find(".ble").val());
    z.find(".bottom").find(".address p").html(o.find(".input").find(".addr").val());
}
$(".typeImg").on("click",function(){
    $(".typeImg").removeClass("yes");
    $(this).addClass("yes");
    $(".typeActive").addClass("hide");
    $(this).find(".typeActive").removeClass("hide");
});
var $title = $('#zero').find(".title").find("p").hide();
    $title.show().arctext({radius: 300});

function panit(){
    html2canvas(document.querySelector("#zero")).then(function(canvas) {
        var a = canvas.toDataURL();
        var img = '<img class="pan" src="'+a+'">';
        $("#three").find(".canvas").append(img);
        $(".pan").load(function(){
            $(".loading").hide();
        });
    });
}
