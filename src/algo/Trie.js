/*todo: turn letter into number and use arrays */
class Trie {
  constructor(){
    this.edges = new Map();
  }

  /* Adds new node with THIS AS ROOT */
  addWord(word){
    if(word == ''){
      this.terminal = true;
    }
    else if(this.edges.has(word[0])){
      this.edges.get(word[0]).addWord(word.substring(1));
    }
    else{
      let nextNode = new Trie();
      this.edges.set(word[0], nextNode);
      nextNode.addWord(word.substring(1));
    }
  }

  isTerminal(){
    return this.terminal;
  }

  advance(letter){
    if(!(this.edges.has(letter))){ 
      return false;
    }
    return this.edges.get(letter);
  }
}

export {Trie};
