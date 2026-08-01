import NriCountryPage, { countryMetadata } from "../_components/NriCountryPage";

export const metadata = countryMetadata("usa");

export default function Page() {
  return <NriCountryPage slug="usa" />;
}
