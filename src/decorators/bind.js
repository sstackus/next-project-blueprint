export default function bind(elementDescriptor) {
  const { value } = elementDescriptor.descriptor;
  // eslint-disable-next-line no-param-reassign
  elementDescriptor.descriptor = {
    configurable: true,
    get() {
      // This is where the magic happens
      return value.bind(this);
    },
  };

  return elementDescriptor;
}
