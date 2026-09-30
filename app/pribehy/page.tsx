import type { Metadata } from "next";
import { StoriesOverview } from "@/components/stories/StoriesOverview";

export const metadata: Metadata = {
  title: "Príbehy",
  description:
    "Všetky tu uverejnené príbehy sú výsledkom mojich doterajších praktických skúseností a zámerov smerujúcich ku skvalitneniu života ľudí žijúcich v bytových domoch.",
};

export default function StoriesPage() {
  return <StoriesOverview />;
}
