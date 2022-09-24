import Node from './Node';

describe('Node', () => {
  it('sets null as the initial values', () => {
    const node = Node();
    expect(node.getValue()).toBe(null);
    expect(node.getNext()).toBe(null);
  });

  it('correctly sets initial value', () => {
    const node = Node('value');
    expect(node.getValue()).toBe('value');
  });

  it('correctly sets new value', () => {
    const node = Node('value');
    node.setValue('new value');
    expect(node.getValue()).toBe('new value');
  });

  it('correctly sets initial next node link', () => {
    const node = Node('node 1');
    const node2 = Node('node 2', node);
    // Uses toBe because we want to check for an identity
    expect(node2.getNext()).toBe(node);
  });

  it('correctly sets new next node link', () => {
    const node = Node('node 1');
    const node2 = Node('node 2', node);
    node.setNext(node2);
    // Uses toBe because we want to check for an identity
    expect(node.getNext()).toBe(node2);
  });
});
