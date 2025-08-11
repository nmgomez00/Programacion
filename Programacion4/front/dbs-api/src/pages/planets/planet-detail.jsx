import Spinner from "@/components/spinner";
import { useReq } from "@/hooks/use-req";
import { getOnePlanetById } from "@/services/dragon-ball-api";
import { useParams } from "wouter";

export default function PlanetDetail() {
  const { id } = useParams();

  const { data: planet, isLoading } = useReq({
    promise: () => getOnePlanetById(id),
  });

  if (isLoading) return <Spinner type="primary" />;
  return (
    <main>
      <section className="hero bg-base-200 mx-auto w-5/6">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={planet?.image}
            alt={"image for " + planet?.name}
            className="max-w-sm rounded-lg shadow-2xl h-80 object-cover"
          />
          <div>
            <h1 className="text-5xl font-bold">{planet?.name}</h1>
            <p className="py-6 max-h-60 overflow-y-scroll">
              {planet?.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
