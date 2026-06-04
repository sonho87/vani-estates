"use client";

import { useEffect } from "react";

/**
 * First-line content protection (deterrent only — not airtight).
 *
 * Blocks:
 *   - Right-click anywhere except inside form fields (so customers can
 *     still paste into the contact form, EMI inputs, etc.)
 *   - Drag-and-drop on images (prevents drag-to-desktop save)
 *   - Long-press image save menu on mobile (handled via CSS in globals.css)
 *
 * Does NOT block:
 *   - DevTools, View Source, screenshots, network-tab downloads
 *   - Right-click inside iframes (Google Maps still works fine)
 */
export default function ProtectContent() {
  useEffect(() => {
    const isFormField = (t: EventTarget | null) => {
      if (!(t instanceof HTMLElement)) return false;
      const tag = t.tagName;
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        t.isContentEditable
      );
    };

    const onContextMenu = (e: MouseEvent) => {
      if (isFormField(e.target)) return; // allow paste menu in inputs
      e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      const t = e.target;
      if (t instanceof HTMLImageElement) e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
