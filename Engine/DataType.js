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
    var Types;
    (function (Types) {
        /**
         * 通用限长数字类
         * limit为长度 位index从0->limit-1
         */
        var LimitNumber = (function (_super) {
            __extends(LimitNumber, _super);
            /**
             * 初始化
             * @param limit 数据长度
             */
            function LimitNumber(limit) {
                var _this = _super.call(this) || this;
                _this.limit = limit;
                return _this;
            }
            /**
             * 取位 失败返回-1 成功返回0或1
             * @param index 从0开始的位置号
             */
            LimitNumber.prototype.GetBit = function (index) {
                if (index >= this.limit)
                    return -1;
                var tnum = this.valueOf();
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
                var ndata = this.valueOf();
                if (xdata) {
                    ndata |= 1 << index;
                }
                else {
                    ndata &= ~(1 << index);
                }
                this = ndata;
            };
            return LimitNumber;
        }(Number));
        Types.LimitNumber = LimitNumber;
        var Byte = (function (_super) {
            __extends(Byte, _super);
            function Byte() {
                return _super.call(this, 8) || this;
            }
            return Byte;
        }(LimitNumber));
        Types.Byte = Byte;
        var Word = (function (_super) {
            __extends(Word, _super);
            function Word() {
                return _super.call(this, 16) || this;
            }
            return Word;
        }(LimitNumber));
        Types.Word = Word;
        var DWord = (function (_super) {
            __extends(DWord, _super);
            function DWord() {
                return _super.call(this, 32) || this;
            }
            return DWord;
        }(LimitNumber));
        Types.DWord = DWord;
        //经测试 目前js中的整数最大为32位，超过32位则自动变为浮点数
        /*
        export class QWord extends LimitNumber
        {
            public constructor(){
                super(64);
            }
        }*/
    })(Types = Engine.Types || (Engine.Types = {}));
})(Engine || (Engine = {}));
