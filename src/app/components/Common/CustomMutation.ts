// import { useMutation } from "react-query";
import { IUseCustomMutation } from "./Interfaces/customMutation";
import { errorToastify } from "./Toastify";
import { ApolloError, useMutation } from "@apollo/client";

/**
 * It's a custom hook that uses the useMutation hook from react-query to make an API call
 * @returns The response object is being returned.
 */

const useCustomMutation = ({
  apolloFunc,
  onSuccess,
  onError,
  query,
  variables,
}: IUseCustomMutation) => {
  const [response] = useMutation(apolloFunc, {
    refetchQueries: [{ query: query, variables: variables }],
    onError: (error: ApolloError) => {
      errorToastify(error.message);
      !!onError && onError(error);
    },

    onCompleted: (data) => {
      onSuccess({ data });
    },
  });

  return response;
};

export default useCustomMutation;
