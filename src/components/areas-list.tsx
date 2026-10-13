import Link from "next/link";
import { practiceAreas } from "@/config/site";
import { Arrow } from "./ui";
export function AreasList({ exclude }: { exclude?: string }) {
  return (
    <div className="areas-list">
      {practiceAreas
        .filter((area) => area.slug !== exclude)
        .map((area) => (
          <Link
            className="area-row"
            key={area.slug}
            href={`/areas/${area.slug}`}
          >
            <div>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
            </div>
            <Arrow />
          </Link>
        ))}
    </div>
  );
}
