export type Name = string;
export type CodeBase = string;

export type CodeFile = {
  name: Name;
};

export type FileLocation = {
  codeBase: CodeBase;
  path: string;
  lineNumber: number;
  columnNumber: number;
};

export type CodeLine = {
  fileLocation: Name;
};

export type CodeModule = {
  name: Name;
};

export type CodeContext = {
  name: Name;
};

export type CodeFunction = {
  name: Name;
  parameter: Name;
  return: Name;
  context: Name;
};

export type CodeParameter = {
  name: Name;
};
