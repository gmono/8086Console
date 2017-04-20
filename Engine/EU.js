var Engine;
(function (Engine) {
    /**
     * 表示一个指令
     */
    var Instruct = (function () {
        function Instruct() {
        }
        return Instruct;
    }());
    Engine.Instruct = Instruct;
    /**
     * EU 执行部件
     * 取指令 分析指令并执行 同时对外提供单独执行指令的接口
     */
    var EU = (function () {
        function EU(state) {
            this.state = state;
            //取指令回调函数
            this.GetInstruct = null;
            this.stopFlag = true;
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
        Object.defineProperty(EU.prototype, "State", {
            /**
             * 取EU内保存的CPU状态
             */
            get: function () {
                return this.state;
            },
            /**
            * 设置新的CPU状态 此函数将暂停异步循环
            * 后重新设置state的值再继续循环
            * @param state 新CPUState值
            */
            set: function (state) {
                //由于JS事件队列的性质 其并不需要真的去等待执行线程。。因为根本没有执行线程..
                this.state = state;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 暂停 中断异步循环 保留CPU状态
         */
        EU.prototype.Pause = function () {
            this.stopFlag = true;
        };
        /**
         * 开始执行
         * 此方法调用后 EU将开始异步循环取指令分析执行
         *
         */
        EU.prototype.Start = function () {
            this.stopFlag = false;
            this.Run();
        };
        /**
         * 解析指令并执行的函数
         * 在stopFlag不为真时连续settimeout异步循环
         */
        EU.prototype.Run = function () {
        };
        //以下为指令系统
        EU.prototype.MOV = function (op1, op2) {
        };
        EU.prototype.PUSH = function (op1) {
        };
        EU.prototype.POP = function (op1) {
        };
        EU.prototype.XCHG = function (op1, op2) {
        };
        EU.prototype.XLAT = function () {
        };
        EU.prototype.ADD = function (op1, op2) {
        };
        EU.prototype.SUB = function (op1, op2) {
        };
        EU.prototype.MUL = function (op1) {
        };
        EU.prototype.DIV = function (op1) {
        };
        EU.prototype.ADC = function (op1, op2) {
        };
        EU.prototype.SBB = function (op1, op2) {
        };
        EU.prototype.IMUL = function (op1) {
        };
        EU.prototype.IDIV = function (op1) {
        };
        EU.prototype.DAA = function () {
        };
        EU.prototype.AAA = function () {
        };
        EU.prototype.DAS = function () {
        };
        EU.prototype.AAS = function () {
        };
        EU.prototype.AAM = function () {
        };
        EU.prototype.AAD = function () {
        };
        EU.prototype.CBW = function () {
        };
        EU.prototype.CWD = function () {
        };
        /**
         * 跳转指令 所有跳转指令都以此为基础
         * @param op1 操作数1 可以为寄存器 立即数和内存地址
         * @param op2 当进行直接跳转 即op1为立即数时，如果提供此参数 则为直接远转移 否则为short 或 near转移 非直接转移不受影响
         */
        EU.prototype.JMP = function (op1, op2) {
        };
        EU.prototype.LOOP = function (op1, op2) {
        };
        EU.prototype.LOOPZ = function (op1, op2) {
        };
        EU.prototype.LOOPNZ = function (op1, op2) {
        };
        EU.prototype.JCXZ = function (op1, op2) {
        };
        EU.prototype.CMP = function (op1, op2) {
        };
        EU.prototype.TEST = function (op1, op2) {
        };
        EU.prototype.AND = function (op1, op2) {
        };
        EU.prototype.OR = function (op1, op2) {
        };
        EU.prototype.XOR = function (op1, op2) {
        };
        EU.prototype.NOT = function (op) {
        };
        EU.prototype.NEG = function (op1) {
        };
        EU.prototype.INC = function (op1) {
        };
        EU.prototype.DEC = function (op1) {
        };
        EU.prototype.LAHF = function () {
        };
        EU.prototype.SAHF = function () {
        };
        EU.prototype.PUSHF = function () {
        };
        EU.prototype.POPF = function () {
        };
        EU.prototype.SHL = function (op1, op2) {
        };
        EU.prototype.SAL = function (op1, op2) {
        };
        EU.prototype.SHR = function (op1, op2) {
        };
        EU.prototype.SAR = function (op1, op2) {
        };
        EU.prototype.ROL = function (op1, op2) {
        };
        EU.prototype.ROR = function (op1, op2) {
        };
        EU.prototype.RCL = function (op1, op2) {
        };
        EU.prototype.RCR = function (op1, op2) {
        };
        EU.prototype.REP = function () {
        };
        EU.prototype.MOVSB = function () {
        };
        EU.prototype.MOVSW = function () {
        };
        EU.prototype.STOSB = function () {
        };
        EU.prototype.STOSW = function () {
        };
        EU.prototype.LODSB = function () {
        };
        EU.prototype.LODSW = function () {
        };
        EU.prototype.CLD = function () {
        };
        EU.prototype.STD = function () {
        };
        EU.prototype.SCASB = function () {
        };
        EU.prototype.SCASW = function () {
        };
        EU.prototype.CMPSB = function () {
        };
        EU.prototype.CMPSW = function () {
        };
        EU.prototype.LEA = function (op1, op2) {
        };
        EU.prototype.LDS = function (op1, op2) {
        };
        EU.prototype.LES = function (op1, op2) {
        };
        EU.prototype.REPE = function () {
        };
        EU.prototype.REPNE = function () {
        };
        EU.prototype.REPZ = function () {
        };
        EU.prototype.REPNZ = function () {
        };
        EU.prototype.CALL = function (op1, op2) {
        };
        EU.prototype.RET = function () {
        };
        EU.prototype.RETO = function () {
        };
        EU.prototype.INT = function (op1) {
        };
        EU.prototype.IRET = function () {
        };
        EU.prototype.CLC = function () {
        };
        EU.prototype.CMC = function () {
        };
        EU.prototype.STC = function () {
        };
        EU.prototype.CLI = function () {
        };
        EU.prototype.STI = function () {
        };
        EU.prototype.NOP = function () {
        };
        //以下为机器状态指令 可能不会放到这里
        EU.prototype.HLT = function () {
        };
        EU.prototype.ESC = function () {
        };
        EU.prototype.LOCK = function () {
        };
        EU.prototype.WAIT = function () {
        };
        //以下为段前缀
        EU.prototype.SEG_CS = function () {
        };
        EU.prototype.SEG_DS = function () {
        };
        EU.prototype.SEG_ES = function () {
        };
        EU.prototype.SEG_SS = function () {
        };
        //以下为条件跳转指令
        //无符号数
        EU.prototype.JZ = function (op1, op2) {
        };
        EU.prototype.JNZ = function (op1, op2) {
        };
        EU.prototype.JS = function (op1, op2) {
        };
        EU.prototype.JO = function (op1, op2) {
        };
        EU.prototype.JNO = function (op1, op2) {
        };
        EU.prototype.JP = function (op1, op2) {
        };
        EU.prototype.JNP = function (op1, op2) {
        };
        EU.prototype.JB = function (op1, op2) {
        };
        EU.prototype.JNB = function (op1, op2) {
        };
        EU.prototype.JBE = function (op1, op2) {
        };
        EU.prototype.JNBE = function (op1, op2) {
        };
        //有符号数
        EU.prototype.JL = function (op1, op2) {
        };
        EU.prototype.JNL = function (op1, op2) {
        };
        EU.prototype.JLE = function (op1, op2) {
        };
        EU.prototype.JNLE = function (op1, op2) {
        };
        EU.prototype.IN = function (op1, op2) {
        };
        EU.prototype.OUT = function (op1, op2) {
        };
        return EU;
    }());
    Engine.EU = EU;
})(Engine || (Engine = {}));
