
function LWChecker() {
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
        if ($('#data4').css('animation-play-state').toLowerCase() == 'running') {
            $('#data4').css("animation-play-state", "paused");
            $('#data42').css("animation-play-state", "paused");
            $('#data5').css("animation-play-state", "paused");
            $('#data20').css("animation-play-state", "paused");
            $('#MemRead').css("animation-play-state", "paused");
            $('#MemtoReg').css("animation-play-state", "paused");
            $('#ALUSrc').css("animation-play-state", "paused");
            $('#RegWrite').css("animation-play-state", "paused");
            $('#superToggler').addClass("2");
        }

        if ($('#data21').css('animation-play-state').toLowerCase() == 'running') {
            $('#data8').css("animation-play-state", "paused");
            $('#data21').css("animation-play-state", "paused");
            $('#superToggler').addClass("3");
        }

        if ($('#data22').css('animation-play-state').toLowerCase() == 'running') {
            $('#data22').css("animation-play-state", "paused");
            $('#superToggler').addClass("4");
        }
        if ($('#data11').css('animation-play-state').toLowerCase() == 'running') {
            $('#data11').css("animation-play-state", "paused");
            $('#data23').css("animation-play-state", "paused");
            $('#superToggler').addClass("5");
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
            $('#data4').css("animation-play-state", "running");
            $('#data42').css("animation-play-state", "running");
            $('#data5').css("animation-play-state", "running");
            $('#data20').css("animation-play-state", "running");
            $('#MemRead').css("animation-play-state", "running");
            $('#MemtoReg').css("animation-play-state", "running");
            $('#ALUSrc').css("animation-play-state", "running");
            $('#RegWrite').css("animation-play-state", "running");
            $('#superToggler').removeClass("2");
        }
        if ($('#superToggler').hasClass("3")) {
            $('#data8').css("animation-play-state", "running");
            $('#data21').css("animation-play-state", "running");
            $('#superToggler').removeClass("3");
        }
        if ($('#superToggler').hasClass("4")) {
            $('#data22').css("animation-play-state", "running");
            $('#superToggler').removeClass("4");
        }
        if ($('#superToggler').hasClass("5")) {
            $('#data11').css("animation-play-state", "running");
            $('#data23').css("animation-play-state", "running");
            $('#superToggler').removeClass("5");
        }

    }
};
function LWBind(){

    $('#pause').click(function () {
        LWChecker();
    });

    $("#data3").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data3').css("animation-play-state", "paused");
        $('#data3').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            lwStep2();
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


    $("#data4").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data4').css("animation-play-state", "paused");
        $('#data4').css("animation", "none");
    });
    $("#data42").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data5").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data5').css("animation-play-state", "paused");
        $('#data5').css("animation", "none");
    });
    $("#data20").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data20').css("animation-play-state", "paused");
        $('#data20').css("animation", "none");
    });
    $("#MemRead").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#MemRead').css("animation-play-state", "paused");
        $('#MemRead').css("animation", "none");
    });
    $("#MemtoReg").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#MemtoReg').css("animation-play-state", "paused");
        $('#MemtoReg').css("animation", "none");
    });
    $("#ALUSrc").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#ALUSrc').css("animation-play-state", "paused");
        $('#ALUSrc').css("animation", "none");
    });
    $("#RegWrite").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#RegWrite').css("animation-play-state", "paused");
        $('#RegWrite').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            lwStep3();
        }
    });




    $("#data8").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data8').css("animation-play-state", "paused");
        $('#data8').css("animation", "none");
    });
    $("#data21").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data21').css("animation-play-state", "paused");
        $('#data21').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            lwStep4();
        }
    });

    $("#data22").one("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data22').css("animation-play-state", "paused");
        $('#data22').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            lwStep5();
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

    $("#data23").one("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data23').css("animation-play-state", "paused");
        $('#data23').css("animation", "none");
    });

}
function LWPlay(){
    sequenceFlag = 1;
    lwStep1();
}

function LWStepForward(lwStep){
    if(lwStep == 1){
        lwStep1();
    }
    else if(lwStep == 2){

        lwStep2();
    }
    else if(lwStep == 3){

        lwStep3();
    }
    else if(lwStep == 4){

        lwStep4();
    }
    else if(lwStep == 5){

        lwStep5();
    }
}

function lwStep1(){
    setTimeout(LWBind, 1000);
    console.log("StartLW");
    $('#fw').css("pointer-events", "none");
    $('#play').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data1').css({"animation":"pathing " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data2').css({"animation":"pathing2 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data3').css({"animation":"pathing3 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function lwStep2(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data4').css({"animation":"pathing4 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data5').css({"animation":"pathing5 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data20').css({"animation":"pathing4 " + 4.9/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#MemRead').css({"animation":"MemRead " + 8/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#MemtoReg').css({"animation":"MemtoReg " + 8/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#ALUSrc').css({"animation":"ALUSrc " + 8/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#RegWrite').css({"animation":"RegWrite " + 8/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function lwStep3(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data8').css({"animation":"pathing8 " + 5/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data21').css({"animation":"pathing21 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function lwStep4(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data22').css({"animation":"pathing22 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function lwStep5(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data11').css({"animation":"pathing11 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data23').css({"animation":"pathing23 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

