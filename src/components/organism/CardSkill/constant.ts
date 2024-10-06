import HTML from "/images/skill/HTML.webp";
import CSS from "/images/skill/CSS.png";
import Js from "/images/skill/js.png";
import ts from "/images/skill/ts.webp";
import React from "/images/skill/react.png";
import redux from "/images/skill/redux.png";
import nodejs from "/images/skill/nodejs.png";
import expressjs from "/images/skill/expressjs.png";
import tailwind from "/images/skill/tailwind.png";
import boostrap from "/images/skill/bs.svg";
import restapi from "/images/skill/rest.png";
import graphql from "/images/skill/graphql.png";
import vue from "/images/skill/vue.png";
import php from "/images/skill/php.png";
import sequelize from "/images/skill/sequelize.jpg";

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
