import { site } from "@/config/site";
import { ActionLink, PhotoSpace } from "./ui";
export function ProfileContext() {
  return (
    <section
      className="profile-context"
      aria-label={`Apresentação de ${site.name}`}
    >
      {(site.photos.context || site.photo) && <PhotoSpace slot="context" />}
      <h2>{site.name}</h2>
      <p className="profile-specialty">{site.editorial.specialty}</p>
      <p>
        {site.conceptual ? site.editorial.profileNote : site.about.biography[0]}
      </p>
      <ActionLink secondary href="/sobre">
        {site.editorial.profileAction}
      </ActionLink>
    </section>
  );
}
