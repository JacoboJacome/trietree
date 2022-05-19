import { TrieTreeNode } from "./TrieTreeNode";

export class TrieTree {
  constructor() {
    this.root = new TrieTreeNode(null);
  }

  findNode(prefix) {
    //*regresa [node, depth] node -> el último nodo para el string dado (prefijo)
    //* y depth -> numero de caracteres del prefijo que coinciden con los nodos de la estructura.
  }

  traverse(node, prefix, visit) {
    //*Recorre el árbol de forma recursiva.
  }

  isEmpty() {
    //*regresa true si el árbol está vacio o false y si no está vacio.
  }

  contains(str) {
    //*regresa true si el string se encuentra en el tree trie.
    let current = this.root;
    for (let character of str) {
      if (current.children[character] === undefined) {
        return false;
      }
      current = current.children[character];
    }
    return current.isEndOfWord;
  }

  insert(str) {
    //*agrega un string en el tree trie.
    let current = this.root;

    for (let character of str) {
      if (current.children[character] === undefined) {
        current.children[character] = new TrieTreeNode(character);
      }

      current = current.children[character];
    }

    current.isEndOfWord = true;
  }

  complete(prefix) {
    //* regresa un arreglo de strings con el prefijo dado.
  }

  allTreeStrings() {
    //*regresa un arreglo con todos los strings almacenados en el tree trie.
  }
}
