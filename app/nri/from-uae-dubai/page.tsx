import NriCountryPage, { countryMetadata } from "../_components/NriCountryPage";

export const metadata = countryMetadata("uae-dubai");

export default function Page() {
  return <NriCountryPage slug="uae-dubai" />;
}
