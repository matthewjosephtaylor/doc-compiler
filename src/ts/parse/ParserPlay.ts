import { Container } from "@mjtdev/label/Containers";
import { Monad, monad } from "@mjtdev/monad/Monad";
import { Reader, reader } from "@mjtdev/monad/Monads";
import { fromObject, loop } from "@mjtdev/object/Objects";
import { Parser } from "@mjtdev/parse/Parser";
import { charParser, pickCharParser } from "@mjtdev/parse/Parsers";

export type NodeName = string;
export type GrammarTree = { [k in NodeName]: RegExp | GrammarTree };
export type GrammarLeaf = [NodeName, RegExp];
export type GrammarBranch = [NodeName, GrammarTree];

export function isGrammarLeaf(maybe: any): maybe is GrammarLeaf {
  return maybe instanceof Array && maybe.length == 2;
}

// export const ProjectGrammar: GrammarTree= {
//   name: /projName: (.*)/,
// };
export const PROJECT_NAME_GRAMMAR: GrammarTree = {
  name: /projName (.*)/,
};

export type DocParam = {
  param: string
}

export const PARAM_GRAMMAR: GrammarTree = {
  param: /@param (.*)/,
};

export const PROJECT_GRAMMAR: GrammarTree = {
  projName: PROJECT_NAME_GRAMMAR,
  projParam: PARAM_GRAMMAR,
};

const TEST_TEXT = `

/**
 * This is a comment
 * @projName most awesome project ever
 * @badparam Some param of note
 * it has a @foo annotation with something after
 * It also has an @bar annotation
 * /
export function awesomeFunction(foo:string,) {
  console.log("hello world")
}


`;

export function parsersToParser(parsers: Parser[]): Parser {
  return (text) => {
    return loop(
      parsers,
      (parser, _, acc) => {
        const subParserResult = parser(text);
        Object.assign(acc, subParserResult);
        return acc;
      },
      {}
    );
  };
}

export function namedParser(parser: Parser, name: string): Parser {
  return (text) => {
    const result = parser(text);
    if (result !== undefined) {
      return Object.fromEntries([[name, result]]);
    }
    return undefined;
  };
}

export function regexToParser(rule: RegExp): Parser {
  return (text) => {
    const match = text.match(rule);
    if (match?.length === 2) {
      const matchCapture = match[1];
      return matchCapture;
    }
    return undefined;
  };
}

export function grammarTreeToParser(grammarTree: GrammarTree): Parser {
  const parsers: Parser[] = loop(
    grammarTree,
    (leafOrTree, key, acc) => {
      const name = String(key);
      let parser: Parser = undefined;
      if (leafOrTree instanceof RegExp) {
        parser = regexToParser(leafOrTree);
      } else {
        parser = grammarTreeToParser(leafOrTree);
      }
      parser = namedParser(parser, name);

      acc.push(parser);
      return acc;
    },
    []
  );
  return parsersToParser(parsers);
}



export function parserPlay() {
  const parser = grammarTreeToParser(PROJECT_GRAMMAR);
  // const parser = grammarLeafToParser([PROJECT_NAME_GRAMMAR.name, "foo"]);
  // const parser = grammarBranchToParser([PROJECT_NAME_GRAMMAR.name, "foo"]);
  const project = parser(TEST_TEXT);
  console.log("got: ", project);
  // const project: Project = projectParser(TEST_TEXT);
}
