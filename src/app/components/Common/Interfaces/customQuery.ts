import { DocumentNode } from "graphql";

export interface IUseCustomQuery {
  apolloFunc: DocumentNode;
  query: DocumentNode | any;
  variables: object;
  fetchPolicy: string;
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
}
