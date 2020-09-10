import { Reader } from "@mjtdev/monad/Monads";

/**
> A parser is a software component that takes input data (frequently text) and 
> builds a data structure – often some kind of parse tree, abstract syntax tree 
> or other hierarchical structure
-- https://en.wikipedia.org/wiki/Parsing#Parser
@param text called 'text' but can be anything that needs parsing
@param runtime contains (potentially mutable) runtime information and services
@returns a parsed value
*/
export type Parser = (text: string) => any;
// export type AnyParser = Parser<any, any>;
