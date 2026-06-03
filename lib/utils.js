// lib/utils.js — Shared utility functions

export function formatPrice(price, status) {
  if (status === "Rent") {
    return "₹" + price.toLocaleString("en-IN") + "/month";
  }
  if (price >= 10000000) {
    return "₹" + (price / 10000000).toFixed(2) + " Cr";
  }
  if (price >= 100000) {
    return "₹" + (price / 100000).toFixed(0) + " Lakh";
  }
  return "₹" + price.toLocaleString("en-IN");
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[—–]/g, "-")
    .replace(/₹/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
