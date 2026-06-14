export interface RoadmapNodeData {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  status: 'core' | 'optional';
  algdevsQuery?: string;   // search term for the AlgDevs deep-link
  externalLinks?: { label: { ar: string; en: string }; url: string }[];
}

export interface RoadmapEdgeData {
  source: string;
  target: string;
}

export interface RoadmapDefinition {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  nodes: RoadmapNodeData[];
  edges: RoadmapEdgeData[];
}
