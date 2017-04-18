var Engine;
(function (Engine) {
    //指令执行器
    //仅做执行
    var Command = (function () {
        function Command(state) {
            this.state = state;
            this.LOOPE = this.LOOPZ;
            this.LOOPNE = this.LOOPNZ;
            this.JE = this.JZ;
            this.JNE = this.JNZ;
            this.JPE = this.JP;
            this.JPO = this.JNP;
            this.JC = this.JB;
            this.JNAE = this.JB;
            this.JNC = this.JNB;
            this.JAE = this.JNB;
            this.LNGE = this.JL;
            this.JGE = this.JNL;
            this.JNG = this.JLE;
            this.JG = this.JNLE;
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
        /**
         * 跳转指令 所有跳转指令都以此为基础
         * @param op1 操作数1 可以为寄存器 立即数和内存地址
         * @param op2 当进行直接跳转 即op1为立即数时，如果提供此参数 则为直接远转移 否则为short 或 near转移 非直接转移不受影响
         */
        Command.prototype.JMP = function (op1, op2) {
        };
        Command.prototype.LOOP = function (op1, op2) {
        };
        Command.prototype.LOOPZ = function (op1, op2) {
        };
        Command.prototype.LOOPNZ = function (op1, op2) {
        };
        Command.prototype.JCXZ = function (op1, op2) {
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
        Command.prototype.LDS = function (op1, op2) {
        };
        Command.prototype.LES = function (op1, op2) {
        };
        Command.prototype.REPE = function () {
        };
        Command.prototype.REPNE = function () {
        };
        Command.prototype.REPZ = function () {
        };
        Command.prototype.REPNZ = function () {
        };
        Command.prototype.CALL = function (op1, op2) {
        };
        Command.prototype.RET = function () {
        };
        Command.prototype.RETO = function () {
        };
        Command.prototype.INT = function (op1) {
        };
        Command.prototype.IRET = function () {
        };
        Command.prototype.CLC = function () {
        };
        Command.prototype.CMC = function () {
        };
        Command.prototype.STC = function () {
        };
        Command.prototype.CLI = function () {
        };
        Command.prototype.STI = function () {
        };
        Command.prototype.NOP = function () {
        };
        //以下为机器状态指令 可能不会放到这里
        Command.prototype.HLT = function () {
        };
        Command.prototype.ESC = function () {
        };
        Command.prototype.LOCK = function () {
        };
        Command.prototype.WAIT = function () {
        };
        //以下为段前缀
        Command.prototype.SEG_CS = function () {
        };
        Command.prototype.SEG_DS = function () {
        };
        Command.prototype.SEG_ES = function () {
        };
        Command.prototype.SEG_SS = function () {
        };
        //以下为条件跳转指令
        //无符号数
        Command.prototype.JZ = function (op1, op2) {
        };
        Command.prototype.JNZ = function (op1, op2) {
        };
        Command.prototype.JS = function (op1, op2) {
        };
        Command.prototype.JO = function (op1, op2) {
        };
        Command.prototype.JNO = function (op1, op2) {
        };
        Command.prototype.JP = function (op1, op2) {
        };
        Command.prototype.JNP = function (op1, op2) {
        };
        Command.prototype.JB = function (op1, op2) {
        };
        Command.prototype.JNB = function (op1, op2) {
        };
        Command.prototype.JBE = function (op1, op2) {
        };
        Command.prototype.JNBE = function (op1, op2) {
        };
        //有符号数
        Command.prototype.JL = function (op1, op2) {
        };
        Command.prototype.JNL = function (op1, op2) {
        };
        Command.prototype.JLE = function (op1, op2) {
        };
        Command.prototype.JNLE = function (op1, op2) {
        };
        Command.prototype.IN = function (op1, op2) {
        };
        Command.prototype.OUT = function (op1, op2) {
        };
        return Command;
    }());
    Engine.Command = Command;
})(Engine || (Engine = {}));
