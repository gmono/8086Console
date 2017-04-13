var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine;
(function (Engine) {
    /**
     * 通用限长数字类
     * limit为长度 位index从0->limit-1
     * 这个类提供静态函数对number进行linmitnumber操作
     */
    var LimitNumber = (function () {
        /**
         * 初始化
         * @param limit 数据长度
         */
        function LimitNumber(limit, isreadonly, num) {
            this.limit = limit;
            this.isreadonly = isreadonly;
            this.num = num;
        }
        /**
         * 取位 失败返回-1 成功返回0或1
         * @param index 从0开始的位置号
         */
        LimitNumber.prototype.GetBit = function (index) {
            if (index >= this.limit)
                return -1;
            var tnum = this.num;
            var mask = 1 << index;
            return (tnum & mask) > 0 ? 1 : 0;
        };
        /**
         * SetBit
         * @param index 从0开始的位置号
         */
        LimitNumber.prototype.SetBit = function (index, data) {
            if (index >= this.limit)
                return -1;
            var xdata;
            if (typeof data == "boolean")
                xdata = data;
            else if (data > 1 || data < 0)
                return -1;
            else
                xdata = data == 1;
            var ndata = this.num;
            if (xdata) {
                ndata |= 1 << index;
            }
            else {
                ndata &= ~(1 << index);
            }
            this.num = ndata;
        };
        Object.defineProperty(LimitNumber.prototype, "Value", {
            get: function () {
                return this.num;
            },
            set: function (num) {
                if (this.isreadonly)
                    return;
                this.num = num;
                this.num &= 0xffffffff << (32 - this.limit); //取低limit位
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LimitNumber.prototype, "ReadOnly", {
            get: function () {
                return this.isreadonly;
            },
            enumerable: true,
            configurable: true
        });
        return LimitNumber;
    }());
    Engine.LimitNumber = LimitNumber;
    var Byte = (function (_super) {
        __extends(Byte, _super);
        function Byte(isreadonly, num) {
            return _super.call(this, 8, isreadonly, num) || this;
        }
        return Byte;
    }(LimitNumber));
    Engine.Byte = Byte;
    var Word = (function (_super) {
        __extends(Word, _super);
        function Word(isreadonly, num) {
            return _super.call(this, 16, isreadonly, num) || this;
        }
        return Word;
    }(LimitNumber));
    Engine.Word = Word;
    var DWord = (function (_super) {
        __extends(DWord, _super);
        function DWord(isreadonly, num) {
            return _super.call(this, 32, isreadonly, num) || this;
        }
        return DWord;
    }(LimitNumber));
    Engine.DWord = DWord;
    /**
     * 操作数
     * 操作数有两种类型 一种是值引用
     * 一种是内存地址引用
     * 内存地址引用可以获取其地址和值
     * 值引用只能获取值
     * 所有对操作数的值操作都会直接反映在引用的值上
     * 地址只能获取不能设置
     */
    var OperationValue = (function () {
        function OperationValue() {
        }
        return OperationValue;
    }());
    Engine.OperationValue = OperationValue;
    //经测试 目前js中的整数最大为32位，超过32位则自动变为浮点数
    /*
    export class QWord extends LimitNumber
    {
        public constructor(){
            super(64);
        }
    }*/
})(Engine || (Engine = {}));
