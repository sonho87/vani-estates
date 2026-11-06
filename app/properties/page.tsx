import { properties } from "@/lib/data";
import type { Metadata } from "next";
import PropertiesView from "./PropertiesView";

export const metadata: Metadata = {
  title: "Flats for Sale & Rent in Jayanagar, JP Nagar | South Bangalore",
  description:
    "Verified 2 and 3 BHK flats and houses for sale and rent in Jayanagar, JP Nagar, Basavanagudi and Banashankari. Photos, prices, free site visits.",
  alternates: { canonical: "/properties/" },
};

export default function PropertiesPage() {
  return <PropertiesView properties={properties} />;
}
