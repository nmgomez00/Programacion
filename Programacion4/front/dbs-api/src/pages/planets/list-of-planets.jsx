import CardPlanet from "@/components/planets/card-planet";
import Spinner from "@/components/spinner";
import { useReq } from "@/hooks/use-req";
import { getAllPlanets } from "@/services/dragon-ball-api";

export default function ListOfPlanets() {
  const { data, isLoading } = useReq({ promise: getAllPlanets });

  if (isLoading) return <Spinner type="primary" />;
  return (
    <main className="flex flex-wrap justify-center p-8 gap-1.5 w-full">
      {data?.items?.map((pl) => (
        <CardPlanet key={pl.id} {...pl} />
      ))}
    </main>
  );
}
