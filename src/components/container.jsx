const Container = ({ children, classProp }) => {
  return <section className={"container " + classProp}>{children}</section>;
};

export default Container;
