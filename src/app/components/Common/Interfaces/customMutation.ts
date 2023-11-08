import { DocumentNode } from "graphql";

export interface IUseCustomMutation {
  apolloFunc: DocumentNode;
  query: DocumentNode | any;
  variables: object;
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
}
