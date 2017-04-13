namespace Engine {
    /**
     * 通用限长数字类
     * limit为长度 位index从0->limit-1
     * 这个类提供静态函数对number进行linmitnumber操作
     */
    export class LimitNumber {
        /**
         * 初始化
         * @param limit 数据长度
         */
        public constructor(public limit: number, protected isreadonly:boolean,protected num: number) {}
        /**
         * 取位 失败返回-1 成功返回0或1
         * @param index 从0开始的位置号
         */
        public GetBit(index: number): number {
            if (index >= this.limit) return -1;
            let tnum: number = this.num;
            let mask: number = 1 << index;
            return (tnum & mask) > 0 ? 1 : 0;
        }
        /**
         * SetBit
         * @param index 从0开始的位置号
         */
        public SetBit(index: number, data: boolean | number) {
            if (index >= this.limit) return -1;
            let xdata: boolean;
            if (typeof data == "boolean") xdata = data;
            else if (data > 1 || data < 0) return -1;
            else xdata = data == 1;

            let ndata = this.num;
            if (xdata) {
                ndata |= 1 << index;
            } else {
                ndata &= ~(1 << index);
            }
            this.num=ndata;

        }
        public set Value(num:number)
        {
            if(this.isreadonly) return;
            this.num=num;
            this.num&=0xffffffff<<(32-this.limit);//取低limit位
        }
        public get Value()
        {
            return this.num;
        }
        public get ReadOnly()
        {
            return this.isreadonly;
        }
    }
    export class Byte extends LimitNumber {
        public constructor(isreadonly:boolean,num:number) {
            super(8,isreadonly,num);
        }
    }
    export class Word extends LimitNumber {
        public constructor(isreadonly:boolean,num:number) {
            super(16,isreadonly,num);
        }
    }
    export class DWord extends LimitNumber {
        public constructor(isreadonly:boolean,num:number) {
            super(32,isreadonly,num);
        }
    }
    export class MemoryAddress extends LimitNumber
    {
        public constructor(isreadonly:boolean,num:number)
        {
            super(20,isreadonly,num);
        }
    }
    /**
     * 操作数
     */
    export abstract class OperationValue
    {
    }
    /**
     * 寄存器引用
     */
    export class RegRefence extends OperationValue
    {
        public constructor(protected state:ICPUState,protected name:string)
        {
            super();
            if(!(name in state)) throw "寄存器引用错误！";
        }
        public get Value()
        {
            return this.state[this.name];
        }
        public set Value(val:LimitNumber)
        {
            this.state[this.name]=val.Value;
        }

    }
    /**
     * 立即数引用 只读
     */
    export class ValueRefence extends OperationValue
    {
        public constructor(protected val:LimitNumber)
        {
            super();
        }
        public get Value()
        {
            return this.val;
        }
    }
    /**
     * 内存引用
     */
    export class MemoryRefence extends OperationValue
    {
        public OnMemoryRead:(address:LimitNumber)=>LimitNumber;
        public OnMemoryWrite:(address:LimitNumber,val:LimitNumber)=>void;
        protected realAddress:number;
        /**
         * 构造一个内存引用
         * @param seg 段值
         * @param base 基址值
         * @param iptr 变址值
         * @param offset 偏移值
         */
        public constructor(limit:number,seg:LimitNumber,base:LimitNumber,iptr?:LimitNumber,offset?:LimitNumber)
        {
            super();
            this.realAddress=(seg.Value<<4)+base.Value;
            if(iptr!=null) this.realAddress+=iptr.Value;
            if(offset!=null) this.realAddress+=offset.Value;
        }
        public get Address()
        {
            return new MemoryAddress(true,this.realAddress);
        }
        public get Value()
        {
            return this.OnMemoryRead(this.Address);
        }
        public set Value(val:LimitNumber)
        {
            this.OnMemoryWrite(this.Address,val);
        }
    }
    //经测试 目前js中的整数最大为32位，超过32位则自动变为浮点数
    /*
    export class QWord extends LimitNumber
    {
        public constructor(){
            super(64);
        }
    }*/

}