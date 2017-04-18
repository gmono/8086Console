var Engine;
(function (Engine) {
    /**
     * 此为核心部
     * 即：CPU 内存 和外部接口
     */
    var Core = (function () {
        /**
         * 初始化一个内核
         * @param memsize 内存大小
         */
        function Core(memsize) {
            this.memory = new Uint8Array(memsize.Value);
            this.cpu = new Engine.CPU();
            this.cpu.innerState.IP = 0; //从0位置开始执行
            this.cpu.innerState.CS = 0xFFFF; //设置为初始运行位置
        }
        /**
         * 设置内存空间映射
         */
        Core.prototype.SetMemoryMap = function (start, end, rfunc, wfunc) {
        };
        /**
         * 注册IO地址空间映射
         * @param iostart io地址空间起始
         * @param ioend io地址空间结束
         * @param rfunc 读取函数
         * @param wfunc 写入函数
         */
        Core.prototype.SetIOPort = function (iostart, ioend, rfunc, wfunc) {
        };
        return Core;
    }());
    Engine.Core = Core;
})(Engine || (Engine = {}));
