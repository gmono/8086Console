namespace Engine
{
    /**
     * 此为CPU状态结构体
     * 使用对象结构约定 而不是类 这样可以作为纯数据结构通过json传输
     */
    export interface ICPUState
    {
        //段寄存器
        CS:number;
        DS:number;
        ES:number;
        SS:number;
        //指针寄存器
        IP:number;
        SP:number;
        BP:number;
        //变址寄存器
        SI:number;
        DI:number;
        //通用寄存器
        AX:number;
        BX:number;
        DX:number;
        CX:number;
        //Flags
        Flags:number;
    } 
}