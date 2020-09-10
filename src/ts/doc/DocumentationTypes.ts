export type ProjectDoc = {
  name: string;
  description: DescriptionDoc;
  modules: ModuleDoc[];
  apis: ApiDoc[];
};

export type ModuleDoc = {
  name: string;
  description: DescriptionDoc;
  functions: FunctionDoc[];
  constants: ConstantDoc[];
};

export type FunctionDoc = {
  name: string;
  description: DescriptionDoc;
};

export type ConstantDoc = {
  name: string;
  description: DescriptionDoc;
};

export type DescriptionDoc = {
  text: string;
};

export type ApiDoc = {
  text: string;
};
