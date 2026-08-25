type Role = {
  title: string
  company: string
  dates: string
  bullets: string[]
}

const experience: Role[] = [
  {
    title: 'Technical Architect — AI & Cloud Security',
    company: 'Stellantis',
    dates: 'Oct 2021 – Present',
    bullets: [
      'AI Security Architecture: Architected and shipped a unified Mini-CNAPP dashboard (CSPM + CIEM + CWPP) spanning AWS, Azure, and GCP, giving security leadership a single pane of glass for posture, identity-risk, and workload-protection visibility across the environment.',
      'Agentic AI for SecOps: Designed and deployed autonomous AI agents for incident triage, alert correlation, enrichment, and remediation, cutting alert triage time by roughly 20–30% and measurably improving mean time to detect (MTTD).',
      'LLM & RAG Systems: Fine-tuned LLMs on AWS SageMaker with secure training pipelines, bias detection, and deployment guardrails; built RAG-based knowledge assistants using FAISS to power security and compliance Q&A for internal teams.',
      'LLM Workload Security: Implemented prompt-injection defense, API governance, and continuous monitoring controls to secure LLM and agentic applications running in production.',
      'LLM-Based Threat Reasoning: Used LLMs to analyze security findings, auto-generate root-cause explanations, and drive automated remediation, closing the loop between detection and response.',
      'AI-Powered Dashboards: Built LLM-driven Power BI and React dashboards enabling natural-language querying for governance, compliance, and incident summarization.',
      'Perimeter & Threat Defense: Configured AWS WAF (rate-based, managed, custom rule sets) and DDoS protection; built a centralized logging pipeline (WAF → Kinesis Firehose → S3/CloudWatch → QRadar SIEM) for real-time attack detection and forensics.',
      'Anomaly Detection: Designed an AI-based anomaly detection pipeline (QuickSight, Kinesis, ETL) to continuously surface deviations in security posture and findings.',
      'AMI Factory (CWPP): Built and evolved the golden-image pipeline, originally hardened images via Ansible and CIS-benchmark builds using Packer/Terraform and GitHub workflows; re-engineered it around an AI agent for automated image creation and CIS-compliance validation, cutting manual build effort by roughly 20–30% per build cycle.',
      'SAP on GCP: Delivered a SAP infrastructure project on Google Cloud Platform, provisioning and automating the environment with Terraform and orchestrating deployment pipelines through Azure DevOps.',
      'Cloud Foundation at Scale: Core team member building the Account Factory Terraform (AFT) framework across 1,300+ AWS accounts spanning two global landing zones and Control Towers in Italy and South America, using a Hub-and-Spoke network architecture.',
      'Governance & IAM: Enforced SCP guardrails, PAM/SOX controls, and identity governance via Entra ID, AWS SSO, and PingFederate; maintained CIS, NIST, and PCI-DSS compliance via Security Hub and Azure Defender.',
      'DevSecOps: Integrated TFLint, Pylint, Checkov, and Checkmarx into CI/CD pipelines to shift security left across infrastructure and application code.',
    ],
  },
  {
    title: 'IT Analyst',
    company: 'Tata Consultancy Services',
    dates: 'Dec 2020 – Sep 2021',
    bullets: [
      "Client: ASML — Supported cloud infrastructure automation, delivering Infrastructure as Code with Terraform and building CI/CD release pipelines in Azure DevOps for provisioning and deployment workflows.",
      "Contributed to early cloud administration, monitoring, and automation workstreams supporting the client's Azure environment.",
    ],
  },
  {
    title: 'Cloud Administrator / SRE',
    company: 'Rage Communications Pvt Ltd',
    dates: 'Jan 2019 – Nov 2020',
    bullets: [
      'Site Reliability: Hosted and managed production servers on Kubernetes, serving as SRE to maintain 24×7 availability, covering deployments, scaling, monitoring, and incident response.',
      'Managed cloud infrastructure provisioning, patching, and network/firewall administration across client environments.',
    ],
  },
  {
    title: 'System & Network Administrator',
    company: 'BlueAlly / JMA IT Solutions',
    dates: 'Dec 2016 – Dec 2018',
    bullets: [
      'Systems: Administered Windows Server (2003–2012) and Linux environments, including Active Directory, DNS, DHCP, GPO, IIS, SQL Server, WSUS, and backup operations; managed virtualization across VMware ESXi/vCenter, Hyper-V, and Citrix XenServer with FC-SAN, iSCSI, and NFS storage.',
      'Network: Managed enterprise network infrastructure and protocols (TCP/IP, DNS, SMTP, VPN, BGP, OSPF) across Cisco, Juniper, FortiGate, and SonicWall devices; led on-prem to Azure cloud migrations using hot migration methods.',
    ],
  },
  {
    title: 'IT Support',
    company: 'Inspace Technologies Pvt Ltd',
    dates: 'Sep 2015 – Dec 2016',
    bullets: [
      'Systems: Provided enterprise IT support and system administration across Windows and Linux (RHEL, CentOS, Ubuntu) environments, including LAMP stack, web hosting (FTP/SSH/HTTP), and Samba configuration for cross-platform integration.',
      'Network: Supported core network infrastructure and troubleshooting (TCP/IP, DNS, VPN) and automated routine tasks via Shell scripting, cron, and at; performed OWASP vulnerability scanning and system hardening.',
    ],
  },
]

const values = [
  'Security should enable the business, not just gate it.',
  'Automate the repeatable so people can spend their time on judgment calls.',
  'Write things down. Undocumented knowledge does not scale past one person.',
  'Stay equally curious about attacker tooling and defender tooling.',
]

const enjoy = [
  'Building AI agents that make security operations genuinely faster, not just flashier.',
  'Untangling cloud architecture problems that span identity, network, and workloads at once.',
  'Mentoring engineers who are moving into security from adjacent disciplines.',
  'Writing and reading about where AI and security actually intersect, past the hype.',
]

export default function About() {
  return (
    <section className="blog-layout">
      <aside className="blog-meta">
        <h1>About</h1>
        <p className="blog-stat">Technical Architect — AI &amp; Cloud Security</p>
        <p className="blog-byline">by Kameswaran Jayagopal</p>
        <p className="blog-tags">#ai #cloudsecurity #devsecops</p>
      </aside>

      <div className="blog-main">
        <p>
          I'm Kameswaran Jayagopal, a Technical Architect focused on AI and cloud
          security. My work sits at the intersection of securing cloud
          infrastructure at scale and using AI, from LLMs to autonomous agents, to
          make security operations faster and more reliable.
        </p>

        <h2 className="about-heading">Work Experience</h2>
        <div className="experience-list">
          {experience.map((role) => (
            <article key={`${role.company}-${role.title}`} className="experience-item">
              <div className="experience-header">
                <h3>{role.title}</h3>
                <span className="experience-dates">{role.dates}</span>
              </div>
              <p className="experience-company">{role.company}</p>
              <ul className="experience-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h2 className="about-heading">Values</h2>
        <ul className="about-list">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>

        <h2 className="about-heading">What I Enjoy</h2>
        <ul className="about-list">
          {enjoy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
