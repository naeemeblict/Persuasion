/**
 * Complete Course Content & Curriculum Data for Persuasion and Influence
 * Based on Dr. Robert Cialdini's Six Principles of Influence & Pedagogical Framework
 */

export interface LessonKnowledgeCheckQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'scenario';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface CourseLesson {
  id: string;
  number: number;
  title: string;
  moduleName: string;
  estimatedTime: string;
  difficulty: string;
  coreQuestion: string;
  principleTrigger: string;
  objectives: string[];
  introduction: string;
  detailedExplanation: {
    heading: string;
    subsections: {
      subheading: string;
      content: string;
      diagram?: string;
    }[];
  };
  examples: {
    type: 'everyday' | 'workplace';
    title: string;
    scenario: string;
    before?: string;
    after: string;
    takeaway: string;
  }[];
  defenseStrategy: {
    tacticName: string;
    howItWorks: string;
    defenseRule: string;
    exactWordsToSay: string;
  };
  stepByStepPractice: {
    title: string;
    whatToDo: string;
    whyToDoIt: string;
    steps: string[];
    commonMistake: string;
    correction: string;
  };
  keyTakeaways: string[];
  summary: string;
  knowledgeCheck: LessonKnowledgeCheckQuestion[];
  practicalAssignment: {
    title: string;
    instructions: string;
    expectedOutput: string;
    criteria: string[];
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  principle: string;
}

export const PUBLISHER_METADATA = {
  brand: "ASCENDIX CONSULTING",
  author: "Ihtishamul Haque Naeem",
  designation: "Chairman, Seerat Academy Foundation",
  website: "https://seeratfoundation.com",
  values: "Professionalism | Knowledge | Quality | Trust | Innovation | Educational Excellence",
  creditText: `PUBLISHED BY\nASCENDIX CONSULTING\n\nWritten and Published by\nIhtishamul Haque Naeem\nChairman, Seerat Academy Foundation\n\nhttps://seeratfoundation.com`
};

export const COURSE_METADATA = {
  title: "Persuasion and Influence",
  subtitle: "Master the art of Persuasion: Apply key principles of influence to effectively persuade stakeholders",
  publisher: "ASCENDIX CONSULTING",
  author: "Ihtishamul Haque Naeem",
  authorDesignation: "Chairman, Seerat Academy Foundation",
  officialWebsite: "https://seeratfoundation.com",
  instructor: "Inspired by Prof. Robert Cialdini (Influence: Science and Practice)",
  subjectArea: "Behavioral Psychology, Business Communication, Stakeholder Management, and Ethical Persuasion",
  targetLearners: "Professionals, Project Managers, Entrepreneurs, Leaders, and Individuals seeking buy-in or defense against manipulation",
  requiredXP: "XP Level 10 (Foundational workplace or interpersonal communication)",
  difficultyLevel: "Beginner to Intermediate (Clear, natural English with executive depth)",
  durationBaseline: "27 Minutes (Quick Summary) / 4 to 6 Hours (Complete Mastery Programme)",
  totalModules: 1,
  totalLessons: 6,
  heroImage: "/src/assets/images/hero_persuasion_influence_1794241576488.jpg",
  decisionModelImage: "/src/assets/images/principles_decision_model_1794241575975.jpg",
  description: "This comprehensive persuasion course covers the core principles of influence documented by Prof. Robert Cialdini. It goes into detail about the six core principles of influence we can use to impact most people's decisions and behavior: Reciprocation, Consistency, Social Proof, Liking, Scarcity, and Authority. According to Prof. Cialdini, these principles are ingrained in our subconscious minds as part of our evolutionary heritage as humans."
};

export const COURSE_OUTCOMES = [
  {
    id: 1,
    title: "Become Persuasive & Inspire Action",
    description: "Structure emails, proposals, and presentations so stakeholders willingly act on your recommendations.",
    competency: "Transform low-engagement pitches into compelling, multi-principle proposals."
  },
  {
    id: 2,
    title: "Understand the Underlying Science",
    description: "Learn how human mental shortcuts (heuristics & fixed-action patterns) evolved for survival.",
    competency: "Explain the psychological trigger behind each of the six influence pathways."
  },
  {
    id: 3,
    title: "Protect Yourself from Manipulation",
    description: "Identify high-pressure manipulation tactics and execute calm, proven self-defense counter-moves.",
    competency: "Dismantle Low-Ball offers, false concessions, fake crowds, and artificial scarcity."
  },
  {
    id: 4,
    title: "Apply in Personal & Professional Situations",
    description: "Gain cooperation across departments, in client negotiations, and in community or family life.",
    competency: "Adapt persuasive framing to diverse stakeholder personalities and communication styles."
  },
  {
    id: 5,
    title: "Apply All Six Principles to Real Scenarios",
    description: "Diagnose communication bottlenecks and apply the right combination of principles seamlessly.",
    competency: "Produce complete 360-degree stakeholder persuasion plans with ethical verification."
  }
];

export const ETHICS_TEST_QUESTIONS = [
  {
    id: 1,
    question: "Is the trigger 100% TRUTHFUL and naturally present?",
    detail: "Never fabricate scarcity (fake countdowns), fake reviews, unearned credentials, or disingenuous favors. Persuasion points to natural truths; manipulation invents lies."
  },
  {
    id: 2,
    question: "Does the outcome genuinely BENEFIT or respect the other person?",
    detail: "Influence must create mutual value. If agreement harms the stakeholder or creates buyer's remorse, it fails the ethical standard."
  },
  {
    id: 3,
    question: "Would they still feel comfortable agreeing if they knew how you framed it?",
    detail: "If you revealed your preparation strategy, would the stakeholder appreciate your care and alignment, or feel deceived? Transparency is the ultimate test."
  }
];

export const COURSE_LESSONS: CourseLesson[] = [
  {
    id: "lesson-01",
    number: 1,
    title: "Reciprocation",
    moduleName: "Module 01: The six principles of persuasion",
    estimatedTime: "5 min reading / 45 min full practice",
    difficulty: "Beginner",
    coreQuestion: "Who do I owe a favor to?",
    principleTrigger: "Giving genuine value, help, or concessions first without strings attached.",
    objectives: [
      "Define the Principle of Reciprocation and why it evolved in all human societies.",
      "Understand the three dynamics: overpowering dislike, uninvited obligations, and unequal exchanges.",
      "Execute the Rejection-Then-Retreat (Door-in-the-Face) negotiation technique ethically.",
      "Protect yourself from manipulative uninvited gifts and calculated sales devices."
    ],
    introduction: "Imagine a colleague hands you a cup of your favorite coffee on a frantic morning, saying 'I remembered how you take yours.' Two days later, they ask if you can spend 20 minutes reviewing their presentation deck. You almost certainly say yes. The Principle of Reciprocation states that human beings feel a strong internal obligation to repay, in kind, what another person has given them.",
    detailedExplanation: {
      heading: "The Evolutionary Engine of Give-and-Take",
      subsections: [
        {
          subheading: "Why Reciprocation Exists Across All Human Cultures",
          content: "Sociologists and anthropologists have confirmed that every single human society honors the rule of reciprocation. In ancestral communities, sharing surplus food or helping build shelter was not a permanent loss—it was an investment in future survival. Because humans who take without repaying were labeled 'moochers' or 'free-riders', the feeling of owing someone creates deep psychological discomfort that we strive to eliminate quickly."
        },
        {
          subheading: "The Three Power Rules of Reciprocation",
          content: "1. Overpowers Dislike: In Dennis Regan's classic experiment, buying a participant a 10-cent soda doubled raffle ticket sales—even among participants who strongly disliked the seller.\n2. Uninvited Debts Still Bind: You don't have to ask for a favor to feel obligated. Receiving unsolicited greeting cards or free samples triggers the same internal debt.\n3. Can Trigger Unequal Exchanges: Because being in debt feels so unpleasant, people frequently agree to perform a significantly larger favor than the small favor they received."
        },
        {
          subheading: "The Rejection-Then-Retreat (Door-in-the-Face) Technique",
          content: "Reciprocation applies to concessions just as much as gifts. When you retreat from a large initial request to a smaller, reasonable request, the other person perceives your retreat as a concession. The rule of reciprocation obligates them to respond with a concession of their own: agreeing to your smaller target request! Crucially, research shows that agreements reached through mutual concessions leave both parties feeling more responsible and satisfied with the final outcome."
        }
      ]
    },
    examples: [
      {
        type: "everyday",
        title: "Moving Apartments",
        scenario: "Maya needs help moving heavy furniture on Saturday morning.",
        before: "Sends a cold group text Friday night asking who wants to do 4 hours of heavy lifting.",
        after: "Over the previous two months, proactively offered quick rides and practical favors to friends without keeping score. When asking on Friday, offers hot pizza and cold drinks at 10 AM.",
        takeaway: "Past genuine deposits of goodwill make agreeing to a favor feel natural rather than burdensome."
      },
      {
        type: "workplace",
        title: "Cross-Department Designer Allocation",
        scenario: "IT Project Lead David needs the Marketing Director Sarah to loan a designer for 4 hours of user testing.",
        before: "Demanding 4 hours in a formal ticket without any prior relationship.",
        after: "David spends 30 minutes optimizing Sarah's team's slow cloud folders first. In their meeting, he asks for 3 full days (ambitious request). When Sarah declines, David retreats gracefully to two 2-hour afternoon blocks.",
        takeaway: "Sarah repays David's earlier technical assistance and reciprocates his concession by approving the 4 hours."
      }
    ],
    defenseStrategy: {
      tacticName: "Uninvited Gifts & Forced Concessions",
      howItWorks: "A salesperson or negotiator hands you an unsolicited gift or starts with an absurdly high price so that dropping it looks like a favor.",
      defenseRule: "Accept polite gestures, but mentally relabel them as sales devices if attached to an unfair demand. The rule says gifts must be repaid with gifts—it does NOT say sales tricks must be repaid with purchases!",
      exactWordsToSay: "I appreciate the gesture, but my decision will be based entirely on the objective value and terms of the proposal itself."
    },
    stepByStepPractice: {
      title: "The Value Deposit & Concession Plan",
      whatToDo: "Identify an upcoming request and prepare a value deposit plus a Rejection-Then-Retreat sequence.",
      whyToDoIt: "Asking cold forces stakeholders to focus strictly on cost. Giving value first creates collaborative momentum.",
      steps: [
        "Identify 1 genuine problem or time-sink your stakeholder is currently facing.",
        "Provide 1 zero-cost value item this week (a helpful data link, a reusable template, or public praise).",
        "Prepare Request A (ambitious upper bound) and Request B (your realistic target).",
        "When thanked, say: 'You are very welcome—I know you would do the same for me.'"
      ],
      commonMistake: "Attaching an immediate condition to your favor ('I did this for you, so now you must do X for me').",
      correction: "Separate the favor from the ask by at least a few days, or frame it as mutual team support."
    },
    keyTakeaways: [
      "Reciprocation is universal: humans feel compelled to repay favors, gifts, and concessions.",
      "Small favors can produce much larger returns because owing people feels uncomfortable.",
      "Rejection-Then-Retreat works by initiating a concession that the stakeholder feels pressured to match.",
      "When thanked, avoid saying 'It was nothing'; reply with 'I know you'd do the same for me.'",
      "Defend yourself by relabeling calculated gifts as sales devices."
    ],
    summary: "Reciprocation is humanity's foundational cooperative tool. By proactively contributing value and mastering graceful concessions, you unlock stakeholder buy-in while staying immune to calculated sales traps.",
    knowledgeCheck: [
      {
        id: "kc-1-1",
        type: "multiple-choice",
        question: "Why does the Principle of Reciprocation often lead people to agree to a larger favor than what they received?",
        options: [
          "Humans cannot calculate equal value mathematically.",
          "Feeling indebted is psychologically uncomfortable, so people over-repay to relieve the debt.",
          "Legal regulations mandate equal interest on favors.",
          "People only accept favors from superiors."
        ],
        correctAnswer: "Feeling indebted is psychologically uncomfortable, so people over-repay to relieve the debt.",
        explanation: "Society stigmatizes 'free-riders', making indebtedness an uncomfortable state we want to remove immediately."
      },
      {
        id: "kc-1-2",
        type: "true-false",
        question: "True or False: The Principle of Reciprocation only works if the recipient explicitly asked for the initial favor.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Reciprocation binds us even with completely uninvited favors, such as unsolicited free samples or mailings."
      },
      {
        id: "kc-1-3",
        type: "scenario",
        question: "A colleague thanks you for staying late to help them. How should you respond to keep the reciprocation trigger active?",
        options: [
          "'Oh, it was nothing at all, don't worry about it.'",
          "'You're very welcome—I know you'd do the same for me if I were in a crunch.'",
          "'You now owe me two hours next week.'",
          "Say nothing and ignore the email."
        ],
        correctAnswer: "'You're very welcome—I know you'd do the same for me if I were in a crunch.'",
        explanation: "This response is polite, warm, and gracefully reinforces the expectation of mutual future cooperation."
      }
    ],
    practicalAssignment: {
      title: "Ethical Reciprocation Action Script",
      instructions: "Draft a 250-word plan identifying a stakeholder, a specific value deposit you can offer this week with no strings attached, and a Rejection-Then-Retreat dialogue.",
      expectedOutput: "A structured 3-part brief containing Stakeholder Profile, Initial Gift, and Script Dialogue.",
      criteria: [
        "Initial gift is genuinely helpful, not a bribe.",
        "Initial request is ambitious but believable, not absurd.",
        "Language is warm, natural, and respectful."
      ]
    }
  },
  {
    id: "lesson-02",
    number: 2,
    title: "Consistency",
    moduleName: "Module 01: The six principles of persuasion",
    estimatedTime: "4 min reading / 40 min full practice",
    difficulty: "Beginner to Intermediate",
    coreQuestion: "What have I already said, written, or committed to?",
    principleTrigger: "Securing small, active, public, and voluntary initial commitments that align with self-image.",
    objectives: [
      "Understand why humans experience internal pressure to align future actions with past commitments.",
      "Execute the Foot-in-the-Door technique to build incremental stakeholder agreement.",
      "Incorporate the four commitment amplifiers: Active, Public, Effortful, and Voluntary.",
      "Defend against the Low-Ball manipulation tactic and foolish consistency."
    ],
    introduction: "Once a person takes a stand or expresses a belief, they encounter powerful psychological and social pressure to behave consistently with that choice. Nobody wants to be seen as erratic, indecisive, or untrustworthy. In this lesson, you will learn how getting a stakeholder to make a tiny, voluntary initial commitment rewires their self-image, making them eager to say yes to much larger proposals later.",
    detailedExplanation: {
      heading: "The Power of Alignment & Self-Image",
      subsections: [
        {
          subheading: "The Foot-in-the-Door Phenomenon",
          content: "In Freedman and Fraser's landmark study, researchers asked California homeowners to display a large, unsightly 'Drive Carefully' billboard on their lawn. Only 17% agreed. But with a second group who had agreed two weeks earlier to put a tiny 3-inch sticker in their window, 76% agreed to the giant billboard! Why? The tiny sticker shifted their self-image to: 'I am a civic-minded citizen who cares about road safety.' Saying yes to the billboard was the only way to remain consistent with their new self-image."
        },
        {
          subheading: "The 4 Amplifiers of Sticky Commitments",
          content: "1. Active: Writing down a commitment or speaking it aloud creates much higher follow-through than passive listening.\n2. Public: When others witness a commitment, social accountability reinforces personal resolve.\n3. Effortful: Commitments that require thought or work are valued much more deeply.\n4. Voluntary: If a choice is forced through threats or bribes, the person doesn't own it internally. Only voluntary commitments shift self-image."
        },
        {
          subheading: "The Low-Ball Trap",
          content: "Unethical persuaders exploit consistency by offering an enticing deal to lock in your initial agreement, letting you generate your own internal justifications, and then stripping away the advantage (or adding unexpected fees) at the final moment. Because you already see yourself as owning the item, you are likely to accept the worsened terms."
        }
      ]
    },
    examples: [
      {
        type: "everyday",
        title: "Youth Study Habits",
        scenario: "Leo wants his teenager to stick to a daily study routine without constant arguments.",
        before: "Leo commands: 'You must study from 5 to 7 PM every day or I take your phone away.'",
        after: "Leo asks: 'What grade would make you proud in math, and what daily time would you feel good setting aside?' The teenager picks 60 minutes after school and writes it on the kitchen whiteboard.",
        takeaway: "An active, public, and voluntary commitment changes the child's self-image and drives self-policing."
      },
      {
        type: "workplace",
        title: "Warehouse Inventory Modernization",
        scenario: "Priya wants executive approval for a $25,000 barcode tracking rollout.",
        before: "Dropping a 40-page software purchase contract on the Finance VP's desk cold.",
        after: "Priya first asks the VP if reducing lost inventory is a key Q3 profit priority (Public stance). She then gets approval for a zero-cost 5-day trial in Aisle 4 (Foot-in-the-door). After 40% error reduction, the full purchase is approved.",
        takeaway: "The full purchase was simply the logical, consistent continuation of the VP's previous commitments."
      }
    ],
    defenseStrategy: {
      tacticName: "The Low-Ball Tactic & Stubborn Consistency",
      howItWorks: "Locking you into an initial agreement, then raising the price or removing key benefits right before contract signing.",
      defenseRule: "Listen to the knot in your stomach and ask the Heart-of-Hearts question: 'Knowing what I know right now, if I could turn back the clock, would I make this same commitment?' If the answer is no, step away.",
      exactWordsToSay: "I agreed to the original terms we discussed, not these revised terms. Because the deal has changed, I am withdrawing my agreement."
    },
    stepByStepPractice: {
      title: "Building a 3-Step Commitment Ladder",
      whatToDo: "Break a large proposal into three progressive rungs of commitment.",
      whyToDoIt: "Massive cold asks trigger fear. Progressive commitments align self-image step by step.",
      steps: [
        "Rung 1 (Values Alignment): Ask a question the stakeholder will naturally agree with regarding their core priorities.",
        "Rung 2 (Small Active Action): Propose a low-risk test, 1-page outline review, or brief pilot.",
        "Rung 3 (Core Proposal): Connect your main request directly to their words in Rung 1 and action in Rung 2."
      ],
      commonMistake: "Forcing or coercing someone into Rung 1 or Rung 2.",
      correction: "Keep early steps completely voluntary; self-image only shifts when the person feels they chose freely."
    },
    keyTakeaways: [
      "People strive to make their actions match their past words and stated beliefs.",
      "The Foot-in-the-Door technique begins with small asks to reshape personal self-image.",
      "The 4 keys to enduring commitment are Active, Public, Effortful, and Voluntary.",
      "Having people write down their own next steps boosts follow-through dramatically.",
      "Defend yourself from the Low-Ball trap by asking: 'Knowing what I know now, would I still say yes?'"
    ],
    summary: "Consistency provides the psychological spine for long-term stakeholder alignment. By inviting stakeholders to take voluntary, public, and active initial steps, you turn your proposal into an organic reflection of their own values.",
    knowledgeCheck: [
      {
        id: "kc-2-1",
        type: "multiple-choice",
        question: "Which technique begins with a tiny request to gain eventual agreement to a much larger related request?",
        options: [
          "Rejection-Then-Retreat",
          "The Foot-in-the-Door Technique",
          "The Low-Ball Tactic",
          "Pluralistic Ignorance"
        ],
        correctAnswer: "The Foot-in-the-Door Technique",
        explanation: "Foot-in-the-Door secures a small initial commitment that shifts a person's self-image toward the desired behavior."
      },
      {
        id: "kc-2-2",
        type: "multiple-choice",
        question: "Which four factors make a commitment most effective at guiding future behavior?",
        options: [
          "Secret, Passive, Easy, and Bribed",
          "Loud, Expensive, Urgent, and Mandatory",
          "Active, Public, Effortful, and Voluntary",
          "Written, Notarized, Penalized, and Supervised"
        ],
        correctAnswer: "Active, Public, Effortful, and Voluntary",
        explanation: "These four conditions ensure the individual takes deep internal ownership of their decision."
      },
      {
        id: "kc-2-3",
        type: "true-false",
        question: "True or False: Offering a huge financial bribe is the best way to get someone to internalize a long-term belief.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Large external bribes provide an external excuse; when the bribe stops, the behavior disappears."
      }
    ],
    practicalAssignment: {
      title: "Designing the Written Meeting Recap Workflow",
      instructions: "Audit an agreement that someone recently failed to honor. Rewrite how you will secure their commitment next time using all four commitment amplifiers.",
      expectedOutput: "A before-and-after audit analyzing the four amplifiers (Active, Public, Effortful, Voluntary).",
      criteria: [
        "Accurately diagnoses the flaw in the original commitment.",
        "Creates a practical, respectful method to make the commitment active and voluntary.",
        "Clear, professional phrasing."
      ]
    }
  },
  {
    id: "lesson-03",
    number: 3,
    title: "Social Proof",
    moduleName: "Module 01: The six principles of persuasion",
    estimatedTime: "4 min reading / 40 min full practice",
    difficulty: "Beginner to Intermediate",
    coreQuestion: "What are other people like me doing?",
    principleTrigger: "Demonstrating majority peer adoption, relevant case studies, and clear individual accountability.",
    objectives: [
      "Define Social Proof and explain why we look to others to guide our behavior.",
      "Identify the two key conditions where Social Proof is strongest: Uncertainty and Similarity.",
      "Eliminate Pluralistic Ignorance (the Bystander Effect) in group communications.",
      "Avoid the destructive blunder of Negative Social Proof and spot fake crowd data."
    ],
    introduction: "When visiting a new city and choosing between two neighboring restaurants—one empty and one bustling with diners—you instinctively assume the busy one serves better food. The Principle of Social Proof states that we determine what is correct, safe, or desirable by finding out what other people think and do.",
    detailedExplanation: {
      heading: "The Power of the Crowd & Peer Signals",
      subsections: [
        {
          subheading: "The Two Multipliers: Uncertainty and Similarity",
          content: "1. Uncertainty: When a situation is ambiguous, unfamiliar, or new, our reliance on social cues multiplies.\n2. Similarity: We don't follow just anyone; we follow peers who share our exact role, industry, or environment. In Cialdini's hotel towel reuse study, informing guests that '75% of guests who stayed in this exact room reused their towels' increased compliance by 33%—outperforming generic environmental pleas!"
        },
        {
          subheading: "The Trap of Negative Social Proof",
          content: "Communicators frequently use social proof backward by complaining about how widespread a problem is ('70% of employees are submitting expense reports late!'). Subconsciously, listeners conclude that everyone else is doing it, which normalizes and actually increases the unwanted behavior! Always highlight the positive majority or positive momentum."
        },
        {
          subheading: "Pluralistic Ignorance (The Bystander Effect)",
          content: "In an uncertain group, everyone looks at everyone else to gauge the danger. Because everyone tries to look calm, nobody acts, and everyone assumes nothing is wrong. In work emails, sending an ask to 8 people in the 'To:' field triggers bystander freeze. Overcome it by assigning explicit, individual ownership to one person by name."
        }
      ]
    },
    examples: [
      {
        type: "everyday",
        title: "Neighborhood Glass Recycling",
        scenario: "A community organizer wants residents on Oak Street to recycle glass properly.",
        before: "Putting up a sign: 'Last month, residents threw 2,000 glass bottles in the regular trash! Stop polluting!'",
        after: "Putting up a sign: '4 out of 5 households on Oak Street now separate their glass bottles every week. Join your neighbors in keeping Oak Street clean!'",
        takeaway: "Highlighting positive peer compliance encourages alignment instead of normalizing the infraction."
      },
      {
        type: "workplace",
        title: "Hospital Cyber-Training Adoption",
        scenario: "Nadia is pitching a cybersecurity training program to a cautious Hospital Director.",
        before: "Boasting that 500 retail companies and tech startups use the software.",
        after: "Nadia presents a 2-minute case study from the Chief Nursing Officer of a regional hospital of identical bed count, showing 92% completion during shift handovers.",
        takeaway: "Matching the case study to the client's exact operational reality dissolves their hesitation."
      }
    ],
    defenseStrategy: {
      tacticName: "Manufactured Crowds & Astroturfed Reviews",
      howItWorks: "Companies pay for thousands of fake 5-star reviews, stage lines outside clubs, or claim 'everyone is buying' without verified proof.",
      defenseRule: "Disconnect autopilot when data feels artificially staged. Disregard crowd hype and inspect the independent, objective merits of the product.",
      exactWordsToSay: "I'd like to look at the independent technical benchmarks and return-on-investment metrics rather than general popularity claims."
    },
    stepByStepPractice: {
      title: "Eliminating the Bystander Effect in Group Requests",
      whatToDo: "Audit your group messages and upgrade them with positive peer proof and direct ownership.",
      whyToDoIt: "Broad group requests yield zero action. Direct assignment creates unambiguous personal responsibility.",
      steps: [
        "Audit recent team messages where nobody responded to a group request.",
        "Identify 1 specific individual to lead the deliverable.",
        "Place that person in the 'To:' field, note peer momentum, and assign a clear deadline."
      ],
      commonMistake: "Publicly shaming the team for low response rates.",
      correction: "Praise early contributors publicly and privately invite others to join the majority."
    },
    keyTakeaways: [
      "Social Proof guides behavior by showing what others consider normal and safe.",
      "It exerts maximum power under conditions of Uncertainty and Peer Similarity.",
      "Never use Negative Social Proof: do not advertise how many people are breaking the rule.",
      "Break the Bystander Effect by naming one specific individual and assigning a direct task.",
      "Defend yourself by verifying whether crowd data is organic or artificially faked."
    ],
    summary: "Social Proof shows that when people are uncertain, they follow their peers. By presenting relatable peer evidence and eliminating bystander ambiguity, you build irresistible, ethical momentum.",
    knowledgeCheck: [
      {
        id: "kc-3-1",
        type: "multiple-choice",
        question: "Under which two conditions does Social Proof operate with the greatest strength?",
        options: [
          "Certainty and Authority",
          "Uncertainty and Similarity",
          "Scarcity and Secrecy",
          "Wealth and Status"
        ],
        correctAnswer: "Uncertainty and Similarity",
        explanation: "People search for social guidance when they are unsure, and they copy those who are most like them."
      },
      {
        id: "kc-3-2",
        type: "multiple-choice",
        question: "Why does announcing 'Over 65% of people fail to lock their computers' often backfire?",
        options: [
          "People don't know where the lock button is.",
          "It uses Negative Social Proof, teaching employees that leaving screens unlocked is the majority norm.",
          "65% is too small of a number to care about.",
          "Managers should only communicate in person."
        ],
        correctAnswer: "It uses Negative Social Proof, teaching employees that leaving screens unlocked is the majority norm.",
        explanation: "Publicizing widespread misbehavior makes that misbehavior look normal and socially acceptable."
      },
      {
        id: "kc-3-3",
        type: "true-false",
        question: "True or False: In a crisis, asking a crowd generally ('Someone please help!') is more effective than pointing to one person.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "General pleas cause Pluralistic Ignorance where everyone assumes someone else will act. You must single out one individual."
      }
    ],
    practicalAssignment: {
      title: "Crafting a Peer-Matched Social Proof Proposal",
      instructions: "Identify a proposal where a stakeholder is hesitant due to uncertainty. Draft a 200-word pitch featuring a peer-matched case study and an anti-bystander call to action.",
      expectedOutput: "A structured pitch including Stakeholder Profile, Peer Case Study, and Direct Next Step.",
      criteria: [
        "Peer case study mirrors the stakeholder's exact context.",
        "Frames proof positively rather than negatively.",
        "Includes a clear single-owner call to action."
      ]
    }
  },
  {
    id: "lesson-04",
    number: 4,
    title: "Liking",
    moduleName: "Module 01: The six principles of persuasion",
    estimatedTime: "5 min reading / 45 min full practice",
    difficulty: "Beginner to Intermediate",
    coreQuestion: "Do I know, trust, and like this person?",
    principleTrigger: "Uncovering genuine similarities, offering sincere compliments, and cooperating toward shared goals.",
    objectives: [
      "Understand why people prefer to say yes to those they know and like.",
      "Master the five core drivers: Similarity, Compliments, Cooperation, Attractiveness (Halo Effect), and Association.",
      "Shift adversarial interactions into collaborative partnerships.",
      "Defend yourself from artificial flattery and 'Good Cop / Bad Cop' manipulation."
    ],
    introduction: "In business, professionals often pretend decisions are 100% rational, cold, and calculated. Yet behavioral science proves that when two proposals or vendors are roughly equal, stakeholders almost always approve the one presented by someone they genuinely like and trust. The Principle of Liking states that we strongly prefer to agree to requests made by people we know and like.",
    detailedExplanation: {
      heading: "The Architecture of Human Rapport",
      subsections: [
        {
          subheading: "The Five Drivers of Liking",
          content: "1. Similarity: We like people who share our backgrounds, values, communication style, or interests.\n2. Sincere Compliments: Genuine praise fulfills a fundamental human hunger for appreciation.\n3. Contact & Cooperation: As shown in Muzafer Sherif's Robbers Cave experiment, competing groups become allies only when forced to cooperate toward a shared goal.\n4. Attractiveness & The Halo Effect: Polished grooming, warm eye contact, and clean slide design create an automatic assumption of competence.\n5. Conditioning & Association: We associate people with the news they bring. Connect yourself with solutions, progress, and pleasant settings."
        },
        {
          subheading: "The Secret Weapon: Like Them First!",
          content: "World-record car salesman Joe Girard attributed his success to genuinely liking his customers. Before walking into a tough meeting, spend 2 minutes looking for something you authentically admire about the stakeholder. Because you find something real to appreciate, your demeanor softens, your praise is authentic, and they mirror that warmth back to you."
        },
        {
          subheading: "Reframing: 'Me vs. You' to 'Us vs. The Problem'",
          content: "Adversarial framing ('My department needs your department to stop delaying') triggers defensiveness. Collaborative framing ('Both of us want our clients to receive zero-defect deliveries; how can we team up to streamline this?') triggers the cooperative power of Liking."
        }
      ]
    },
    examples: [
      {
        type: "everyday",
        title: "Overgrown Tree Neighbor Conflict",
        scenario: "Carlos wants his grumpy neighbor Mr. Henderson to trim a heavy oak branch hanging over Carlos's roof.",
        before: "Knocking on the door and demanding the tree be trimmed or Carlos will call the city.",
        after: "Carlos notices Mr. Henderson's prize roses, walks over, and compliments his gardening skill. Two days later, Carlos asks: 'With storm season coming, how can we inspect that branch together so we protect both our roofs while keeping your tree balanced?'",
        takeaway: "Genuine compliment and cooperative framing turned an adversary into a cooperative partner."
      },
      {
        type: "workplace",
        title: "Product Manager vs. Compliance Officer",
        scenario: "Elena (Product) needs Marcus (Compliance) to expedite review of new app features.",
        before: "Sending impatient messages asking why compliance is holding up the release.",
        after: "Elena opens by praising Marcus for saving the company from an audit fine last month. She brings draft wireframes early so they can co-design the consent screen side by side.",
        takeaway: "Treating compliance as a co-creator rather than a roadblock secured the review in 48 hours."
      }
    ],
    defenseStrategy: {
      tacticName: "Artificial Flattery & 'Good Cop' Routines",
      howItWorks: "A negotiator showers you with exaggerated compliments or pretends to be your secret friend against their strict boss.",
      defenseRule: "Don't try to force yourself to dislike them. Instead, notice when your liking is rising unusually fast. Mentally separate the charming person from the contractual terms of the deal.",
      exactWordsToSay: "I've really enjoyed our conversation. Now, putting our personal rapport aside, let me examine the contract strictly on its commercial terms."
    },
    stepByStepPractice: {
      title: "The Pre-Meeting Rapport Checklist",
      whatToDo: "Complete a 3-minute rapport preparation audit before any high-stakes meeting.",
      whyToDoIt: "Diving cold into transactional demands triggers resistance. Authentic rapport primes agreement.",
      steps: [
        "Uncover 1 real similarity in background, values, or working style.",
        "Prepare 1 specific, 100% honest compliment regarding their recent effort or expertise.",
        "Check your pronouns: replace 'I need you to' with 'How can we team up to solve...'"
      ],
      commonMistake: "Delivering an insincere, syrupy compliment immediately before demanding a massive favor.",
      correction: "Ensure praise is grounded in objective facts and separated from immediate demands."
    },
    keyTakeaways: [
      "People prefer to say yes to those they know, like, and trust.",
      "The primary drivers of Liking are Similarity, Sincere Compliments, and Mutual Cooperation.",
      "Working together toward a shared superordinate goal turns rivals into allies.",
      "The fastest way to be liked is to intentionally look for something genuine to admire in the other person first.",
      "Defend yourself by mentally separating the charming messenger from the merits of the proposal."
    ],
    summary: "The Principle of Liking bridges technical competence and human connection. By discovering genuine common ground, expressing sincere appreciation, and framing tasks cooperatively, you unlock lasting goodwill.",
    knowledgeCheck: [
      {
        id: "kc-4-1",
        type: "multiple-choice",
        question: "In Muzafer Sherif's Robbers Cave experiment, what turned two hostile groups into friends?",
        options: [
          "Having counselors lecture them on good manners.",
          "Bringing them together purely for passive social meals.",
          "Shared challenges that required both groups to cooperate to succeed.",
          "Awarding prizes to whichever team won more contests."
        ],
        correctAnswer: "Shared challenges that required both groups to cooperate to succeed.",
        explanation: "Cooperation toward a mutual goal eliminates tribal hostility and fosters mutual liking."
      },
      {
        id: "kc-4-2",
        type: "true-false",
        question: "True or False: To defend yourself against a charming salesperson, you should try to hate them before they speak.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Do not fight natural liking; instead, notice the rapid warmth and mentally separate the person from the contract terms."
      },
      {
        id: "kc-4-3",
        type: "scenario",
        question: "What is the 'Halo Effect' in workplace communication?",
        options: [
          "Assuming people who wear white coats are always doctors.",
          "A bias where one positive visible trait makes observers judge someone as more competent and honest overall.",
          "Refusing to work with people from other departments.",
          "Using countdown timers to force quick agreements."
        ],
        correctAnswer: "A bias where one positive visible trait makes observers judge someone as more competent and honest overall.",
        explanation: "A positive first impression casts a favorable glow over perceptions of overall ability and character."
      }
    ],
    practicalAssignment: {
      title: "Rewriting an Adversarial Email into a Collaborative Pitch",
      instructions: "Take a tense or purely transactional email and rewrite it using Sincere Praise, Common Ground, and Cooperative Framing.",
      expectedOutput: "A side-by-side 'Before' and 'After' email comparison with labeled techniques.",
      criteria: [
        "Praise is specific and authentic.",
        "Reframes the problem as 'Us vs. The Challenge'.",
        "Language remains professional and concise."
      ]
    }
  },
  {
    id: "lesson-05",
    number: 5,
    title: "Scarcity",
    moduleName: "Module 01: The six principles of persuasion",
    estimatedTime: "4 min reading / 40 min full practice",
    difficulty: "Beginner to Intermediate",
    coreQuestion: "What am I at risk of losing out on if I delay?",
    principleTrigger: "Highlighting genuine time, capacity, or supply limits, and sharing exclusive information ethically.",
    objectives: [
      "Understand why opportunities appear more valuable when their availability is limited.",
      "Explain the two psychological engines: Loss Aversion and Psychological Reactance.",
      "Frame proposals around preventable losses rather than optional gains.",
      "Cool down emotional panic and defend against fake countdowns and artificial shortages."
    ],
    introduction: "When browsing online for a hotel and seeing 'Only 1 room left at this price,' your pulse quickens and the room suddenly appears twice as desirable. The Principle of Scarcity states that opportunities, items, and information seem much more valuable when their availability is limited or dwindling.",
    detailedExplanation: {
      heading: "The Psychology of Rarity & Freedom",
      subsections: [
        {
          subheading: "Loss Aversion: Why Losses Loom Larger Than Gains",
          content: "Nobel laureates Daniel Kahneman and Amos Tversky proved that the pain of losing $100 is roughly twice as intense as the joy of finding $100. Pitching only potential gains ('You will save 5 hours a week') is half as persuasive as framing preventable losses ('Every week we delay, we are losing 5 valuable engineering hours that walk right out the door')."
        },
        {
          subheading: "Psychological Reactance & Competition",
          content: "Psychologist Jack Brehm discovered that whenever our freedom to choose something is restricted, we experience Psychological Reactance: an urgent desire to reassert our freedom by acquiring the restricted item! Furthermore, Stephen Worchel's cookie study proved that experiencing a drop from abundance to scarcity (10 cookies reduced to 2) triggers far stronger desire than constant scarcity."
        },
        {
          subheading: "The Multiplier: Scarcity of Exclusive Information",
          content: "In Cialdini's wholesale beef study, telling buyers that beef would be scarce doubled orders. But telling them that beef would be scarce AND that this insight came from an exclusive confidential report not yet public caused orders to jump by 600%! Exclusive knowledge carries immense persuasive weight."
        }
      ]
    },
    examples: [
      {
        type: "everyday",
        title: "Used Bicycle Sale",
        scenario: "Tariq is selling a quality bicycle online for $250. A buyer hesitates on Friday night.",
        before: "Tariq lies and claims an imaginary buyer offered $300 (Unethical manipulation).",
        after: "Tariq says truthfully: 'Take all the time you need. Just so you know, two other buyers booked test rides for tomorrow at 10 AM. If you want it tonight, text me before 9:30 AM and I will hold it.'",
        takeaway: "Truthful scarcity and real competition motivated the buyer to finalize the purchase that evening."
      },
      {
        type: "workplace",
        title: "Cloud Infrastructure Upgrade Approval",
        scenario: "Engineering Manager Anya needs executive sign-off for a $15,000 security upgrade.",
        before: "Pitching that the upgrade will improve server uptime and qualify for a 10% discount.",
        after: "Anya highlights that delaying past Friday forfeits a locked-in $1,500 partner credit AND risks losing up to 12 hours of peak customer checkout uptime during the upcoming holiday rush.",
        takeaway: "Loss framing combined with an authentic external deadline ended months of executive stalling."
      }
    ],
    defenseStrategy: {
      tacticName: "Manufactured Deadlines & Artificial Shortages",
      howItWorks: "Websites or salespeople use fake countdown timers or claim 'another buyer is walking in right now' to induce emotional panic.",
      defenseRule: "Use your rapid pulse as an alarm. Pause, breathe, and ask: 'Do I want this for its actual utility, or only for the thrill of winning a competition?' Remember: scarce cookies do not taste any better!",
      exactWordsToSay: "If this opportunity only exists for the next five minutes, then my answer has to be no. I evaluate major commitments based on careful analysis, not arbitrary clocks."
    },
    stepByStepPractice: {
      title: "The Loss-Framing & Constraint Audit",
      whatToDo: "Convert a standard 'gain pitch' into a loss-framed proposal backed by a real constraint.",
      whyToDoIt: "Stakeholders easily procrastinate on optional gains, but mobilize quickly to prevent losses.",
      steps: [
        "State the main benefit of your proposal as a gain.",
        "Rewrite that exact truth as what the organization loses every week of delay.",
        "Identify 1 authentic constraint (calendar capacity, budget cycle close, or exclusive insight)."
      ],
      commonMistake: "Inventing an arbitrary deadline that has no operational reason.",
      correction: "Tie all deadlines to real external drivers (e.g., quarterly sprint locks or partner policy deadlines)."
    },
    keyTakeaways: [
      "Items and opportunities seem more valuable when their availability is restricted.",
      "Loss Aversion dictates that avoiding a loss is roughly twice as motivating as seeking a gain.",
      "New scarcity and competition trigger intense Psychological Reactance.",
      "Sharing exclusive information about a scarce resource multiplies persuasive impact.",
      "Defend yourself by remembering that rarity does not improve functionality: judge items by practical use."
    ],
    summary: "The Principle of Scarcity cuts through human inertia. By framing proposals around preventable losses, highlighting genuine capacity constraints, and providing exclusive insights, you motivate prompt, decisive action.",
    knowledgeCheck: [
      {
        id: "kc-5-1",
        type: "multiple-choice",
        question: "According to behavioral research on Loss Aversion, which statement is more motivating?",
        options: [
          "'If you insulate your house, you will gain $60 every month.'",
          "'If you fail to insulate your house, you are losing $60 every month through your roof.'",
          "Both statements have identical psychological impact.",
          "Neither statement works because people dislike home repairs."
        ],
        correctAnswer: "'If you fail to insulate your house, you are losing $60 every month through your roof.'",
        explanation: "Loss Aversion demonstrates that preventing a loss is roughly twice as psychologically motivating as gaining the same amount."
      },
      {
        id: "kc-5-2",
        type: "multiple-choice",
        question: "In Stephen Worchel's cookie jar experiment, which jar was rated most desirable?",
        options: [
          "The jar that had 10 cookies the entire time.",
          "The jar that had 2 cookies the entire time.",
          "The jar that started with 10 cookies, but had 8 removed to leave only 2.",
          "The jar that was kept completely hidden."
        ],
        correctAnswer: "The jar that started with 10 cookies, but had 8 removed to leave only 2.",
        explanation: "Watching availability drop from abundance to scarcity creates the highest desire and reactance."
      },
      {
        id: "kc-5-3",
        type: "true-false",
        question: "True or False: Fabricating a fake countdown timer on a website is an ethical and sustainable persuasion strategy.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Fake scarcity is unethical manipulation. Once discovered, it permanently destroys customer trust."
      }
    ],
    practicalAssignment: {
      title: "Converting Gain Pitches to Loss-Framed Value Propositions",
      instructions: "Take an existing project pitch and rewrite its core benefits into preventable losses and honest constraints.",
      expectedOutput: "A 250-word document presenting the original gain frame, the upgraded loss frame, and the authentic constraint.",
      criteria: [
        "Clearly emphasizes preventable loss without aggressive fear-mongering.",
        "Scarcity constraint is grounded in verifiable reality.",
        "Clear, compelling English."
      ]
    }
  },
  {
    id: "lesson-06",
    number: 6,
    title: "Authority",
    moduleName: "Module 01: The six principles of persuasion",
    estimatedTime: "5 min reading / 45 min full practice",
    difficulty: "Beginner to Intermediate",
    coreQuestion: "What does a credible expert or legitimate leader advise?",
    principleTrigger: "Demonstrating verifiable expertise and establishing immediate trustworthiness by admitting a minor drawback first.",
    objectives: [
      "Understand why human societies condition us to defer to legitimate authority.",
      "Recognize the three superficial symbols of authority: Titles, Clothing, and Trappings.",
      "Establish non-arrogant expertise and instant trustworthiness using the 'Drawback-Then-However' technique.",
      "Defend against counterfeit authority and blind obedience using the two critical defense questions."
    ],
    introduction: "When a doctor writes a prescription in illegible handwriting, you don't demand to read the clinical trial papers—you go straight to the pharmacy. Human beings are deeply conditioned from childhood to follow the guidance of recognized authorities. The Principle of Authority explains why genuine expertise short-circuits skepticism, how symbols can be faked, and how you can ethically establish undeniable credibility.",
    detailedExplanation: {
      heading: "The Mechanics of Directed Deference",
      subsections: [
        {
          subheading: "The Milgram Obedience Phenomenon",
          content: "In Stanley Milgram's classic Yale experiments, 65% of ordinary citizens administered what they believed were dangerous 450-volt electric shocks to a screaming victim simply because a researcher in a lab coat calmly repeated: 'The experiment requires that you continue.' Our conditioning to obey authority is extraordinarily deep."
        },
        {
          subheading: "The Three Superficial Symbols of Authority",
          content: "1. Titles: Professor, Doctor, VP, Lead Architect. In studies, the same man was estimated to be 2.5 inches taller when introduced as a Cambridge Professor versus a college student!\n2. Clothing: Suits, uniforms, and lab coats trigger automatic compliance. 350% more pedestrians followed a jaywalker across red lights when he wore a business suit!\n3. Trappings: Accessories such as luxury cars, executive offices, and formal credentials."
        },
        {
          subheading: "Credibility = Expertise + Trustworthiness",
          content: "Authority only convinces if you are perceived as credible. Expertise means you know the truth; Trustworthiness means you are honest enough to speak it. How do you prove trustworthiness in 10 seconds? By voluntarily mentioning a minor drawback of your proposal BEFORE highlighting its massive strengths using the bridge word 'However...'. Admitting a weakness first proves you are an honest truth-teller."
        }
      ]
    },
    examples: [
      {
        type: "everyday",
        title: "Job Interview Credibility",
        scenario: "Sam is interviewing for a project role. He has great skills but only 1 year in healthcare logistics.",
        before: "Trying to hide his limited healthcare experience and speaking vaguely.",
        after: "Sam states proactively: 'I have one year of healthcare experience, which is less than some veterans you might interview. However, during five years managing aviation logistics—with even stricter safety audits—I reduced delays by 35%, and I bring that exact rigorous discipline to your clinic.'",
        takeaway: "Voluntarily disclosing the drawback disarmed skepticism and made his aviation expertise completely believable."
      },
      {
        type: "workplace",
        title: "Executive Board Website Overhaul",
        scenario: "Lin (Data Analyst) and Marco (UX Lead) are pitching an overhaul to skeptical executives.",
        before: "Bragging about their degrees and telling the board they must trust them.",
        after: "Marco introduces Lin's 6-year analytics track record before she speaks. Lin then says: 'Option B will require our developers 15 hours of extra setup. However, our 40 live user tests prove it cuts checkout abandonment by 28%, recouping that engineering time in the first week.'",
        takeaway: "Third-party introduction plus the 'Drawback-Then-However' method created complete board buy-in."
      }
    ],
    defenseStrategy: {
      tacticName: "Counterfeit Authority & Out-of-Field Endorsements",
      howItWorks: "Celebrities or actors in lab coats endorsing financial apps or healthcare products they know nothing about.",
      defenseRule: "Ask two questions: 1. 'Is this authority truly an expert on THIS specific topic?' and 2. 'How truthful can I expect them to be right now given their financial incentives?'",
      exactWordsToSay: "I respect your experience in marketing, but on this technical architecture question, I need to see verified peer benchmarks."
    },
    stepByStepPractice: {
      title: "The 'Drawback-Then-However' Formula",
      whatToDo: "Structure your proposal so honesty precedes your strongest value proposition.",
      whyToDoIt: "Audiences remain skeptical of claims of perfection. Acknowledging a minor flaw creates instant credibility.",
      steps: [
        "Have a colleague introduce your relevant track record before you speak, or summarize it in pre-meeting notes.",
        "State 1 real, minor drawback upfront ('To be completely transparent, one limitation is...').",
        "Use the transition word: 'However...'",
        "Deliver your #1 most powerful benefit that solves the stakeholder's core priority."
      ],
      commonMistake: "Ending on the negative ('Our solution cuts costs by 50%, although it takes two extra days to install').",
      correction: "Always put the minor drawback FIRST, so the positive benefit rings in the listener's ears at the end."
    },
    keyTakeaways: [
      "Authority compels deference through social conditioning and expert reliance.",
      "The three common symbols of authority are Titles, Clothing, and Trappings.",
      "Establish expertise without bragging via third-party introductions or brief pre-meeting bios.",
      "True Credibility combines Expertise with Trustworthiness.",
      "Admit a minor drawback first, then transition with 'However...' to your primary strength.",
      "Defend yourself by verifying domain relevance and assessing the expert's incentives."
    ],
    summary: "The Principle of Authority transforms recommendations into decisive action. By establishing relevant expertise gracefully, proving honesty through upfront transparency, and screening out counterfeit claims, you command genuine respect.",
    knowledgeCheck: [
      {
        id: "kc-6-1",
        type: "multiple-choice",
        question: "What are the three most common external symbols of authority?",
        options: [
          "Loudness, Anger, and Speed",
          "Titles, Clothing, and Trappings",
          "Gifts, Compliments, and Jokes",
          "Discounts, Coupons, and Deadlines"
        ],
        correctAnswer: "Titles, Clothing, and Trappings",
        explanation: "These three external visual cues frequently trigger automatic subconscious deference."
      },
      {
        id: "kc-6-2",
        type: "multiple-choice",
        question: "When using the 'Drawback-Then-However' technique to build trustworthiness, what is the correct order?",
        options: [
          "Present all benefits first, then mention weaknesses at the very end.",
          "Mention the minor drawback first, then use 'However...' to pivot to your overwhelming strength.",
          "Never mention any weakness under any circumstance.",
          "Only mention weaknesses to appear humble."
        ],
        correctAnswer: "Mention the minor drawback first, then use 'However...' to pivot to your overwhelming strength.",
        explanation: "Disclosing the flaw upfront proves honesty; concluding with 'However...' ensures your core strength dominates their memory."
      },
      {
        id: "kc-6-3",
        type: "true-false",
        question: "True or False: Having a colleague briefly mention your years of experience before you speak increases signed agreements without making you look arrogant.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Third-party introductions communicate competence without the negative perception of bragging."
      }
    ],
    practicalAssignment: {
      title: "Drafting an Ethical Authority & Drawback Script",
      instructions: "Write a 250-word script featuring a 3rd-party introduction of your background and a Drawback-Then-However statement for an upcoming proposal.",
      expectedOutput: "A 2-part preparation script containing Pre-Pitch Credential Introduction and Core Proposal Pitch.",
      criteria: [
        "Credentials are stated objectively without boasting.",
        "Drawback is minor and manageable, not fatal.",
        "Transitions cleanly using 'However...' into the primary benefit."
      ]
    }
  }
];

export const COMPREHENSIVE_FINAL_EXAM: QuizQuestion[] = [
  {
    id: 1,
    question: "According to Prof. Robert Cialdini, why do human beings rely on the six principles of influence as automatic 'mental shortcuts' (Click, Whirr responses)?",
    options: [
      "Because humans are fundamentally lazy and indifferent to outcomes.",
      "Because modern life contains too much complex information to analyze everything from scratch, so adaptive heuristics evolved to save mental energy.",
      "Because formal education stopped teaching critical logic in the 20th century.",
      "Because mental shortcuts only occur during states of physical exhaustion."
    ],
    correctIndex: 1,
    explanation: "Mental shortcuts (heuristics) evolved because our brains face an avalanche of complex decisions daily. They serve us well most of the time.",
    principle: "Foundations & Mental Shortcuts"
  },
  {
    id: 2,
    question: "Which principle explains why an NGO receives nearly double the donation response rate when it includes free personalized address labels inside the envelope?",
    options: ["Scarcity", "Authority", "Reciprocation", "Consistency"],
    correctIndex: 2,
    explanation: "The uninvited gift of personalized address labels triggers a subconscious psychological obligation to give something in return.",
    principle: "Reciprocation"
  },
  {
    id: 3,
    question: "What is the key structural difference between the 'Rejection-Then-Retreat' technique and the 'Foot-in-the-Door' technique?",
    options: [
      "Rejection-Then-Retreat starts with a large ask and retreats to a smaller one (using Reciprocation of concessions); Foot-in-the-Door starts with a small ask and builds up to a larger one (using Consistency of self-image).",
      "Foot-in-the-Door is strictly used for consumer sales, while Rejection-Then-Retreat is only used in politics.",
      "Rejection-Then-Retreat relies on Authority, while Foot-in-the-Door relies on Scarcity.",
      "There is no difference; they are interchangeable terms."
    ],
    correctIndex: 0,
    explanation: "Rejection-Then-Retreat uses concessions to trigger reciprocal agreement; Foot-in-the-Door uses initial action to reshape self-image.",
    principle: "Reciprocation vs. Consistency"
  },
  {
    id: 4,
    question: "Which of the following methods best activates all four commitment amplifiers (Active, Public, Effortful, Voluntary)?",
    options: [
      "Sending an automated manager email on Monday morning listing what each person must finish.",
      "Having each team member write down their own sprint commitments on the shared board and explain their plan during Monday standup.",
      "Threatening to dock salaries for anyone who misses a deadline.",
      "Keeping individual quarterly goals secret so nobody feels embarrassed."
    ],
    correctIndex: 1,
    explanation: "Writing goals down (Active) in front of colleagues (Public), planning the steps (Effortful), of their own volition (Voluntary) creates maximum follow-through.",
    principle: "Consistency"
  },
  {
    id: 5,
    question: "In Cialdini's hotel towel reuse research, which room placard produced the highest reuse compliance rate?",
    options: [
      "'Please reuse your towels to protect our global environment.'",
      "'Please reuse your towels to help this hotel save laundry costs.'",
      "'75% of guests who stayed in this hotel reused their towels.'",
      "'75% of guests who stayed in THIS EXACT ROOM reused their towels.'"
    ],
    correctIndex: 3,
    explanation: "Matching the social proof group to the guest's exact physical situation maximized peer similarity and drove the highest compliance.",
    principle: "Social Proof"
  },
  {
    id: 6,
    question: "When you need urgent help from a group, why is asking generally ('Can somebody please look into this?') dangerous?",
    options: [
      "People dislike receiving group messages.",
      "Pluralistic Ignorance (The Bystander Effect) causes everyone to wait and assume someone else will act.",
      "Corporate firewall policies block multi-recipient emails.",
      "Groups only obey formal executive directives."
    ],
    correctIndex: 1,
    explanation: "In an uncertain group, everyone looks to others; because no one acts immediately, each person assumes action is unneeded.",
    principle: "Social Proof"
  },
  {
    id: 7,
    question: "What is the 'Halo Effect' in workplace communication?",
    options: [
      "A cognitive bias where a single positive visible trait (such as polished grooming or warm delivery) causes observers to assume the person is also competent and honest.",
      "A rule requiring employees to wear badges in meetings.",
      "A technique where you only praise employees who have university degrees.",
      "An automated formula for calculating team productivity."
    ],
    correctIndex: 0,
    explanation: "The Halo Effect causes a favorable first impression in one visible dimension to illuminate perceptions of competence and trustworthiness.",
    principle: "Liking"
  },
  {
    id: 8,
    question: "Why is saying 'Every month we delay, we are losing $10,000 in scrap value' more motivating than saying 'This project will save $10,000 a month'?",
    options: [
      "Because of Loss Aversion: humans are roughly twice as motivated to avoid losing something as to gain an equal amount.",
      "Because stakeholders are naturally pessimistic.",
      "Because losses can be written off on tax filings.",
      "Because savings statements violate advertising regulations."
    ],
    correctIndex: 0,
    explanation: "Loss Aversion proves that human psychology reacts with significantly greater urgency to preventable losses than to optional gains.",
    principle: "Scarcity"
  },
  {
    id: 9,
    question: "In Stanley Milgram's classic experiments at Yale University, what caused 65% of normal participants to deliver 450-volt electric shocks?",
    options: [
      "The participants were selected from prison facilities.",
      "Deep societal conditioning to defer to legitimate Authority figures (the researcher in the lab coat).",
      "They were promised huge cash payouts upon completion.",
      "They personally disliked the actor receiving the shocks."
    ],
    correctIndex: 1,
    explanation: "Milgram proved that deference to legitimate authority exerts immense psychological pressure over individual conscience.",
    principle: "Authority"
  },
  {
    id: 10,
    question: "What are the two foundational pillars of genuine Credibility?",
    options: [
      "Loudness + Repetition",
      "Expertise + Trustworthiness",
      "Wealth + Status Symbols",
      "Urgency + Secrecy"
    ],
    correctIndex: 1,
    explanation: "Credibility requires both knowing the truth (Expertise) and being trusted to speak the truth honestly (Trustworthiness).",
    principle: "Authority"
  },
  {
    id: 11,
    question: "How should you respond when a stakeholder warmly thanks you for providing early help on a project?",
    options: [
      "'Oh, don't mention it, it really wasn't anything at all.'",
      "'You're very welcome—I was glad to help, and I know you'd do the same for me if I were in a crunch.'",
      "'Remember that you now owe our department a favor.'",
      "Brush it off and change the topic immediately."
    ],
    correctIndex: 1,
    explanation: "Saying it was nothing dismisses the favor's value. The recommended phrase gracefully reinforces mutual future cooperation.",
    principle: "Reciprocation"
  },
  {
    id: 12,
    question: "What should you do when a vendor uses the Low-Ball tactic (locking you into a price, then revealing hidden mandatory surcharges)?",
    options: [
      "Pay the fees because you promised to buy the product.",
      "Ask the Heart-of-Hearts question ('Knowing what I know now, would I still make this deal?') and walk away if the answer is no.",
      "File a lawsuit before leaving the office.",
      "Accuse the salesperson of committing a crime."
    ],
    correctIndex: 1,
    explanation: "You have zero obligation to stick to an agreement whose foundational terms were changed in bad faith. Ask the defense question and walk away.",
    principle: "Consistency Defense"
  },
  {
    id: 13,
    question: "In Muzafer Sherif's Robbers Cave experiment, what converted hostile, competing groups of boys into friends?",
    options: [
      "Counselors giving moral lectures.",
      "Passive social mixers like movie nights.",
      "Shared superordinate goals requiring joint cooperation (e.g., fixing the stalled camp water truck).",
      "Giving medals to the team that made fewer insults."
    ],
    correctIndex: 2,
    explanation: "Working together toward a shared superordinate goal dissolves intergroup hostility and generates genuine liking.",
    principle: "Liking"
  },
  {
    id: 14,
    question: "In Stephen Worchel's cookie study, which condition produced the highest perceived desirability?",
    options: [
      "A jar containing 10 cookies throughout the test.",
      "A jar containing 2 cookies throughout the test.",
      "A jar that dropped from 10 cookies to 2 cookies due to sudden outside demand.",
      "A jar with broken cookies."
    ],
    correctIndex: 2,
    explanation: "A sudden drop from abundance to scarcity creates acute Psychological Reactance, making the resource vastly more desirable.",
    principle: "Scarcity"
  },
  {
    id: 15,
    question: "What did Dr. Cialdini mean by the phrase 'Scarce cookies don't taste any better'?",
    options: [
      "That cookies go stale quickly.",
      "That scarcity increases the emotional urge to possess something, but does not improve how the item actually functions or tastes.",
      "That bakers should always make large batches.",
      "That consumers prefer plentiful snacks."
    ],
    correctIndex: 1,
    explanation: "Rarity increases possessive desire, but not functional utility. Remembering this cools down panic and protects you from artificial deadlines.",
    principle: "Scarcity Defense"
  },
  {
    id: 16,
    question: "What is the most effective way to establish your credentials before a presentation without appearing boastful?",
    options: [
      "Read your entire resume line-by-line during the opening slide.",
      "Have a trusted colleague or host introduce your relevant track record before you begin.",
      "Wear your university graduation ring prominently.",
      "State that you are the smartest person in the room."
    ],
    correctIndex: 1,
    explanation: "Third-party introductions communicate expertise objectively and avoid the perception of arrogance.",
    principle: "Authority"
  },
  {
    id: 17,
    question: "Why does the 'Drawback-Then-However' technique establish instant trustworthiness?",
    options: [
      "Because audiences respect humility more than competence.",
      "Because admitting a minor flaw upfront disarms skepticism and proves you are an honest truth-teller before you highlight your core strength.",
      "Because competitors won't notice your flaw.",
      "Because legal compliance requires disclosing all product bugs."
    ],
    correctIndex: 1,
    explanation: "Voluntarily mentioning a minor drawback proves honesty; following with 'However...' leaves your core benefit ringing in their ears.",
    principle: "Authority"
  },
  {
    id: 18,
    question: "Which of the following represents an unethical use of Negative Social Proof?",
    options: [
      "'88% of our engineers have completed the safety checklist.'",
      "'Nearly everybody is violating our remote work travel policy, so we must clamp down.'",
      "'Three regional clinics adopted this software and reduced patient wait times by 20%.'",
      "'Sarah, can you please review the Q3 forecast by Thursday?'"
    ],
    correctIndex: 1,
    explanation: "Stating that 'nearly everybody is violating' a policy inadvertently teaches employees that violating it is the normal majority behavior.",
    principle: "Social Proof"
  },
  {
    id: 19,
    question: "What is the primary difference between ethical persuasion and manipulative exploitation?",
    options: [
      "Persuasion highlights truthful, natural triggers that create mutual value; manipulation fabricates false triggers (fake scarcity, fake reviews) to trick others.",
      "Persuasion is only done in non-profits; manipulation is done in business.",
      "Persuasion uses logic; manipulation uses psychology.",
      "There is no difference; all influence is manipulative."
    ],
    correctIndex: 0,
    explanation: "Ethical persuasion illuminates natural, truthful realities for mutual benefit. Manipulation invents lies that exploit subconscious vulnerabilities.",
    principle: "Ethics of Influence"
  },
  {
    id: 20,
    question: "In Cialdini's expanded framework (2016), what is the 7th principle of influence known as 'Unity'?",
    options: [
      "A principle stating that groups must always vote unanimously.",
      "A principle where shared identity ('They are one of us') triggers profound, family-like trust and cooperation.",
      "A mathematical formula for corporate mergers.",
      "An advertising technique used strictly in political campaigns."
    ],
    correctIndex: 1,
    explanation: "Unity is the feeling of shared identity (kinship, place of origin, or deep co-creation) that transcends simple similarity.",
    principle: "Unity (Extension)"
  }
];

export const MANIPULATION_DEFENSE_SCENARIOS = [
  {
    id: "defense-1",
    title: "The Low-Ball Contract Switch",
    principle: "Consistency Exploitation",
    context: "A commercial real estate agent offers you prime office space at an unbeatable $18/sq ft. You excitedly spend 3 days touring the space, tell your team, and sign preliminary papers. Just before final lease signing, the agent says: 'My manager noticed an error—the rate is actually $24/sq ft with a mandatory maintenance fee.'",
    badResponse: "Sign anyway because you already told your team and feel embarrassed to back out now.",
    goodResponse: "Execute the Low-Ball Defense: Ask the Heart-of-Hearts question ('Knowing the price is $24, would I have ever toured this building?'). Politely state: 'I agreed to the $18 terms. Because the deal has changed, I am stepping back immediately.'",
    whyItWorks: "Dismantles foolish consistency. You have no ethical obligation to honor an agreement altered in bad faith."
  },
  {
    id: "defense-2",
    title: "The Extreme Initial Demand Trap",
    principle: "Reciprocation (Door-in-the-Face) Abuse",
    context: "An IT software consultant opens negotiations by demanding $80,000 for a minor intranet configuration (triple market rate). When you balk, he 'benevolently' cuts his quote to $45,000, acting as if he made a massive personal sacrifice for your company.",
    badResponse: "Feel grateful for the $35,000 discount and sign the $45,000 contract on the spot.",
    goodResponse: "Recognize that Rejection-Then-Retreat only applies to good-faith negotiations. An absurd opening anchor is a sales trick, not a real concession. Insist on benchmarking against independent market rates.",
    whyItWorks: "Sales tricks do not obligate you to reciprocate. Concessions must be real, not artificial."
  },
  {
    id: "defense-3",
    title: "The Artificial Countdown & Phantom Buyer",
    principle: "Scarcity Panic",
    context: "You are purchasing event equipment. The vendor points to an automated digital countdown on his tablet showing 12 minutes remaining and says: 'Another event planner is on line 2 trying to buy these exact audio consoles right now.'",
    badResponse: "Feel the rush of adrenaline, panic about losing the consoles, and hand over your credit card immediately.",
    goodResponse: "Use your rapid pulse as an alarm bell. Remember that scarce consoles don't sound any better! Calmly say: 'If this deal disappears in 12 minutes, then my answer is no. I make equipment purchases based on technical testing, not countdown clocks.'",
    whyItWorks: "Separates emotional panic from functional utility. Vendors almost always preserve the offer when you refuse to panic."
  },
  {
    id: "defense-4",
    title: "The Syrupy Flatterer with Weak Terms",
    principle: "Liking Exploitation",
    context: "A financial advisor takes you to an expensive lunch, showers you with praise about your career brilliance, and claims to have grown up on your exact childhood street. His fund charges an exorbitant 2.8% annual management fee.",
    badResponse: "Invest with him because you really enjoyed the lunch and he seems like a wonderful friend.",
    goodResponse: "Do not try to force yourself to hate him. Instead, mentally separate the charming person from the investment prospectus. Ask: 'If this exact 2.8% fee prospectus came from a rude stranger, would I invest?'",
    whyItWorks: "Isolates the proposal's objective economic terms from the interpersonal charm of the salesperson."
  },
  {
    id: "defense-5",
    title: "The Counterfeit Expert Endorsement",
    principle: "Authority Exploitation",
    context: "A health supplement advertisement features a famous Hollywood movie actor dressed in a crisp physician's white lab coat claiming: 'Take this herbal capsule daily to protect your heart health.'",
    badResponse: "Buy the supplement because the person in the lab coat looked confident and authoritative.",
    goodResponse: "Ask Cialdini's two defense questions: 1. 'Is this person truly an expert on cardiology?' (No, he is an actor). 2. 'What are his financial incentives?' (He was paid $500,000 for the commercial). Disregard the endorsement.",
    whyItWorks: "Stops the brain from blindly reacting to external authority symbols (clothing) when genuine expertise is absent."
  }
];

export const COURSE_FAQ = [
  {
    q: "Is persuasion the same thing as manipulation?",
    a: "No. Ethical persuasion illuminates truthful realities (genuine scarcity, real peer testimonials, authentic credentials) to help people make choices that create mutual benefit. Manipulation fabricates lies (fake countdowns, fake reviews, false concessions) to trick people into one-sided transactions."
  },
  {
    q: "What if I don't have formal credentials or executive titles?",
    a: "Titles are only one symbol of authority. You can demonstrate powerful authority by sharing verified data, having a respected colleague introduce your past results, and using the 'Drawback-Then-However' technique to prove your absolute honesty upfront."
  },
  {
    q: "How can I avoid coming across as manipulative when giving gifts or favors?",
    a: "Give value with zero immediate strings attached. Do not say 'Since I did this, you must do that.' Help colleagues solve real problems, share helpful resources, and allow the relationship to develop naturally over time."
  },
  {
    q: "Can I combine all six principles in a single pitch?",
    a: "Yes! High-stakes proposals often activate multiple principles across stages: build rapport (Liking) and give value early (Reciprocation), establish credibility and honesty (Authority), show peer validation (Social Proof), highlight preventable losses (Scarcity), and close with a voluntary next step (Consistency)."
  },
  {
    q: "What should I do if a client finds out I am studying persuasion?",
    a: "Celebrate it! Ethical persuasion is about clarity, mutual respect, and alignment. If you tell a client: 'I studied communication to ensure our proposals are clear, honest, and easy for your team to evaluate,' they will respect your professionalism."
  }
];

export const COURSE_GLOSSARY = [
  { term: "Active Commitment", def: "A commitment where a person speaks or writes something down, drastically strengthening follow-through." },
  { term: "Authority", def: "The deep-seated human tendency to follow the guidance of legitimate, credible experts and leaders." },
  { term: "Bystander Effect (Pluralistic Ignorance)", def: "Paralysis in an uncertain crowd where everyone assumes someone else will take responsibility." },
  { term: "Click, Whirr", def: "Automatic, pre-programmed behavioral patterns triggered by a single feature of information." },
  { term: "Consistency", def: "The internal and social drive to make future actions align with past words and commitments." },
  { term: "Credibility", def: "The synthesis of Expertise (knowing the truth) and Trustworthiness (speaking the truth honestly)." },
  { term: "Drawback-Then-However", def: "Admitting a minor limitation upfront to prove trustworthiness, then pivoting with 'However' to your core strength." },
  { term: "Foot-in-the-Door", def: "Securing agreement to a small initial request to reshape self-image, paving the way for larger future agreement." },
  { term: "Halo Effect", def: "A bias where one positive visible trait casts a favorable glow over perceptions of overall competence and character." },
  { term: "Heuristic", def: "A subconscious mental shortcut that enables rapid decision-making in a complex environment." },
  { term: "Liking", def: "The preference to say yes to individuals we know, like, and trust, driven by similarity, compliments, and cooperation." },
  { term: "Loss Aversion", def: "The psychological reality that avoiding a loss is roughly twice as motivating as acquiring an equal gain." },
  { term: "Low-Ball Tactic", def: "An unethical trap where an enticing deal is offered to secure commitment, then worsened right before closing." },
  { term: "Negative Social Proof", def: "The mistake of publicizing how common an unwanted behavior is, inadvertently normalizing the infraction." },
  { term: "Psychological Reactance", def: "The intense emotional impulse to reassert personal freedom whenever choices or items become restricted." },
  { term: "Reciprocation", def: "The universal human duty to repay in kind what another person has given us." },
  { term: "Rejection-Then-Retreat", def: "Starting with an ambitious ask and conceding to a smaller target request, triggering a reciprocal concession." },
  { term: "Scarcity", def: "The perception that opportunities, items, or information are more valuable when availability is limited." },
  { term: "Social Proof", def: "Determining what is correct, safe, or desirable by observing what peers think and do." },
  { term: "Unity", def: "The 7th principle of influence: feeling a shared identity ('They are one of us') that triggers family-like cooperation." }
];

export const AUTHORITATIVE_REFERENCES = [
  {
    author: "Robert B. Cialdini, Ph.D.",
    title: "Influence: Science and Practice (5th Edition)",
    year: "2009",
    publisher: "Pearson / Allyn & Bacon",
    citation: "Foundational text documenting the six universal principles of influence, laboratory and field experiments, and defense mechanisms."
  },
  {
    author: "Robert B. Cialdini, Ph.D.",
    title: "Pre-Suasion: A Revolutionary Way to Influence and Persuade",
    year: "2016",
    publisher: "Simon & Schuster",
    citation: "Introduced the 7th principle of influence (Unity) and the science of what occurs in the moments immediately before a proposal is delivered."
  },
  {
    author: "Daniel Kahneman",
    title: "Thinking, Fast and Slow",
    year: "2011",
    publisher: "Farrar, Straus and Giroux",
    citation: "Synthesizes decades of Nobel Prize-winning research on System 1 (fast, heuristic thinking) vs. System 2 (slow, analytical thinking) and Loss Aversion."
  },
  {
    author: "Stanley Milgram",
    title: "Obedience to Authority: An Experimental View",
    year: "1974",
    publisher: "Harper & Row",
    citation: "Groundbreaking psychological research at Yale University documenting the extraordinary power of perceived legitimate authority over human action."
  },
  {
    author: "Muzafer Sherif et al.",
    title: "Intergroup Conflict and Cooperation: The Robbers Cave Experiment",
    year: "1961",
    publisher: "University of Oklahoma Book Exchange",
    citation: "Classic field study showing how shared superordinate goals (cooperation) resolve tribal conflict and build genuine liking."
  }
];
