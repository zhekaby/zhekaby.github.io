/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'IndyKite',
    position: 'Lead Platform Developer',
    url: 'https://www.indykite.ai',
    startDate: '2022-09-01',
    summary: `Identity Knowledge Graph platform behind data trust and access control for enterprise AI (AgentControl, ContX IQ, KBAC). Platform developer on the Go services and the multi-cloud infrastructure that runs them.`,
    highlights: [
      'Backend platform work on the Go services: gRPC and GraphQL services, protobuf-driven contracts, and the shared domain libraries the rest of the platform depends on (graph-store integration, authorization pipeline, distributed-SQL access, workflow primitives, observability).',
      'Designed and shipped the controller-runtime operator that drives every release of around twenty platform services. Replaced ad-hoc Helm and kubectl with a single declarative deployment object; made multi-region rollouts repeatable.',
      'Own the multi-cloud foundation across GCP and AWS: the Terraform module library, the canonical Helm chart-template system, and the GitOps pipeline every service team consumes. Service charts no longer drift; adding a service is config-only.',
      'Designed the integration-test promotion gate that holds each release until acceptance tests pass, running as a per-release Kubernetes Job over the platform-wide acceptance-test corpus.',
      'Diagnosed and documented the operating rules around the service mesh, GitOps sync semantics, and external-secret refresh that the team now follows organisation-wide.',
    ],
  },
  {
    name: 'ICE Markets Ltd',
    position: 'Co-founder',
    url: 'https://ice-markets.com',
    startDate: '2015-01-01',
    summary: `FX / crypto broker. Four asset classes, 94 instruments, MetaTrader 4 with a proprietary PAMM / LAMM / MAM managed-account hybrid. Co-founded the company in 2015 and own the full technical stack.`,
    highlights: [
      'Designed the proprietary PAMM / LAMM / MAM managed-account hybrid that is the firm’s core IP: aggregated execution at a single price across all investors, mid-period entry and exit without result distortion, dual-layer risk management with both manager-set and investor-adjustable limits.',
      'Own the full technical stack: the .NET back-end (PAMM, MT4 Bridge with partial close and aggregation hub, multi-level affiliate engine, social trading with per-investor risk management, quotes-stream engine from MetaTrader to WebSocket clients, full administrative tooling), the customer cabinet, and the Ansible-driven infrastructure.',
      '11 years of continuous 24/7 production operation, with ongoing performance engineering on the legacy stack.',
      'Launched cryptocopy.org in 2024 as a Go-stack crypto copy-trading platform on GKE: gRPC, GraphQL, NATS JetStream, PostgreSQL, Redis, and Temporal, with a multi-exchange connector layer. Greenfield design, sole architect.',
    ],
  },
  {
    name: 'IDT Corporation · net2phone',
    position: 'Lead Software Engineer',
    url: 'https://www.net2phone.com',
    startDate: '2020-06-01',
    endDate: '2022-09-01',
    summary: `Lead engineer on net2phone Huddle (video conferencing) and the business text-messaging platform. AWS-native services.`,
  },
  {
    name: 'Folio (formerly IdBank, your.id)',
    position: 'Technical Lead',
    url: 'https://folio.id',
    startDate: '2013-10-01',
    endDate: '2017-01-01',
    summary: `Technical lead on the personal identity-document wallet now known as Folio. Joined as IdBank, rebranded to your.id, then Folio.`,
  },
  {
    name: 'ProntoSoft',
    position: '.NET Team Lead',
    url: '',
    startDate: '2010-11-01',
    endDate: '2012-11-01',
  },
  {
    name: 'ProntoSoft',
    position: 'Web Developer',
    url: '',
    startDate: '2010-01-01',
    endDate: '2010-11-01',
  },
  {
    name: 'Trevimedia, Inc',
    position: 'Full Stack Developer',
    url: '',
    startDate: '2008-08-01',
    endDate: '2010-01-01',
  },
  {
    name: 'Astronim',
    position: 'Web Developer',
    url: '',
    startDate: '2004-10-01',
    endDate: '2006-01-01',
    summary: 'First job, during the last year of university.',
  },
];

export default work;
