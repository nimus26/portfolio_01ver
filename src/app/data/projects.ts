export const PROJECTS = [
  {
    id: "01",
    type: "Team Project",
    title: "JUHAP",
    subtitle: "Alcohol Pairing App",
    year: "2023",
    role: "UI/UX Designer & Front-end Developer",
    mark: "canvas" as const,
    metricNote: "Metrics pending until verified project data is added.",
    result: "Result summary pending. Add only verified outcomes before publishing.",
    achievements: [
      { value: "TBD", label: "Primary Metric" },
      { value: "TBD", label: "User Outcome" },
      { value: "TBD", label: "Business Impact" },
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
        s: "Problem statement pending. Describe the user or product issue with concrete context.",
        a: "Action pending. Explain the design or implementation decision you personally owned.",
        r: "Result pending. Add verified qualitative or quantitative outcome.",
      },
      {
        s: "Constraint pending. Note timeline, team, technical, or legacy limitations.",
        a: "Execution pending. Summarize how you handled the constraint.",
        r: "Learning pending. Capture what improved or what you would change next.",
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
    metricNote: "Metrics pending until verified project data is added.",
    result: "Result summary pending. Add only verified outcomes before publishing.",
    achievements: [
      { value: "TBD", label: "Performance" },
      { value: "TBD", label: "Engagement" },
      { value: "TBD", label: "Accessibility" },
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
        s: "Problem statement pending. Describe the UX, performance, or content challenge.",
        a: "Action pending. Explain the interaction, layout, or technical decision you owned.",
        r: "Result pending. Add verified measurement, review feedback, or before/after evidence.",
      },
      {
        s: "Constraint pending. Note responsive, stakeholder, asset, or technical limitations.",
        a: "Execution pending. Summarize how the flow or component system changed.",
        r: "Learning pending. Capture the strongest portfolio takeaway.",
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
    metricNote: "Metrics pending until verified project data is added.",
    result: "Result summary pending. Add only verified outcomes before publishing.",
    achievements: [
      { value: "TBD", label: "Task Success" },
      { value: "TBD", label: "Error Reduction" },
      { value: "TBD", label: "User Feedback" },
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
        s: "Problem statement pending. Describe the task flow or information hierarchy issue.",
        a: "Action pending. Explain the redesign or prototype decision you owned.",
        r: "Result pending. Add verified testing, review, or comparison evidence.",
      },
      {
        s: "Constraint pending. Note legacy UI, scope, or brand-system limitations.",
        a: "Execution pending. Summarize how you balanced constraint and clarity.",
        r: "Learning pending. Capture the decision-making value for reviewers.",
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
    metricNote: "Metrics pending until verified project data is added.",
    result: "Result summary pending. Add only verified outcomes before publishing.",
    achievements: [
      { value: "TBD", label: "Research Scope" },
      { value: "TBD", label: "Prototype Depth" },
      { value: "TBD", label: "Validation" },
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
        s: "Problem statement pending. Describe the user pain point with research context.",
        a: "Action pending. Explain the planning, IA, or prototype decision you owned.",
        r: "Result pending. Add verified user feedback or testing outcome.",
      },
      {
        s: "Constraint pending. Note research, collaboration, or product-scope limits.",
        a: "Execution pending. Summarize how the concept was clarified.",
        r: "Learning pending. Capture how the project strengthened your UX judgment.",
      },
    ],
    reflection:
      "Designing for anxiety reduction requires fundamentally different success metrics than designing for efficiency. I'd formalize a 'stress audit' methodology for future student-facing products.",
  },
] as const;

export type Project = (typeof PROJECTS)[number];
export type MarkType = Project["mark"];
