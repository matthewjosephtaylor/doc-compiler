import unified, { Parser, Attacher, Transformer } from "unified";
import { Node } from "unist";

// var markdown = require('remark-parse')
// var remark2rehype = require('remark-rehype')
// var doc = require('rehype-document')
// var format = require('rehype-format')
// var html = require('rehype-stringify')
// var report = require('vfile-reporter')

// const parser: Parser = {
//   parse: () => {
//     console.log("got called now what?");
//     const node: Node = {
//       /**
//        * The variant of a node.
//        */
//       type: "foo",

//       /**
//        * Information from the ecosystem.
//        */
//       // data?: Data;

//       /**
//        * Location of a node in a source document.
//        * Must not be present if a node is generated.
//        */
//       // position?: Position;

//       // [key: string]: unknown;
//     };
//     return node;
//   },
// };

const attacher: Attacher = () => {
  return transformer;
};

const transformer: Transformer = async (tree, file) => {

  console.log("got called with:", [tree, file])
  const node: Node = {
    /**
     * The variant of a node.
     */
    type: "foo",

    /**
     * Information from the ecosystem.
     */
    // data?: Data;

    /**
     * Location of a node in a source document.
     * Must not be present if a node is generated.
     */
    // position?: Position;

    // [key: string]: unknown;
  };
  return node;

  return node;
};

console.log("Hello...");
unified()
  // .use(markdown)
  // .use(remark2rehype)
  // .use(doc, {title: '👋🌍'})
  // .use(format)
  // .use(html)
  .use(attacher)
  // .parse(parser);
  .process("# Hello world!", function (err, file) {
    // console.error(report(err || file))
    console.log(String(file));
  });

console.log("Testing...");
