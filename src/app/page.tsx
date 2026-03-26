"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const caseStudiesScrollRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      title: "Custom Website Development",
      description:
        "Modern, fast, and scalable websites built specifically for your business goals and brand identity.",
      iconBg: "bg-[#f3d4df]",
      iconColor: "#ef2b72",
      icon: (
        <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 10.2H25.5V23.8H8.5V10.2Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M8.5 13.8H25.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="15.5" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "UI / UX Design",
      description:
        "Clean, intuitive user interfaces designed to improve user experience and increase engagement.",
      iconBg: "bg-[#f2dcc8]",
      iconColor: "#ff851c",
      icon: (
        <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8.8" y="8.8" width="16.4" height="16.4" rx="2.2" stroke="currentColor" strokeWidth="3.2" />
          <path d="M12.2 14.2H21.8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M12.2 19.8H18.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "E-Commerce Development",
      description:
        "Secure and scalable online stores designed to help businesses sell products seamlessly online.",
      iconBg: "bg-[#cce9e6]",
      iconColor: "#25b8a7",
      icon: (
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 10H24L22.2 20.2H9.2L7 10Z"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path d="M12 10C12 7.8 13.8 6 16 6C18.2 6 20 7.8 20 10" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="11" cy="22.5" r="1.6" fill="currentColor" />
          <circle cx="20.8" cy="22.5" r="1.6" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Web Applications",
      description:
        "Custom web applications built to streamline operations and deliver powerful digital solutions.",
      iconBg: "bg-[#d7d3f2]",
      iconColor: "#6e63f5",
      icon: (
        <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7.6" y="8.8" width="18.8" height="16.6" rx="2.4" stroke="currentColor" strokeWidth="3.2" />
          <path d="M12 14.6L9.6 17L12 19.4" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 14.6L24.4 17L22 19.4" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Website Optimization",
      description:
        "Performance improvements, speed optimization, and technical enhancements for better results.",
      iconBg: "bg-[#f2dcc8]",
      iconColor: "#ff851c",
      icon: (
        <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="3.2" />
          <path d="M17 17L23 12.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="17" cy="17" r="2.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Website Maintenance",
      description:
        "Continuous updates, security monitoring, and technical support to keep your website running smoothly.",
      iconBg: "bg-[#d7d3f2]",
      iconColor: "#6e63f5",
      icon: (
        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 7.5L26 12V22.5L18 27L10 22.5V12L18 7.5Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M18 12.2V17.6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="18" cy="21.5" r="1.6" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "SEO-Ready Development",
      description:
        "Websites built with strong technical SEO foundations to improve visibility on search engines.",
      iconBg: "bg-[#f3d4df]",
      iconColor: "#ef2b72",
      icon: (
        <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="7.4" stroke="currentColor" strokeWidth="3.2" />
          <path d="M21 21L26 26" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M12.2 15H17.8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M15 12.2V17.8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];
  const caseStudies = [
    {
      brand: "ARRAN",
      subtitle: "SENSE OF SCOTLAND",
      website: "paradiseyatra.com",
      category: "Travel Company",
      highlight: "A warm, destination-led site that makes trip discovery and inquiries simple.",
      url: "https://paradiseyatra.com",
      image: "/Home/Our%20Work/Paradise%20Yatra.jpg",
      tone: "lavender",
    },
    {
      brand: "affordablegolf",
      subtitle: "",
      website: "voyatrail.com",
      category: "Travel Company",
      highlight: "Itinerary-focused layout with clear navigation and fast booking paths.",
      url: "https://voyatrail.com",
      image: "/Home/Our%20Work/Voya%20Trail.jpg",
      tone: "sand",
    },
    {
      brand: "spaceist",
      subtitle: "",
      website: "suite.rangrove.com",
      category: "Tech SaaS Company",
      highlight: "Product-first SaaS site with crisp messaging and conversion-ready sections.",
      url: "https://suite.rangrove.com",
      image: "/Home/Our%20Work/Rangrove%20Suite.jpg",
      tone: "mint",
    },
    {
      brand: "ARRAN",
      subtitle: "SENSE OF SCOTLAND",
      website: "tech.paradiseyatra.com",
      category: "CRM Software",
      highlight: "Feature-driven CRM pages with strong hierarchy and product clarity.",
      url: "https://tech.paradiseyatra.com",
      image: "/Home/Our%20Work/Tech%20Paradise%20Yatra.jpg",
      tone: "lavender",
    },
    {
      brand: "Rangrove News",
      subtitle: "",
      website: "news.rangrove.com",
      category: "News Company",
      highlight: "Editorial layout built for readability, speed, and topic discovery.",
      url: "https://news.rangrove.com",
      image: "/Home/Our%20Work/Rangrove%20News.jpg",
      tone: "sand",
    },
    {
      brand: "Rangrove School",
      subtitle: "",
      website: "yashvardhanchauhan01.wixstudio.com/school",
      category: "School Website",
      highlight: "A clean, welcoming school site with clear programs and admissions flow.",
      url: "https://yashvardhanchauhan01.wixstudio.com/school",
      image: "/Home/Our%20Work/School%20Website.jpg",
      tone: "mint",
    },
    {
      brand: "DHG Consultancy",
      subtitle: "",
      website: "dhgconsultancy.com",
      category: "Hospitality Company",
      highlight: "Hospitality recruitment site focused on placing talent in foreign countries.",
      url: "https://dhgconsultancy.com",
      image: "/Home/Our%20Work/Dhg%20Consultancy.jpg",
      tone: "sand",
    },
  ];
  const expectations = [
    {
      title: "Strong Digital Presence",
      description:
        "We build websites that strengthen your brand and create a powerful first impression online.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2.6" />
          <path d="M5.5 14H22.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M14 5.2C16.7 8.2 16.7 19.8 14 22.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M14 5.2C11.3 8.2 11.3 19.8 14 22.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Business Growth",
      description:
        "Our websites are designed not just to look good but to support real business growth and lead generation.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 18L10 13L14 16L21 9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.8 9H21V12.2" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 9.5L9 10.5L10.2 8.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.8 12.2L5.7 13.1L7 11.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Expert Development",
      description:
        "Every project is built using modern technologies, clean code, and scalable architecture.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 10.2L5.2 14L8.5 17.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 10.2L22.8 14L19.5 17.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.2 20.2L15.8 7.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Dedicated Partnership",
      description:
        "We work closely with our clients, understanding their goals and delivering solutions that truly support their business.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.8 16.2L9.5 11.5C10.6 10.4 12.4 10.4 13.5 11.5L16.2 14.2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.2 16.2L18.5 11.5C17.4 10.4 15.6 10.4 14.5 11.5L11.8 14.2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.2 18.8L12.4 22C13.3 22.9 14.7 22.9 15.6 22L18.8 18.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Performance Focused",
      description:
        "Fast loading speeds, smooth user experience, and optimized performance come standard with every website we build.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18.2C6 12.8 9.9 9 14.5 9C19.1 9 23 12.8 23 18.2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M14.5 18.2L19.2 13.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="14.5" cy="18.2" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Built For Results",
      description:
        "Our focus is simple — build websites that attract users, engage visitors, and convert them into customers.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="8.6" stroke="currentColor" strokeWidth="2.6" />
          <circle cx="14" cy="14" r="4.6" stroke="currentColor" strokeWidth="2.6" />
          <circle cx="14" cy="14" r="1.8" fill="currentColor" />
        </svg>
      ),
    },
  ];
  const workTogetherOptions = [
    {
      number: "01",
      title: "Website Audit & Strategy",
      description:
        "We analyze your current website, performance, and user experience to identify improvements and opportunities for growth.",
      ribbonBg: "#d8d4fb",
      ribbonText: "#6d63f5",
    },
    {
      number: "02",
      title: "Ongoing Website Support",
      description:
        "Continuous updates, improvements, security monitoring, and technical support to keep your website performing at its best.",
      ribbonBg: "#f6cfdd",
      ribbonText: "#ef4d7f",
    },
    {
      number: "03",
      title: "Website Redesign",
      description:
        "Transform your existing website with modern design, improved performance, and better user experience.",
      ribbonBg: "#f3dcc5",
      ribbonText: "#ff8c23",
    },
    {
      number: "04",
      title: "Custom Website Development",
      description:
        "We design and develop a complete website tailored to your brand, business goals, and technical requirements.",
      ribbonBg: "#c7ece7",
      ribbonText: "#1fb7ab",
    },
  ];
  const testimonials = [
    {
      quote:
        "Rangrove Media delivered a site that feels premium and loads fast. The structure and polish made an immediate impact on leads.",
      name: "Aarav Singh",
      role: "Founder, Paradise Yatra",
    },
    {
      quote:
        "Clear storytelling, fast performance, and a clean UI. Our team can update content without friction.",
      name: "Neha Kapoor",
      role: "Marketing Lead, Rangrove News",
    },
    {
      quote:
        "The new website is sharp, responsive, and aligned with our product narrative. It converts better than our old site.",
      name: "Rohan Mehta",
      role: "Product Lead, Rangrove Suite",
    },
  ];
  const whyChooseUsImage = "/Home/Why Choose Us/Image.webp";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const handleCaseStudiesScroll = (direction: "prev" | "next") => {
    const container = caseStudiesScrollRef.current;
    if (!container) {
      return;
    }

    const scrollAmount = 360;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const headerOffset = 110;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(sectionTop - headerOffset, 0),
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!firstName || !email) {
      setFormStatus("error");
      setFormMessage("Please fill in the required fields (First name and Email).");
      return;
    }

    try {
      setFormStatus("sending");
      setFormMessage("");
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setFormStatus("success");
      setFormMessage("Thanks! Your message has been sent. We'll get back within 24 hours.");
      form.reset();
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <main className="min-h-screen">
      <section className="relative flex flex-col overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{ backgroundImage: "url('/Home/Hero/Background Mobile.webp')" }}
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat sm:block"
          style={{ backgroundImage: "url('/Home/Hero/Background.webp')" }}
        />

        <div className="fixed inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 sm:pt-5">
          <nav
            className={`mx-auto flex w-full max-w-5xl items-center justify-between rounded-[14px] px-4 py-2.5 transition-all duration-300 sm:px-6 sm:py-3 ${
              isScrolled || isMenuOpen
                ? "border border-white/20 bg-[#09043c] shadow-[0_18px_40px_-28px_rgba(0,0,0,0.7)]"
                : "border border-transparent bg-transparent"
            }`}
          >
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative h-[24px] w-[114px] cursor-pointer rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09043c] sm:h-[30px] sm:w-[143px]"
              aria-label="Back to top"
            >
              <Image
                src="/Brand/Logo.png"
                alt="Rangrove Media"
                fill
                priority
                className="object-contain object-left transition-transform group-hover:scale-[1.02]"
              />
            </button>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className={`relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-[14px] border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09043c] md:hidden ${
                isScrolled || isMenuOpen
                  ? "border-white/12 bg-white/8 backdrop-blur-sm"
                  : "border-white/10 bg-transparent"
              }`}
            >
              <span className="sr-only">Toggle menu</span>
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                    isMenuOpen ? "top-[7px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] rounded-full bg-white transition-all duration-300 ${
                    isMenuOpen ? "w-0 opacity-0" : "w-5 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                    isMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                  }`}
                />
              </span>
            </button>

            <div className="hidden items-center space-x-5 text-[13px] font-medium text-gray-300 md:flex">
              <button
                type="button"
                onClick={() => handleNavClick("what-we-do")}
                className="cursor-pointer rounded-[8px] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09043c]"
              >
                What we do
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("our-work")}
                className="cursor-pointer rounded-[8px] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09043c]"
              >
                Our Work
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("why-work-with-us")}
                className="cursor-pointer rounded-[8px] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09043c]"
              >
                Why work with us
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("contact-us")}
                className="cursor-pointer rounded-[8px] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09043c]"
              >
                Contact Us
              </button>
            </div>
          </nav>

          <div
            className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
              isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-5xl px-0 pb-4">
              <div className="rounded-[14px] border border-white/10 bg-[#09043c] p-3 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.75)]">
                <button
                  type="button"
                  onClick={() => handleNavClick("what-we-do")}
                  className="block w-full cursor-pointer rounded-[10px] px-4 py-3 text-left text-sm font-medium text-white/85 transition-all duration-200 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  What we do
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick("our-work")}
                  className="block w-full cursor-pointer rounded-[10px] px-4 py-3 text-left text-sm font-medium text-white/85 transition-all duration-200 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Our Work
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick("why-work-with-us")}
                  className="block w-full cursor-pointer rounded-[10px] px-4 py-3 text-left text-sm font-medium text-white/85 transition-all duration-200 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Why work with us
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick("contact-us")}
                  className="block w-full cursor-pointer rounded-[10px] px-4 py-3 text-left text-sm font-medium text-white/85 transition-all duration-200 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[64px] shrink-0 sm:h-[86px]" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 px-4 pt-4 sm:px-6 sm:pt-6 lg:grid-cols-2">
          <div className="relative z-20 mx-auto max-w-xl pb-10 text-center sm:pb-[56px] lg:mx-0 lg:pb-12 lg:text-left">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e91d62] sm:mb-4 sm:text-[11px] sm:tracking-[0.2em]">
              Welcome To Rangrove Media
            </p>

            <h1 className="mb-5 text-[42px] leading-[1.05] font-extrabold tracking-tight text-white sm:mb-6 sm:text-[52px] md:text-[64px]">
            Engineered For The Web
            </h1>

            <p className="mx-auto mb-5 max-w-[420px] text-[15px] leading-[1.65] text-gray-400 sm:mb-10 sm:text-[16px] lg:mx-0">
            We build powerful, high-performance websites engineered to drive growth and deliver real results.
            </p>

            <button
              type="button"
              onClick={() => handleNavClick("contact-us")}
              className="w-auto cursor-pointer rounded-full bg-[#e91d62] px-4 py-2.5 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-[#d41555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Get a free proposal
            </button>
          </div>

          <div className="relative mt-0 flex h-[340px] w-full self-end items-end justify-center overflow-visible sm:mt-4 sm:h-[400px] lg:mt-0 lg:h-[560px] lg:justify-end">
            <Image
              src="/Home/Hero/Woman Image Cropped v2.webp"
              alt="Rangrove Media website expert"
              width={786}
              height={563}
              priority
              className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom sm:left-auto sm:right-0 sm:translate-x-0"
            />
          </div>
        </div>
      </section>

      <section id="what-we-do" className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#ef5b8f] sm:mb-5">
            What We&apos;re Good At
          </p>
          <h2 className="max-w-[700px] text-[30px] leading-[1.14] font-extrabold tracking-[-0.03em] text-[#2b1179] sm:text-[36px]">
            Growing businesses since # years using the best PPC tools and expert knowledge.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-y-12">
            {services.map((service) => (
              <article key={service.title} className="max-w-[240px]">
                <div
                  className={`flex h-[56px] w-[56px] items-center justify-center rounded-[16px] ${service.iconBg} sm:h-[68px] sm:w-[68px] sm:rounded-[18px]`}
                  style={{ color: service.iconColor }}
                >
                  {service.icon}
                </div>
                <h3 className="mt-4 text-[16px] leading-[1.2] font-bold tracking-[-0.03em] text-[#2b1179] sm:mt-5 sm:text-[22px]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.5] text-[#8f82bf] sm:mt-3 sm:text-[16px]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-work" className="overflow-hidden bg-[#f5f5f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.22em] text-[#ef5b8f] sm:mb-4">
                Succes Stories
              </p>
              <h2 className="max-w-none text-[30px] leading-[1.14] font-extrabold tracking-[-0.03em] text-[#2b1179] sm:text-[36px]">
                How we&apos;ve helped others grow
              </h2>
            </div>

            <div className="hidden items-center gap-6 pt-6 md:flex">
              <button
                type="button"
                aria-label="Previous case study"
                onClick={() => handleCaseStudiesScroll("prev")}
                className="cursor-pointer rounded-full text-[#ef5b8f] transition-transform duration-200 hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef5b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7]"
              >
                <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 10H3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M10 18L2 10L10 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next case study"
                onClick={() => handleCaseStudiesScroll("next")}
                className="cursor-pointer rounded-full text-[#ef5b8f] transition-transform duration-200 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef5b8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7]"
              >
                <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10H31" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M24 2L32 10L24 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={caseStudiesScrollRef}
            className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-x-auto pb-3 sm:mt-12 [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex min-w-max gap-5 px-4 sm:px-6 lg:pl-[calc((100vw-64rem)/2+1.5rem)] lg:pr-12">
              {caseStudies.map((study, index) => (
                <article
                  key={`${study.brand}-${index}`}
                  className="flex h-[456px] w-[320px] flex-col overflow-hidden rounded-[14px] border border-[#e4dff0] bg-white"
                >
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative h-[198px] overflow-hidden rounded-t-[14px] bg-[#f4f3f8] transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3fa3] focus-visible:ring-inset"
                    aria-label={`Open ${study.website}`}
                  >
                    <Image
                      src={study.image}
                      alt={`Website preview of ${study.website}`}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </a>

                  <div className="flex flex-1 flex-col bg-white px-8 py-6">
                    <div>
                      <p className="mt-2 text-[18px] leading-[1.2] font-bold text-[#2b1179]">{study.website}</p>
                      <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5a3fa3]">
                        {study.category}
                      </p>
                    </div>

                    <p className="mt-4 max-w-[228px] flex-1 text-[14px] leading-[1.6] text-[#8f82bf]">
                      {study.highlight}
                    </p>

                    <a
                      href={study.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 flex h-[44px] w-full cursor-pointer items-center justify-center rounded-[9px] border border-[#e2ddef] text-[15px] font-bold text-[#5a3fa3] transition-colors duration-200 hover:bg-[#f8f6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5a3fa3] focus-visible:ring-offset-2"
                    >
                      View website
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-work-with-us" className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mx-auto max-w-[620px] text-center text-[30px] leading-[1.08] font-extrabold tracking-[-0.03em] text-[#2b1179] sm:text-[36px]">
            What you can expect when working together with us.
          </h2>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {expectations.map((item) => (
              <article key={item.title} className="min-h-[220px] rounded-[14px] bg-[#f0f0f6] px-4 py-5 sm:min-h-[238px] sm:px-7 sm:py-6">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#f4cdda] text-[#ef2b72] sm:h-[62px] sm:w-[62px] sm:rounded-[16px]">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-[16px] leading-[1.18] font-extrabold tracking-[-0.03em] text-[#2b1179] sm:mt-6 sm:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[270px] text-[12px] leading-[1.45] text-[#8f82bf] sm:mt-3 sm:text-[14px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 text-white sm:py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{ backgroundImage: "url('/Home/Why Choose Us/Background Mobile.webp')" }}
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat sm:block"
          style={{ backgroundImage: "url('/Home/Why Choose Us/Background.webp')" }}
        />
        <div className="pointer-events-none absolute right-0 top-1/2 hidden aspect-[1280/714] w-[58vw] max-w-[980px] -translate-y-1/2 lg:block">
          <Image
            src={whyChooseUsImage}
            alt="Analytics dashboard preview"
            fill
            className="object-contain object-right"
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-full pt-4 sm:max-w-[340px] sm:pt-6 lg:pt-0">
            <div>
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.28em] text-[#ef2b72]">
                Development Workflow
              </p>
              <h2 className="text-[30px] leading-[1.12] font-extrabold tracking-[-0.03em] text-white sm:text-[36px]">
                Modern development, built for performance
              </h2>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-[1.6] text-[#b9b4d7] sm:mt-5 sm:text-[16px]">
                We build websites using modern technologies, clean architecture, and scalable systems. Every project
                follows a structured development workflow to ensure speed, reliability, and long-term performance.
              </p>
            </div>

            <div className="mt-12 sm:mt-20">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.28em] text-[#ef2b72]">
                Performance &amp; Insights
              </p>
              <h3 className="text-[30px] leading-[1.12] font-extrabold tracking-[-0.03em] text-white sm:text-[36px]">
                Websites that deliver real results
              </h3>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-[1.6] text-[#b9b4d7] sm:mt-5 sm:text-[16px]">
                From fast loading speeds to optimized user experience, every website we create is built to perform. We
                focus on performance, scalability, and usability to help businesses grow online.
              </p>
            </div>
          </div>
          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-[14px] sm:mt-12 sm:aspect-[1280/714] lg:hidden">
            <Image
              src={whyChooseUsImage}
              alt="Analytics dashboard preview"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[470px] lg:justify-self-end">
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.28em] text-[#ef2b72]">
              About Us
            </p>
            <h2 className="max-w-[470px] text-[30px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#2b1179] sm:text-[36px]">
              Building powerful digital experiences for modern businesses
            </h2>
            <p className="mt-8 text-[16px] leading-[1.7] text-[#6d5aa6]">
              At Rangrove Media, we focus on building high-performance websites that combine strong design, modern
              technology, and seamless user experience. Our goal is simple: create digital platforms that help
              businesses grow faster and stand stronger online.
            </p>
            <p className="mt-8 text-[16px] leading-[1.7] text-[#6d5aa6]">
              Every project we build is crafted with precision, performance, and scalability in mind. We believe great
              websites are not just about design, but about delivering real value, real impact, and long-term results for
              businesses.
            </p>
          </div>

          <div className="relative mx-auto h-[520px] w-full max-w-[620px]">
            <div className="absolute left-0 top-0 h-[194px] w-full overflow-hidden rounded-[14px]">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating in a modern workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-0 top-[212px] h-[214px] w-[48%] overflow-hidden rounded-[14px]">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Website planning on a laptop"
                fill
                sizes="(max-width: 1024px) 48vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 top-[212px] h-[390px] w-[48%] overflow-hidden rounded-[14px]">
              <Image
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80"
                alt="Designer working on a digital product"
                fill
                sizes="(max-width: 1024px) 48vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us" className="relative bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-none">
            <h2 className="text-[30px] leading-[1.12] font-extrabold tracking-[-0.04em] text-[#2b1179] sm:text-[36px]">
              Choose how you want
              <br />
              to work with us.
            </h2>
          </div>

          <div className="relative mt-12 sm:mt-14">
            <div className="absolute right-[6%] top-[-56px] hidden text-right lg:block">
              <div className="font-[family:var(--font-caveat)] text-[22px] text-[#3e2493]">Most popular</div>
              <svg
                width="112"
                height="92"
                viewBox="0 0 112 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto mt-1 text-[#2dc9c0]"
              >
                <path
                  d="M71 2C92 6 96 21 87 30C76 41 61 29 62 17C63 3 83 3 92 13C103 26 102 46 94 58C88 67 84 73 84 89"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path d="M79 81L84 89L90 81" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-4 xl:gap-7">
              {workTogetherOptions.map((option) => (
                <article key={option.number} className="rounded-[14px] bg-[#efeff5] px-4 pb-7 pt-0 sm:px-8 sm:pb-9">
                  <div
                    className="relative flex h-[60px] w-[38px] items-center justify-center text-[15px] font-extrabold sm:h-[68px] sm:w-[42px] sm:text-[17px]"
                    style={{
                      backgroundColor: option.ribbonBg,
                      color: option.ribbonText,
                      clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)",
                    }}
                  >
                    {option.number}
                  </div>
                  <h3 className="mt-7 max-w-[180px] text-[16px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#2b1179] sm:mt-10 sm:text-[20px]">
                    {option.title}
                  </h3>
                  <p className="mt-4 max-w-[210px] text-[13px] leading-[1.45] text-[#8f82bf] sm:mt-6 sm:text-[15px] sm:leading-[1.55]">
                    {option.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 sm:mt-24">
            <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-[14px] bg-white lg:grid-cols-[0.92fr_1.08fr]">
              <div
                className="relative overflow-hidden bg-cover bg-center px-7 py-10 text-white sm:px-10 sm:py-12"
                style={{ backgroundImage: "url('/Home/Contact Us/Image.webp')" }}
              >
                <div className="relative z-10">
                  <h3 className="text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em]">Contact Information</h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-white/70">
                    Fill up the form and our team will get back to you within 24 hours.
                  </p>

                  <div className="mt-8 space-y-5 text-[14px] text-white/85">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.5 4.5L9 5.5C9.7 5.6 10.2 6.2 10.1 6.9L9.6 9.6C9.5 10.1 9.7 10.7 10.2 11.1C11.8 12.4 13.4 14 14.8 15.7C15.2 16.2 15.8 16.4 16.4 16.3L19.1 15.8C19.8 15.7 20.4 16.2 20.6 16.9L21.5 20.4C21.7 21.2 21.2 22 20.4 22.1C18.1 22.5 15.8 22.1 13.7 21C9.5 18.9 6 15.5 3.9 11.3C2.8 9.2 2.4 6.9 2.8 4.6C2.9 3.8 3.7 3.3 4.5 3.5L5.5 4.5Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <a href="tel:+919119724096" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                        +91 9119724096
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3 6.5C3 5.7 3.7 5 4.5 5H19.5C20.3 5 21 5.7 21 6.5V17.5C21 18.3 20.3 19 19.5 19H4.5C3.7 19 3 18.3 3 17.5V6.5Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                          <path d="M4 7L12 12L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                      <a
                        href="mailto:contact@media.rangrove.com"
                        className="transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
                      >
                        contact@media.rangrove.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form
                className="grid gap-6 px-7 py-10 sm:grid-cols-[1fr_1fr] sm:px-10 sm:py-12"
                onSubmit={handleContactSubmit}
                noValidate
              >
                <label className="text-[13px] font-medium tracking-[0.02em] text-[#6d5aa6]">
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    aria-required="true"
                    className="mt-2 h-[46px] w-full border-b border-[#e3ddf2] bg-transparent px-0 text-[15px] font-normal text-[#2b1179] placeholder:text-[#b7addb] focus:border-[#5a3fa3] focus:outline-none"
                  />
                </label>
                <label className="text-[13px] font-medium tracking-[0.02em] text-[#6d5aa6]">
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    className="mt-2 h-[46px] w-full border-b border-[#e3ddf2] bg-transparent px-0 text-[15px] font-normal text-[#2b1179] placeholder:text-[#b7addb] focus:border-[#5a3fa3] focus:outline-none"
                  />
                </label>
                <label className="text-[13px] font-medium tracking-[0.02em] text-[#6d5aa6]">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    aria-required="true"
                    className="mt-2 h-[46px] w-full border-b border-[#e3ddf2] bg-transparent px-0 text-[15px] font-normal text-[#2b1179] placeholder:text-[#b7addb] focus:border-[#5a3fa3] focus:outline-none focus-visible:ring-0"
                  />
                </label>
                <label className="text-[13px] font-medium tracking-[0.02em] text-[#6d5aa6]">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    className="mt-2 h-[46px] w-full border-b border-[#e3ddf2] bg-transparent px-0 text-[15px] font-normal text-[#2b1179] placeholder:text-[#b7addb] focus:border-[#5a3fa3] focus:outline-none focus-visible:ring-0"
                  />
                </label>

                <div className="sm:col-span-2">
                  <p className="text-[13px] font-medium tracking-[0.02em] text-[#6d5aa6]">
                    What type of website do you need?
                  </p>
                  <div className="mt-4 flex flex-wrap gap-5 text-[14px] text-[#5a3fa3]">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="service" className="h-4 w-4 accent-[#5a3fa3]" />
                      Web Design
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="service" className="h-4 w-4 accent-[#5a3fa3]" defaultChecked />
                      Web Development
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="service" className="h-4 w-4 accent-[#5a3fa3]" />
                      Logo Design
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="radio" name="service" className="h-4 w-4 accent-[#5a3fa3]" />
                      Other
                    </label>
                  </div>
                </div>

                <label className="sm:col-span-2 text-[13px] font-medium tracking-[0.02em] text-[#6d5aa6]">
                  Message
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Write your message..."
                    className="mt-2 min-h-[72px] w-full resize-none border-b border-[#e3ddf2] bg-transparent px-0 py-1 text-[15px] leading-[1.5] font-normal text-[#2b1179] placeholder:text-[#b7addb] focus:border-[#5a3fa3] focus:outline-none focus-visible:ring-0"
                  />
                </label>

                <div className="sm:col-span-2 flex justify-end">
                  <input name="_formsubmit_id" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-[#ef2b72] px-8 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#db1e63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef2b72] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {formStatus !== "idle" && (
                  <p
                    className={`sm:col-span-2 text-[13px] ${
                      formStatus === "success" ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {formMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#09043c] text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-12 border-b border-white/10 pb-10 sm:pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div className="max-w-[280px]">
              <div className="relative h-[30px] w-[143px]">
                <Image src="/Brand/Logo.png" alt="Rangrove Media" fill className="object-contain object-left" />
              </div>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#b8b2d7]">
                Rangrove Media builds high-performance websites with sharp design, clear messaging, and
                conversion-focused execution.
              </p>
            </div>

            <div>
              <h3 className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-white">Navigation</h3>
              <div className="mt-5 space-y-3 text-[15px] text-[#b8b2d7]">
                <a href="#what-we-do" className="block cursor-pointer transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                  What we do
                </a>
                <a href="#our-work" className="block cursor-pointer transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                  Our work
                </a>
                <a href="#why-work-with-us" className="block cursor-pointer transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                  Why work with us
                </a>
                <a href="#contact-us" className="block cursor-pointer transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                  Contact Us
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-white">Contact</h3>
              <div className="mt-5 space-y-3 text-[15px] text-[#b8b2d7]">
                <a href="mailto:contact@media.rangrove.com" className="block transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                  contact@media.rangrove.com
                </a>
                <a href="tel:+919119724096" className="block transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                  +91 9119724096
                </a>
                <p>India</p>
              </div>
            </div>

            <div>
              <h3 className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-white">Let&apos;s Talk</h3>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#b8b2d7]">
                Tell us about your next website or growth project and we&apos;ll put together a focused proposal.
              </p>
              <a
                href="#contact-us"
                className="mt-6 inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-[#ef2b72] px-5 text-[14px] font-extrabold text-white transition-colors duration-200 hover:bg-[#db1e63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09043c]"
              >
                Get a free proposal
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-[13px] text-[#8b84b3] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Rangrove Media. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="cursor-pointer transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                Privacy Policy
              </a>
              <a href="#" className="cursor-pointer transition-colors hover:text-white focus-visible:outline-none focus-visible:underline">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
