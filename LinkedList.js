import Node from './Node';

export default function LinkedList() {
  let headNode = null;
  let tailNode = null;
  let listSize = 0;

  function append(value) {
    const newNode = Node(value);

    if (listSize < 1) {
      headNode = newNode;
      tailNode = newNode;
    } else {
      tailNode.setNext(newNode);
      tailNode = newNode;
    }

    listSize += 1;
    return newNode;
  }

  function prepend(value) {
    const newNode = Node(value);

    if (listSize < 1) {
      headNode = newNode;
      tailNode = newNode;
    } else {
      newNode.setNext(headNode);
      headNode = newNode;
    }

    listSize += 1;
    return newNode;
  }

  function insertAt(value, index) {
    let previousNode = null;
    let currentNode = headNode;
    let currentIndex = 0;
    while (currentIndex !== index) {
      if (currentNode === null) {
        currentNode = append(null);
      }
      previousNode = currentNode;
      currentNode = previousNode.getNext();
      currentIndex += 1;
    }

    if (previousNode === null) {
      return prepend(value);
    }

    if (currentNode === null) {
      return append(value);
    }

    const newNode = Node(value, currentNode);
    previousNode.setNext(newNode);
    listSize += 1;
    return newNode;
  }

  function head() {
    return headNode;
  }

  function tail() {
    return tailNode;
  }

  function size() {
    return listSize;
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

  function removeAt(index) {
    if (listSize < 1 || listSize < index) {
      return null;
    }

    if (index === 0) {
      const oldHead = headNode;
      headNode = oldHead.getNext();
      listSize -= 1;
      return oldHead;
    }

    const previousNode = at(index - 1);
    const removedNode = previousNode.getNext();
    const nextNode = removedNode.getNext();
    if (tailNode === removedNode) {
      tailNode = previousNode;
      tailNode.setNext(null);
    }
    previousNode.setNext(nextNode);
    listSize -= 1;

    return removedNode;
  }

  function pop() {
    if (listSize < 1) {
      return null;
    }

    const oldTail = tailNode;
    const newTail = at(listSize - 2);
    tailNode = newTail;
    tailNode.setNext(null);
    listSize -= 1;
    return oldTail;
  }

  function contains(value) {
    let currentNode = headNode;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNext();
    }
    return false;
  }

  function find(value) {
    let currentNode = headNode;
    let currentIndex = 0;
    while (currentNode !== null) {
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
    const values = [];
    while (currentNode !== null) {
      values.push(`( ${currentNode.getValue()} )`);
      currentNode = currentNode.getNext();
    }
    if (values.length > 1) {
      values.push('null');
    }
    return values.join(' -> ');
  }

  return {
    append,
    prepend,
    insertAt,
    at,
    removeAt,
    head,
    tail,
    size,
    pop,
    contains,
    find,
    toString,
  };
}
