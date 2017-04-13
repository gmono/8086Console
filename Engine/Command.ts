namespace Engine
{
    //指令执行器
    //仅做执行
    export class Command
    {
        public OnStateChanged:(state:ICPUState)=>void;
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

        public JMP(ip:OperationValue,cs?:OperationValue)
        {

        }
        public LOOP(ip:OperationValue,cs?:OperationValue)
        {

        }
        public JCXZ(ip:OperationValue,cs?:OperationValue)
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
    }
}