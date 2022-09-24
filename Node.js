export default function Node(initialValue = null, initialNext = null) {
  let value = initialValue;
  let next = initialNext;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  function getNext() {
    return next;
  }

  function setNext(newNext) {
    next = newNext;
  }

  return {
    getValue,
    setValue,
    getNext,
    setNext,
  };
}
