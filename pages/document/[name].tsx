import { useRouter } from "next/router";

const Document = ({}) => {
  const router = useRouter();
  const { name } = router.query;

  return <p>Document: {name}</p>;
}

export default Document;