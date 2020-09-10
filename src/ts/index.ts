import {
  StringParser,
  SequenceParser,
} from "@mjtdev/parse/common/CommonParsers";
import { parserPlay } from "@mjtdev/parse/ParserPlay";
import { ParserState } from "@mjtdev/parse/Parsers";




console.log("Testing...");

parserPlay();

// const strParser = StringParser("@param sardines");
// const seqParser = SequenceParser([
//   StringParser("*"),
//   StringParser(" "),
//   StringParser("@param"),
//   StringParser(" "),
  // StringParser("sardines"),
// ]);

// {
//   const state: ParserState = {
//     tree: [],
//     index: 2,
//     source: {
//       uri: "foo-file",
//       text: "* @param sardines are delicious",
//     },
//   };
//   // console.log("A");
//   // console.log(strParser(state));
// }

// {
//   const state: ParserState = {
//     tree: [],
//     index: 0,
//     source: {
//       uri: "foo-file",
//       text: "* @param sardines are delicious",
//     },
//   };

//   console.log("B");
//   console.log(seqParser(state));
// }
