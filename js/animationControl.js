//Author: Chuyan Fu

//Change the text in speed display area
function displaySpeed(){
    $('#playSpeed').val(parseFloat(speed).toFixed(2));
}

//Reduce the speed by half
$('.btn.btn-primary.half').click(function () {
    if(parseFloat(speed) == 0.25)
        return;
    let period;
    let data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data7_0', 'data8', 'data8_0', 'data9', 'data10', 'data10_0', 'data11', 'data11_0', 'data12', 'data12_0', 'data18', 'data19', 'data19_0', 'data20', 'data20_0', 'data21', 'data21_0', 'data22', 'data22_0', 'data23', 'data23_0', 'data24', 'data24_0', 'data25', 'data25_0', 'data26', 'data26_0', 'data27', 'data27_0',  'data28', 'data29', 'data30', 'data30_0', 'data31',  'data42', 'data73', 'data72', 'Jump', 'isZero', 'BranchAndZero', 'Branch', 'ALUSrc', 'RegWrite',  'RegDst', 'ALUOp', 'MemWrite', 'MemRead', 'MemtoReg', 'and1'];
    for(let i=0;i<56;i++) {
        period = parseFloat($("#"+data[i]).css("animation-duration"))*2;
        let t = period + 's';
        $("#"+data[i]).css("animation-duration", t);
    }
    speed = parseFloat(speed)/2;
    displaySpeed();
});

//Double the speed
$('.btn.btn-primary.double').click(function () {
    if(parseFloat(speed) == 8)
        return;
    let period;
    let data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data7_0', 'data8', 'data8_0', 'data9', 'data10', 'data10_0', 'data11', 'data11_0', 'data12', 'data12_0', 'data18', 'data19', 'data19_0', 'data20', 'data20_0', 'data21', 'data21_0', 'data22', 'data22_0', 'data23', 'data23_0', 'data24', 'data24_0', 'data25', 'data25_0', 'data26', 'data26_0', 'data27', 'data27_0',  'data28', 'data29', 'data30', 'data30_0', 'data31',  'data42', 'data73', 'data72', 'Jump', 'isZero', 'BranchAndZero', 'Branch', 'ALUSrc', 'RegWrite',  'RegDst', 'ALUOp', 'MemWrite', 'MemRead', 'MemtoReg', 'and1'];
    for(let i=0;i<56;i++) {
        period = parseFloat($("#"+data[i]).css("animation-duration"))/2;
        let t = period + 's';
        $("#"+data[i]).css("animation-duration", t);
    }
    speed = parseFloat(speed)*2;
    displaySpeed();
});

//Clear all bindings of animation components
function Unbind(){
    let data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data7_0', 'data8', 'data8_0', 'data9', 'data10', 'data10_0', 'data11', 'data11_0', 'data12', 'data12_0', 'data18', 'data19', 'data19_0', 'data20', 'data20_0', 'data21', 'data21_0', 'data22', 'data22_0', 'data23', 'data23_0', 'data24', 'data24_0', 'data25', 'data25_0', 'data26', 'data26_0', 'data27', 'data27_0',  'data28', 'data29', 'data30', 'data30_0', 'data31',  'data42', 'data73', 'data72', 'Jump', 'isZero', 'BranchAndZero', 'Branch', 'ALUSrc', 'RegWrite',  'RegDst', 'ALUOp', 'MemWrite', 'MemRead', 'MemtoReg', 'and1'];
    for(let i=0;i<56;i++) {
        $("#"+data[i]).unbind("animationend");
    }
    $("#pause").unbind("click");
}

//Make the diagram completely transparent
function transparentDiagram() {
    let i;
    let wires = document.getElementsByClassName('wire');
    for (i = 0; i < wires.length; i++) {
        wires[i].setAttribute('opacity', '0.2');
    }
    let texts = document.getElementsByClassName('textOnWire');
    for (i = 0; i < texts.length; i++) {
        texts[i].setAttribute('opacity', '0.2');
    }
    let circles = document.getElementsByTagName('circle');
    for (i = 0; i < circles.length; i++) {
        if (!$(circles[i]).hasClass('dataCircle')) {
            circles[i].setAttribute('opacity', '0.2');
        }
    }
    let uses = document.getElementsByTagName('use');
    for (i = 0; i < uses.length; i++) {
        if (!$(uses[i]).hasClass('transparent')) {
            uses[i].setAttribute('opacity', '0.2');
        }
    }
    $('#instructionTable').css('opacity', '0.2');
    $('#registerTable').css('opacity', '0.2');
    $('#memoryTable').css('opacity', '0.2')
}

//Make the diagram opaque
function recoverDiagram(){
    let i;
    let wires = document.getElementsByClassName('wire');
    for(i = 0; i < wires.length; i++){
        wires[i].setAttribute('opacity','1');
    }
    let texts = document.getElementsByClassName('textOnWire');
    for(i = 0; i < texts.length; i++){
        texts[i].setAttribute('opacity','1');
    }
    let circles = document.getElementsByTagName('circle');
    for(i = 0; i < circles.length; i++){
        if(!$(circles[i]).hasClass('dataCircle')){
            circles[i].setAttribute('opacity','1');
        }
    }
    let uses = document.getElementsByTagName('use');
    for(i = 0; i < uses.length; i++){
        if(!$(uses[i]).hasClass('transparent')){
            uses[i].setAttribute('opacity','1');
        }
    }
    $('#instructionTable').css('opacity', '1');
    $('#registerTable').css('opacity', '1');
    $('#memoryTable').css('opacity', '1')
}