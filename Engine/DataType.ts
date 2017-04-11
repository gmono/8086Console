namespace Engine
{
    export namespace Types
    {
        /**
         * 通用限长数字类
         * limit为长度 位index从0->limit-1
         */
        export class LimitNumber extends Number
        {
            /**
             * 初始化
             * @param limit 数据长度
             */
            public constructor(public limit:number)
            {
                super();

            }
            /**
             * 取位 失败返回-1 成功返回0或1
             * @param index 从0开始的位置号
             */
            public GetBit(index:number):number
            {
                if(index>=this.limit) return -1;
                let tnum:number=this.valueOf();
                let mask:number=1<<index;
                return (tnum&mask)>0? 1:0;
            }
            /**
             * SetBit
             * @param index 从0开始的位置号
             */
            public SetBit(index:number,data:boolean|number)
            {
                if(index>=this.limit) return -1;
                let xdata:boolean;
                if(typeof data =="boolean") xdata=data;
                else if(data>1||data<0) return -1;
                else xdata=data==1;

                let ndata=this.valueOf();
                if(xdata)
                {
                    ndata|=1<<index;
                }
                else
                {
                    ndata&=~(1<<index);
                }
                this=ndata;

            }
        }
        export class Byte extends LimitNumber
        {
            public constructor(){
                super(8);
            }
        }
        export class Word extends LimitNumber
        {
            public constructor(){
                super(16);
            }
        }
        export class DWord extends LimitNumber
        {
            public constructor(){
                super(32);
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
}