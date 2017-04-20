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
        return CPU;
    }());
    Engine.CPU = CPU;
})(Engine || (Engine = {}));
