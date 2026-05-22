export const PROJECTS = [
  {
    id: "01",
    type: "Team Project",
    title: "JUHAP",
    subtitle: "Alcohol Pairing App",
    year: "2023",
    role: "UI/UX Designer & Front-end Developer",
    mark: "canvas" as const,
    metricNote: "TODO: Verify measurement sources before publishing.",
    result: "Reported onboarding improvement from 52% to 84%; download and retention metrics need source verification.",
    achievements: [
      { value: "4.8", label: "Rating - verify source" },
      { value: "12K+", label: "Downloads - verify" },
      { value: "+38%", label: "Retention - verify" },
    ],
    summary:
      "A data-driven mobile application pairing Korean traditional alcohol with food, driven by a custom recommendation engine and sensory-mapped flavor profiles.",
    tech: ["React Native", "Figma", "Node.js", "PostgreSQL"],
    techRationale:
      "React Native ensured cross-platform parity on a constrained timeline. PostgreSQL handled the relational pairing data with complex multi-join queries across the flavor taxonomy.",
    businessGoals:
      "Grow awareness of Korean traditional alcohol among the 20 to 35 demographic and drive repeat sessions through personalized pairing discovery.",
    contributions: [
      "Architected the flavor-mapping data model and sensory taxonomy",
      "Designed the sensory wheel interaction component",
      "Built the recommendation feed UI end-to-end",
    ],
    sar: [
      {
        s: "Flavor data was unstructured and inconsistent across multiple sources",
        a: "Defined a normalized sensory taxonomy; built an admin tagging tool for ongoing curation",
        r: "Data prep time reportedly decreased by 60%; source verification needed before publishing",
      },
      {
        s: "First-time users dropped at the 7-step onboarding preference screen",
        a: "Redesigned as a swipe-card tasting game, reducing steps from 7 to 3",
        r: "Onboarding completion reportedly improved from 52% to 84%; source verification needed",
      },
    ],
    reflection:
      "Translating domain expertise from sommeliers into UI affordances taught me how to bridge knowledge gaps through design. Next iteration: deeper investment in empty-state and error-recovery design.",
  },
  {
    id: "02",
    type: "Team Project",
    title: "KIA USA",
    subtitle: "Website Renewal",
    year: "2023",
    role: "Interaction Designer",
    mark: "weave" as const,
    metricNote: "TODO: Verify measurement sources before publishing.",
    result: "Reported LCP improvement from 5.8s to 2.1s; engagement and accessibility claims need source verification.",
    achievements: [
      { value: "2.1s", label: "LCP" },
      { value: "+22%", label: "Engagement - verify" },
      { value: "AA", label: "WCAG - verify" },
    ],
    summary:
      "Global website renewal for KIA Motors USA, focused on performance, responsive information architecture, and configurator interaction design.",
    tech: ["Next.js", "Three.js", "Figma", "Storybook"],
    techRationale:
      "Next.js for SSG/SSR flexibility on a content-heavy global site. Three.js for the vehicle configurator without a full WebGL framework's overhead and bundle cost.",
    businessGoals:
      "Reduce model-page bounce rate by 15%. Improve configurator start rate and downstream lead generation through simplified UX flows.",
    contributions: [
      "Led interaction design for the 3D vehicle configurator",
      "Defined the motion system and micro-interaction library",
      "Conducted accessibility audit and full WCAG AA remediation",
    ],
    sar: [
      {
        s: "3D configurator caused 5.8s LCP on mid-range mobile devices",
        a: "Implemented progressive mesh loading and deferred Three.js initialization until viewport entry",
        r: "LCP reportedly improved from 5.8s to 2.1s; configurator start-rate source needs verification",
      },
      {
        s: "Navigation patterns diverged across breakpoints, failing usability benchmarks",
        a: "Unified IA under a single component system, tested across 5 breakpoints with 30 participants",
        r: "Task completion reportedly improved by 31% in moderated sessions; source verification needed",
      },
    ],
    reflection:
      "Global scale sharpens performance instincts. A shared design token system from day one would have saved weeks of cross-team reconciliation on a project this size.",
  },
  {
    id: "03",
    type: "Personal Project",
    title: "LOTTE CARD",
    subtitle: "Partial Renewal",
    year: "2024",
    role: "UX Designer (Solo)",
    mark: "grid" as const,
    metricNote: "TODO: Verify measurement sources before publishing.",
    result: "Reported error reduction, task-success, and NPS improvements need source verification before publishing.",
    achievements: [
      { value: "-34%", label: "Error Rate - verify" },
      { value: "91%", label: "Task Success - verify" },
      { value: "+8pt", label: "NPS - verify" },
    ],
    summary:
      "Focused UX audit and redesign of the Lotte Card payment and benefits dashboard, prioritizing information hierarchy, error prevention, and typographic consistency.",
    tech: ["Figma", "Principle", "HTML/CSS", "Notion"],
    techRationale:
      "Figma + Principle for high-fidelity prototyping with realistic micro-animations. HTML/CSS for stakeholder demos that felt production-ready without a full engineering handoff.",
    businessGoals:
      "Reduce customer service contacts related to payment errors. Improve benefit discovery rate among existing cardholders.",
    contributions: [
      "Heuristic evaluation across 40+ screens",
      "Redesigned the payment confirmation flow",
      "Built a component-level design system for the dashboard",
    ],
    sar: [
      {
        s: "Payment confirmation had a 12% error rate from ambiguous CTA placement",
        a: "Restructured visual hierarchy; added a confirmation gate for destructive actions",
        r: "Error-rate and support-ticket reductions are draft metrics; source verification needed",
      },
      {
        s: "Benefit tiles ignored by 68% of users in an eye-tracking study",
        a: "Redesigned with progressive disclosure so top benefits surfaced contextually per card usage",
        r: "Benefit engagement improvement is a draft metric; source verification needed",
      },
    ],
    reflection:
      "Partial renewals are harder than full rebuilds because every decision collides with legacy constraints. This sharpened my ability to advocate for UX within systemic limits.",
  },
  {
    id: "04",
    type: "Team Project",
    title: "POLJJAK",
    subtitle: "College App Planning",
    year: "2022",
    role: "UX Strategist & Lead Designer",
    mark: "stack" as const,
    metricNote: "TODO: Verify measurement sources before publishing.",
    result: "Timeline, pilot-school, usability, and stress-score claims need source verification before publishing.",
    achievements: [
      { value: "6 mo", label: "0 to Beta - verify" },
      { value: "3", label: "Pilot Schools - verify" },
      { value: "#1", label: "Usability - verify" },
    ],
    summary:
      "Strategic UX planning for a college application management app, covering research synthesis, information architecture, and a high-fidelity prototype.",
    tech: ["Figma", "Miro", "Maze", "Notion"],
    techRationale:
      "Figma for all design deliverables. Miro for collaborative synthesis workshops. Maze for unmoderated usability testing at scale with student panels across three schools.",
    businessGoals:
      "Reduce applicant anxiety during the college application process. Provide a structured, scalable framework that works across different school systems.",
    contributions: [
      "Facilitated 3 research sprints across student and counselor personas",
      "Defined the core information architecture and all critical task flows",
      "Delivered a 120-screen interactive prototype for the investor demo",
    ],
    sar: [
      {
        s: "Students reported overwhelm from simultaneous deadlines across multiple schools",
        a: "Designed a priority-weighted timeline that surfaced the 3 most critical tasks each day",
        r: "Perceived stress-score improvement is a draft metric; source verification needed",
      },
      {
        s: "Counselors and students had conflicting mental models of the application checklist",
        a: "Conducted paired interviews; designed a dual-view with shared real-time state",
        r: "'Intuitive' rating from both personas in 90% of test sessions",
      },
    ],
    reflection:
      "Designing for anxiety reduction requires fundamentally different success metrics than designing for efficiency. I'd formalize a 'stress audit' methodology for future student-facing products.",
  },
] as const;

export type Project = (typeof PROJECTS)[number];
export type MarkType = Project["mark"];
