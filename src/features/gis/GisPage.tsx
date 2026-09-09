import { useState } from "react";
import { MapPin, Layers, Maximize2, Filter } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MOCK_PARCELS } from "@/mocks/parcels";
import { formatINR } from "@/lib/format";
import type { Parcel } from "@/types/domain";

// Fix leaflet default icon issue (vite + webpack bundling strips the icon URL)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconProto = L.Icon.Default.prototype as any;
delete iconProto._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const LAND_TYPE_COLORS: Record<string, string> = {
  agricultural: "#0F7A5A",
  barren: "#9A6B00",
  commercial: "#1D4ED8",
  residential: "#B42318",
  forest: "#166534",
  government: "#6B7280",
  industrial: "#7C3AED",
};

function createParcelIcon(landType: string): L.DivIcon {
  const color = LAND_TYPE_COLORS[landType] ?? "#6B7280";
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="width:12px;height:12px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
}

function FitBounds({ parcels }: { parcels: Parcel[] }) {
  const map = useMap();
  if (parcels.length > 0) {
    const bounds = L.latLngBounds(parcels.map((p) => p.coordinates as [number, number]));
    map.fitBounds(bounds, { padding: [40, 40] });
  }
  return null;
}

function RecenterButton({ parcels }: { parcels: Parcel[] }) {
  const map = useMap();
  return (
    <button
      onClick={() => {
        if (parcels.length > 0) {
          const bounds = L.latLngBounds(parcels.map((p) => p.coordinates as [number, number]));
          map.fitBounds(bounds, { padding: [40, 40] });
        }
      }}
      className="absolute right-2 top-2 z-[1000] inline-flex items-center gap-1 rounded-md border bg-white px-2 py-1 text-[11px] text-slate-600 shadow-sm hover:bg-slate-50"
    >
      <Maximize2 className="h-3 w-3" /> Fit all
    </button>
  );
}

export function GisPage() {
  const [q, setQ] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filtered = MOCK_PARCELS.filter((p) => {
    if (selectedType !== "all" && p.landType !== selectedType) return false;
    if (q) {
      const s = q.toLowerCase();
      return (
        p.surveyNo.toLowerCase().includes(s) ||
        p.village.toLowerCase().includes(s) ||
        p.owner.name.toLowerCase().includes(s) ||
        p.district.toLowerCase().includes(s)
      );
    }
    return true;
  });

  const landTypes = Array.from(new Set(MOCK_PARCELS.map((p) => p.landType))).sort();

  // Center on first parcel or default to India
  const center: [number, number] = filtered.length > 0 ? filtered[0].coordinates : [20.5937, 78.9629];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-[#0F2340]">GIS — Parcel Map</h1>
        <p className="text-xs text-muted-foreground">
          Interactive Leaflet map with parcel overlays. Markers show land parcels with type-coded colors.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Map */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Layers className="h-4 w-4" /> Map Canvas
            </CardTitle>
            <CardDescription>
              {filtered.length} parcels shown · OpenStreetMap tiles
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-b-lg">
              <MapContainer
                center={center}
                zoom={10}
                className="h-[480px] w-full"
                style={{ background: "#e8edf5" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FitBounds parcels={filtered} />
                <RecenterButton parcels={filtered} />
                {filtered.map((p) => (
                  <Marker
                    key={p.id}
                    position={p.coordinates as [number, number]}
                    icon={createParcelIcon(p.landType)}
                  >
                    <Popup>
                      <div className="min-w-[200px] space-y-1">
                        <p className="text-sm font-semibold text-[#0F2340]">
                          {p.surveyNo} — {p.village}
                        </p>
                        <p className="text-xs text-slate-700">{p.owner.name}</p>
                        <p className="text-xs text-slate-600">
                          {p.areaHa} Ha · {p.landType}
                        </p>
                        <p className="text-xs text-slate-600">
                          Compensation: {formatINR(p.compensationAmount)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {p.district}, {p.state}
                        </p>
                        <Badge
                          variant={
                            p.compensationStatus === "paid"
                              ? "success"
                              : p.compensationStatus === "awarded"
                                ? "info"
                                : "muted"
                          }
                          className="text-[10px] capitalize"
                        >
                          {p.compensationStatus}
                        </Badge>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              {/* Legend overlay */}
              <div className="absolute bottom-2 left-2 z-[1000] rounded-md border bg-white/95 px-3 py-2 shadow-sm">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Land Type</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {Object.entries(LAND_TYPE_COLORS).map(([type, color]) => (
                    <span key={type} className="flex items-center gap-1 text-[10px] text-slate-700">
                      <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar — parcel list + filters */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Filter className="h-4 w-4" /> Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search survey, village, owner…"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="pl-8"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedType("all")}
                  className={`rounded-full border px-2.5 py-1 text-[11px] transition-colors ${
                    selectedType === "all"
                      ? "border-[#0F2340] bg-[#0F2340] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  All ({MOCK_PARCELS.length})
                </button>
                {landTypes.map((t) => {
                  const count = MOCK_PARCELS.filter((p) => p.landType === t).length;
                  return (
                    <button
                      key={t}
                      onClick={() => setSelectedType(t)}
                      className={`rounded-full border px-2.5 py-1 text-[11px] capitalize transition-colors ${
                        selectedType === t
                          ? "border-[#0F2340] bg-[#0F2340] text-white"
                          : "bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {t} ({count})
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">
                Parcels in view <Badge variant="muted">{filtered.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-[380px] space-y-2 overflow-auto">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="rounded-md border bg-white px-3 py-2 transition-colors hover:bg-slate-50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="gov-mono text-[#0F2340]">
                        {p.surveyNo} — {p.village}
                      </p>
                      <p className="text-xs text-slate-700">
                        {p.owner.name} · {p.areaHa} Ha
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {formatINR(p.compensationAmount)}
                      </p>
                    </div>
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: LAND_TYPE_COLORS[p.landType] ?? "#6B7280" }}
                      title={p.landType}
                    />
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="py-6 text-center text-xs text-muted-foreground">No parcels match filters.</p>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline">Layers: Cadastral</Badge>
            <Badge variant="outline">Satellite (later)</Badge>
            <Badge variant="muted">OpenStreetMap</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
