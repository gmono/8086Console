namespace Engine
{
    /**
     * 表示一个指令
     */
    export class Instruct
    {
        //指令名
        public Name:string;
        //操作数列表
        public Ops:OperationValue[];
    }
    /**
     * CPU行为模拟器
     */
    export class CPU
    {
        //内存读写接口
        public OnMemoryRead:(address:LimitNumber)=>LimitNumber;
        public OnMemoryWrite:(address:LimitNumber,val:LimitNumber)=>void;
        //端口读写接口
        public OnPortRead:(paddress:LimitNumber)=>LimitNumber;
        public OnPortWrite:(paddress:LimitNumber)=>LimitNumber;
        protected innerState:ICPUState=<ICPUState>{};
        protected NowInstruct:Instruct;//当前指令 为一个字节数组
        public constructor(initstate?:ICPUState)
        {
            if(initstate!=null) this.innerState=initstate;
        }
        /**
         * 开始执行
         */
        public Run() {
            //不断取指令并执行
            for(;;)
            {
                this.LoadInstruct();
                this.ExecInstruct();
            }
        }
        //CPU内部操作函数系列

        /**
         * 加载一个指令
         */
        protected LoadInstruct()
        {
            //取指令 后IP+N
            //这里完成对指令的取出和翻译工作和IP的增加工作
            //最终让IP增加指定值并翻译指令到当前指令存储变量中
        }
        /**
         * 执行当前指令一次
         */
        protected ExecInstruct()
        {

        }
    }
}