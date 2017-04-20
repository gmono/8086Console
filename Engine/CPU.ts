namespace Engine
{

    export type ReadFunc=(address:LimitNumber)=>LimitNumber;
    export type WriteFunc=(address:LimitNumber,val:LimitNumber)=>void;
    /**
     * CPU行为模拟器
     */
    export class CPU
    {
        //内存读写接口
        public OnMemoryRead:ReadFunc;
        public OnMemoryWrite:WriteFunc;
        //端口读写接口
        public OnPortRead:ReadFunc;
        public OnPortWrite:WriteFunc;
        public innerState:ICPUState=<ICPUState>{};
        public constructor(initstate?:ICPUState)
        {
            if(initstate!=null) this.innerState=initstate;
        }
    }
}