export interface Errors {
  errors: {
    errors: string | null;
  }
  name?: string;
  species?: string;
}

export interface DatabaseErrors {
  data: {
    name: string;
  }
}