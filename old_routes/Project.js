import { useParams } from "react-router-dom";

export default function Project() {
  let params = useParams();
  return <h2>Project: {params.projectTitle}</h2>;
}
