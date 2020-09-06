# Parts of source code

## Things that are syntax
- file
  - name
- module
  - name
- function
  - runtime context
  - parameter(s)
  - return(s)
  - name

# Things that describe behavior
- communication
  - location
  - protocol
  - accept
  - produce
- lifecycle
  - start
  - stop

# Unified
- PIA to figure out how to use
  - Lots of docs that circle to other 'sub-projects' in the unified universe
- Javascript
  - quaint language choice for 2020, makes inspecting code harder
    - typescript tacked on in def files a poor substitute
- Core idea of File paired with Tree is powerful
- Packaged based on attempt to extend javascript :( https://www.npmjs.com/package/unherit
  - yet another thing to learn, makes getting into this project difficult as one gets weird errors.
- I really wanted to join this ecosystem, but I think it isn't worth the effort
  - Time better spent creating own document parser? Sigh....

# Language Server
- [LangServer Home](https://langserver.org/#implementations-server)
- JSON-RPC // suppose should be grateful not SOAP
- After reading the entire RPC spec, I'm not excited about using this but can't rule it out
- The idea of being able to generate documentation from any language-server supported language is compelling
- The archaic protocol and to some degree MS/vs-code specific 'features' (naming it codelens...really?) is a bummer
- The documentation of the protocol itself via code-snippets is an interesting choice that I like as it gives me confidence in what it is saying (will have to remember for my own docs I generate....maybe a side-by-side style...or what if that _was_ the documentation...is that crazy??)
- 

# Parsers
- [Peg.js](https://pegjs.org/)
  - the grammar for the parser does not excite me on initial inspection
- [jison](http://zaa.ch/jison/)
  - Bison in JS
  - Accepts bison/flex (easy to find a grammar file)
- [nearley.js](https://nearley.js.org/)
  - EBNF
  - Well maintained, good documentation




