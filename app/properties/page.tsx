import { properties } from "@/lib/data";
import type { Metadata } from "next";
import PropertiesView from "./PropertiesView";

export const metadata: Metadata = {
  title: "Properties for Sale & Rent in South Bangalore",
  description:
    "Browse verified property listings in Jayanagar, JP Nagar, Banashankari & Basavanagudi. Filter by Buy, Rent or New Projects. Card or List view. RERA registered consultants.",
  alternates: { canonical: "/properties/" },
};

export default function PropertiesPage() {
  return <PropertiesView properties={properties} />;
}
