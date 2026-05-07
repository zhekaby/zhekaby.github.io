export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

export const skills: Skill[] = [
  // Architecture & APIs
  {
    title: 'gRPC + protobuf (buf)',
    competency: 5,
    category: ['Architecture & APIs'],
  },
  { title: 'connect-go', competency: 4, category: ['Architecture & APIs'] },
  { title: 'GraphQL', competency: 4, category: ['Architecture & APIs'] },
  { title: 'REST / OpenAPI', competency: 5, category: ['Architecture & APIs'] },
  { title: 'WebSocket', competency: 5, category: ['Architecture & APIs'] },
  {
    title: 'Event-driven design',
    competency: 4,
    category: ['Architecture & APIs'],
  },

  // Messaging & Workflows
  {
    title: 'NATS JetStream',
    competency: 5,
    category: ['Messaging & Workflows'],
  },
  { title: 'Kafka', competency: 4, category: ['Messaging & Workflows'] },
  {
    title: 'Google Pub/Sub',
    competency: 4,
    category: ['Messaging & Workflows'],
  },
  { title: 'Temporal', competency: 4, category: ['Messaging & Workflows'] },
  {
    title: 'Argo Workflows',
    competency: 4,
    category: ['Messaging & Workflows'],
  },

  // Kubernetes & Service Mesh
  {
    title: 'controller-runtime (custom operators)',
    competency: 5,
    category: ['Kubernetes & Service Mesh'],
  },
  { title: 'Helm', competency: 5, category: ['Kubernetes & Service Mesh'] },
  {
    title: 'ArgoCD (GitOps)',
    competency: 5,
    category: ['Kubernetes & Service Mesh'],
  },
  { title: 'Istio', competency: 4, category: ['Kubernetes & Service Mesh'] },
  {
    title: 'External Secrets Operator',
    competency: 4,
    category: ['Kubernetes & Service Mesh'],
  },
  {
    title: 'cert-manager',
    competency: 4,
    category: ['Kubernetes & Service Mesh'],
  },

  // Cloud
  { title: 'GCP / GKE (certified)', competency: 5, category: ['Cloud'] },
  { title: 'AWS / EKS', competency: 4, category: ['Cloud'] },
  { title: 'Azure', competency: 3, category: ['Cloud'] },
  { title: 'Cloudflare', competency: 4, category: ['Cloud'] },

  // Infrastructure as Code
  {
    title: 'OpenTofu / Terraform',
    competency: 5,
    category: ['Infrastructure as Code'],
  },
  { title: 'Pulumi', competency: 4, category: ['Infrastructure as Code'] },
  { title: 'Ansible', competency: 5, category: ['Infrastructure as Code'] },
  { title: 'Docker', competency: 5, category: ['Infrastructure as Code'] },

  // Data
  { title: 'PostgreSQL', competency: 5, category: ['Data'] },
  { title: 'CockroachDB', competency: 4, category: ['Data'] },
  { title: 'Redis', competency: 5, category: ['Data'] },
  { title: 'Valkey', competency: 4, category: ['Data'] },
  { title: 'Neo4j', competency: 4, category: ['Data'] },
  { title: 'MySQL', competency: 4, category: ['Data'] },
  { title: 'MSSQL / Azure SQL', competency: 5, category: ['Data'] },
  { title: 'Elasticsearch', competency: 4, category: ['Data'] },

  // Observability
  { title: 'OpenTelemetry', competency: 5, category: ['Observability'] },
  {
    title: 'Prometheus / Google Managed Prometheus',
    competency: 5,
    category: ['Observability'],
  },
  { title: 'Grafana', competency: 5, category: ['Observability'] },
  { title: 'Stackdriver', competency: 4, category: ['Observability'] },
  {
    title: 'ELK (Elasticsearch / Logstash / Kibana)',
    competency: 4,
    category: ['Observability'],
  },

  // Security & DevSecOps
  {
    title: 'ISO 27001 / SOC 2 environment',
    competency: 5,
    category: ['Security & DevSecOps'],
  },
  {
    title: 'OAuth 2 / OIDC',
    competency: 4,
    category: ['Security & DevSecOps'],
  },
  { title: 'JWT / JOSE', competency: 4, category: ['Security & DevSecOps'] },
  {
    title: 'Workload Identity (GCP)',
    competency: 4,
    category: ['Security & DevSecOps'],
  },
  {
    title: 'External secrets & rotation',
    competency: 4,
    category: ['Security & DevSecOps'],
  },
  {
    title: 'TLS / cert-manager',
    competency: 4,
    category: ['Security & DevSecOps'],
  },
  { title: 'Trivy', competency: 4, category: ['Security & DevSecOps'] },
  {
    title: 'GitOps RBAC + audit',
    competency: 4,
    category: ['Security & DevSecOps'],
  },
  {
    title: 'Signed commits & supply-chain checks',
    competency: 4,
    category: ['Security & DevSecOps'],
  },

  // Domain expertise
  {
    title: 'FX trading systems (MT4, liquidity aggregation, PAMM)',
    competency: 5,
    category: ['Domain expertise'],
  },
  {
    title: 'Crypto exchange integrations',
    competency: 4,
    category: ['Domain expertise'],
  },
  {
    title: 'Identity & access control (graph-based, KBAC)',
    competency: 5,
    category: ['Domain expertise'],
  },
  {
    title: 'VoIP / video conferencing platforms',
    competency: 4,
    category: ['Domain expertise'],
  },
];

export const categories: Category[] = [
  { name: 'Architecture & APIs', color: '#374151', textColor: 'light' },
  { name: 'Messaging & Workflows', color: '#374151', textColor: 'light' },
  { name: 'Kubernetes & Service Mesh', color: '#374151', textColor: 'light' },
  { name: 'Cloud', color: '#374151', textColor: 'light' },
  { name: 'Infrastructure as Code', color: '#374151', textColor: 'light' },
  { name: 'Data', color: '#374151', textColor: 'light' },
  { name: 'Observability', color: '#374151', textColor: 'light' },
  { name: 'Security & DevSecOps', color: '#374151', textColor: 'light' },
  { name: 'Domain expertise', color: '#374151', textColor: 'light' },
];

export default skills;
