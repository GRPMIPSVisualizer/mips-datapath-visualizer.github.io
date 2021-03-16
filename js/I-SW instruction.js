
function SWChecker() {
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
            $('#ALUSrc').css("animation-play-state", "paused");
            $('#MemWrite').css("animation-play-state", "paused");
            $('#superToggler').addClass("2");
        }

        if ($('#data21').css('animation-play-state').toLowerCase() == 'running') {
            $('#data8').css("animation-play-state", "paused");
            $('#data21').css("animation-play-state", "paused");
            $('#superToggler').addClass("3");
        }

        if ($('#data11').css('animation-play-state').toLowerCase() == 'running') {
            $('#data11').css("animation-play-state", "paused");
            $('#data22').css("animation-play-state", "paused");
            $('#data24').css("animation-play-state", "paused");
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
            $('#data4').css("animation-play-state", "running");
            $('#data42').css("animation-play-state", "running");
            $('#data5').css("animation-play-state", "running");
            $('#data20').css("animation-play-state", "running");
            $('#ALUSrc').css("animation-play-state", "running");
            $('#MemWrite').css("animation-play-state", "running");
            $('#superToggler').removeClass("2");
        }
        if ($('#superToggler').hasClass("3")) {
            $('#data8').css("animation-play-state", "running");
            $('#data21').css("animation-play-state", "running");
            $('#superToggler').removeClass("3");
        }
        if ($('#superToggler').hasClass("4")) {
            $('#data11').css("animation-play-state", "running");
            $('#data22').css("animation-play-state", "running");
            $('#data24').css("animation-play-state", "running");
            $('#superToggler').removeClass("4");
        }

    }
};

function SWBind(){
    /*暂停*/
    $('#pause').click(function () {
        SWChecker();
    });

    $("#data3").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data3').css("animation-play-state", "paused");
        $('#data3').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            swStep2();
        }
    });
    $("#data1").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data1').css("animation-play-state", "paused");
        $('#data1').css("animation", "none");
    });
    $("#data2").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data2').css("animation-play-state", "paused");
        $('#data2').css("animation", "none");
        refreshIM();
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
    $("#ALUSrc").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#ALUSrc').css("animation-play-state", "paused");
        $('#ALUSrc').css("animation", "none");
    });
    $("#MemWrite").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#MemWrite').css("animation-play-state", "paused");
        $('#MemWrite').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        if(sequenceFlag == 1){
            swStep3();
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
            swStep4();
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

    $("#data22").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data22').css("animation-play-state", "paused");
        $('#data22').css("animation", "none");
    });
    $("#data24").bind("animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration", function () {
        $('#data24').css("animation-play-state", "paused");
        $('#data24').css("animation", "none");
        refreshDM();
    });

}
function SWPlay(){
    sequenceFlag = 1;
    swStep1();
}
function SWStepForward(swStep){
    if(swStep == 1){
        swStep1();
    }
    else if(swStep == 2){

        swStep2();
    }
    else if(swStep == 3){

        swStep3();
    }
    else if(swStep == 4){

        swStep4();
    }

}

function swStep1(){
    setTimeout(SWBind, 1000);
    $('#fw').css("pointer-events", "none");
    $('#play').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data1').css({"animation":"pathing " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data2').css({"animation":"pathing2 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data3').css({"animation":"pathing3 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function swStep2(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data4').css({"animation":"pathing4 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data5').css({"animation":"pathing5 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data20').css({"animation":"pathing4 " + 4.9/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#ALUSrc').css({"animation":"ALUSrc " + 8/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#MemWrite').css({"animation":"MemWrite " + 8/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function swStep3(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data8').css({"animation":"pathing8 " + 5/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data21').css({"animation":"pathing21 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

function swStep4(){
    $('#fw').css("pointer-events", "none");
    $('#pause').css("pointer-events", "auto");
    $('#data11').css({"animation":"pathing11 " + 10/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data22').css({"animation":"pathing22 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
    $('#data24').css({"animation":"pathing24 " + 7/parseFloat(speed) + "s infinite","animation-play-state":"running"});
}

