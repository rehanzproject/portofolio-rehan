function AboutMe<T>({ arg }: { arg: T }): JSX.Element {
  console.log(arg);

  return <div>{arg}</div>;
}

export default AboutMe;
