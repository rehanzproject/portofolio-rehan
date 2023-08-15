import HTML from "../../../assets/skill/HTML.webp";
import CSS from "../../../assets/skill/CSS.png";
import Js from "../../../assets/skill/js.png";
import React from "../../../assets/skill/react.png";
import redux from "../../../assets/skill/redux.png";
import tailwind from "../../../assets/skill/tailwind.png";
import restapi from "../../../assets/skill/rest.png";
import graphql from "../../../assets/skill/graphql.png";

type MySkill = {
  name: string;
  icon: string;
};

export const mySkill: MySkill[] = [
  {
    name: "HTML",
    icon: HTML,
  },
  {
    name: "CSS",
    icon: CSS,
  },
  {
    name: "Javascript",
    icon: Js,
  },
  {
    name: "React JS",
    icon: React,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "REST API",
    icon: restapi,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
];
