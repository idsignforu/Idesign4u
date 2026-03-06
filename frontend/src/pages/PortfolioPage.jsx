import { motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fitness Studio Website",
    description: "A modern, energetic website for a premium fitness studio featuring class schedules, trainer profiles, and membership options.",
    category: "Fitness & Health",
    url: "https://femme-strength-club.preview.emergentagent.com/",
    desktopPreview: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    mobilePreview: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=700&fit=crop",
  },
  {
    id: 2,
    title: "Event Organising Services",
    description: "Elegant website for a luxury event planning company showcasing their portfolio of high-end celebrations and corporate events.",
    category: "Events & Services",
    url: "https://luxury-celebrations-2.preview.emergentagent.com/",
    desktopPreview: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=500&fit=crop",
    mobilePreview: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=700&fit=crop",
  },
  {
    id: 3,
    title: "Real Estate Website",
    description: "Feature-rich real estate platform with property listings, EMI calculator, and advanced search functionality for approved plots.",
    category: "Real Estate",
    url: "https://approved-plots-hyd.preview.emergentagent.com/",
    desktopPreview: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    mobilePreview: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=700&fit=crop",
  },
  {
    id: 4,
    title: "Car Detailing Services",
    description: "Sleek and professional website for premium car detailing services with booking system and service packages showcase.",
    category: "Automotive",
    url: "https://shine-elite.preview.emergentagent.com/",
    desktopPreview: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=500&fit=crop",
    mobilePreview: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=700&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PortfolioPage() {
  return (
    <div className="pt-40 pb-24" data-testid="portfolio-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4">
            Portfolio
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Explore our latest projects. Each website is crafted with attention to detail, 
            performance optimization, and stunning design.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
              data-testid={`portfolio-item-${project.id}`}
            >
              {/* Device Mockups */}
              <div className="flex-1 relative">
                <div className="flex items-end justify-center gap-4 relative">
                  {/* Laptop Mockup */}
                  <div className="device-laptop w-full max-w-md relative z-10">
                    <div className="bg-[#1a1a2e] rounded-lg overflow-hidden">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#16213e]">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={project.desktopPreview}
                          alt={`${project.title} Desktop Preview`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2">
                      <Monitor className="w-3 h-3" />
                      Desktop View
                    </div>
                  </div>

                  {/* Phone Mockup */}
                  <div className="device-phone w-24 sm:w-28 absolute -right-4 sm:right-0 lg:right-8 bottom-8 z-20">
                    <div className="aspect-[9/19] overflow-hidden rounded-xl bg-[#1a1a2e]">
                      <img
                        src={project.mobilePreview}
                        alt={`${project.title} Mobile Preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-2">
                      <Smartphone className="w-3 h-3" />
                      Mobile
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 max-w-lg">
                <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon inline-flex items-center gap-2"
                  data-testid={`portfolio-live-preview-${project.id}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Preview
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center glass-card p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's create something amazing together. Start your project today and 
            join our portfolio of successful businesses.
          </p>
          <a
            href="/#contact"
            className="btn-neon inline-flex items-center gap-2"
            data-testid="portfolio-cta"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
}
