console.log("Start Program");
// Created by akinleye Joshua
alert("Thanks alot for viewing my code, Still upgrading and working on it though... created by Akinleye Joshua")

var refresh = document.querySelector(".refresh");
var runCommand = document.querySelector(".run");
var terminal = document.getElementById("terminal");
var terminalBody = document.getElementById("terminal-body");
var terminalHeader = document.getElementById("terminal-header");
var input = document.querySelector("input");
var matrix1 = document.querySelector("#matrix1");
var matrix2 = document.querySelector("#matrix2");

function createTerminal() {
    display = document.createElement('p');
    display.className = 'display';
    display.innerHTML = '$HACKER-TERMINAL>>';
    display.style.color = 'lightgreen';
    terminalBody.appendChild(display);

    textInput = document.createElement('input');
    textInput.className = 'inputs';
    textInput.type = 'text';
    display.appendChild(textInput);

    output = document.createElement('p');
    output.className = 'outputs';
    display.appendChild(output)
} createTerminal()

function clearInput() {
    var input = document.querySelector("input");
    input.value = '';
}

function clearTerminal() {
    window.clearInterval
    var input = document.querySelector("input");
    input.value = '';
    output.innerHTML = '';
}

function showInfo() {
    output.innerHTML = '<br>This is Ultra Terminal verson 1.0, It was created by Akinleye Joshua';
};

function showCommands() {
    output.innerHTML = `<br>Ultra Terminal list of commands:<br>`;
    output.innerHTML += `<br> '<b>list</b>' to view commands`;
    output.innerHTML += `<br> '<b>connect</b>' to establish a connection`;
    output.innerHTML += `<br> '<b>engage</b>' to engage with an IP`;
};

var progress = 0;
function p1() {
    var p1 = Math.floor(Math.random() * 200);
    return p1 + '.';
}
var P1 = p1()

function p2() {
    var p2 = Math.floor(Math.random() * 20);
    return p2 + '.';
}
var P2 = p2()

function connect() {

    progress++
    output.innerHTML = `${progress}% Establishing Connection to [${P1}${P2}${P2}0]`;
    matrix1.innerHTML += '>> <b><i>Securing Connection</i><b> <<';
    

    if (progress >= 100) {

        output.innerHTML = '<br>[CONNECTED to ' + p1() + p2() + p2() + '0' + ']';
        output.innerHTML += '<br>Connection Established Succesfuly';
        output.innerHTML += '<br>Input "engage" to break into the IP<br>';
        matrix2.innerHTML += '>> <b><i>CONNECTION SECURED</i></b> <<';

    }
}

function date() {
    var date = Date();
    return output.innerHTML = date;
}

function engage() {
    progress++

    var number = Math.floor(Math.random() * 100000)
    output.innerHTML += '<br>01010101010010101{PASSWORD}10110' + number + '0000011110001010010101010{CRACKED=' + number + '}'
    output.innerHTML += number + '110101000000011110{CRACKED=' + (number * 100) + '}'
    output.style.color = 'green';
    output.style.fontSize = '1em';
    matrix1.innerHTML += '<br>........0........';
    matrix2.innerHTML += '<br>........1........';
}

function hack() {
    output.innerHTML += 'Initializing...';

}

function run(event) {
    var input = document.querySelector("input").value;
    var commands = ['info', 'list', 'connect', 'date', 'engage', 'hack']

    if (input === commands[0]) {
        showInfo();
        clearInput();
    }
    else if (input === commands[1]) {
        showCommands()
        clearInput()
    }
    else if (input === commands[2]) {
        var timing = setInterval(connect, 100);
    }
    else if (input === commands[3]) {
        setInterval(date, 5000)
    }
    else if (input === '') {
        output.innerHTML = 'Input a command to perform a task, Input "list" command to view commands.'
    }
    else if (input === commands[4]) {
        setInterval(engage, 100)
    }
    else if (input === commands[5]) {
        hack()
    }
    else {
        output.innerHTML = `<b>${input}</b> is an unknown command.`;
    }
};


function matrix() {

    var m1 = Math.floor(Math.random() * 10);
    var m2 = Math.floor(Math.random() * 1000);
    matrix1.innerHTML += 'A' + m1 + ' B010 ' + m2 + '1C2 ' + m2 + '<br>';
    matrix2.innerHTML += 'B' + m2 + ' D010 ' + m1 + '1D9 ' + m2 + '<br>';



} matrix();

function clearMatrix() {
    matrix1.innerHTML = ' ';
    matrix2.innerHTML = ' ';
}

setInterval(clearMatrix, 1000)
setInterval(matrix, 100)


runCommand.addEventListener('click', run);
refresh.addEventListener('click', clearTerminal);
input.addEventListener('keypress', run);
console.log("End Program")