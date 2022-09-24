import Node from './Node';

export default function LinkedList() {
  let headNode = null;
  let tailNode = null;
  let sizeNodes = 0;

  function append(value) {
    const newNode = Node(value);

    if (!headNode) {
      headNode = newNode;
    }

    if (tailNode) {
      tailNode.setNext(newNode);
    }
    tailNode = newNode;

    sizeNodes += 1;
  }

  function prepend(value) {
    const newNode = Node(value);

    if (!tailNode) {
      tailNode = newNode;
    }

    if (headNode) {
      headNode.setNext(newNode);
    }
    headNode = newNode;

    sizeNodes += 1;
  }

  function head() {
    return headNode;
  }

  function tail() {
    return tailNode;
  }

  function size() {
    return sizeNodes;
  }

  function at(index) {
    let currentNode = headNode;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.getNext();
      currentIndex += 1;
    }
    return currentNode;
  }

  function pop() {
    let currentNode = headNode;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < sizeNodes - 2) {
      currentNode = currentNode.getNext();
      currentIndex += 1;
    }
    currentNode.setNext(null);
    tailNode = currentNode;
    sizeNodes -= 1;
  }

  function contains(value) {
    let currentNode = headNode;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < sizeNodes) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNext();
      currentIndex += 1;
    }
    return false;
  }

  function find(value) {
    let currentNode = headNode;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < sizeNodes) {
      if (currentNode.getValue() === value) {
        return currentIndex;
      }
      currentNode = currentNode.getNext();
      currentIndex += 1;
    }
    return null;
  }

  function toString() {
    let currentNode = headNode;
    let currentIndex = 0;
    const values = [];
    while (currentNode !== null && currentIndex < sizeNodes) {
      values.push(`( ${currentNode.getValue()} )`);
      currentNode = currentNode.getNext();
      currentIndex += 1;
    }
    if (values.length > 1) {
      values.push('null');
    }
    return values.join(' -> ');
  }

  return {
    append,
    prepend,
    head,
    tail,
    size,
    at,
    pop,
    contains,
    find,
    toString,
  };
}
