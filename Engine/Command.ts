namespace Engine
{
    //指令执行器
    //仅做执行
    export class Command
    {
        public OnStateChanged:(state:ICPUState)=>void;
        //当执行器需要访问内存时调用
        public OnMemoryRead:(address:LimitNumber)=>LimitNumber;
        public OnMemoryWrite:(address:LimitNumber,val:LimitNumber)=>void;
        public constructor(public state:ICPUState)
        {
        }
        //以下为指令系统
        public MOV(op1:OperationValue,op2:OperationValue)
        {

        }
        public PUSH(op1:OperationValue)
        {

        }
        public POP(op1:OperationValue)
        {

        }
        public XCHG(op1:OperationValue,op2:OperationValue)
        {

        }
        public XLAT()
        {

        }
        public ADD(op1:OperationValue,op2:OperationValue)
        {

        }
        public SUB(op1:OperationValue,op2:OperationValue)
        {

        }
        public MUL(op1:OperationValue)
        {

        }
        public DIV(op1:OperationValue)
        {

        }
        public ADC(op1:OperationValue,op2:OperationValue)
        {

        }
        public SBB(op1:OperationValue,op2:OperationValue)
        {

        }
        public IMUL(op1:OperationValue)
        {

        }
        public IDIV(op1:OperationValue)
        {

        }
        public DAA()
        {

        }
        public AAA()
        {

        }
        public DAS()
        {

        }
        public AAS()
        {

        }
        public AAM()
        {

        }
        public AAD()
        {

        }
        public CBW()
        {

        }
        public CWD()
        {

        }
        /**
         * 跳转指令 所有跳转指令都以此为基础
         * @param op1 操作数1 可以为寄存器 立即数和内存地址 
         * @param op2 当进行直接跳转 即op1为立即数时，如果提供此参数 则为直接远转移 否则为short 或 near转移 非直接转移不受影响
         */
        public JMP(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public LOOP(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public LOOPZ(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public LOOPNZ(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public LOOPE=this.LOOPZ;
        public LOOPNE=this.LOOPNZ;
        public JCXZ(op1:OperationValue,op2?:ValueRefence)
        {
            
        }
        public CMP(op1:OperationValue,op2:OperationValue)
        {

        }
        public TEST(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public AND(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public OR(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public XOR(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public NOT(op:OperationValue)
        {

        }
        public NEG(op1:OperationValue)
        {
            
        }
        public INC(op1:OperationValue)
        {

        }
        public DEC(op1:OperationValue)
        {

        }
        public LAHF()
        {

        }
        public SAHF()
        {

        }
        public PUSHF()
        {

        }
        public POPF()
        {

        }
        public SHL(op1:OperationValue,op2:OperationValue)
        {

        }
        public SAL(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public SHR(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public SAR(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public ROL(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public ROR(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public RCL(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public RCR(op1:OperationValue,op2:OperationValue)
        {
            
        }
        public REP()
        {

        }
        public MOVSB()
        {

        }
        public MOVSW()
        {

        }
        public STOSB()
        {

        }
        public STOSW()
        {

        }
        public LODSB()
        {

        }
        public LODSW()
        {

        }
        public CLD()
        {

        }
        public STD()
        {

        }
        public SCASB()
        {

        }
        public SCASW()
        {

        }
        public CMPSB()
        {

        }
        public CMPSW()
        {
            
        }
        public LEA(op1:RegRefence,op2:MemoryRefence)
        {

        }
        public LDS(op1:RegRefence,op2:MemoryRefence)
        {

        }
        public LES(op1:RegRefence,op2:MemoryRefence)
        {
            
        }
        public REPE()
        {

        }
        public REPNE()
        {
            
        }
        public REPZ()
        {
            
        }
        public REPNZ()
        {
            
        }

        public CALL(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public RET()
        {

        }
        public RETO()
        {

        }
        public INT(op1:ValueRefence|RegRefence)
        {

        }
        public IRET()
        {

        }
        public CLC()
        {

        }
        public CMC()
        {

        }
        public STC()
        {

        }
        public CLI()
        {

        }
        public STI()
        {

        }
        public NOP()
        {

        }
        public HLT()
        {

        }
        public ESC()
        {

        }
        public LOCK()
        {

        }
        public WAIT()
        {

        }
        //以下为段前缀
        public SEG_CS()
        {

        }
        public SEG_DS()
        {

        }
        public SEG_ES()
        {

        }
        public SEG_SS()
        {

        }
        //以下为条件跳转指令
        //无符号数
        public JZ(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JNZ(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JE=this.JZ;
        public JNE=this.JNZ;
        public JS(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JO(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JNO(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JP(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JNP(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JPE=this.JP;
        public JPO=this.JNP;
        public JB(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JNB(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JC=this.JB;
        public JNAE=this.JB;
        public JNC=this.JNB;
        public JAE=this.JNB;
        public JBE(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JNBE(op1:OperationValue,op2?:ValueRefence)
        {

        }
        //有符号数
        public JL(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public LNGE=this.JL;
        public JNL(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JGE=this.JNL;
        public JLE(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JNG=this.JLE;
        public JNLE(op1:OperationValue,op2?:ValueRefence)
        {

        }
        public JG=this.JNLE;

        
    }
}