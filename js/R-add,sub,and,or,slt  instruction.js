//Author: Chuyan FU, Enze Ren, Jiahe Lyu

function RChecker() {
    if ($('#pause').hasClass("fa-pause")) {

        if (stepNum == 1) {
            $('#data1').css("animation-play-state", "paused");
            $('#data2').css("animation-play-state", "paused");
            $('#data3').css("animation-play-state", "paused");
        }
        else if (stepNum == 2) {
            $('#data4').css("animation-play-state", "paused");
            $('#data42').css("animation-play-state", "paused");
            $('#data5').css("animation-play-state", "paused");
            $('#data6').css("animation-play-state", "paused");
            $('#data19').css("animation-play-state", "paused");
            $('#data19_0').css("animation-play-state", "paused");
            $('#ALUOp').css("animation-play-state", "paused");
            $('#RegDst').css("animation-play-state", "paused");
            $('#RegWrite').css("animation-play-state", "paused");
        }
        else if (stepNum == 3) {
            $('#data7').css("animation-play-state", "paused");
            $('#data7_0').css("animation-play-state", "paused");
            $('#data8').css("animation-play-state", "paused");
            $('#data8_0').css("animation-play-state", "paused");
            $('#data9').css("animation-play-state", "paused");
            $('#data10').css("animation-play-state", "paused");
            $('#data10_0').css("animation-play-state", "paused");
        }
        else if (stepNum == 4) {
            $('#data11').css("animation-play-state", "paused");
            $('#data11_0').css("animation-play-state", "paused");
            $('#data12').css("animation-play-state", "paused");
            $('#data12_0').css("animation-play-state", "paused");
            $('#data18').css("animation-play-state", "paused");
        }
        $('#halfSpeed').css("pointer-events", "none");
        $('#doubleSpeed').css("pointer-events", "none");
        $('#halfSpeed').css("background-color", "grey");
        $('#doubleSpeed').css("background-color", "grey");
        $('#pause').removeClass("fa-pause").addClass("fa-play");
        $('#pause').attr('title', 'play');

    }

    else if ($('#pause').hasClass("fa-play")) {

        if (stepNum == 1) {
            $('#data1').css("animation-play-state", "running");
            $('#data2').css("animation-play-state", "running");
            $('#data3').css("animation-play-state", "running");
        }
        else if (stepNum == 2) {
            $('#data4').css("animation-play-state", "running");
            $('#data42').css("animation-play-state", "running");
            $('#data5').css("animation-play-state", "running");
            $('#data6').css("animation-play-state", "running");
            $('#data19').css("animation-play-state", "running");
            $('#data19_0').css("animation-play-state", "running");
            $('#ALUOp').css("animation-play-state", "running");
            $('#RegDst').css("animation-play-state", "running");
            $('#RegWrite').css("animation-play-state", "running");
        }
        else if (stepNum == 3) {
            $('#data7').css("animation-play-state", "running");
            $('#data7_0').css("animation-play-state", "running");
            $('#data8').css("animation-play-state", "running");
            $('#data8_0').css("animation-play-state", "running");
            $('#data9').css("animation-play-state", "running");
            $('#data10').css("animation-play-state", "running");
            $('#data10_0').css("animation-play-state", "running");
        }
        else if (stepNum == 4) {
            $('#data11').css("animation-play-state", "running");
            $('#data11_0').css("animation-play-state", "running");
            $('#data12').css("animation-play-state", "running");
            $('#data12_0').css("animation-play-state", "running");
            $('#data18').css("animation-play-state", "running");
        }
        $('#halfSpeed').css("pointer-events", "auto");
        $('#doubleSpeed').css("pointer-events", "auto");
        $('#halfSpeed').css("background-color", "blue");
        $('#doubleSpeed').css("background-color", "blue");
        $('#pause').removeClass("fa-play").addClass("fa-pause");
        $('#pause').attr('title', 'pause');

    }
};
function RStepForward(addStep){
    if(addStep == 1){
        addStep1();
    }
    else if(addStep == 2){

        addStep2();
    }
    else if(addStep == 3){

        addStep3();
    }
    else if(addStep == 4){

        addStep4();
    }

}
function RPlay(){
    sequenceFlag = 1;
    addStep1();
}
function addStep1(){
    playing = true;
    transparentDiagram();
    $('#pause').click(function () {
        RChecker();
    });

    $("#data3").one("animationend", function () {
        playing = false;
        $('#data3').css("animation-play-state", "paused");
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
        $('#data3').css("animation", "none");
        $('#data3_1').css("opacity", "1");
        if(sequenceFlag == 1){
            addStep2();
        }
    });
    $("#data1").one("animationend", function () {
        $('#data1').css("animation-play-state", "paused");
        $('#data1').css("animation", "none");
    });
    $("#data2").one("animationend", function () {
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

    //Set animation
    $('#data1').css({"animation":"pathing " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data2').css({"animation":"pathing2 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data3_1').css("opacity", "0");
    $('#data3').css({"animation":"pathing3 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    stepNum = 1;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function addStep2(){
    playing = true;
    $("#data4").one("animationend", function () {
        $('#data4').css("animation-play-state", "paused");
        $('#data4').css("animation", "none");
    });
    $("#data42").one("animationend", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data5").one("animationend", function () {
        $('#data5').css("animation-play-state", "paused");
        $('#data5').css("animation", "none");
    });
    $("#data6").one("animationend", function () {
        $('#data6').css("animation-play-state", "paused");
        $('#data6').css("animation", "none");
    });
    $("#ALUOp").one("animationend", function () {
        $('#ALUOp').css("animation-play-state", "paused");
    });
    $("#RegWrite").one("animationend", function () {
        $('#RegWrite').css("animation-play-state", "paused");
    });
    $("#RegDst").one("animationend", function () {
        $('#RegDst').css("animation-play-state", "paused");
    });
    $("#data19").one("animationend", function () {
        playing = false;
        $('#data19').css("animation-play-state", "paused");
        $('#data19').css("animation", "none");
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
        document.getElementById('circle387').setAttribute('opacity', '0.2');
        document.getElementById('circle401').setAttribute('opacity', '0.2');
        document.getElementById('circle405').setAttribute('opacity', '0.2');
        document.getElementById('circle391').setAttribute('opacity', '0.2');
        document.getElementById('circle395').setAttribute('opacity', '0.2');
        document.getElementById('circle387').setAttribute('opacity', '0.2');
        document.getElementById('circle409').setAttribute('opacity', '0.2');
        document.getElementById('circle411').setAttribute('opacity', '0.2');
        document.getElementById('text445').setAttribute('opacity', '0.2');
        document.getElementById('ins2ctl').setAttribute('opacity', '0.2');
        document.getElementById('ctl').setAttribute('opacity', '0.2');
        document.getElementById('insMem2reg_9').setAttribute('opacity', '0.2');
        document.getElementById('mux1').setAttribute('opacity', '0.2');
        document.getElementById('text439').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux1B').setAttribute('opacity', '0.2');
        document.getElementById('text441').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_1').setAttribute('opacity', '0.2');
        document.getElementById('text437').setAttribute('opacity', '0.2');
        document.getElementById('ins2aluCtl').setAttribute('opacity', '0.2');
        $('#instructionTable').css('opacity', '0.2');
        $('#registerTable').css('opacity', '0.2');
        document.getElementById('text435').setAttribute('opacity', '0.2');
        document.getElementById('aluCtl').setAttribute('opacity', '0.2');
        document.getElementById('aluCtl2alu').setAttribute('opacity', '0.2');
        document.getElementById('use459').setAttribute('opacity', '0.2');
        if(sequenceFlag == 1){
            addStep3();
        }
    });
    $("#data19_0").one("animationend", function () {
        $('#data19_0').css("animation-play-state", "paused");
        $('#data19_0').css("animation", "none");
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
        document.getElementById('circle387').setAttribute('opacity', '1');
        document.getElementById('circle401').setAttribute('opacity', '1');
        document.getElementById('circle405').setAttribute('opacity', '1');
        document.getElementById('circle391').setAttribute('opacity', '1');
        document.getElementById('circle395').setAttribute('opacity', '1');
        document.getElementById('circle387').setAttribute('opacity', '1');
        document.getElementById('circle409').setAttribute('opacity', '1');
        document.getElementById('circle411').setAttribute('opacity', '1');
        document.getElementById('text445').setAttribute('opacity', '1');
        document.getElementById('ins2ctl').setAttribute('opacity', '1');
        document.getElementById('ctl').setAttribute('opacity', '1');
        document.getElementById('insMem2reg_9').setAttribute('opacity', '1');
        document.getElementById('mux1').setAttribute('opacity', '1');
        document.getElementById('text439').setAttribute('opacity', '1');
        document.getElementById('ins2mux1B').setAttribute('opacity', '1');
        document.getElementById('text441').setAttribute('opacity', '1');
        document.getElementById('ins2mux2_1').setAttribute('opacity', '1');
        document.getElementById('text437').setAttribute('opacity', '1');
        document.getElementById('ins2aluCtl').setAttribute('opacity', '1');
        $('#instructionTable').css('opacity', '1');
        $('#registerTable').css('opacity', '1');
        document.getElementById('text435').setAttribute('opacity', '1');
        document.getElementById('aluCtl').setAttribute('opacity', '1');
        document.getElementById('aluCtl2alu').setAttribute('opacity', '1');
        document.getElementById('use459').setAttribute('opacity', '1');
    $('#data4').css({"animation":"pathing4 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data5').css({"animation":"pathing5 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data6').css({"animation":"pathing6 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data19_0').css({"animation":"pathing19_0 " + 9.5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data19').css({"animation":"pathing19 " + 9.5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#RegDst').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#ALUOp').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#RegWrite').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    stepNum = 2;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function addStep3(){
    playing = true;
    $("#data8").one("animationend", function () {
        $('#data8').css("animation-play-state", "paused");
        $('#data8').css("animation", "none");
    });
    $("#data8_0").one("animationend", function () {
        $('#data8_0').css("animation-play-state", "paused");
        $('#data8_0').css("animation", "none");
    });
    $("#data9").one("animationend", function () {
        $('#data9').css("animation-play-state", "paused");
        $('#data9').css("animation", "none");
    });
    $("#data10").one("animationend", function () {
        $('#data10').css("animation-play-state", "paused");
        $('#data10').css("animation", "none");
    });
    $("#data10_0").one("animationend", function () {
        $('#data10_0').css("animation-play-state", "paused");
        $('#data10_0').css("animation", "none");
    });
    $("#data7").one("animationend", function () {
        playing = false;
        $('#data7').css("animation-play-state", "paused");
        $('#data7').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('use457').setAttribute('opacity', '0.2');
        $('#registerTable').css('opacity', '0.2');
        document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '0.2');
        document.getElementById('use459').setAttribute('opacity', '0.2');
        document.getElementById('regRD2tomux2').setAttribute('opacity', '0.2');
        document.getElementById('regRD2tomux2_0').setAttribute('opacity', '0.2');
        document.getElementById('mux2').setAttribute('opacity', '0.2');
        document.getElementById('circle397').setAttribute('opacity', '0.2');
        document.getElementById('mux2toAluSrcB').setAttribute('opacity', '0.2');
        document.getElementById('adder1').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_0').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_1').setAttribute('opacity', '0.2');
        document.getElementById('adder1tomux4').setAttribute('opacity', '0.2');
        document.getElementById('mux4').setAttribute('opacity', '0.2');
        document.getElementById('circle407').setAttribute('opacity', '0.2');
        document.getElementById('circle413').setAttribute('opacity', '0.2');
        document.getElementById('mux4tomux5').setAttribute('opacity', '0.2');
        document.getElementById('mux5').setAttribute('opacity', '0.2');
        if(sequenceFlag == 1){
            addStep4();
        }
    });
    $("#data7_0").one("animationend", function () {
        $('#data7_0').css("animation-play-state", "paused");
        $('#data7_0').css("animation", "none");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use457').setAttribute('opacity', '1');
        $('#registerTable').css('opacity', '1');
        document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '1');
        document.getElementById('use459').setAttribute('opacity', '1');
        document.getElementById('regRD2tomux2').setAttribute('opacity', '1');
        document.getElementById('regRD2tomux2_0').setAttribute('opacity', '1');
        document.getElementById('mux2').setAttribute('opacity', '1');
        document.getElementById('circle397').setAttribute('opacity', '1');
        document.getElementById('mux2toAluSrcB').setAttribute('opacity', '1');
        document.getElementById('adder1').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2_0').setAttribute('opacity', '1');
        document.getElementById('adder1toadder2_1').setAttribute('opacity', '1');
        document.getElementById('adder1tomux4').setAttribute('opacity', '1');
        document.getElementById('mux4').setAttribute('opacity', '1');
        document.getElementById('circle407').setAttribute('opacity', '1');
        document.getElementById('circle413').setAttribute('opacity', '1');
        document.getElementById('mux4tomux5').setAttribute('opacity', '1');
        document.getElementById('mux5').setAttribute('opacity', '1');
    $('#data8_0').css({"animation":"pathing8_0 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data8').css({"animation":"pathing8 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data9').css({"animation":"pathing9 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data10_0').css({"animation":"pathing10_0 " + 9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data10').css({"animation":"pathing10 " + 9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data7_0').css({"animation":"pathing7_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data7').css({"animation":"pathing7 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    stepNum = 3;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}

function addStep4(){
    playing = true;

    $("#data12").one("animationend", function () {
        playing = false;
        stepNum = 0;
        refreshRegisters();
        $('#data12').css("animation-play-state", "paused");
        $('#data12').css("animation", "none");
        $('#ALUOp').css("animation", "none");
        $('#RegWrite').css("animation", "none");
        $('#RegDst').css("animation", "none");
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
    $("#data12_0").one("animationend", function () {
        $('#data12_0').css("animation-play-state", "paused");
        $('#data12_0').css("animation", "none");
    });
    $("#data18").one("animationend", function () {
        $('#data18').css("animation-play-state", "paused");
        $('#data18').css("animation", "none");
    });

    $("#data11").one("animationend", function () {
        $('#data11').css("animation-play-state", "paused");
        $('#data11').css("animation", "none");
    });
    $("#data11_0").one("animationend", function () {
        $('#data11_0').css("animation-play-state", "paused");
        $('#data11_0').css("animation", "none");
    });

    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use453').setAttribute('opacity', '1');
    document.getElementById('use459').setAttribute('opacity', '1');
    document.getElementById('mux5').setAttribute('opacity', '1');
    document.getElementById('mux5toPc').setAttribute('opacity', '1');
    document.getElementById('use457').setAttribute('opacity', '1');
    $('#registerTable').css('opacity', '1');
    document.getElementById('alu2DMAddr_0').setAttribute('opacity', '1');
    document.getElementById('alu2mux3').setAttribute('opacity', '1');
    document.getElementById('mux3').setAttribute('opacity', '1');
    document.getElementById('mux3toRegWD').setAttribute('opacity', '1');
    document.getElementById('circle399').setAttribute('opacity', '1');

    $('#data11_0').css({"animation":"pathing11_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data11').css({"animation":"pathing11 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data12_0').css({"animation":"pathing12_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data12').css({"animation":"pathing12 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data18').css({"animation":"pathing18 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    stepNum = 4;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}


