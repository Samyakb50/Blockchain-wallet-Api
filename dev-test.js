const Block=require('./Blockchain/block');

const fooBlock = Block.mineBlock(Block.genesis(),'foo');
console.log(fooBlock.toString());