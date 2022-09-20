import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
  }
  class Block implements BlockShape {
    public hash: string;
    constructor(
      public prevHash: string,
      public height: number,
      public data: string
    ) {
      this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash: string, height: number, data: string) {
      const toHash = `${prevHash}${height}${data}`;
      return crypto.createHash("sha256").update(toHash).digest("hex");
    }
  }
 // static 함수는 인스턴스화 안 시켜도 쓸 수 있는 함수.