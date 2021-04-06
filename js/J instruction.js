
function JChecker() {
    if ($('#pause').hasClass("fa-pause")) {
        if (insNum == 1) {
            $('#data1').css("animation-play-state", "paused");
            $('#data2').css("animation-play-state", "paused");
            $('#data3').css("animation-play-state", "paused");
        }
        else if (insNum == 2) {
            $('#data42').css("animation-play-state", "paused");
            $('#data28').css("animation-play-state", "paused");
            $('#Jump').css("animation-play-state", "paused");
        }

        else if (insNum == 3) {
            $('#data73').css("animation-play-state", "paused");
            $('#data72').css("animation-play-state", "paused");
            $('#data29').css("animation-play-state", "paused");
            $('#data30').css("animation-play-state", "paused");
            $('#data30_0').css("animation-play-state", "paused");
        }

        else if (insNum == 4) {
            $('#data11').css("animation-play-state", "paused");
            $('#data11_0').css("animation-play-state", "paused");
        }
        $('#halfSpeed').css("pointer-events", "none");
        $('#doubleSpeed').css("pointer-events", "none");
        $('#halfSpeed').css("background-color", "grey");
        $('#doubleSpeed').css("background-color", "grey");
        $('#pause').removeClass("fa-pause").addClass("fa-play");
        $('#pause').attr('title', 'play');
    }

    else if ($('#pause').hasClass("fa-play")) {

        if (insNum == 1) {
            $('#data1').css("animation-play-state", "running");
            $('#data2').css("animation-play-state", "running");
            $('#data3').css("animation-play-state", "running");
        }
        else if (insNum == 2) {
            $('#data42').css("animation-play-state", "running");
            $('#data28').css("animation-play-state", "running");
            $('#Jump').css("animation-play-state", "running");
        }
        else if (insNum == 3) {
            $('#data73').css("animation-play-state", "running");
            $('#data72').css("animation-play-state", "running");
            $('#data29').css("animation-play-state", "running");
            $('#data30').css("animation-play-state", "running");
            $('#data30_0').css("animation-play-state", "running");
        }
        else if (insNum == 4) {
            $('#data11').css("animation-play-state", "running");
            $('#data11_0').css("animation-play-state", "running");
        }
        $('#halfSpeed').css("pointer-events", "auto");
        $('#doubleSpeed').css("pointer-events", "auto");
        $('#halfSpeed').css("background-color", "blue");
        $('#doubleSpeed').css("background-color", "blue");
        $('#pause').removeClass("fa-play").addClass("fa-pause");
        $('#pause').attr('title', 'pause');

    }
};
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
    playing = true;
    transparentDiagram();
    $('.fas.fa-pause').click(function () {
        JChecker();
    });

    $("#data3").bind("animationend", function () {
        playing = false;
        $('#data3').css("animation-play-state", "paused");
        $('#data3').css("animation", "none");
        $('#data3_1').css("opacity", "1");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('pc2insMem').setAttribute('opacity', '0.2');
        document.getElementById('pc2adder1').setAttribute('opacity', '0.2');
        document.getElementById('const4').setAttribute('opacity', '0.2');
        document.getElementById('use453').setAttribute('opacity', '0.2');
        document.getElementById('use455').setAttribute('opacity', '0.2');
        $('#instructionTable').css('opacity', '0.2');
        document.getElementById('adder1').setAttribute('opacity', '0.2');
        document.getElementById('circle385').setAttribute('opacity', '0.2');
        if(sequenceFlag == 1){
            jStep2();
        }
    });
    $("#data1").bind("animationend", function () {
        $('#data1').css("animation-play-state", "paused");
        $('#data1').css("animation", "none");
    });
    $("#data2").bind("animationend", function () {
        refreshIM();
        $('#data2').css("animation-play-state", "paused");
        $('#data2').css("animation", "none");
    });

    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    $('#play').css("pointer-events", "none");
    $('#play').css("color", "grey");
    document.getElementById('pc2insMem').setAttribute('opacity', '1');
    document.getElementById('pc2adder1').setAttribute('opacity', '1');
    document.getElementById('const4').setAttribute('opacity', '1');
    document.getElementById('use453').setAttribute('opacity', '1');
    document.getElementById('use455').setAttribute('opacity', '1');
    $('#instructionTable').css('opacity', '1');
    document.getElementById('adder1').setAttribute('opacity', '1');
    document.getElementById('circle385').setAttribute('opacity', '1');


    $('#data1').css({"animation":"pathing " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data2').css({"animation":"pathing2 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data3_1').css("opacity", "0");
    $('#data3').css({"animation":"pathing3 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 1;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function jStep2(){
    playing = true;
    $("#data42").bind("animationend", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data28").bind("animationend", function () {
        $('#data28').css("animation-play-state", "paused");
        $('#data28').css("animation", "none");
    });
    $("#Jump").bind("animationend", function () {
        playing = false;
        $('#Jump').css("animation-play-state", "paused");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('use455').setAttribute('opacity', '0.2');
        document.getElementById('text445').setAttribute('opacity', '0.2');
        document.getElementById('ins2ctl').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_1').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_2').setAttribute('opacity', '0.2');
        document.getElementById('ctl').setAttribute('opacity', '0.2');
        document.getElementById('circle409').setAttribute('opacity', '0.2');
        document.getElementById('ins2shift2').setAttribute('opacity', '0.2');
        document.getElementById('shift2').setAttribute('opacity', '0.2');
        document.getElementById('text427').setAttribute('opacity', '0.2');
            document.getElementById('text429').setAttribute('opacity', '0.2');
            document.getElementById('circle409').setAttribute('opacity', '0.2');
            document.getElementById('circle411').setAttribute('opacity', '0.2');
             $('#instructionTable').css('opacity', '0.2');

        if(sequenceFlag == 1){
            jStep3();
        }
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use455').setAttribute('opacity', '1');
        document.getElementById('text445').setAttribute('opacity', '1');
        document.getElementById('ins2ctl').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_1').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_2').setAttribute('opacity', '1');
        document.getElementById('ctl').setAttribute('opacity', '1');
        document.getElementById('circle409').setAttribute('opacity', '1');
        document.getElementById('ins2shift2').setAttribute('opacity', '1');
        document.getElementById('shift2').setAttribute('opacity', '1');
        document.getElementById('text427').setAttribute('opacity', '1');
            document.getElementById('text429').setAttribute('opacity', '1');
            document.getElementById('circle409').setAttribute('opacity', '1');
            document.getElementById('circle411').setAttribute('opacity', '1');
            $('#instructionTable').css('opacity', '1');
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data28').css({"animation":"pathing28 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#Jump').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    insNum = 2;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function jStep3(){
    playing = true;
    $("#data72").bind("animationend", function () {
        $('#data72').css("animation-play-state", "paused");
        $('#data72').css("animation", "none");
    });
    $("#data73").bind("animationend", function () {
        $('#data73').css("animation-play-state", "paused");
        $('#data73').css("animation", "none");
    });
    $("#data29").bind("animationend", function () {
        $('#data29').css("animation-play-state", "paused");
        $('#data29').css("animation", "none");
    });
    $("#data30").bind("animationend", function () {
        playing = false;
        $('#data30').css("animation-play-state", "paused");
        $('#data30').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('adder1').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_0').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_1').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2').setAttribute('opacity', '0.2');
        document.getElementById('adder2').setAttribute('opacity', '0.2');
        document.getElementById('circle407').setAttribute('opacity', '0.2');
        document.getElementById('circle413').setAttribute('opacity', '0.2');
        document.getElementById('adder1tojmpaddr').setAttribute('opacity', '0.2');
        document.getElementById('text433').setAttribute('opacity', '0.2');
        document.getElementById('circle413').setAttribute('opacity', '0.2');
        document.getElementById('jumpAddr').setAttribute('opacity', '0.2');
        document.getElementById('shift2').setAttribute('opacity', '0.2');
        document.getElementById('shift2tojmpaddr').setAttribute('opacity', '0.2');
        document.getElementById('text431').setAttribute('opacity', '0.2');
        document.getElementById('text451').setAttribute('opacity', '0.2');
        document.getElementById('jumpAddr').setAttribute('opacity', '0.2');
        document.getElementById('jmpAddr2mux5').setAttribute('opacity', '0.2');
        document.getElementById('mux5').setAttribute('opacity', '0.2');
        document.getElementById('jumpAddr').setAttribute('opacity', '0.2');
        document.getElementById('shift2').setAttribute('opacity', '0.2');
        if(sequenceFlag == 1){
            jStep4();
        }
    });
    $("#data30_0").bind("animationend", function () {
        $('#data30_0').css("animation-play-state", "paused");
        $('#data30_0').css("animation", "none");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('adder1').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2_0').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2_1').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2').setAttribute('opacity', '1');
        document.getElementById('adder2').setAttribute('opacity', '1');
        document.getElementById('circle407').setAttribute('opacity', '1');
        document.getElementById('circle413').setAttribute('opacity', '1');
        document.getElementById('adder1tojmpaddr').setAttribute('opacity', '1');
        document.getElementById('text433').setAttribute('opacity', '1');
        document.getElementById('circle413').setAttribute('opacity', '1');
        document.getElementById('jumpAddr').setAttribute('opacity', '1');
        document.getElementById('shift2').setAttribute('opacity', '1');
        document.getElementById('shift2tojmpaddr').setAttribute('opacity', '1');
        document.getElementById('text431').setAttribute('opacity', '1');
        document.getElementById('text451').setAttribute('opacity', '1');
        document.getElementById('jumpAddr').setAttribute('opacity', '1');
        document.getElementById('jmpAddr2mux5').setAttribute('opacity', '1');
        document.getElementById('mux5').setAttribute('opacity', '1');
        document.getElementById('jumpAddr').setAttribute('opacity', '1');
        document.getElementById('shift2').setAttribute('opacity', '1');
    $('#data72').css({"animation":"pathing72 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data73').css({"animation":"pathing73 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data29').css({"animation":"pathing29 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data30_0').css({"animation":"pathing30_0 " + 14/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data30').css({"animation":"pathing30 " + 14/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 3;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function jStep4(){
    playing = true;
    $("#data11").bind("animationend", function () {
        playing = false;
        insNum = 0;
        $('#data11').css("animation-play-state", "paused");
        $('#data11').css("animation", "none");
        $('#Jump').css("animation", "none");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        recoverDiagram();
        Unbind();
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        if(sequenceFlag == 1){
            continuePlay.theFlagData = continuePlay.theFlagData + 1;
        }
    });
    $("#data11_0").bind("animationend", function () {
        $('#data11_0').css("animation-play-state", "paused");
        $('#data11_0').css("animation", "none");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use453').setAttribute('opacity', '1');
        document.getElementById('mux5').setAttribute('opacity', '1');
        document.getElementById('mux5toPc').setAttribute('opacity', '1');
    $('#data11_0').css({"animation":"pathing11_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data11').css({"animation":"pathing11 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 4;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}

