# 8086Console
8086汇编控制台
这是用Typescript实现的一个在浏览器端运行的8086VM系统 
# 进度
正在实现CPU和中心硬件系统部分
# 说明
并非完全模拟8086处理器内部实现，这是基于通用性考虑的 
此模拟机基于逻辑结构 分为 核心系统 CPU EU BIU STATE
5个层次 
核心系统为内存 IO接口映射 内存空间映射等 类似主板芯片组的功能 
核心系统内有CPU CPU保存State State中有整个CPU中的共享状态主要是各个寄存器 
CPU中包含EU和BIU，EU和BIU是相互独立的，可以并行执行，其通过CPU进行相互通信，互相不知道对方的存在 
其中EU包含所有的指令执行函数，以及一个全局指令分析函数，其通过GetInstruct回调函数向外发出取指令数据的信号，获得指令字节，同时当改变State时向外发出State改变的信号，并附带新State的值 
需要注意的是，EU内部存有一个State的副本，其通过OnStateChange信号和 State属性来和外部State同步 
同时EU在需要内存和接口读写时会调用内存和接口读写的回调函数，具体操作如何与EU无关 
BIU为总线接口部件，其负责存储器 IO 内存地址计算等 目前还没有设计好 
注意 EU的内存访问提供的是段和地址值，而BIU则负责将此两个值（或多个值 取决于具体的寻址方式）合成为一个物理地址值，并通过自身的回调函数对外发出物理内存访问信号 
预计此访问信号会被传递到Core中，Core中根据内存映射 IO映射等信息进行处理 
# 设计
本模拟机的总体设计遵循 模块化 功能化 层次化 并行化的原则，在尽量符合真实物理机器结构的同时尽量符合逻辑结构，并提供了高度的灵活性和清晰性，其不仅可以用于模拟8086系统，修改后用于其他类型CPU甚至其他平台都是可行的
# 缘由
本模拟机的设计缘由为当前汇编语言和操作系统教学缺乏一个好的教学平台，其次便是对底层编程和操作系统研究缺乏一个易于调试，修改，监视的平台，对于上述需求来说，效率影响不大，主要矛盾在于“对人的友好”，就如同Visual Studio之于.net开发一般，这样一个平台将大大提升效率，而现今大多数的虚拟机即使是研究用的至少都是采用C/C++编写，虽然效率提高，但是相对于JS的F12直接调试，并且调试环境非常优秀，扩展非常容易，入门门槛低，还能和UI部分很好的结合等等一些特性来说，C/C++编写的虚拟机仍然非常不友好，如今很多中国学校学习汇编语言仍然在使用DEBUG，而没有使用bochs之类的东西，很大一个原因就是使用bochs类的虚拟机，需要处理大量的细节，需要大量的计算机操作，程序开发的经验和对系统底层原理的一些了解，同时即使成功让调试器连接上了虚拟机，仍然很有可能是在控制台上操作，并且使用虚拟机，可能还需要使用dd等工具制作软盘镜像，通过汇编器编译出二进制然后写入软盘镜像，对于单纯的8086汇编教学来说似乎得不偿失，甚至在准备工作部分就已经超出教学范围 
# 采用TS的原因
首先对机器的模拟需要高度清晰的结构，完善的约束规则，TS显然具备这种特性，同时它可以很快速的实时编译为JS，相对于ES2015而言，后者在语法上只是对ES5进行了一些改进，其基本方向并不是为了构建大型系统，而是为了构建前端应用 这是不同的需求
同时它对模块的组织是基于树形结构组件化的，而对于互相之间存在复杂相互依赖关系的，在这种组织中应该放在同一文件中，这显然不合逻辑，其中原因还是因为这种组织方式是为应用而非系统构建的 因此本模拟机采用TS作为开发语言

