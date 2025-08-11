import CardCharacter from "@/components/characters/card-character";
import Spinner from "@/components/spinner";
import { useReq } from "@/hooks/use-req";
import { getAllCharacters } from "@/services/dragon-ball-api";
import { useLocation } from "wouter";

export default function ListOfCharacters() {
  const { data, isLoading } = useReq({ promise: getAllCharacters });
  const [, navigate] = useLocation();

  if (isLoading) return <Spinner type="primary" />;

  const handleClick = () => navigate("/");
  return (
    <>
      <button onClick={handleClick}>Volver Atras</button>
      <main className="flex flex-wrap justify-center p-8 gap-1.5 w-full">
        {data?.items?.map((ch) => (
          <CardCharacter key={ch.id} {...ch} />
        ))}
      </main>
    </>
  );
}
