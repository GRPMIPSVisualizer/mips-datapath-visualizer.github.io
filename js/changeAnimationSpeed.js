function displaySpeed(){
    $('#playSpeed').val(parseFloat(speed).toFixed(2));
}

/*半速播放*/
$('.btn.btn-primary.half').click(function () {
    if(parseFloat(speed) == 0.25)
        return;
    let period;
    let data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data8', 'data9', 'data10', 'data11', 'data12', 'data18', 'data19', 'data20', 'data21', 'data22', 'data23', 'data24', 'data25', 'data26', 'data27', 'data28', 'data29', 'data30', 'data42', 'data73', 'data72', 'Jump', 'isZero', 'BranchAndZero', 'Branch', 'ALUSrc', 'RegWrite', 'RegDst', 'ALUOp', 'MemWrite', 'MemRead', 'MemtoReg', 'and1', 'data7_0', 'data8_0', 'data10_0', 'data11_0', 'data12_0', 'data19_0', 'data20_0', 'data21_0', 'data22_0', 'data23_0', 'data24_0', 'data25_0', 'data26_0', 'data27_0', 'data30_0'];
    for(let i=0;i<40;i++) {
        period = parseFloat($("#"+data[i]).css("animation-duration"))*2;
        let t = period + 's';
        $("#"+data[i]).css("animation-duration", t);
    }
    speed = parseFloat(speed)/2;
    displaySpeed();
});

/*二倍速播放*/
$('.btn.btn-primary.double').click(function () {
    if(parseFloat(speed) == 8)
        return;
    let period;
    let data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data8', 'data9', 'data10', 'data11', 'data12', 'data18', 'data19', 'data20', 'data21', 'data22', 'data23', 'data24', 'data25', 'data26', 'data27', 'data28', 'data29', 'data30', 'data42', 'data73', 'data72', 'Jump', 'isZero', 'BranchAndZero', 'Branch', 'ALUSrc', 'RegWrite', 'RegDst', 'ALUOp', 'MemWrite', 'MemRead', 'MemtoReg', 'and1', 'data7_0', 'data8_0', 'data10_0', 'data11_0', 'data12_0', 'data19_0', 'data20_0', 'data21_0', 'data22_0', 'data23_0', 'data24_0', 'data25_0', 'data26_0', 'data27_0', 'data30_0'];
    for(let i=0;i<40;i++) {
        period = parseFloat($("#"+data[i]).css("animation-duration"))/2;
        let t = period + 's';
        $("#"+data[i]).css("animation-duration", t);
    }
    speed = parseFloat(speed)*2;
    displaySpeed();
});

function Unbind(){
    let data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data8', 'data9', 'data10', 'data11', 'data12', 'data18', 'data19', 'data20', 'data21', 'data22', 'data23', 'data24', 'data25', 'data26', 'data27', 'data28', 'data29', 'data30', 'data42', 'data73', 'data72', 'Jump', 'isZero', 'BranchAndZero', 'Branch', 'ALUSrc', 'RegWrite', 'RegDst', 'ALUOp', 'MemWrite', 'MemRead', 'MemtoReg', 'and1', 'data7_0', 'data8_0', 'data10_0', 'data11_0', 'data12_0', 'data19_0', 'data20_0', 'data21_0', 'data22_0', 'data23_0', 'data24_0', 'data25_0', 'data26_0', 'data27_0', 'data30_0'];
    for(let i=0;i<41;i++) {
        $("#"+data[i]).unbind("animationend");
    }
    $("#pause").unbind("click");
}
