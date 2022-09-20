import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
  }
class Block implements BlockShape {
    public  hash: string;
    constructor(
      public  prevHash: string,
      public  height: number,
      public  data: string
    ) { 
      this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash: string, height: number, data: string) {
      const toHash = `${prevHash}${height}${data}`;
      return crypto.createHash("sha256").update(toHash).digest("hex");
    }
  }
 // static 함수는 인스턴스화 안 시켜도 쓸 수 있는 함수.

class Blockchain{
    private blocks:  Block[]
    constructor(){
        this.blocks = [];
    }
    private getPreHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length-1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(
            this.getPreHash(),
            this.blocks.length+1,
            data
        );
        this.blocks.push(newBlock);
    }
    public getBlocks(){
        //return [...this.blocks]; // ??? 이렇게 하면 push가 안되는 이유가 뭐지??
        return this.blocks; //-> 이렇게 그대로 블럭을 가져와버리면 외부에서 쉽게 접근해 핵을 먹일 수 있음.
    }
}
const blockChain = new Blockchain();
blockChain.addBlock("first one");
blockChain.addBlock("SECOND one");
blockChain.addBlock("THRId one");
blockChain.getBlocks().push(new Block("xxxxx",11111,"hackeddddd"));
blockChain.addBlock("FOURTH one");
console.log(blockChain.getBlocks());