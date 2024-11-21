import HTML from "/images/skill/HTML.webp";
import CSS from "/images/skill/CSS.webp";
import Js from "/images/skill/js.webp";
import ts from "/images/skill/ts.webp";
import React from "/images/skill/react.webp";
import redux from "/images/skill/redux.webp";
import nodejs from "/images/skill/nodejs.webp";
import expressjs from "/images/skill/expressjs.webp";
import tailwind from "/images/skill/tailwind.webp";
import boostrap from "/images/skill/bs.webp";
import restapi from "/images/skill/rest.webp";
import graphql from "/images/skill/graphql.webp";
import vue from "/images/skill/vue.webp";
import php from "/images/skill/php.webp";
import sequelize from "/images/skill/sequelize.webp";

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
