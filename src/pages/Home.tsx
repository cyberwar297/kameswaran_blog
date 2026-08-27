import Seo from '../components/Seo'
import { SITE_NAME } from '../config/site'

export default function Home() {
  return (
    <section className="content-panel">
      <Seo title={SITE_NAME} path="/home" />
      <p>Hi,</p>
        <p>
        I'm <strong>Kameswaran Jayagopal</strong>, a cybersecurity professional
        and security engineer focused on the intersection of{' '}
        <strong>AI, cloud, and offensive security</strong>. My work involves
        designing security solutions, exploring emerging technologies, and
        understanding how modern systems can be secured against evolving
        threats.
      </p>
      <p>
        My primary interests are in{' '}
        <strong>
          AI and LLM security, autonomous agent security, MCP security, cloud
          security, CSPM, detection engineering, and AI-powered security
          operations
        </strong>
        . I'm particularly interested in how AI systems interact with tools,
        APIs, cloud infrastructure, and other autonomous systems, and how these
        interactions create new security challenges.
      </p>
      <p>
        I also have a strong interest in{' '}
        <strong>offensive security and adversarial research</strong>. I believe
        understanding how systems can be attacked is essential to building
        effective defenses. Through experimentation, threat modeling,
        attack-surface analysis, and security testing, I explore
        vulnerabilities and identify practical ways to improve resilience.
      </p>
      <p>
        This website is my <strong>personal research and engineering space</strong>.
        I use it to document technical research, security experiments,
        projects, architecture studies, ideas, and lessons learned. Some work
        may begin as a small observation or experiment and gradually evolve
        into a deeper research project.
      </p>
      <p>
        My approach is simple:{' '}
        <strong>Research → Build → Break → Learn → Share</strong>. As AI, cloud
        computing, and autonomous systems continue to evolve, I want to
        explore the security challenges they introduce and contribute
        practical knowledge through continuous research and experimentation.
      </p>
    </section>
  )
}
