import { ApolloError, useQuery } from "@apollo/client";
import { errorToastify } from "./Toastify";
import { IUseCustomQuery } from "./Interfaces/customQuery";

/**
 * It's a custom hook that uses the useQuery hook from the react-query library to make an API call
 * @returns The response object from the useQuery hook.
 */
const useCustomQuery = ({
  apolloFunc,
  onSuccess,
  onError,
}: IUseCustomQuery) => {
  const response = useQuery(apolloFunc, {
    onError: (error: ApolloError) => {
      errorToastify(error.message);
      !!onError && onError(error?.message);
    },
    onCompleted: (data) => {
      onSuccess(data);
    },
    fetchPolicy: "cache-and-network",
  });

  return response;
};

export default useCustomQuery;
