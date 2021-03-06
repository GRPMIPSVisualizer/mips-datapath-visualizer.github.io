//Author: Chuyan Fu

//Scroll the table to corresponding line
function scrollTable(divName, tableName, number){ //Scroll the scrollbar to a certain row in a table
    let line = document.getElementById(tableName).rows[number];
    $("#" + divName).animate({scrollTop:line.offsetTop},"slow"); //定位tr
}

function deleteALLRows(tableName){
    let table = document.getElementById(tableName);
    let l = table.rows.length;
    if(l > 1){
        for(let i = l-1; i>0; i--){
            table.deleteRow(i);
        }
    }
}

//Compare new and old data in registers and return the altered ones
function compareRegisters(newData){ // Return the rows that have been changed in the register table
    let tableName = "rTable";
    let alteredRegisters = new Array();
    let originData = new Array();
    let table = document.getElementById(tableName);
    let i;
    for(i=1; i<table.rows.length; i++){
        originData.push(table.rows[i].cells[1].innerHTML);
    }
    for(i=0; i<table.rows.length-1; i++){
        if(originData[i]!=newData[i]){
            alteredRegisters.push(i+1); //Because the first line is the table's head
        }
    }
    return alteredRegisters; //This data can be passed to setHighlight function
}

//Clear the highlight of a table
function clearTable(tableName){ //Remove all highlighted rows from a table
    let table = document.getElementById(tableName);
    for(let i=0; i<table.rows.length; i++){
        table.rows[i].classList.remove("highlightRow");
        table.rows[i].classList.remove("framePointer");
        table.rows[i].classList.remove("stackPointer");
    }
}

//Set the highlight of a table
function setHighlight(tableName, rowNumbers){ //Set highlighted rows in a table
    let table = document.getElementById(tableName);
    for(let i=0; i<rowNumbers.length; i++){
        table.rows[rowNumbers[i]].classList.add("highlightRow");
    }
}


function initializeIM(){
    deleteALLRows("IMTable");
    let table = document.getElementById("IMTable");
    let machineCodes = cpu.getMachineCode();
    let index = 4194304;
    for(let a=0; a<machineCodes.length; a++){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = index.toString(16);
        cell2.innerHTML = machineCodes[a];
        index += 4;
    }
    scrollTable("instructionTable", "IMTable", 0);
}

function refreshDM(){
    deleteALLRows("DMTable");
    clearTable("DMTable");
    let data = cpu.getDynamicData();
    let table = document.getElementById("DMTable");
    for(let a=0; a<data.length; a++){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = data[a][0];
        cell2.innerHTML = data[a][1];
    }

}

function initializeSM(){
    deleteALLRows("SMTable");
    let data = cpu.getStaticData();
    let a;
    let table = document.getElementById("SMTable");
    for(a=0; a<data.length; a++){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = data[a][0];
        cell2.innerHTML = data[a][1];
    }
    scrollTable("staticTable", "SMTable", 0);

}

function initializeDM(){
    deleteALLRows("DMTable");
    //Codes to set frame pointer and stack pointer.
    //This functionality is abandoned
    /*
    let table = document.getElementById("DMTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = "STACK POINTER ↓";
    cell1.colSpan = 2;
    cell1.bgColor = 'yellowgreen';

    let row_ = table.insertRow(-1);
    let cell2 = row_.insertCell(0);
    cell2.innerHTML = "FRAME POINTER ↑";
    cell2.colSpan = 2;
     */
}

//Set framePointer in dynamic memory
function setFP(){
    let table = document.getElementById("DMTable");
    let rTable = document.getElementById("rTable");
    let FPAddress = rTable.rows[31].cells[1].innerHTML;
    FPAddress = parseInt(FPAddress.substring(2,10), 16).toString(2);
    alert(FPAddress);
    let a;
    for(a=1; a<table.rows.length; a++){
        if(table.rows[a].cells[0].innerHTML == FPAddress){
            table.rows[a].classList.add("framePointer");
            return a;
        }
    }
}

//Set stackPointer in dynamic memory
function setSP(){
    let table = document.getElementById("DMTable");
    let rTable = document.getElementById("rTable");
    let SPAddress = rTable.rows[30].cells[1].innerHTML;
    SPAddress = parseInt(SPAddress.substring(2,10), 16).toString(2);
    alert(SPAddress);
    let a;
    for(a=0; a<table.rows.length; a++){
        if(table.rows[a].cells[0].innerHTML == SPAddress){
            table.rows[a].classList.add("stackPointer");
            break;
        }
    }
}


function refreshRegisters(){
    clearTable("rTable");
    let data = cpu.debugReg();
    let i;
    for(i=0; i<data.length; i++){
        data[i] = parseInt(data[i], 2).toString(16);
        let l = 8 - data[i].length;
        for(let k=0; k<l; k++){
            data[i] = '0' + data[i];
        }
        data[i] = '0x' + data[i];
    }
    let altered = compareRegisters(data);

    let table = document.getElementById("rTable");
    for(i=0; i<altered.length; i++){
        table.rows[altered[i]].cells[1].innerHTML = data[altered[i]-1];
        table.rows[altered[i]].classList.add("highlightRow");
    }
    if(altered.length != 0){
        scrollTable("registerTable", "rTable", altered[0]);
    }
}
function initializeRegisters(){
    clearTable("rTable");
    let data = cpu.debugReg();
    let i;
    for(i=0; i<data.length; i++){
        data[i] = parseInt(data[i], 2).toString(16);
        let l = 8 - data[i].length;
        for(let k=0; k<l; k++){
            data[i] = '0' + data[i];
        }
        data[i] = '0x' + data[i];
    }
    let table = document.getElementById("rTable");
    for(i=0; i<data.length; i++){
        table.rows[i+1].cells[1].innerHTML = data[i];
    }
    scrollTable("registerTable", "rTable", 0);
}
function refreshIM(){
    clearTable("IMTable");
    let current = cpu.getCurrentInsAddr();
    current = parseInt(current, 2).toString(16);
    let table = document.getElementById("IMTable");
    let i;
    for(i=1; i<table.rows.length; i++){
        if(table.rows[i].cells[0].innerHTML == current) {
            table.rows[i].classList.add("highlightRow");
            scrollTable("instructionTable","IMTable", i);
            break;
        }
    }
}
