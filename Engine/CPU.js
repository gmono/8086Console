var Engine;
(function (Engine) {
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
        };
        //CPU内部操作函数系列
        /**
         * 加载一个指令
         */
        CPU.prototype.LoadInstruct = function () {
            //取指令 后IP+1
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
