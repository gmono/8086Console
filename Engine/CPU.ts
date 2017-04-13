namespace Engine
{
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
        protected NowInstruct:Byte[];//当前指令 为一个
        public constructor(initstate?:ICPUState)
        {
            if(initstate!=null) this.innerState=initstate;
        }
        /**
         * 开始执行
         */
        public Run() {
            
        }
        //CPU内部操作函数系列

        /**
         * 加载一个指令
         */
        protected LoadInstruct()
        {
            //取指令 后IP+1

        }
        /**
         * 执行当前指令一次
         */
        protected ExecInstruct()
        {

        }
    }
}