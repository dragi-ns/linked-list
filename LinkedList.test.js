import LinkedList from './LinkedList';

describe('LinkedList', () => {
  it('adds a new node containing a given value to the end of the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    expect(linkedList.size()).toBe(2);
    expect(linkedList.tail().getValue()).toBe('node 2');
    expect(linkedList.tail().getNext()).toBe(null);
  });

  it('adds a new node containing a given value to the start of the list', () => {
    const linkedList = LinkedList();
    linkedList.prepend('node 1');
    linkedList.prepend('node 2');
    expect(linkedList.size()).toBe(2);
    expect(linkedList.head().getValue()).toBe('node 2');
  });

  it('returns the total number of nodes in the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    expect(linkedList.size()).toBe(3);
  });

  it('returns the first node in the list', () => {
    const linkedList = LinkedList();
    const firstNode = linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    expect(linkedList.head()).toBe(firstNode);
    expect(linkedList.head().getNext().getValue()).toBe('node 2');
  });

  it('returns the last node in the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    const lastNode = linkedList.append('node 3');
    expect(linkedList.tail()).toBe(lastNode);
    expect(linkedList.tail().getNext()).toBe(null);
  });

  it('returns the same node if the list has one node', () => {
    const linkedList = LinkedList();
    const node = linkedList.append('node 1');
    expect(linkedList.head()).toBe(node);
    expect(linkedList.tail()).toBe(node);
    expect(linkedList.tail().getNext()).toBe(null);
  });

  it('inserts a new node with the provided value at the given index', () => {
    const linkedList = LinkedList();
    linkedList.append('node 0');
    linkedList.append('node 1');
    linkedList.insertAt('node 2', 1);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.tail().getValue()).toBe('node 1');
    expect(linkedList.tail().getNext()).toBe(null);
  });

  it('inserts a new node with the provided value at the given index when list is empty', () => {
    const linkedList = LinkedList();
    linkedList.insertAt('node 4', 4);
    expect(linkedList.size()).toBe(5);
    expect(linkedList.tail().getValue()).toBe('node 4');
    expect(linkedList.tail().getNext()).toBe(null);
  });

  it('inserts a new node with provided value as a head when given index is 0', () => {
    const linkedList = LinkedList();
    linkedList.insertAt('node 0', 0);
    expect(linkedList.size()).toBe(1);
    expect(linkedList.head().getValue()).toBe('node 0');
  });

  it('inserts a new node with provided value as a tail when given index is ll length size', () => {
    const linkedList = LinkedList();
    linkedList.append('node 0');
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    linkedList.insertAt('node 4', linkedList.size());
    expect(linkedList.size()).toBe(5);
    expect(linkedList.tail().getValue()).toBe('node 4');
    expect(linkedList.tail().getNext()).toBe(null);
  });

  it('returns the node at the given index', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    expect(linkedList.at(0).getValue()).toBe('node 1');
    expect(linkedList.at(1).getValue()).toBe('node 2');
    expect(linkedList.at(2).getValue()).toBe('node 3');
  });

  it('removes the node at the given index', () => {
    const linkedList = LinkedList();
    linkedList.append('node 0');
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    linkedList.removeAt(2);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.at(2).getValue()).toBe('node 3');
  });

  it('sets new head when removing first node from the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 0');
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    linkedList.removeAt(0);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.head().getValue()).toBe('node 1');
  });

  it('sets new tail when removing last node from the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 0');
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    linkedList.removeAt(3);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.tail().getValue()).toBe('node 2');
    expect(linkedList.tail().getNext()).toBe(null);
  });

  it('returns null if there is nothing to be removed', () => {
    const linkedList = LinkedList();
    linkedList.append('node 0');
    linkedList.append('node 1');
    linkedList.append('node 2');
    const removedNode = linkedList.removeAt(5);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.tail().getValue()).toBe('node 2');
    expect(linkedList.tail().getNext()).toBe(null);
    expect(removedNode).toBe(null);
  });

  it('removes the last element from the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    const removedNode = linkedList.pop();
    expect(linkedList.size()).toBe(2);
    expect(linkedList.at(3)).toBe(null);
    expect(linkedList.tail().getValue()).toBe('node 2');
    expect(linkedList.tail().getNext()).toBe(null);
    expect(removedNode.getValue()).toBe('node 3');
  });

  it('returns true if the passed in value is in the list and otherwise returns false.', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    expect(linkedList.contains('node 1')).toBe(true);
    expect(linkedList.contains('node 2')).toBe(true);
    expect(linkedList.contains('node 3')).toBe(true);
    expect(linkedList.contains('node 6')).toBe(false);
  });

  it('returns the index of the node containing value, or null if not found', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    expect(linkedList.find('node 1')).toBe(0);
    expect(linkedList.find('node 2')).toBe(1);
    expect(linkedList.find('node 3')).toBe(2);
    expect(linkedList.find('node 6')).toBe(null);
  });

  it('represents LinkedList objects as strings', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    expect(linkedList.toString()).toBe(
      '( node 1 ) -> ( node 2 ) -> ( node 3 ) -> null'
    );
  });

  it('should return empty string if linked list is empty', () => {
    const linkedList = LinkedList();
    expect(linkedList.toString()).toBe('');
  });
});
