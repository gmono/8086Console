var Engine;
(function (Engine) {
    //指令执行器
    //仅做执行
    var Command = (function () {
        function Command(state) {
            this.state = state;
        }
        //以下为指令系统
        Command.prototype.MOV = function (op1, op2) {
        };
        Command.prototype.PUSH = function (op1) {
        };
        Command.prototype.POP = function (op1) {
        };
        Command.prototype.XCHG = function (op1, op2) {
        };
        Command.prototype.XLAT = function () {
        };
        Command.prototype.ADD = function (op1, op2) {
        };
        Command.prototype.SUB = function (op1, op2) {
        };
        Command.prototype.MUL = function (op1) {
        };
        Command.prototype.DIV = function (op1) {
        };
        Command.prototype.ADC = function (op1, op2) {
        };
        Command.prototype.SBB = function (op1, op2) {
        };
        Command.prototype.IMUL = function (op1) {
        };
        Command.prototype.IDIV = function (op1) {
        };
        Command.prototype.DAA = function () {
        };
        Command.prototype.AAA = function () {
        };
        Command.prototype.DAS = function () {
        };
        Command.prototype.AAS = function () {
        };
        Command.prototype.AAM = function () {
        };
        Command.prototype.AAD = function () {
        };
        Command.prototype.CBW = function () {
        };
        Command.prototype.CWD = function () {
        };
        Command.prototype.JMP = function (ip, cs) {
        };
        Command.prototype.LOOP = function (ip, cs) {
        };
        Command.prototype.JCXZ = function (ip, cs) {
        };
        Command.prototype.CMP = function (op1, op2) {
        };
        Command.prototype.TEST = function (op1, op2) {
        };
        Command.prototype.AND = function (op1, op2) {
        };
        Command.prototype.OR = function (op1, op2) {
        };
        Command.prototype.XOR = function (op1, op2) {
        };
        Command.prototype.NOT = function (op) {
        };
        Command.prototype.NEG = function (op1) {
        };
        Command.prototype.INC = function (op1) {
        };
        Command.prototype.DEC = function (op1) {
        };
        Command.prototype.LAHF = function () {
        };
        Command.prototype.SAHF = function () {
        };
        Command.prototype.PUSHF = function () {
        };
        Command.prototype.POPF = function () {
        };
        Command.prototype.SHL = function (op1, op2) {
        };
        Command.prototype.SAL = function (op1, op2) {
        };
        Command.prototype.SHR = function (op1, op2) {
        };
        Command.prototype.SAR = function (op1, op2) {
        };
        Command.prototype.ROL = function (op1, op2) {
        };
        Command.prototype.ROR = function (op1, op2) {
        };
        Command.prototype.RCL = function (op1, op2) {
        };
        Command.prototype.RCR = function (op1, op2) {
        };
        Command.prototype.REP = function () {
        };
        Command.prototype.MOVSB = function () {
        };
        Command.prototype.MOVSW = function () {
        };
        Command.prototype.STOSB = function () {
        };
        Command.prototype.STOSW = function () {
        };
        Command.prototype.LODSB = function () {
        };
        Command.prototype.LODSW = function () {
        };
        Command.prototype.CLD = function () {
        };
        Command.prototype.STD = function () {
        };
        Command.prototype.SCASB = function () {
        };
        Command.prototype.SCASW = function () {
        };
        Command.prototype.CMPSB = function () {
        };
        Command.prototype.CMPSW = function () {
        };
        Command.prototype.LEA = function (op1, op2) {
        };
        return Command;
    }());
    Engine.Command = Command;
})(Engine || (Engine = {}));
