//Author: Chuyan FU, Enze Ren, Jiahe Lyu

function SWChecker() {
    if ($('#pause').hasClass("fa-pause")) {

        if (stepNum == 1) {
            $('#data1').css("animation-play-state", "paused");
            $('#data2').css("animation-play-state", "paused");
            $('#data3').css("animation-play-state", "paused");

        }
        else if (stepNum == 2) {
            $('#data4').css("animation-play-state", "paused");
            $('#data42').css("animation-play-state", "paused");
            $('#data6').css("animation-play-state", "paused");
            $('#data20').css("animation-play-state", "paused");
            $('#data20_0').css("animation-play-state", "paused");
            $('#ALUSrc').css("animation-play-state", "paused");
            $('#MemWrite').css("animation-play-state", "paused");
        }

        else if (stepNum == 3) {
            $('#data8').css("animation-play-state", "paused");
            $('#data8_0').css("animation-play-state", "paused");
            $('#data21').css("animation-play-state", "paused");
            $('#data21_0').css("animation-play-state", "paused");
        }

        else if (stepNum == 4) {
            $('#data11').css("animation-play-state", "paused");
            $('#data11_0').css("animation-play-state", "paused");
            $('#data22').css("animation-play-state", "paused");
            $('#data22_0').css("animation-play-state", "paused");
            $('#data24').css("animation-play-state", "paused");
            $('#data24_0').css("animation-play-state", "paused");
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
            $('#data6').css("animation-play-state", "running");
            $('#data20').css("animation-play-state", "running");
            $('#data20_0').css("animation-play-state", "running");
            $('#ALUSrc').css("animation-play-state", "running");
            $('#MemWrite').css("animation-play-state", "running");
        }

        else if (stepNum == 3) {
            $('#data8').css("animation-play-state", "running");
            $('#data8_0').css("animation-play-state", "running");
            $('#data21').css("animation-play-state", "running");
            $('#data21_0').css("animation-play-state", "running");
        }

        else if (stepNum == 4) {
            $('#data11').css("animation-play-state", "running");
            $('#data11_0').css("animation-play-state", "running");
            $('#data22').css("animation-play-state", "running");
            $('#data22_0').css("animation-play-state", "running");
            $('#data24').css("animation-play-state", "running");
            $('#data24_0').css("animation-play-state", "running");
        }
        $('#halfSpeed').css("pointer-events", "auto");
        $('#doubleSpeed').css("pointer-events", "auto");
        $('#halfSpeed').css("background-color", "blue");
        $('#doubleSpeed').css("background-color", "blue");
        $('#pause').removeClass("fa-play").addClass("fa-pause");
        $('#pause').attr('title', 'pause');

    }
};

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
    playing = true;
    transparentDiagram();
    $('#pause').click(function () {
        SWChecker();
    });

    $("#data3").one("animationend", function () {
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
            swStep2();
        }
    });
    $("#data1").one("animationend", function () {
        $('#data1').css("animation-play-state", "paused");
        $('#data1').css("animation", "none");
    });
    $("#data2").one("animationend", function () {
        $('#data2').css("animation-play-state", "paused");
        $('#data2').css("animation", "none");
        refreshIM();
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
    stepNum = 1;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function swStep2(){
    playing = true;
    $("#data4").one("animationend", function () {
        $('#data4').css("animation-play-state", "paused");
        $('#data4').css("animation", "none");
    });
    $("#data42").one("animationend", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data6").one("animationend", function () {
        $('#data6').css("animation-play-state", "paused");
        $('#data6').css("animation", "none");
    });
    $("#data20").one("animationend", function () {
        $('#data20').css("animation-play-state", "paused");
        $('#data20').css("animation", "none");
    });
    $("#data20_0").one("animationend", function () {
        $('#data20_0').css("animation-play-state", "paused");
        $('#data20_0').css("animation", "none");
    });
    $("#ALUSrc").one("animationend", function () {
        $('#ALUSrc').css("animation-play-state", "paused");

    });
    $("#MemWrite").one("animationend", function () {
        playing = false;
        $('#MemWrite').css("animation-play-state", "paused");
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
            swStep3();
        }
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
    $('#data20_0').css({"animation":"pathing20_0 " + 4.9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data20').css({"animation":"pathing20 " + 4.9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#ALUSrc').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#MemWrite').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    stepNum = 2;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function swStep3(){
    playing = true;
    $("#data8").one("animationend", function () {
        $('#data8').css("animation-play-state", "paused");
        $('#data8').css("animation", "none");
    });
    $("#data8_0").one("animationend", function () {
        $('#data8_0').css("animation-play-state", "paused");
        $('#data8_0').css("animation", "none");
    });
    $("#data21").one("animationend", function () {
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
            swStep4();
        }
    });
    $("#data21_0").one("animationend", function () {
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
    stepNum = 3;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}
function swStep4(){
    playing = true;
    $("#data11").one("animationend", function () {
        playing = false;
        stepNum = 0;
        $('#data11').css("animation-play-state", "paused");
        $('#data11').css("animation", "none");
        $('#ALUSrc').css("animation", "none");
        $('#MemWrite').css("animation", "none");
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
    $("#data11_0").one("animationend", function () {
        $('#data11_0').css("animation-play-state", "paused");
        $('#data11_0').css("animation", "none");
    });

    $("#data22").one("animationend", function () {
        $('#data22').css("animation-play-state", "paused");
        $('#data22').css("animation", "none");
    });
    $("#data22_0").one("animationend", function () {
        $('#data22_0').css("animation-play-state", "paused");
        $('#data22_0').css("animation", "none");
    });
    $("#data24").one("animationend", function () {
        $('#data24').css("animation-play-state", "paused");
        $('#data24').css("animation", "none");
        refreshDM();
    });
    $("#data24_0").one("animationend", function () {
        $('#data24_0').css("animation-play-state", "paused");
        $('#data24_0').css("animation", "none");
    });

    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use453').setAttribute('opacity', '1');
        document.getElementById('mux5').setAttribute('opacity', '1');
        document.getElementById('mux5toPc').setAttribute('opacity', '1');
    document.getElementById('use459').setAttribute('opacity', '1');
        document.getElementById('alu2DMAddr').setAttribute('opacity', '1');
        document.getElementById('alu2DMAddr_0').setAttribute('opacity', '1');
        document.getElementById('use461').setAttribute('opacity', '1');
         $('#registerTable').css('opacity', '1');
        document.getElementById('use457').setAttribute('opacity', '1');
        document.getElementById('regRD2tomux2_0').setAttribute('opacity', '1');
        document.getElementById('regRD2toDMWD').setAttribute('opacity', '1');
        document.getElementById('use461').setAttribute('opacity', '1');
        document.getElementById('circle397').setAttribute('opacity', '1');
    $('#memoryTable').css('opacity', '1');
    $('#data11_0').css({"animation":"pathing11_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data11').css({"animation":"pathing11 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data22_0').css({"animation":"pathing22_0 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data22').css({"animation":"pathing22 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data24_0').css({"animation":"pathing24_0 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data24').css({"animation":"pathing24 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    stepNum = 4;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}

