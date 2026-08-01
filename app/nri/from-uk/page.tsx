import NriCountryPage, { countryMetadata } from "../_components/NriCountryPage";

export const metadata = countryMetadata("uk");

export default function Page() {
  return <NriCountryPage slug="uk" />;
}
