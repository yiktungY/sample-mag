const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/simple-sample-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "simple-sample-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
