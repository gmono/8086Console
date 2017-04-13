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
        //多位取 置函数
        /**
         * SetLimitBits
         * 设置几个位
         */
        LimitNumber.prototype.SetLimitBits = function (start, end, val) {
            //设置几个位
            if (this.ReadOnly)
                throw "错误，只读值";
            if (start < 0 || start > this.limit || end > this.limit || end < start)
                throw "取位长度超限";
            var tv = new DWord(true, val);
            for (var i = start; i <= end; ++i) {
                var rindex = i - start; //得到val中的索引
                var bit = tv.GetBit(rindex);
                if (bit > 0)
                    this.num |= 1 << i;
                else
                    this.num &= ~(1 << i);
            }
        };
        /**
         * GetLimitBits
         * 取几个位
         */
        LimitNumber.prototype.GetLimitBits = function (start, end) {
            if (start < 0 || start > this.limit || end > this.limit || end < start)
                throw "取位长度超限";
            var ret = 0;
            for (var i = start; i <= end; ++i) {
                var rindex = i - start;
                var bit = this.GetBit(i);
                if (bit > 0)
                    ret |= 1 << rindex;
                else
                    ret &= ~(1 << rindex);
            }
            return ret;
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
        Word.prototype.ToBytes = function () {
            return [new Byte(false, this.GetLimitBits(0, 7)), new Byte(false, this.GetLimitBits(8, 15))];
        };
        Word.prototype.FromBytes = function (data) {
            this.SetLimitBits(0, 7, data[0].Value);
            this.SetLimitBits(8, 15, data[1].Value);
        };
        return Word;
    }(LimitNumber));
    Engine.Word = Word;
    var DWord = (function (_super) {
        __extends(DWord, _super);
        function DWord(isreadonly, num) {
            return _super.call(this, 32, isreadonly, num) || this;
        }
        DWord.prototype.ToWords = function () {
            return [new Word(false, this.GetLimitBits(0, 15)), new Word(false, this.GetLimitBits(16, 31))];
        };
        DWord.prototype.FromWords = function (data) {
            this.SetLimitBits(0, 15, data[0].Value);
            this.SetLimitBits(16, 31, data[1].Value);
        };
        DWord.prototype.ToBytes = function () {
            var temp = this.ToWords();
            return temp[0].ToBytes().concat(temp[1].ToBytes());
        };
        DWord.prototype.FromBytes = function (data) {
            var w1 = new Word(true, 0);
            w1.FromBytes(data);
            var w2 = new Word(true, 0);
            w2.FromBytes(data.slice(2, 3));
            this.FromWords([w1, w2]);
        };
        return DWord;
    }(LimitNumber));
    Engine.DWord = DWord;
    var MemoryAddress = (function (_super) {
        __extends(MemoryAddress, _super);
        function MemoryAddress(isreadonly, num) {
            return _super.call(this, 20, isreadonly, num) || this;
        }
        return MemoryAddress;
    }(LimitNumber));
    Engine.MemoryAddress = MemoryAddress;
    /**
     * 操作数
     */
    var OperationValue = (function () {
        function OperationValue() {
        }
        return OperationValue;
    }());
    Engine.OperationValue = OperationValue;
    /**
     * 寄存器引用
     */
    var RegRefence = (function (_super) {
        __extends(RegRefence, _super);
        function RegRefence(state, name) {
            var _this = _super.call(this) || this;
            _this.state = state;
            _this.name = name;
            if (!(name in state))
                throw "寄存器引用错误！";
            return _this;
        }
        Object.defineProperty(RegRefence.prototype, "Value", {
            get: function () {
                return this.state[this.name];
            },
            set: function (val) {
                this.state[this.name] = val.Value;
            },
            enumerable: true,
            configurable: true
        });
        return RegRefence;
    }(OperationValue));
    Engine.RegRefence = RegRefence;
    /**
     * 立即数引用 只读
     */
    var ValueRefence = (function (_super) {
        __extends(ValueRefence, _super);
        function ValueRefence(val) {
            var _this = _super.call(this) || this;
            _this.val = val;
            return _this;
        }
        Object.defineProperty(ValueRefence.prototype, "Value", {
            get: function () {
                return this.val;
            },
            enumerable: true,
            configurable: true
        });
        return ValueRefence;
    }(OperationValue));
    Engine.ValueRefence = ValueRefence;
    /**
     * 内存引用
     */
    var MemoryRefence = (function (_super) {
        __extends(MemoryRefence, _super);
        /**
         * 构造一个内存引用
         * @param seg 段值
         * @param base 基址值
         * @param iptr 变址值
         * @param offset 偏移值
         */
        function MemoryRefence(limit, seg, base, iptr, offset) {
            var _this = _super.call(this) || this;
            _this.realAddress = (seg.Value << 4) + base.Value;
            if (iptr != null)
                _this.realAddress += iptr.Value;
            if (offset != null)
                _this.realAddress += offset.Value;
            return _this;
        }
        Object.defineProperty(MemoryRefence.prototype, "Address", {
            get: function () {
                return new MemoryAddress(true, this.realAddress);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MemoryRefence.prototype, "Value", {
            get: function () {
                return this.OnMemoryRead(this.Address);
            },
            set: function (val) {
                this.OnMemoryWrite(this.Address, val);
            },
            enumerable: true,
            configurable: true
        });
        return MemoryRefence;
    }(OperationValue));
    Engine.MemoryRefence = MemoryRefence;
    //经测试 目前js中的整数最大为32位，超过32位则自动变为浮点数
    /*
    export class QWord extends LimitNumber
    {
        public constructor(){
            super(64);
        }
    }*/
})(Engine || (Engine = {}));
