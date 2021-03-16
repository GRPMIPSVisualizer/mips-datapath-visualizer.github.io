
function JChecker() {
    if ($('#pause').hasClass("pause")) {
        $('#pause').removeClass("pause").addClass("play");
        $('#halfSpeed').css("pointer-events", "none");
        $('#doubleSpeed').css("pointer-events", "none");
        if ($('#data3').css('animation-play-state').toLowerCase() == 'running') {
            $('#data1').css("animation-play-state", "paused");
            $('#data2').css("animation-play-state", "paused");
            $('#data3').css("animation-play-state", "paused");
            $('#superToggler').addClass("1");

        }
        if ($('#data42').css('animation-play-state').toLowerCase() == 'running') {
            $('#data42').css("animation-play-state", "paused");
            $('#data28').css("animation-play-state", "paused");
            $('#Jump').css("animation-play-state", "paused");
            $('#superToggler').addClass("2");
        }

        if ($('#data7').css('animation-play-state').toLowerCase() == 'running') {
            $('#data73').css("animation-play-state", "paused");
            $('#data72').css("animation-play-state", "paused");
            $('#data29').css("animation-play-state", "paused");
            $('#data30').css("animation-play-state", "paused");
            $('#superToggler').addClass("3");
        }

        if ($('#data11').css('animation-play-state').toLowerCase() == 'running') {
            $('#data11').css("animation-play-state", "paused");
            $('#superToggler').addClass("4");
        }
    }

    else if ($('#pause').hasClass("play")) {
        $('#pause').removeClass("play").addClass("pause");
        $('#halfSpeed').css("pointer-events", "auto");
        $('#doubleSpeed').css("pointer-events", "auto");
        if ($('#superToggler').hasClass("1")) {
            $('#data1').css("animation-play-state", "running");
            $('#data2').css("animation-play-state", "running");
            $('#data3').css("animation-play-state", "running");
            $('#superToggler').removeClass("1");
        }

        if ($('#superToggler').hasClass("2")) {
            $('#data42').css("animation-play-state", "running");
            $('#data28').css("animation-play-state", "running");
            $('#Jump').css("animation-play-state", "running");
            $('#superToggler').removeClass("2");
        }
        if ($('#superToggler').hasClass("3")) {
            $('#data73').css("animation-play-state", "running");
            $('#data72').css("animation-play-state", "running");
            $('#data29').css("animation-play-state", "running");
            $('#data30').css("animation-play-state", "running");
            $('#superToggler').removeClass("3");
        }
        if ($('#superToggler').hasClass("4")) {
            $('#data11').css("animation-play-state", "running");
            $('#superToggler').removeClass("4");
        }

    }
};
function JBind(){
    /*暂停*/
    $('.fas.fa-pause').click(function () {
        JChecker();
    });

    $("#data3").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data3').css("animation-play-state", "paused");
        $('#data3').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            jStep2();
        }
    });
    $("#data1").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data1').css("animation-play-state", "paused");
        $('#data1').css("animation", "none");
    });
    $("#data2").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        refreshIM();
        $('#data2').css("animation-play-state", "paused");
        $('#data2').css("animation", "none");
    });


    $("#data42").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data28").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data28').css("animation-play-state", "paused");
        $('#data28').css("animation", "none");
    });
    $("#Jump").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#Jump').css("animation-play-state", "paused");
        $('#Jump').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            jStep3();
        }
    });


    $("#data72").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data72').css("animation-play-state", "paused");
        $('#data72').css("animation", "none");
    });
    $("#data73").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data73').css("animation-play-state", "paused");
        $('#data73').css("animation", "none");
    });
    $("#data29").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data29').css("animation-play-state", "paused");
        $('#data29').css("animation", "none");
    });
    $("#data30").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data30').css("animation-play-state", "paused");
        $('#data30').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            jStep4();
        }
    });


    $("#data11").one("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data11').css("animation-play-state", "paused");
        $('#data11').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        Unbind();

            if(sequenceFlag == 1){
                $("#displayArea").val("line " + lineNum + " animation finished").change();
            }

    });
}
function JPlay(){
    sequenceFlag = 1;
    jStep1();
}
function JStepForward(jStep){
    if(jStep == 1){
        jStep1();
    }
    else if(jStep == 2){

        jStep2();
    }
    else if(jStep == 3){

        jStep3();
    }
    else if(jStep == 4){

        jStep4();
    }

}

function jStep1(){
    setTimeout(JBind, 1000);
    $('#fw').css("pointer-events", "none");
    $('#play').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data1').css({"animation":"pathing " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data2').css({"animation":"pathing2 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data3').css({"animation":"pathing3 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function jStep2(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data28').css({"animation":"pathing28 " + 5/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#Jump').css({"animation":"Jump " + 8/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function jStep3(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data72').css({"animation":"pathing72 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data73').css({"animation":"pathing73 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data29').css({"animation":"pathing29 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data30').css({"animation":"pathing30 " + 14/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function jStep4(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data11').css({"animation":"pathing11 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}
