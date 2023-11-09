import { useSelector } from "react-redux";

const UseSelectSugar = (reducerName: string) => {
  const stateResult = useSelector((state: any) => state[reducerName]);
  console.log("stateResult :>> ", stateResult);
  return stateResult;
};

export default UseSelectSugar;
