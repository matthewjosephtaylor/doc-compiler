# Theory of Operation

Code and Documentation are one thing

- Documentation _explains_ the code

- Code _does_ what the documentation says


It is _difficult_ (impossible?) to write code of any magnitude without some degree documentation
  - The names of things 
  - The structure of the program
  - tests

Most (all?) commonly used languages have facilities comments

Comments are the defacto standard 'documentation language' in use.

The problem is that comments are _unstructured_ and so cannot provide _rigorous_ documentation

The difference between 'unstructured' and 'structured' is only a parser away.

# Answer

Give programmers the _freedom_ to produce not only an executable but other 'content' with their source code.

Programmers write and express themselves in code _as they wish!_

Allow the developer to write parsers for their own unique style of 'unstructured documentation language' (aka code comments, etc...) for the code that is being written _at the moment_

Give the developer a concrete _target_ to translate _their_ source into an _intermediate format_ that is rich enough to pull information from to generate _many_ views of documentation suitable for different purposes.

Give content-tool creators a solid and stable _source_ (the common format) that can be used to generate content (documentation, etc...) from.

# Parse to Type
- developer creates parsers in the form
```
type ParserResult<V> = {
  ... state
  value: V
}
type Parser<I,O> = (ParserState<I>) => ParserState<O>
```

Run parser-set on project to produce intermediate form which is a LabelMap representing the parsed project

Itermediate form is a inspected by content-production-tools to create content
  - Documentation
  - Graphs
  - OpenAPI
  - Code Search
  - Posts for social media

# No _correct_ way to parse
- There is only existence / absence of finding and both are OK

- Specify 'tree' of nested Container Types


## Programmer decides on how it is structured
- project
  - folder
    - file
  - module       

# Doc tool provides content for each part it recognizes
- multiple tools in orchestration
- programmer writes/uses library things which turn types -> content


# Basic flow

unstructured -> typed structure -> content
