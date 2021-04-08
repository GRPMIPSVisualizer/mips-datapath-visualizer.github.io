//Author: Chuyan FU, Enze Ren, Jiahe Lyu

//The 'onclick' function for 'pause' button
function ADDIChecker() {
    if ($('#pause').hasClass("fa-pause")) {

        if (stepNum == 1) {
            $('#data1').css("animation-play-state", "paused");
            $('#data2').css("animation-play-state", "paused");
            $('#data3').css("animation-play-state", "paused");
        }
        else if (stepNum == 2) {
            $('#data4').css("animation-play-state", "paused");
            $('#data42').css("animation-play-state", "paused");
            $('#data31').css("animation-play-state", "paused");
            $('#data20').css("animation-play-state", "paused");
            $('#data20_0').css("animation-play-state", "paused");
            $('#ALUSrc').css("animation-play-state", "paused");
            $('#ALUOp').css("animation-play-state", "paused");
            $('#RegWrite').css("animation-play-state", "paused");
        }
        else if (stepNum == 3) {
            $('#data8').css("animation-play-state", "paused");
            $('#data8_0').css("animation-play-state", "paused");
            $('#data21').css("animation-play-state", "paused");
            $('#data21_0').css("animation-play-state", "paused");
            $('#data7_0').css("animation-play-state", "paused");
            $('#data7').css("animation-play-state", "paused");
        }
        else if (stepNum == 4) {
            $('#data11').css("animation-play-state", "paused");
            $('#data11_0').css("animation-play-state", "paused");
            $('#data12').css("animation-play-state", "paused");
            $('#data12_0').css("animation-play-state", "paused");
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
            $('#data31').css("animation-play-state", "running");
            $('#data20').css("animation-play-state", "running");
            $('#data20_0').css("animation-play-state", "running");
            $('#ALUSrc').css("animation-play-state", "running");
            $('#ALUOp').css("animation-play-state", "running");
            $('#RegWrite').css("animation-play-state", "running");
        }
        else if (stepNum == 3) {
            $('#data8').css("animation-play-state", "running");
            $('#data8_0').css("animation-play-state", "running");
            $('#data21').css("animation-play-state", "running");
            $('#data21_0').css("animation-play-state", "running");
            $('#data7_0').css("animation-play-state", "running");
            $('#data7').css("animation-play-state", "running");
        }
        else if (stepNum == 4) {
            $('#data11').css("animation-play-state", "running");
            $('#data11_0').css("animation-play-state", "running");
            $('#data12').css("animation-play-state", "running");
            $('#data12_0').css("animation-play-state", "running");
        }
        $('#halfSpeed').css("pointer-events", "auto");
        $('#doubleSpeed').css("pointer-events", "auto");
        $('#halfSpeed').css("background-color", "blue");
        $('#doubleSpeed').css("background-color", "blue");
        $('#pause').removeClass("fa-play").addClass("fa-pause");
        $('#pause').attr('title', 'pause');
    }
};


//Sequential play of animation
function ADDIPlay(){
    sequenceFlag = 1;
    addiStep1();
}


//Stage-by-stage play of animation
function ADDIStepForward(addiStep){
    if(addiStep == 1){
        addiStep1();
    }
    else if(addiStep == 2){

        addiStep2();
    }
    else if(addiStep == 3){

        addiStep3();
    }
    else if(addiStep == 4){

        addiStep4();
    }

}

/*
    Explanation for the implementation of animation:

    In the beginning of each instruction:
    1. Make the diagram completely transparent.
    2. Disable the 'forward' and 'play' button.
    3. Set the coding area to 'read only' mode.

    In the beginning of each step:
    1. Set the animation attribute of the animated objects and add 'animation-end' bindings to each of them.
    2. Make the working objects visible for users.
    3. Set the 'playing' variable to 'true'

    At the end of a step:
    1. Set the 'playing' variable to 'false'
    2. The binding functions are triggered to clear it's animation attributes.
    3. The binding function of the animation which takes the longest time would:
        a. Make all components transparent again.
        b. Free some buttons.
        c. If the animation is playing in sequential mode, play the next step.

    At the end of each instruction:
    1. Make the diagram opaque.
    2. Clear all binding functions of all animated objects, otherwise there would be errors when running the next instruction.
    3. Free some buttons
    4. If the animation is playing in sequential mode, change the 'theFlagData' variable to inform the 'set' listener to run the next instruction.

    At the end of some certain animation:
    1. Refresh the register/instruction memory/dynamic memory table

 */


//Stage one of the instruction
function addiStep1(){
    playing = true;
    transparentDiagram();

    $('#pause').click(function () {
        ADDIChecker();
    });

    $("#data3").one("animationend", function () {
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
            addiStep2();
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

    $('#data1').css({"animation":"pathing " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data2').css({"animation":"pathing2 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data3_1').css("opacity", "0");
    $('#data3').css({"animation":"pathing3 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    stepNum = 1;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}


//Stage two of the instruction
function addiStep2(){
    playing = true;
    $("#data4").one("animationend", function () {
        $('#data4').css("animation-play-state", "paused");
        $('#data4').css("animation", "none");
    });
    $("#data42").one("animationend", function () {
        $('#data42').css("animation-play-state", "paused");
        $('#data42').css("animation", "none");
    });
    $("#data31").one("animationend", function () {
        $('#data31').css("animation-play-state", "paused");
        $('#data31').css("animation", "none");
    });
    $("#data20").one("animationend", function () {
        $('#data20').css("animation-play-state", "paused");
        $('#data20').css("animation", "none");
    });
    $("#data20_0").one("animationend", function () {
        $('#data20').css("animation-play-state", "paused");
        $('#data20').css("animation", "none");
    });
    $("#ALUSrc").one("animationend", function () {
        $('#ALUSrc').css("animation-play-state", "paused");
    });
    $("#RegWrite").one("animationend", function () {
        playing = false;
        $('#RegWrite').css("animation-play-state", "paused");
        $('#fw').css("pointer-events", "auto");
        $('#fw').css("color", "blue");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");
        document.getElementById('use455').setAttribute('opacity', '0.2');
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
        document.getElementById('ins2mux2_1').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_2').setAttribute('opacity', '0.2');
        document.getElementById('signExd').setAttribute('opacity', '0.2');
        document.getElementById('text435').setAttribute('opacity', '0.2');
        document.getElementById('text447').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux1A').setAttribute('opacity', '0.2');
        document.getElementById('mux1').setAttribute('opacity', '0.2');
        document.getElementById('mux1toreg').setAttribute('opacity', '0.2');
        document.getElementById('text445').setAttribute('opacity', '0.2');
        document.getElementById('ins2ctl').setAttribute('opacity', '0.2');
        document.getElementById('ctl').setAttribute('opacity', '0.2');
        document.getElementById('circle389').setAttribute('opacity', '0.2');
        document.getElementById('circle391').setAttribute('opacity', '0.2');
        document.getElementById('circle395').setAttribute('opacity', '0.2');
        document.getElementById('circle387').setAttribute('opacity', '0.2');
        document.getElementById('circle409').setAttribute('opacity', '0.2');
        document.getElementById('circle411').setAttribute('opacity', '0.2');
        document.getElementById('circle405').setAttribute('opacity', '0.2');

        if(sequenceFlag == 1){
            addiStep3();
        }
    });
    $("#ALUOp").one("animationend", function () {
        $('#ALUOp').css("animation-play-state", "paused");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use455').setAttribute('opacity', '1');
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
    document.getElementById('ins2mux2_1').setAttribute('opacity', '1');
    document.getElementById('ins2mux2_2').setAttribute('opacity', '1');
    document.getElementById('signExd').setAttribute('opacity', '1');
    document.getElementById('text435').setAttribute('opacity', '1');
    document.getElementById('text447').setAttribute('opacity', '1');
    document.getElementById('ins2mux1A').setAttribute('opacity', '1');
    document.getElementById('mux1').setAttribute('opacity', '1');
    document.getElementById('mux1toreg').setAttribute('opacity', '1');
    document.getElementById('text445').setAttribute('opacity', '1');
    document.getElementById('ins2ctl').setAttribute('opacity', '1');
    document.getElementById('ctl').setAttribute('opacity', '1');
    document.getElementById('circle389').setAttribute('opacity', '1');
    document.getElementById('circle391').setAttribute('opacity', '1');
    document.getElementById('circle395').setAttribute('opacity', '1');
    document.getElementById('circle387').setAttribute('opacity', '1');
    document.getElementById('circle409').setAttribute('opacity', '1');
    document.getElementById('circle411').setAttribute('opacity', '1');
    document.getElementById('circle405').setAttribute('opacity', '1');

    $('#data4').css({"animation":"pathing4 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data42').css({"animation":"pathing42 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data31').css({"animation":"pathing31 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data20_0').css({"animation":"pathing20_0 " + 4.9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data20').css({"animation":"pathing20 " + 4.9/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#ALUOp').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#ALUSrc').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    $('#RegWrite').css({"animation":"Wire " + 8/parseFloat(speed) + "s 1","animation-play-state":"running","animation-fill-mode":"forwards"});
    stepNum = 2;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}


//Stage three of the instruction
function addiStep3(){
    playing = true;
    $("#data21").one("animationend", function () {
        $('#data21').css("animation-play-state", "paused");
        $('#data21').css("animation", "none");
    });
    $("#data21_0").one("animationend", function () {
        $('#data21_0').css("animation-play-state", "paused");
        $('#data21_0').css("animation", "none");
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
        document.getElementById('adder1').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_0').setAttribute('opacity', '0.2');
        document.getElementById('adder1toadder2_1').setAttribute('opacity', '0.2');
        document.getElementById('adder1tomux4').setAttribute('opacity', '0.2');
        document.getElementById('mux4').setAttribute('opacity', '0.2');
        document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '0.2');
        document.getElementById('use459').setAttribute('opacity', '0.2');
        document.getElementById('signExd').setAttribute('opacity', '0.2');
        document.getElementById('text449').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_3').setAttribute('opacity', '0.2');
        document.getElementById('ins2mux2_4').setAttribute('opacity', '0.2');
        document.getElementById('mux2').setAttribute('opacity', '0.2');
        document.getElementById('mux2toAluSrcB').setAttribute('opacity', '0.2');
        document.getElementById('circle403').setAttribute('opacity', '0.2');
        document.getElementById('circle407').setAttribute('opacity', '0.2');
        document.getElementById('circle413').setAttribute('opacity', '0.2');
        document.getElementById('mux5').setAttribute('opacity', '0.2');
        document.getElementById('mux4tomux5').setAttribute('opacity', '0.2');
        if(sequenceFlag == 1){
            addiStep4();
        }
    });
    $("#data7_0").one("animationend", function () {
        $('#data7_0').css("animation-play-state", "paused");
        $('#data7_0').css("animation", "none");
    });
    $("#data8").one("animationend", function () {
        $('#data8').css("animation-play-state", "paused");
        $('#data8').css("animation", "none");
    });
    $("#data8_0").one("animationend", function () {
        $('#data8_0').css("animation-play-state", "paused");
        $('#data8_0').css("animation", "none");
    });
    $('#fw').css("pointer-events", "none");
    $('#fw').css("color", "grey");
    document.getElementById('use457').setAttribute('opacity', '1');
    $('#registerTable').css('opacity', '1');
    document.getElementById('adder1').setAttribute('opacity', '1');
    document.getElementById('adder1toadder2_0').setAttribute('opacity', '1');
    document.getElementById('adder1toadder2_1').setAttribute('opacity', '1');
    document.getElementById('adder1tomux4').setAttribute('opacity', '1');
    document.getElementById('mux4').setAttribute('opacity', '1');
    document.getElementById('regRD1toAluSrcA').setAttribute('opacity', '1');
    document.getElementById('use459').setAttribute('opacity', '1');
    document.getElementById('signExd').setAttribute('opacity', '1');
    document.getElementById('text449').setAttribute('opacity', '1');
    document.getElementById('ins2mux2_3').setAttribute('opacity', '1');
    document.getElementById('ins2mux2_4').setAttribute('opacity', '1');
    document.getElementById('mux2').setAttribute('opacity', '1');
    document.getElementById('mux2toAluSrcB').setAttribute('opacity', '1');
    document.getElementById('circle403').setAttribute('opacity', '1');
    document.getElementById('circle407').setAttribute('opacity', '1');
    document.getElementById('circle413').setAttribute('opacity', '1');
    document.getElementById('mux5').setAttribute('opacity', '1');
    document.getElementById('mux4tomux5').setAttribute('opacity', '1');
    $('#data8_0').css({"animation":"pathing8_0 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data8').css({"animation":"pathing8 " + 5/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data21_0').css({"animation":"pathing21_0 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data21').css({"animation":"pathing21 " + 7/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data7_0').css({"animation":"pathing7_0 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    $('#data7').css({"animation":"pathing7 " + 10/parseFloat(speed) + "s 1","animation-play-state":"running"});
    stepNum = 3;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}


//Stage four of the instruction
function addiStep4(){
    playing = true;
    $("#data11").one("animationend", function () {
        $('#data11').css("animation-play-state", "paused");
        $('#data11').css("animation", "none");
    });
    $("#data11_0").one("animationend", function () {
        $('#data11_0').css("animation-play-state", "paused");
        $('#data11_0').css("animation", "none");
    });
    $("#data12").one("animationend", function () {
        playing = false;
        stepNum = 0;
        recoverDiagram();
        refreshRegisters();
        $('#data12').css("animation-play-state", "paused");
        $('#data12').css("animation", "none");
        $('#ALUSrc').css("animation", "none");
        $('#ALUOp').css("animation", "none");
        $('#RegWrite').css("animation", "none");
        $('#pause').css("pointer-events", "none");
        $('#pause').css("color", "grey");

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
    stepNum = 4;
    $('#pause').css("pointer-events", "auto");
    $('#pause').css("color", "blue");
}








