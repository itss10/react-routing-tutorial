import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>urlParameterです</h1>
      <p>パラメータは{id}</p>
    </div>
  );
};