
function LWChecker() {
    if ($('#pause').hasClass("fa-pause")) {

        if (insNum == 1) {
            $('#data1').css("animation-play-state", "paused");
            $('#data2').css("animation-play-state", "paused");
            $('#data3').css("animation-play-state", "paused");
        }
        else if (insNum == 2) {
            $('#data4').css("animation-play-state", "paused");
            $('#data42').css("animation-play-state", "paused");
            $('#data31').css("animation-play-state", "paused");
            $('#data20').css("animation-play-state", "paused");
            $('#data20_0').css("animation-play-state", "paused");
            $('#MemRead').css("animation-play-state", "paused");
            $('#MemtoReg').css("animation-play-state", "paused");
            $('#ALUSrc').css("animation-play-state", "paused");
            $('#RegWrite').css("animation-play-state", "paused");
        }
        else if (insNum == 3) {
            $('#data8').css("animation-play-state", "paused");
            $('#data8_0').css("animation-play-state", "paused");
            $('#data21').css("animation-play-state", "paused");
            $('#data21_0').css("animation-play-state", "paused");
        }
        else if (insNum == 4) {
            $('#data22').css("animation-play-state", "paused");
            $('#data22_0').css("animation-play-state", "paused");
        }
        else if (insNum == 5) {
            $('#data11').css("animation-play-state", "paused");
            $('#data11_0').css("animation-play-state", "paused");
            $('#data23').css("animation-play-state", "paused");
            $('#data23_0').css("animation-play-state", "paused");
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
            $('#data31').css("animation-play-state", "running");
            $('#data20').css("animation-play-state", "running");
            $('#data20_0').css("animation-play-state", "running");
            $('#MemRead').css("animation-play-state", "running");
            $('#MemtoReg').css("animation-play-state", "running");
            $('#ALUSrc').css("animation-play-state", "running");
            $('#RegWrite').css("animation-play-state", "running");
        }
        else if (insNum == 3) {
            $('#data8').css("animation-play-state", "running");
            $('#data8_0').css("animation-play-state", "running");
            $('#data21').css("animation-play-state", "running");
            $('#data21_0').css("animation-play-state", "running");
        }
        else if (insNum == 4) {
            $('#data22').css("animation-play-state", "running");
            $('#data22_0').css("animation-play-state", "running");
        }
        else if (insNum == 5) {
            $('#data11').css("animation-play-state", "running");
            $('#data11_0').css("animation-play-state", "running");
            $('#data23').css("animation-play-state", "running");
            $('#data23_0').css("animation-play-state", "running");
        }
        $('#halfSpeed').css("pointer-events", "auto");
        $('#doubleSpeed').css("pointer-events", "auto");
        $('#halfSpeed').css("background-color", "blue");
        $('#doubleSpeed').css("background-color", "blue");
        $('#pause').removeClass("fa-play").addClass("fa-pause");
        $('#pause').attr('title', 'pause');

    }
};

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
    playing = true;
    transparentDiagram();
    $('#pause').click(function () {
        LWChecker();
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
        $('#data3').css("animation", "none");
        $('#data3_1').css("opacity", "1");
        if(sequenceFlag == 1){
            lwStep2();
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
function lwStep2(){
    playing = true;
    $("#data4").bind("animationend", function () {
        $('#data4').css("animation-play-state", "paused");
        $('#data4').css("animation", "none");
    });
    $("#data42").bind("animationend", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data31").bind("animationend", function () {
        $('#data31').css("animation-play-state", "paused");
        $('#data31').css("animation", "none");
    });
    $("#data20").bind("animationend", function () {
        $('#data20').css("animation-play-state", "paused");
        $('#data20').css("animation", "none");
    });
    $("#data20_0").bind("animationend", function () {
        $('#data20_0').css("animation-play-state", "paused");
        $('#data20_0').css("animation", "none");
    });
    $("#MemRead").bind("animationend", function () {
        $('#MemRead').css("animation-play-state", "paused");

    });
    $("#MemtoReg").bind("animationend", function () {
        $('#MemtoReg').css("animation-play-state", "paused");

    });
    $("#ALUSrc").bind("animationend", function () {
        $('#ALUSrc').css("animation-play-state", "paused");

    });
    $("#RegWrite").bind("animationend", function () {
        playing = false;
        $('#RegWrite').css("animation-play-state", "paused");

        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
            document.getElementById('ctl').setAttribute('opacity', '0.2');
            document.getElementById('use455').setAttribute('opacity', '0.2');
            document.getElementById('use457').setAttribute('opacity', '0.2');
            $('#instructionTable').css('opacity', '0.2');
            document.getElementById('insMem2reg_1').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_2').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_3').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_4').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_5').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_6').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_7').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_8').setAttribute('opacity', '0.2');
            document.getElementById('insMem2reg_10').setAttribute('opacity', '0.2');
            document.getElementById('use457').setAttribute('opacity', '0.2');
            $('#registerTable').css('opacity', '0.2');
            document.getElementById('text443').setAttribute('opacity', '0.2');
            document.getElementById('signExd').setAttribute('opacity', '0.2');
            document.getElementById('text435').setAttribute('opacity', '0.2');
            document.getElementById('text447').setAttribute('opacity', '0.2');
            document.getElementById('ins2mux1A').setAttribute('opacity', '0.2');
            document.getElementById('mux1').setAttribute('opacity', '0.2');
            document.getElementById('mux1toreg').setAttribute('opacity', '0.2');
            document.getElementById('circle387').setAttribute('opacity', '0.2');
            document.getElementById('circle389').setAttribute('opacity', '0.2');
            document.getElementById('circle391').setAttribute('opacity', '0.2');
            document.getElementById('circle395').setAttribute('opacity', '0.2');
            document.getElementById('circle387').setAttribute('opacity', '0.2');
            document.getElementById('circle409').setAttribute('opacity', '0.2');
            document.getElementById('circle411').setAttribute('opacity', '0.2');
            document.getElementById('ins2mux2_2').setAttribute('opacity', '0.2');
            document.getElementById('ins2mux2_1').setAttribute('opacity', '0.2');
            document.getElementById('ins2ctl').setAttribute('opacity', '0.2');
            document.getElementById('text445').setAttribute('opacity', '0.2');


        if(sequenceFlag == 1){
            lwStep3();
        }
    });

    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('ctl').setAttribute('opacity', '1');
    document.getElementById('use455').setAttribute('opacity', '1');
            document.getElementById('use457').setAttribute('opacity', '1');
            $('#instructionTable').css('opacity', '1');
            document.getElementById('insMem2reg_1').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_2').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_3').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_4').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_5').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_6').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_7').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_8').setAttribute('opacity', '1');
            document.getElementById('insMem2reg_10').setAttribute('opacity', '1');
            document.getElementById('use457').setAttribute('opacity', '1');
            $('#registerTable').css('opacity', '1');
            document.getElementById('text443').setAttribute('opacity', '1');
            document.getElementById('signExd').setAttribute('opacity', '1');
            document.getElementById('text435').setAttribute('opacity', '1');
            document.getElementById('text447').setAttribute('opacity', '1');
            document.getElementById('ins2mux1A').setAttribute('opacity', '1');
            document.getElementById('mux1').setAttribute('opacity', '1');
            document.getElementById('mux1toreg').setAttribute('opacity', '1');
            document.getElementById('circle387').setAttribute('opacity', '1');
            document.getElementById('circle389').setAttribute('opacity', '1');
            document.getElementById('circle391').setAttribute('opacity', '1');
            document.getElementById('circle395').setAttribute('opacity', '1');
            document.getElementById('circle387').setAttribute('opacity', '1');
            document.getElementById('circle409').setAttribute('opacity', '1');
            document.getElementById('circle411').setAttribute('opacity', '1');
            document.getElementById('ins2mux2_2').setAttribute('opacity', '1');
            document.getElementById('ins2mux2_1').setAttribute('opacity', '1');
            document.getElementById('ins2ctl').setAttribute('opacity', '1');
            document.getElementById('text445').setAttribute('opacity', '1');

    $('#data4').css({"animation":"pathing4 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data31').css({"animation":"pathing31 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data20_0').css({"animation":"pathing20_0 " + 4.9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data20').css({"animation":"pathing20 " + 4.9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#MemRead').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#MemtoReg').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#ALUSrc').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#RegWrite').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    insNum = 2;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}

function lwStep3(){
    playing = true;
    $("#data8").bind("animationend", function () {
        $('#data8').css("animation-play-state", "paused");
        $('#data8').css("animation", "none");
    });
    $("#data8_0").bind("animationend", function () {
        $('#data8_0').css("animation-play-state", "paused");
        $('#data8_0').css("animation", "none");
    });
    $("#data21").bind("animationend", function () {
        playing = false;
        $('#data21').css("animation-play-state", "paused");
        $('#data21').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('use457').setAttribute('opacity', '0.2');
        $('#registerTable').css('opacity', '0.2');
        document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '0.2');
        document.getElementById('use459').setAttribute('opacity', '0.2');
        document.getElementById('use457').setAttribute('opacity', '0.2');
        document.getElementById('signExd').setAttribute('opacity', '0.2');
        document.getElementById('text449').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_3').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_4').setAttribute('opacity', '0.2');
        document.getElementById('mux2').setAttribute('opacity', '0.2');
        document.getElementById('mux2toAluSrcB').setAttribute('opacity', '0.2');
        document.getElementById('circle403').setAttribute('opacity', '0.2');

        if(sequenceFlag == 1){
            lwStep4();
        }
    });
    $("#data21_0").bind("animationend", function () {
        $('#data21_0').css("animation-play-state", "paused");
        $('#data21_0').css("animation", "none");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
     document.getElementById('use457').setAttribute('opacity', '1');
     $('#registerTable').css('opacity', '1');
        document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '1');
        document.getElementById('use459').setAttribute('opacity', '1');
        document.getElementById('use457').setAttribute('opacity', '1');
        document.getElementById('signExd').setAttribute('opacity', '1');
        document.getElementById('text449').setAttribute('opacity', '1');
        document.getElementById('ins2mux2_3').setAttribute('opacity', '1');
        document.getElementById('ins2mux2_4').setAttribute('opacity', '1');
        document.getElementById('mux2').setAttribute('opacity', '1');
        document.getElementById('mux2toAluSrcB').setAttribute('opacity', '1');
        document.getElementById('circle403').setAttribute('opacity', '1');

    $('#data8_0').css({"animation":"pathing8_0 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data8').css({"animation":"pathing8 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data21_0').css({"animation":"pathing21_0 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data21').css({"animation":"pathing21 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 3;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}

function lwStep4(){
    playing = true;
    $("#data22").one("animationend", function () {
        playing = false;
        $('#data22').css("animation-play-state", "paused");
        $('#data22').css("animation", "none");
        $('#fw').css("pointer-events", "auto");
        $('#pause').css("pointer-events", "none");
        $('#fw').css("color", "blue");
        $('#pause').css("color", "grey");
        document.getElementById('use459').setAttribute('opacity', '0.2');
        document.getElementById('alu2DMAddr').setAttribute('opacity', '0.2');
        document.getElementById('alu2DMAddr_0').setAttribute('opacity', '0.2');
        document.getElementById('use461').setAttribute('opacity', '0.2');
        $('#memoryTable').css('opacity', '0.2');

        if(sequenceFlag == 1){
            lwStep5();
        }
    });
    $("#data22_0").bind("animationend", function () {
        $('#data22_0').css("animation-play-state", "paused");
        $('#data22_0').css("animation", "none");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use459').setAttribute('opacity', '1');
        document.getElementById('alu2DMAddr').setAttribute('opacity', '1');
        document.getElementById('alu2DMAddr_0').setAttribute('opacity', '1');
        document.getElementById('use461').setAttribute('opacity', '1');
        $('#memoryTable').css('opacity', '1');

    $('#data22_0').css({"animation":"pathing22_0 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data22').css({"animation":"pathing22 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 4;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}

function lwStep5(){
    playing = true;
    $("#data11").one("animationend", function () {
        playing = false;
        insNum = 0;
        $('#data11').css("animation-play-state", "paused");
        $('#data11').css("animation", "none");
        $('#MemRead').css("animation", "none");
        $('#MemtoReg').css("animation", "none");
        $('#ALUSrc').css("animation", "none");
        $('#RegWrite').css("animation", "none");

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

    $("#data23").one("animationend", function () {
        $('#data23').css("animation-play-state", "paused");
        $('#data23').css("animation", "none");
    });
    $("#data23_0").bind("animationend", function () {
        $('#data23_0').css("animation-play-state", "paused");
        $('#data23_0').css("animation", "none");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use453').setAttribute('opacity', '1');
        document.getElementById('mux5').setAttribute('opacity', '1');
        document.getElementById('mux5toPc').setAttribute('opacity', '1');
        document.getElementById('use461').setAttribute('opacity', '1');
        document.getElementById('DMRD2mux3').setAttribute('opacity', '1');
        document.getElementById('mux3').setAttribute('opacity', '1');
        document.getElementById('mux3toRegWD').setAttribute('opacity', '1');
        document.getElementById('use457').setAttribute('opacity', '1');
        $('#registerTable').css('opacity', '1');
        $('#memoryTable').css('opacity', '1');

    $('#data11_0').css({"animation":"pathing11_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data11').css({"animation":"pathing11 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data23_0').css({"animation":"pathing23_0 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data23').css({"animation":"pathing23 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    insNum = 5;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}

