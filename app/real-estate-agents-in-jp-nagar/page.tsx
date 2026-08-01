import LocalityAgentsPage, { localityMetadata } from "../_components/LocalityAgentsPage";

export const metadata = localityMetadata("jp-nagar");

export default function Page() {
  return <LocalityAgentsPage slug="jp-nagar" />;
}
