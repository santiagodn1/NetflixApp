import { MoviesGrid } from "../components/MoviesGrid";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
  return <MoviesGrid key={search} search={search} />;
}
