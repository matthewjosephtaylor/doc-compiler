import {
  ParameterizedParser,
  ParserState,
  Parser,
  SourceIndex,
} from "@mjtdev/parse/Parsers";
import { fromObject, loop } from "@mjtdev/object/Objects";
import { LabelMap, LabelList, LabelNode } from "@mjtdev/label/LabelMaps";

const updateState = (
  oldState: ParserState,
  index: SourceIndex,
  tree: LabelNode
) => {
  const newState = { ...oldState };
  newState.index = index;
  newState.tree.push(tree) ;
  return newState;
};

export const StringParser: ParameterizedParser<string> = (s) => (
  state: ParserState
) => {
  if (state === undefined) {
    return undefined;
  }
  if (state.source.text.slice(state.index).startsWith(s)) {
    return updateState(state, state.index + s.length, [s, []]);
  }
  return undefined;
};

export const SequenceParser: ParameterizedParser<Parser[]> = (parsers) => (
  state: ParserState
) => {
  return loop(
    parsers,
    (parser, _, accState) => {
      return parser(accState);
    },
    state
  );
};
