import { AboutProps } from "../../type";
import React from "react"
type TestProps<Test> = { 
  name: Test
  age: number
}

const test: TestProps<string> = {
 name: "rehan",
 age: 20
}
function AboutMe(props: AboutProps): JSX.Element {
  return <div className="">
    <h1>About me</h1>
    <p>Im {props.name} and age {props.age} </p>
  </div>;
}

export default AboutMe;
