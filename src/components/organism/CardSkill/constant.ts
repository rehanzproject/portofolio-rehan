import HTML from "../../../assets/skill/HTML.webp";
import CSS from "../../../assets/skill/CSS.png";
import Js from "../../../assets/skill/js.png";
import ts from "../../../assets/skill/ts.webp";
import React from "../../../assets/skill/react.png";
import redux from "../../../assets/skill/redux.png";
import nodejs from "../../../assets/skill/nodejs.png";
import expressjs from "../../../assets/skill/expressjs.png";
import tailwind from "../../../assets/skill/tailwind.png";
import boostrap from "../../../assets/skill/bs.svg";
import restapi from "../../../assets/skill/rest.png";
import graphql from "../../../assets/skill/graphql.png";
import vue from "../../../assets/skill/vue.png";
import php from "../../../assets/skill/php.png";
import sequelize from "../../../assets/skill/sequelize.jpg";

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
    name: "Typescript",
    icon: ts,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: React,
  },
  {
    name: "React Native",
    icon: React,
  },
  {
    name: "Vue Js",
    icon: vue,
  },
  {
    name: "Node Js",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: expressjs,
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
    name: "Boostrap",
    icon: boostrap,
  },
  {
    name: "REST API",
    icon: restapi,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  
  {
    name: "Sequelize",
    icon: sequelize,
  },
];
