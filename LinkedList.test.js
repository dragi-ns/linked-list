import LinkedList from './LinkedList';

describe('LinkedList', () => {
  it('adds a new node containing a given value to the end of the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    expect(linkedList.tail().getValue()).toBe('node 1');
  });

  it('adds a new node containing a given value to the start of the list', () => {
    const linkedList = LinkedList();
    linkedList.prepend('node 1');
    expect(linkedList.head().getValue()).toBe('node 1');
  });

  it('returns the total number of nodes in the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    expect(linkedList.size()).toBe(3);
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

  it('removes the last element from the list', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    linkedList.pop();
    expect(linkedList.size()).toBe(2);
    expect(linkedList.at(3)).toBe(null);
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

  it('inserts a new node with the provided value at the given index', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    linkedList.insert('new node 2', 1);
    expect(linkedList.find('node 1')).toBe(0);
    expect(linkedList.find('new node 2')).toBe(2);
    expect(linkedList.find('node 2')).toBe(2);
    expect(linkedList.find('node 3')).toBe(4);
    expect(linkedList.find('node 6')).toBe(null);
  });

  it('removes the node at the given index', () => {
    const linkedList = LinkedList();
    linkedList.append('node 1');
    linkedList.append('node 2');
    linkedList.append('node 3');
    linkedList.remove(1);
    expect(linkedList.find('node 1')).toBe(0);
    expect(linkedList.find('node 2')).toBe(null);
    expect(linkedList.find('node 3')).toBe(1);
  });
});
