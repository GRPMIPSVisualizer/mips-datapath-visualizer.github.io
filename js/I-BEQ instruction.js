
function BEQChecker() {
    if ($('#pause').hasClass("fa-pause")) {

        if (insNum == 1) {
            $('#data1').css("animation-play-state", "paused");
            $('#data2').css("animation-play-state", "paused");
            $('#data3').css("animation-play-state", "paused");

        }
        else if (insNum == 2) {
            $('#data4').css("animation-play-state", "paused");
            $('#data42').css("animation-play-state", "paused");
            $('#data6').css("animation-play-state", "paused");
            $('#data20').css("animation-play-state", "paused");
            $('#data20_0').css("animation-play-state", "paused");
        }
        else if (insNum == 3) {
            $('#data8').css("animation-play-state", "paused");
            $('#data8_0').css("animation-play-state", "paused");
            $('#data9').css("animation-play-state", "paused");
            $('#data10').css("animation-play-state", "paused");
            $('#data10_0').css("animation-play-state", "paused");
            $('#data25').css("animation-play-state", "paused");
            $('#data25_0').css("animation-play-state", "paused");
            $('#isZero').css("animation-play-state", "paused");
            $('#Branch').css("animation-play-state", "paused");
            $('#BranchAndZero').css("animation-play-state", "paused");
            $('#and1').css("animation-play-state", "paused");
        }
        else if (insNum == 4) {
            $('#BranchAndZero').css("animation-play-state", "paused");
            $('#data7').css("animation-play-state", "paused");
            $('#data7_0').css("animation-play-state", "paused");
            $('#data72').css("animation-play-state", "paused");
            $('#data26').css("animation-play-state", "paused");
            $('#data26_0').css("animation-play-state", "paused");
            $('#data27').css("animation-play-state", "paused");
            $('#data27_0').css("animation-play-state", "paused");
        }
        else if (insNum == 5) {
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
            $('#data4').css("animation-play-state", "running");
            $('#data42').css("animation-play-state", "running");
            $('#data6').css("animation-play-state", "running");
            $('#data20').css("animation-play-state", "running");
            $('#data20_0').css("animation-play-state", "running");
        }
        else if (insNum == 3) {
            $('#data8').css("animation-play-state", "running");
            $('#data8_0').css("animation-play-state", "running");
            $('#data9').css("animation-play-state", "running");
            $('#data10').css("animation-play-state", "running");
            $('#data10_0').css("animation-play-state", "running");
            $('#data25').css("animation-play-state", "running");
            $('#data25_0').css("animation-play-state", "running");
            $('#isZero').css("animation-play-state", "running");
            $('#Branch').css("animation-play-state", "running");
            $('#BranchAndZero').css("animation-play-state", "running");
            $('#and1').css("animation-play-state", "running");
        }
        else if (insNum == 4) {
            $('#BranchAndZero').css("animation-play-state", "running");
            $('#data7').css("animation-play-state", "running");
            $('#data7_0').css("animation-play-state", "running");
            $('#data72').css("animation-play-state", "running");
            $('#data26').css("animation-play-state", "running");
            $('#data26_0').css("animation-play-state", "running");
            $('#data27').css("animation-play-state", "running");
            $('#data27_0').css("animation-play-state", "running");
        }
        else if (insNum == 5) {
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

function BEQPlay(){
    sequenceFlag = 1;
    beqStep1();
}
function BEQStepForward(beqStep){
    if(beqStep == 1){
        beqStep1();
    }
    else if(beqStep == 2){

        beqStep2();
    }
    else if(beqStep == 3){

        beqStep3();
    }
    else if(beqStep == 4){

        beqStep4();
    }
    else if(beqStep == 5){

        beqStep5();
    }
}
function beqStep1(){
    playing = true;
    transparentDiagram();
    $('#pause').click(function () {
        BEQChecker();
    });

    $("#data3").bind("animationend", function () {
        playing = false;
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        $('#data3').css("animation-play-state", "paused");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        document.getElementById('pc2insMem').setAttribute('opacity', '0.2');
        document.getElementById('pc2adder1').setAttribute('opacity', '0.2');
        document.getElementById('const4').setAttribute('opacity', '0.2');
        document.getElementById('use453').setAttribute('opacity', '0.2');
        document.getElementById('use455').setAttribute('opacity', '0.2');
        $('#instructionTable').css('opacity', '0.2');
        document.getElementById('adder1').setAttribute('opacity', '0.2');
        document.getElementById('circle385').setAttribute('opacity', '0.2');
        $('#data3').css("animation", "none");
        $('#data3_1').css("opacity", "1");
        if(sequenceFlag == 1){
            beqStep2();
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

function beqStep2(){
    playing = true;
    $("#data4").bind("animationend", function () {
        $('#data4').css("animation-play-state", "paused");
        $('#data4').css("animation", "none");
    });
    $("#data42").bind("animationend", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data6").bind("animationend", function () {
        playing = false;
        $('#data6').css("animation-play-state", "paused");
        $('#data6').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('insMem2reg_1').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_2').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_3').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_4').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_5').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_6').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_7').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_8').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_10').setAttribute('opacity', '0.2');
        document.getElementById('use455').setAttribute('opacity', '0.2');
        document.getElementById('text443').setAttribute('opacity', '0.2');
        document.getElementById('use457').setAttribute('opacity', '0.2');
        document.getElementById('circle389').setAttribute('opacity', '0.2');
        document.getElementById('circle391').setAttribute('opacity', '0.2');
        document.getElementById('circle395').setAttribute('opacity', '0.2');
        document.getElementById('circle387').setAttribute('opacity', '0.2');
        document.getElementById('circle409').setAttribute('opacity', '0.2');
        document.getElementById('circle411').setAttribute('opacity', '0.2');
        document.getElementById('circle393').setAttribute('opacity', '0.2');
        document.getElementById('circle405').setAttribute('opacity', '0.2');
        document.getElementById('text445').setAttribute('opacity', '0.2');
        document.getElementById('text435').setAttribute('opacity', '0.2');
        document.getElementById('text447').setAttribute('opacity', '0.2');
        document.getElementById('ins2ctl').setAttribute('opacity', '0.2');
        document.getElementById('ctl').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_9').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_1').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_2').setAttribute('opacity', '0.2');
        document.getElementById('signExd').setAttribute('opacity', '0.2');
        $('#instructionTable').css('opacity', '0.2');
        $('#registerTable').css('opacity', '0.2');
        document.getElementById('text441').setAttribute('opacity', '0.2');
        document.getElementById('text435').setAttribute('opacity', '0.2');
        document.getElementById('text447').setAttribute('opacity', '0.2');
        if(sequenceFlag == 1){
            beqStep3();
        }
    });
    $("#data20").bind("animationend", function () {
        $('#data20').css("animation-play-state", "paused");
        $('#data20').css("animation", "none");
    });
    $("#data20_0").bind("animationend", function () {
        $('#data20_0').css("animation-play-state", "paused");
        $('#data20_0').css("animation", "none");
    });

    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('insMem2reg_1').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_2').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_3').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_4').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_5').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_6').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_7').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_8').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_10').setAttribute('opacity', '1');
        document.getElementById('use455').setAttribute('opacity', '1');
        document.getElementById('text443').setAttribute('opacity', '1');
        document.getElementById('use457').setAttribute('opacity', '1');
        document.getElementById('circle389').setAttribute('opacity', '1');
        document.getElementById('circle391').setAttribute('opacity', '1');
        document.getElementById('circle395').setAttribute('opacity', '1');
        document.getElementById('circle387').setAttribute('opacity', '1');
        document.getElementById('circle409').setAttribute('opacity', '1');
        document.getElementById('circle411').setAttribute('opacity', '1');
        document.getElementById('circle393').setAttribute('opacity', '1');
        document.getElementById('text445').setAttribute('opacity', '1');
        document.getElementById('ins2ctl').setAttribute('opacity', '1');
        document.getElementById('ctl').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_9').setAttribute('opacity', '1');
        document.getElementById('ins2mux2_1').setAttribute('opacity', '1');
        document.getElementById('ins2mux2_2').setAttribute('opacity', '1');
        document.getElementById('signExd').setAttribute('opacity', '1');
        $('#instructionTable').css('opacity', '1');
        $('#registerTable').css('opacity', '1');
        document.getElementById('text441').setAttribute('opacity', '1');
        document.getElementById('text435').setAttribute('opacity', '1');
        document.getElementById('text447').setAttribute('opacity', '1');

    $('#data4').css({"animation":"pathing4 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data6').css({"animation":"pathing6 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data20_0').css({"animation":"pathing20_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data20').css({"animation":"pathing20 " + 4.9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 2;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function beqStep3(){
    playing = true;
    $("#data8").bind("animationend", function () {
        $('#data8').css("animation-play-state", "paused");
        $('#data8').css("animation", "none");
    });
    $("#data8_0").bind("animationend", function () {
        $('#data8_0').css("animation-play-state", "paused");
        $('#data8_0').css("animation", "none");
    });
    $("#data9").bind("animationend", function () {
        $('#data9').css("animation-play-state", "paused");
        $('#data9').css("animation", "none");
    });
    $("#data10").bind("animationend", function () {
        playing = false;
        $('#data10').css("animation-play-state", "paused");
        $('#data10').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('use457').setAttribute('opacity', '0.2');
        document.getElementById('use459').setAttribute('opacity', '0.2');
        document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '0.2');
        document.getElementById('regRD2tomux2_0').setAttribute('opacity', '0.2');
        document.getElementById('regRD2tomux2').setAttribute('opacity', '0.2');
        document.getElementById('mux2').setAttribute('opacity', '0.2');
        document.getElementById('circle397').setAttribute('opacity', '0.2');
        document.getElementById('circle403').setAttribute('opacity', '0.2');
        document.getElementById('mux2').setAttribute('opacity', '0.2');
        document.getElementById('mux2toAluSrcB').setAttribute('opacity', '0.2');
        document.getElementById('signExd').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_3').setAttribute('opacity', '0.2');
        document.getElementById('ins2shift1').setAttribute('opacity', '0.2');
        document.getElementById('shift1').setAttribute('opacity', '0.2');
        document.getElementById('text449').setAttribute('opacity', '0.2');
        $('#registerTable').css('opacity', '0.2');

        if(sequenceFlag == 1){
            beqStep4();
        }
    });
    $("#data10_0").bind("animationend", function () {
        $('#data10_0').css("animation-play-state", "paused");
        $('#data10_0').css("animation", "none");
    });
    $("#data25").bind("animationend", function () {
        $('#data25').css("animation-play-state", "paused");
        $('#data25').css("animation", "none");
    });
    $("#data25_0").bind("animationend", function () {
        $('#data25_0').css("animation-play-state", "paused");
        $('#data25_0').css("animation", "none");
    });
    $("#isZero").bind("animationend", function () {
        $('#isZero').css("animation-play-state", "paused");
    });
    $("#BranchAndZero").bind("animationend", function () {
        $('#BranchAndZero').css("animation-play-state", "paused");
    });
    $("#Branch").bind("animationend", function () {
        $('#Branch').css("animation-play-state", "paused");
    });
    $("#and1").bind("animationend", function () {
        $('#and1').css("animation-play-state", "paused");
    });

    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use457').setAttribute('opacity', '1');
        document.getElementById('use459').setAttribute('opacity', '1');
        document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '1');
        document.getElementById('regRD2tomux2_0').setAttribute('opacity', '1');
        document.getElementById('regRD2tomux2').setAttribute('opacity', '1');
        document.getElementById('mux2').setAttribute('opacity', '1');
        document.getElementById('circle397').setAttribute('opacity', '1');
        document.getElementById('circle403').setAttribute('opacity', '1');
        document.getElementById('mux2').setAttribute('opacity', '1');
        document.getElementById('mux2toAluSrcB').setAttribute('opacity', '1');
        document.getElementById('signExd').setAttribute('opacity', '1');
        document.getElementById('ins2mux2_3').setAttribute('opacity', '1');
        document.getElementById('ins2shift1').setAttribute('opacity', '1');
        document.getElementById('shift1').setAttribute('opacity', '1');
        document.getElementById('text449').setAttribute('opacity', '1');
        $('#registerTable').css('opacity', '1');

    $('#data8_0').css({"animation":"pathing8_0 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data8').css({"animation":"pathing8 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data9').css({"animation":"pathing9 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data10_0').css({"animation":"pathing10_0 " + 9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data10').css({"animation":"pathing10 " + 9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data25_0').css({"animation":"pathing25_0 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data25').css({"animation":"pathing25 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#isZero').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#Branch').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#BranchAndZero').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#and1').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    insNum = 3;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function beqStep4(){
    playing = true;
    $("#data7").bind("animationend", function () {
        $('#data7').css("animation-play-state", "paused");
        $('#data7').css("animation", "none");
    });
    $("#data7_0").bind("animationend", function () {
        $('#data7_0').css("animation-play-state", "paused");
        $('#data7_0').css("animation", "none");
    });
    $("#data72").bind("animationend", function () {
        $('#data72').css("animation-play-state", "paused");
        $('#data72').css("animation", "none");
    });
    $("#data26").bind("animationend", function () {
        $('#data26').css("animation-play-state", "paused");
        $('#data26').css("animation", "none");
    });
    $("#data26_0").bind("animationend", function () {
        $('#data26_0').css("animation-play-state", "paused");
        $('#data26_0').css("animation", "none");
    });
    $("#data27").bind("animationend", function () {
        playing = false;
        $('#data27').css("animation-play-state", "paused");
        $('#data27').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('adder1').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_0').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_1').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2').setAttribute('opacity', '0.2');
        document.getElementById('adder1tomux4').setAttribute('opacity', '0.2');
        document.getElementById('mux4').setAttribute('opacity', '0.2');
        document.getElementById('circle407').setAttribute('opacity', '0.2');
        document.getElementById('circle413').setAttribute('opacity', '0.2');
        document.getElementById('adder1').setAttribute('opacity', '0.2');
        document.getElementById('adder2').setAttribute('opacity', '0.2');
        document.getElementById('adder2tomux4').setAttribute('opacity', '0.2');
        document.getElementById('mux4tomux5').setAttribute('opacity', '0.2');
        document.getElementById('mux5').setAttribute('opacity', '0.2');
        document.getElementById('shift1').setAttribute('opacity', '0.2');
        document.getElementById('shift1toadder2').setAttribute('opacity', '0.2');


        if(sequenceFlag == 1){
            beqStep5();
        }
    });
    $("#data27_0").bind("animationend", function () {
        $('#data27_0').css("animation-play-state", "paused");
        $('#data27_0').css("animation", "none");
    });

    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('adder1').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2_0').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2_1').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2').setAttribute('opacity', '1');
        document.getElementById('adder1tomux4').setAttribute('opacity', '1');
        document.getElementById('mux4').setAttribute('opacity', '1');
        document.getElementById('circle407').setAttribute('opacity', '1');
        document.getElementById('circle413').setAttribute('opacity', '1');
        document.getElementById('adder1').setAttribute('opacity', '1');
        document.getElementById('adder2').setAttribute('opacity', '1');
        document.getElementById('adder2tomux4').setAttribute('opacity', '1');
        document.getElementById('mux4tomux5').setAttribute('opacity', '1');
        document.getElementById('mux5').setAttribute('opacity', '1');
        document.getElementById('shift1').setAttribute('opacity', '1');
        document.getElementById('shift1toadder2').setAttribute('opacity', '1');

    $('#data7_0').css({"animation":"pathing7_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data7').css({"animation":"pathing7 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data72').css({"animation":"pathing72 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data26_0').css({"animation":"pathing26_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data26').css({"animation":"pathing26 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data27_0').css({"animation":"pathing27_0 " + 17/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data27').css({"animation":"pathing27 " + 17/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 4;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function beqStep5(){
    playing = true;
    $("#data11").one("animationend", function () {
        playing = false;
        insNum = 0;
        $('#data11').css("animation-play-state", "paused");
        $('#data11').css("animation", "none");
        $('#isZero').css("animation", "none");
        $('#BranchAndZero').css("animation", "none");
        $('#Branch').css("animation", "none");
        $('#and1').css("animation", "none");
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
    insNum = 5;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}




