export class TrieTreeNode {
  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = {};
  }

  isTerminal() {
    //*regresa true si un nodo es terminal, es decir si el nodo
    //*representa el último caracter de un string que almacenamos en el árbol
    return this.isEndOfWord;
  }

  numChildren() {
    //*regresa el número de hijos del nodo actual.
    return this.children.length;
  }
  hasChild(character) {
    //*regresa true si alguno de los hijos del nodo contiene un caracter dado.
    let temp = Object.keys(this.children);
    console.log(temp)
    for (let key of temp) {
      if (key === character) {
        return true;
      }
    }
    return false;
    // if (this.children === character) {
    //     return true;
    //   }
  }
  getChild(character) {
    //*regresa el nodo hijo que contiene/almacena un caracter dado.
    if (this.hasChild(character)) {
      return this.children[character];
    }
    return false;
  }
  addChild(character, child_node) {
    //*agrega un nuevo nodo hijo al nodo actual. Deberás de
    //*comprobar si el nodo actual tiene un hijo con el caracter que deseamos agregar.
    if (!this.hasChild(character)) {
      this.children = child_node.value;
    } else {
      throw new Error(`Child exists for: ${character}`);
    }
  }
}
