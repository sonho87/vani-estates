import NriCountryPage, { countryMetadata } from "../_components/NriCountryPage";

export const metadata = countryMetadata("singapore");

export default function Page() {
  return <NriCountryPage slug="singapore" />;
}
