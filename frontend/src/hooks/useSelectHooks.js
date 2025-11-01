/**
/**
 * Este hook NO llama otros hooks de React.
 * Solo devuelve una lista de campos select válidos.
 */
export const useSelectHooks = (fields = []) => {
  return fields.filter((f) => f.type === "select" && f.optionsResource);
};

