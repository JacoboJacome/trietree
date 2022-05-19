export class TrieTreeNode {
  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = {};
  }

  isTerminal() {
    //*regresa true si un nodo es terminal, es decir si el nodo
    //*representa el último caracter de un string que almacenamos en el árbol
  }

  numChildren() {
    //*regresa el número de hijos del nodo actual.
  }
  hasChild(character) {
    //*regresa true si alguno de los hijos del nodo contiene un caracter dado.
  }
  getChild(character) {
    //*regresa el nodo hijo que contiene/almacena un caracter dado.
  }
  addChild(character, child_node) {
    //*agrega un nuevo nodo hijo al nodo actual. Deberás de
    //*comprobar si el nodo actual tiene un hijo con el caracter que deseamos agregar.
  }
}
