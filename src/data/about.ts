export const aboutMarkdown = `# About

I design and operate the systems other engineers depend on. 21 years building backends, 11 of them in fintech as co-founder of an FX / crypto broker. Currently a senior staff platform role at IndyKite, working on identity and access-control infrastructure for enterprise AI.

# IndyKite

Lead Platform Developer at [IndyKite](https://www.indykite.ai), the data-trust and access-control platform for enterprise AI (AgentControl, ContX IQ, KBAC).

Work spans the Go services and the underlying infrastructure: gRPC and GraphQL services, protobuf-driven contracts, and the shared domain libraries the rest of the platform depends on (graph-store integration, authorization pipeline, distributed-SQL access, workflow primitives, observability).

I designed and shipped the deployment operator (a controller-runtime CRD with a state-machine release flow) that drives every release of around twenty platform services across multi-region production in the EU and US. It replaced ad-hoc Helm and kubectl, and made multi-region rollouts repeatable.

I own the multi-cloud foundation across GCP and AWS: the Terraform module library (built on top of the public [IndyKite Terraform Provider](https://registry.terraform.io/providers/indykite/indykite/latest)), the shared Helm chart templates, and the GitOps pipeline every service team consumes. An integration-test promotion gate, running as a per-release Kubernetes Job, holds every deployment until acceptance tests pass.

# ICE Markets Ltd

Co-founder of [ICE Markets Ltd](https://ice-markets.com), an FX / crypto broker we started in 2015. 11 years of continuous 24/7 production. Four asset classes, 94 instruments on MetaTrader 4.

I designed the firm's proprietary PAMM / LAMM / MAM managed-account hybrid: aggregated execution at a single price, mid-period entry and exit without result distortion, dual-layer risk management with both manager-set and investor-adjustable limits. It's the core IP that differentiates the broker in its category.

I own the full technical stack: the .NET back-end (PAMM, MT4 Bridge with partial close and aggregation hub, multi-level affiliate engine, social trading with per-investor risk management, quotes-stream engine from MetaTrader to WebSocket clients, full administrative tooling), the customer cabinet, and the Ansible-driven infrastructure.

In 2024 I launched [cryptocopy.org](https://cryptocopy.org), a crypto copy-trading platform on a Go service stack (gRPC, GraphQL, NATS JetStream, PostgreSQL, Redis, Temporal) with multi-exchange connectors, GitOps-deployed on GKE. Greenfield design, sole architect.

# Background

Earlier roles: Lead Software Engineer at IDT / net2phone in Warsaw on Huddle (video conferencing) and business messaging; Technical Lead at [Folio](https://folio.id) (formerly IdBank, your.id), a personal identity-document wallet; .NET team-lead at ProntoSoft and Neutrino Cat.

# Education

B.S. Computer Programming, Belarusian National Technical University, 2000 – 2005.

# Languages

Russian (native) · English (Professional Working / C1) · Polish (basic).
`;
