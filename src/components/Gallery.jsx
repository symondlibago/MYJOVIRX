import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Prevent background scroll when modal is open to keep the blur consistent
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImage]);

  const categories = ["All", "IV Therapy", "Recovery", "Boosters", "The Space", "Team"];

  // A look inside the MyJoviRX wellness lounge
  const galleryImages = [
    { id: 1, src: "/iv-therapy.jpg", category: "IV Therapy", title: "Replenish Drip", size: "large" },
    { id: 2, src: "/hero-2.jpg", category: "IV Therapy", title: "In Good Hands", size: "small" },
    { id: 3, src: "/treatment-2.jpg", category: "IV Therapy", title: "The Placement", size: "medium" },
    { id: 4, src: "/hero-1.jpg", category: "The Space", title: "The Lounge", size: "small" },
    { id: 5, src: "/treatment-5.jpg", category: "Recovery", title: "Unplug & Recharge", size: "large" },
    { id: 6, src: "/treatment-6.jpg", category: "Boosters", title: "Targeted Injection", size: "medium" },
    { id: 7, src: "/treatment-4.jpg", category: "Boosters", title: "Pharmacy-Grade", size: "small" },
    { id: 8, src: "/hero-3.jpg", category: "Recovery", title: "Slow Down", size: "medium" },
    { id: 9, src: "/treatment-3.jpg", category: "Recovery", title: "Feel-Good Hour", size: "small" },
    { id: 10, src: "/clinic-room.jpg", category: "The Space", title: "Consult Suite", size: "large" },
    { id: 11, src: "/treatment-1.jpg", category: "Recovery", title: "At Ease", size: "small" },
    { id: 12, src: "/dr-scott.jpg", category: "Team", title: "Dr. Courtney S. Scott", size: "medium" },
  ];

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F9F7F5] pt-24 md:pt-32 pb-24 relative">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 md:mb-20 text-center">
        <FadeIn>
          <p className="text-[#B48A8E] text-[10px] tracking-[0.5em] uppercase mb-4">The Gallery</p>
          <h1 className="font-serif text-4xl md:text-8xl text-[#1a1a1a] mb-6 leading-tight">
            Calm <span className="italic font-light text-[#B48A8E]">&</span> Care
          </h1>
          <p className="text-[#3D2B1F]/60 max-w-2xl mx-auto text-base md:text-lg">
            A look inside our lounge, treatments, and the team behind them.
          </p>
        </FadeIn>

        {/* Filter Bar */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-3 mt-10 pb-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`shrink-0 px-6 py-2 text-[9px] tracking-[0.2em] uppercase transition-all duration-500 rounded-full border cursor-pointer ${
                activeFilter === category ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#1a1a1a] border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-1600px mx-auto px-4 md:px-12">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-8 space-y-4 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => setSelectedImage(image)}
                  className="group relative cursor-pointer overflow-hidden bg-white shadow-sm"
                >
                  <div className={`relative w-full ${
                    image.size === "large" ? "aspect-2/3" : image.size === "medium" ? "aspect-square" : "aspect-4/3"
                  }`}>
                    <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <h3 className="font-serif text-xl text-white">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Blurred Overlay Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 bg-white/40 backdrop-blur-md flex items-center justify-center p-4 md:p-12 overflow-y-auto cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-3/5 shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain bg-white/20"
                />
              </div>

              <div className="w-full md:w-2/5 text-center md:text-left">
                <p className="text-[#000000] text-[10px] tracking-[0.5em] uppercase mb-4">{selectedImage.category}</p>
                <h3 className="font-serif text-4xl md:text-6xl text-[#1a1a1a] mb-6">{selectedImage.title}</h3>
                <p className="text-[#3D2B1F]/70 leading-relaxed mb-8 text-sm md:text-base">
                  Captured inside the MyJoviRX wellness lounge — where modern medicine meets genuine calm.
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-[10px] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-1 hover:text-[#B48A8E] hover:border-[#B48A8E] transition-colors cursor-pointer"
                >
                  Back to Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
