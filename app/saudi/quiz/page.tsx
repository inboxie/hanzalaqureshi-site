"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SaudiQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [email, setEmail] = useState("");
  const [generating, setGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [result, setResult] = useState<string>("");
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams);
    }
  };
  const [showSkipMessage, setShowSkipMessage] = useState(false);

  const industryCategories = [
    {
      name: "Tech & Digital",
      subtitle: "High-demand sectors under Vision 2030",
      options: [
        "Artificial Intelligence",
        "Machine Learning",
        "Big Data & Analytics",
        "Cloud Computing",
        "Cybersecurity",
        "Software Engineering",
        "IoT",
        "Advanced Computing",
        "FinTech"
      ]
    },
    {
      name: "Science, Health & Research",
      subtitle: "Medical and scientific fields",
      options: [
        "Medical Specialist",
        "Healthcare / Biotech",
        "Space & Aviation",
        "Energy",
        "Environment / Water / Agriculture"
      ]
    },
    {
      name: "Industry & Infrastructure",
      subtitle: "Manufacturing and logistics",
      options: [
        "Materials & Production",
        "Advanced Manufacturing",
        "Logistics & Transport",
        "Urban Transformation",
        "Defense / Aerospace"
      ]
    },
    {
      name: "Business & Services",
      subtitle: "Professional services",
      options: [
        "Banking / Investment / Insurance",
        "Education",
        "Tourism / Hospitality",
        "Food & Agritech",
        "Consulting"
      ]
    },
    {
      name: "Other",
      subtitle: "",
      options: ["Other / Not Listed"]
    }
  ];

  const questions = [
    {
      id: "region",
      question: "Where do you currently live or hold citizenship?",
      helper: "",
      progressLabel: "Your Location",
      options: [
        "UK / Europe",
        "North America (US / Canada)",
        "South Asia (India, Pakistan, Bangladesh, Sri Lanka)",
        "Southeast Asia (Philippines, Malaysia, Indonesia, etc.)",
        "GCC (UAE, Qatar, Kuwait, Bahrain, Oman)",
        "Africa",
        "Other"
      ]
    },

    {
      id: "industry",
      question: "What is your industry or professional field?",
      helper: "Choose the field that best represents your current role or expertise.",
      progressLabel: "About Your Profession",
      isIndustryQuestion: true
    },
    
    {
      id: "jobLevel",
      question: "What is your current job level?",
      helper: "",
      progressLabel: "Your Experience",
      options: [
        "Entry / Junior",
        "Mid-Level",
        "Senior",
        "Manager",
        "Director / VP / C-Suite"
      ]
    },
    {
      id: "income",
      question: "What is your annual income (USD)?",
      helper: "",
      progressLabel: "Financial Profile",
      options: [
        "Under $30,000",
        "$30,000–60,000",
        "$60,000–112,000",
        "$112,000+"
      ]
    },
    {
      id: "experience",
      question: "How many years of professional experience do you have?",
      helper: "",
      progressLabel: "Your Experience",
      options: [
        "0–2 years",
        "3–5 years",
        "5–10 years",
        "10+ years"
      ]
    },
    {
      id: "leadership",
      question: "Do you have leadership or management experience?",
      helper: "",
      progressLabel: "Your Experience",
      options: ["Yes", "No"]
    },
    {
      id: "businessOwnership",
      question: "Do you currently own a business?",
      helper: "",
      progressLabel: "Business Background",
      options: ["Yes", "No"]
    },
    {
      id: "investmentWillingness",
      question: "Do you have capital to invest or start a business in Saudi?",
      helper: "",
      progressLabel: "Investment Interest",
      options: ["Yes", "No"]
    },
    {
      id: "investmentCapacity",
      question: "What is your available investment capital (SAR)?",
      helper: "",
      progressLabel: "Financial Profile",
      options: [
        "Under 100,000",
        "100,000–400,000",
        "400,000–1,000,000",
        "1,000,000–4,000,000",
        "4,000,000–7,000,000",
        "7,000,000+"
      ]
    },
    {
      id: "motivation",
      question: "What is your primary motivation for moving to Saudi Arabia?",
      helper: "",
      progressLabel: "Your Goals",
      options: [
        "Higher, tax-free salary",
        "Better career opportunities",
        "Long-term residency",
        "Business opportunities",
        "Real estate investment",
        "Safer lifestyle / family",
        "Not sure"
      ]
    },
    {
      id: "timeline",
      question: "What is your relocation timeline?",
      helper: "",
      progressLabel: "Planning",
      options: [
        "Less than 3 months",
        "3–6 months",
        "6–12 months",
        "12+ months",
        "Not sure"
      ]
    },
    {
      id: "family",
      question: "Who will you be relocating with?",
      helper: "",
      progressLabel: "Family Situation",
      options: [
        "Alone",
        "With spouse",
        "With spouse & children"
      ]
    },
    {
      id: "barrier",
      question: "What is your biggest barrier to relocating?",
      helper: "",
      progressLabel: "Planning",
      options: [
        "Understanding visa options",
        "Financial readiness",
        "Job availability",
        "Cultural concerns",
        "Family concerns",
        "Not sure"
      ]
    },
    {
      id: "familiarity",
      question: "How familiar are you with Saudi Arabia?",
      helper: "",
      progressLabel: "Background",
      options: [
        "Very familiar",
        "Somewhat familiar",
        "Not familiar",
        "No knowledge"
      ]
    },
    {
      id: "goal",
      question: "What is your long-term goal?",
      helper: "",
      progressLabel: "Your Goals",
      options: [
        "Build a high-paying career",
        "Start or grow a business",
        "Invest for long-term stability",
        "Obtain long-term residency",
        "Improve family lifestyle",
        "Not sure"
      ]
    },
    {
      id: "skillsInDemand",
      question: "Do you have skills in high-demand sectors?",
      helper: "",
      progressLabel: "Your Profile",
      options: ["Yes", "No", "Not sure"]
    },
    {
      id: "internationalExperience",
      question: "Do you have international work experience?",
      helper: "",
      progressLabel: "Your Experience",
      options: ["Yes", "No"]
    }
  ];

  const calculateResult = () => {
    const industry = answers.industry;
    const jobLevel = answers.jobLevel;
    const income = answers.income;
    const experience = answers.experience;
    const investmentCapacity = answers.investmentCapacity || "Under 100,000"; // Default if skipped
    const motivation = answers.motivation;
    const goal = answers.goal;
    const businessOwnership = answers.businessOwnership;
    const investmentWillingness = answers.investmentWillingness;

    const priorityIndustries = [
      "Artificial Intelligence",
      "Machine Learning",
      "Big Data & Analytics",
      "Cloud Computing",
      "Cybersecurity",
      "Software Engineering",
      "IoT",
      "Advanced Computing",
      "Medical Specialist",
      "Healthcare / Biotech",
      "Space & Aviation",
      "Energy",
      "FinTech"
    ];

    const innovationSectors = [
      "Artificial Intelligence",
      "Machine Learning",
      "Big Data & Analytics",
      "Cloud Computing",
      "Cybersecurity",
      "Software Engineering",
      "IoT",
      "Advanced Computing",
      "Space & Aviation",
      "Energy",
      "Materials & Production",
      "Environment / Water / Agriculture",
      "FinTech",
      "Logistics & Transport",
      "Advanced Manufacturing",
      "Defense / Aerospace"
    ];

    // Priority 1: Investor Residency
    if (investmentCapacity === "7,000,000+") {
      return "investor";
    }

    // Priority 2: Real Estate Residency
    if (
      investmentCapacity === "4,000,000–7,000,000" &&
      (motivation === "Long-term residency" || motivation === "Real estate investment" || motivation === "Safer lifestyle / family")
    ) {
      return "real_estate";
    }

    // Priority 3: Financial Premium Residency
    if (
      investmentCapacity === "1,000,000–4,000,000" &&
      (goal === "Obtain long-term residency" || goal === "Invest for long-term stability")
    ) {
      return "financial";
    }

    // Priority 4: Entrepreneur Residency
    if (
      (businessOwnership === "Yes" || investmentWillingness === "Yes") &&
      innovationSectors.includes(industry) &&
      investmentCapacity !== "4,000,000–7,000,000" &&
      investmentCapacity !== "7,000,000+"
    ) {
      return "entrepreneur";
    }

    // Priority 5: Special Talent Track
    if (
      priorityIndustries.includes(industry) &&
      (jobLevel === "Senior" || jobLevel === "Manager" || jobLevel === "Director / VP / C-Suite") &&
      income === "$112,000+" &&
      (experience === "3–5 years" || experience === "5–10 years" || experience === "10+ years")
    ) {
      return "special_talent";
    }

    // Priority 6: Professional Track
    if (
      priorityIndustries.includes(industry) &&
      (income === "$60,000–112,000" || income === "$112,000+") &&
      (experience === "3–5 years" || experience === "5–10 years" || experience === "10+ years")
    ) {
      return "professional";
    }

    // Fallback
    return "explore";
  };

  const getShortSummary = (outcomeKey: string) => {
    const summaries: Record<string, any> = {
      special_talent: {
        title: "Work Visa → Fast-Track Premium Residency (Special Talent Track)",
        description: "Based on your answers, you appear well-positioned for Saudi Arabia's Special Talent Residency pathway, which begins with a work visa and can transition into long-term residency after you arrive.",
        whyPoints: [
          "Your seniority and experience align with priority hiring profiles in Saudi's transformation sectors.",
          "Your industry is part of the national high-demand categories targeted for skilled recruitment.",
          "Your income and role level are similar to candidates who later qualify for Special Talent residency."
        ],
        reportIncludes: [
          "How the work visa → residency progression works",
          "Typical employer expectations in your sector",
          "General salary ranges in priority industries",
          "Criteria used for Special Talent residency",
          "A simple step-by-step outline from job offer to PR",
          "Common mistakes to avoid during applications"
        ]
      },
      professional: {
        title: "Work Visa → Professional Track (Residency Later)",
        description: "Based on your answers, you are well-positioned for a professional work visa in Saudi Arabia, with the opportunity to explore residency options after establishing your career in the Kingdom.",
        whyPoints: [
          "Your industry aligns with Saudi's priority recruitment sectors.",
          "Your experience and job level correspond with typical employer-sponsored roles.",
          "Your income bracket signals strong employability in the Saudi market."
        ],
        reportIncludes: [
          "Clear explanation of the work visa process",
          "Typical employer requirements in your sector",
          "General salary ranges for comparable roles",
          "How professionals later move into residency pathways",
          "A step-by-step outline of the job offer → visa → relocation journey",
          "Common application pitfalls to avoid"
        ]
      },
      entrepreneur: {
        title: "Entrepreneur Residency (Startup/Innovation Route)",
        description: "Your profile suggests you may be a strong fit for Saudi Arabia's Entrepreneur Residency, designed for founders and innovators contributing to the Kingdom's startup ecosystem.",
        whyPoints: [
          "You indicated business ownership or interest in building a venture.",
          "Your industry aligns with Saudi's innovation and digital economy sectors.",
          "Your long-term goals match the entrepreneurial track."
        ],
        reportIncludes: [
          "Overview of the Entrepreneur Residency structure",
          "How capital-raising works for founders in Saudi Arabia",
          "The role of Saudi-licensed venture capital firms",
          "High-level eligibility and documentation expectations",
          "Typical timelines and considerations for founders"
        ]
      },
      investor: {
        title: "Premium Investor Residency (7M+ SAR Investment Route)",
        description: "Based on your answers, you may qualify for the Premium Investor Residency, Saudi Arabia's fastest pathway to long-term residency for high-net-worth individuals.",
        whyPoints: [
          "Your indicated investment capacity meets or exceeds the 7M SAR threshold.",
          "You expressed interest in long-term stability or investment-led relocation.",
          "This pathway is designed specifically for substantial investors."
        ],
        reportIncludes: [
          "Overview of the Premium Investor Residency",
          "High-level eligibility and investment categories",
          "Required documentation",
          "What the process typically looks like",
          "Benefits and limitations of this residency route"
        ]
      },
      real_estate: {
        title: "Real Estate Premium Residency",
        description: "Your profile suggests you may qualify for Saudi Arabia's Real Estate Premium Residency, designed for individuals purchasing qualifying property as a pathway to long-term residency.",
        whyPoints: [
          "Your investment capacity aligns with the 4M SAR property requirement.",
          "Your goals indicate interest in long-term stability and residency.",
          "This route is ideal for individuals or families seeking security via property ownership."
        ],
        reportIncludes: [
          "Real Estate Residency requirements",
          "Property eligibility criteria",
          "Purchase → residency timeline",
          "Considerations when buying property in Saudi Arabia",
          "Benefits and limitations of the program"
        ]
      },
      financial: {
        title: "Financial Premium Residency",
        description: "Based on your answers, you may qualify for one of Saudi Arabia's Financial Premium Residency options, a straightforward investment-based route for long-term living.",
        whyPoints: [
          "Your available capital suggests potential eligibility for annual or lifetime residency options.",
          "Your long-term goals emphasise stability or lifestyle improvement.",
          "This pathway does not require employment or entrepreneurship."
        ],
        reportIncludes: [
          "Overview of current financial residency options (annual vs lifetime programs)",
          "General cost structures and eligibility",
          "Required documentation",
          "Benefits and limitations of the residency",
          "What this pathway typically looks like for professionals"
        ]
      },
      explore: {
        title: "Explore More Before Relocating",
        description: "Your answers suggest you may not yet meet the common thresholds for Saudi work visas or residency programs — but you may still have a future pathway with the right preparation.",
        whyPoints: [
          "Your experience, role level, or income may fall below typical employer requirements.",
          "Your industry may not align with priority hiring categories.",
          "You may need more clarity on your long-term goals before choosing a pathway."
        ],
        reportIncludes: [
          "Overview of Saudi's main work and residency pathways",
          "Steps to improve future eligibility",
          "Industries and skills in highest demand",
          "General salary ranges for comparison",
          "How to build a roadmap toward long-term relocation"
        ]
      }
    };

    return summaries[outcomeKey];
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);
    
    // Special logic: Skip investment capacity question if user says NO to investment willingness
    if (questions[currentQuestion].id === "investmentWillingness" && answer === "No") {
      setShowSkipMessage(true);
      // Show helper message briefly, then skip to next relevant question
      setTimeout(() => {
        setShowSkipMessage(false);
        // Skip investmentCapacity question (next question) and go to motivation
        if (currentQuestion + 2 < questions.length) {
          setCurrentQuestion(currentQuestion + 2);
        } else {
          const finalResult = calculateResult();
          setResult(finalResult);
          setShowSummary(true);
        }
      }, 1500); // Brief pause to show helper message
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalResult = calculateResult();
      setResult(finalResult);
      trackEvent('quiz_completed', { outcome: finalResult });
      setShowSummary(true);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);

    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('saudi_quiz_leads')
        .insert([
          {
            email: email,
            outcome: result,
            answers: answers
          }
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
      }

      // Map outcome to PDF path
      const REPORT_MAP: Record<string, string> = {
        special_talent: "/reports/special_talent.pdf",
        professional: "/reports/professional.pdf",
        entrepreneur: "/reports/entrepreneur.pdf",
        investor: "/reports/investor.pdf",
        real_estate: "/reports/real_estate.pdf",
        financial: "/reports/financial.pdf",
        explore: "/reports/explore.pdf",
      };

      const pdfPath = REPORT_MAP[result] || "/reports/explore.pdf";
      setPdfUrl(pdfPath);
      trackEvent('quiz_email_submitted', { outcome: result });

    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Link href="/saudi" className="text-blue-600 dark:text-blue-400 hover:underline mb-12 inline-block font-medium">
            ← Back to Saudi Page
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Saudi Relocation Eligibility Assessment
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8 font-medium">
              Identify your most suitable pathway to working or living in Saudi Arabia — in under 3 minutes.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              Saudi Arabia is opening its doors to global talent across technology, finance, engineering, healthcare, and high-impact industries. 
              This short, structured assessment evaluates your professional background, seniority, sector, experience, and goals to identify which relocation pathway aligns most closely with your profile — 
              including work visas, Special Talent residency, entrepreneurship, investment, and premium residency options.
            </p>

            <button
              onClick={() => {
                setStarted(true);
                trackEvent('quiz_started');
              }}
              className="bg-blue-600 text-white px-10 py-5 rounded-full hover:bg-blue-700 transition-all font-bold text-xl shadow-lg hover:shadow-xl mb-4"
            >
              Start the Assessment →
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-500">
              No email required until results. Free, private, and based solely on public eligibility criteria.
            </p>
          </div>

          {/* Why Take This Quiz - 3 Cards */}
          <div className="mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
              Why Take This Assessment?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Personalised Path Recommendation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Your responses are analysed to determine which Saudi relocation route best matches your background, goals, and experience.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Clear, Actionable Guidance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Each pathway includes structured insights on eligibility, steps, timelines, and common pitfalls — allowing you to plan with confidence.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Designed for Global Professionals
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Built specifically for skilled professionals exploring the opportunities emerging across Saudi Arabia's rapidly growing digital, tech, and economic sectors.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works - 3 Steps */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Answer a few short questions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    About your industry, role seniority, experience, financial capacity, and relocation goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Get your recommended pathway
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    See your result instantly on screen, with a clear explanation of why it fits your profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Download your personalised blueprint
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Access a professionally designed PDF outlining eligibility, next steps, and considerations for your recommended path.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credibility Footer */}
          <div className="max-w-3xl mx-auto text-center border-t border-gray-200 dark:border-gray-700 pt-12">
            <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
              This tool is based on publicly available information from official Saudi Premium Residency and visa programs.
              It is not legal or immigration advice. Always verify eligibility through official channels.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  if (pdfUrl) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Your Report is Ready!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Download your personalized Saudi Relocation Blueprint below.
          </p>

            <a
            href={pdfUrl}
            download="Saudi-Relocation-Blueprint.pdf"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium text-lg shadow-md hover:shadow-lg mb-8"
          >
            Download PDF Report
          </a>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Want more insights on relocating to Saudi Arabia?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/saudi" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Visit Saudi Page →
              </Link>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Contact Me →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showSummary) {
    const summary = getShortSummary(result);
    
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="text-6xl mb-6 text-center">✅</div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Best Path: {summary.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {summary.description}
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Why this pathway fits you:
              </h3>
              <ul className="space-y-2">
                {summary.whyPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Your full report includes:
              </h3>
              <ul className="space-y-2">
                {summary.reportIncludes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-8">
              (Curated public information — not legal or immigration advice.)
            </p>
          </div>

          <div className="border-2 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              Get Your Personalised Saudi Relocation Blueprint
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              Enter your email to receive your full report with detailed next steps, requirements, and your complete pathway.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              
              <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                <input type="checkbox" required className="mt-1" />
                <span>I agree to receive my personalized report and occasional updates about Saudi relocation. <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></span>
              </label>

              <button
                type="submit"
                disabled={generating}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-blue-700 transition-all font-medium shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {generating ? 'Generating Report...' : 'Get Full Report →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Step {currentQuestion + 1} of 17 · {currentQ.progressLabel}
          </p>
        </div>

        {/* Question */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            {currentQ.question}
          </h2>
          {currentQ.helper && (
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {currentQ.helper}
            </p>
          )}

          {/* Industry Question (Q1) - Grouped Categories */}
          {currentQ.isIndustryQuestion ? (
            <div className="space-y-8">
              {industryCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {category.name}
                    </h3>
                    {category.subtitle && (
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {category.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="text-left px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all font-medium text-gray-900 dark:text-white text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {catIndex < industryCategories.length - 1 && (
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Regular Questions */
            <div className="space-y-3">
              {currentQ.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left px-6 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 transition-all font-medium text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {option}
                </button>
              ))}
              
              {/* Show helper message after NO is selected on investment question */}
              {showSkipMessage && currentQ.id === "investmentWillingness" && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    💡 No problem — this won't affect your eligibility for work-visa or Special Talent pathways.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Back Button */}
        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Previous Question
          </button>
        )}
      </div>
    </div>
  );
}