namespace Engine
{
    /**
     * 此为核心部
     * 即：CPU 内存 和外部接口
     */
    export class Core
    {
        public memory:Uint8Array;
        public cpu:CPU;
        /**
         * 初始化一个内核
         * @param memsize 内存大小
         */
        public constructor(memsize:DWord)
        {
            this.memory=new Uint8Array(memsize.Value);
            this.cpu=new CPU();
            this.cpu.innerState.IP=0;//从0位置开始执行
            this.cpu.innerState.CS=0xFFFF;//设置为初始运行位置
        }
        /**
         * 设置内存空间映射
         */
        public SetMemoryMap(start:DWord,end:DWord,rfunc:ReadFunc,wfunc:WriteFunc)
        {

        }
        /**
         * 注册IO地址空间映射
         * @param iostart io地址空间起始
         * @param ioend io地址空间结束
         * @param rfunc 读取函数
         * @param wfunc 写入函数
         */
        public SetIOPort(iostart:DWord,ioend:DWord,rfunc:ReadFunc,wfunc:WriteFunc)
        {

        }
        
    }
}