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
     * CPU行为模拟器
     */
    var CPU = (function () {
        function CPU(initstate) {
            this.innerState = {};
            if (initstate != null)
                this.innerState = initstate;
        }
        /**
         * 开始执行
         */
        CPU.prototype.Run = function () {
            //不断取指令并执行
            for (;;) {
                this.LoadInstruct();
                this.ExecInstruct();
            }
        };
        //CPU内部操作函数系列
        /**
         * 加载一个指令
         */
        CPU.prototype.LoadInstruct = function () {
            //取指令 后IP+N
            //这里完成对指令的取出和翻译工作和IP的增加工作
            //最终让IP增加指定值并翻译指令到当前指令存储变量中
        };
        /**
         * 执行当前指令一次
         */
        CPU.prototype.ExecInstruct = function () {
        };
        return CPU;
    }());
    Engine.CPU = CPU;
})(Engine || (Engine = {}));
