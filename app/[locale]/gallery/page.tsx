"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useTranslations } from 'next-intl';

// Gallery images and video from actual projects
const galleryImages = [
  {
    id: 1,
    src: "/gallery/kitchen-1.jpeg",
    alt: "Modern kitchen installation",
    category: "Modern",
    title: "Modern Kitchen Design"
  },
  {
    id: 2,
    src: "/gallery/kitchen-2.jpeg",
    alt: "Gray aluminum kitchen cabinets",
    category: "Contemporary",
    title: "Gray Aluminum Cabinets"
  },
  {
    id: 3,
    src: "/gallery/kitchen-3.jpeg",
    alt: "Kitchen cabinet installation",
    category: "Modern",
    title: "Custom Cabinet Installation"
  },
  {
    id: 4,
    src: "/gallery/kitchen-4.jpeg",
    alt: "Contemporary kitchen design",
    category: "Contemporary",
    title: "Contemporary Kitchen"
  },
  {
    id: 5,
    src: "/gallery/kitchen-5.jpeg",
    alt: "Modern aluminum cabinets",
    category: "Modern",
    title: "Aluminum Cabinet System"
  },
  {
    id: 6,
    src: "/gallery/kitchen-6.jpeg",
    alt: "Complete kitchen renovation",
    category: "Modern",
    title: "Complete Kitchen Renovation"
  },
];

const galleryVideo = {
  id: 7,
  src: "/gallery/kitchen-video.mp4",
  thumbnail: "/gallery/kitchen-1.jpeg",
  alt: "Kitchen installation walkthrough video",
  category: "Modern",
  title: "Kitchen Walkthrough Video",
  isVideo: true
};

const categories = ["All", "Modern", "Contemporary"];

export default function Gallery() {
  const t = useTranslations('gallery');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | typeof galleryVideo | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Include video in "All" or "Modern" categories
  const allItems = selectedCategory === "All" || selectedCategory === "Modern"
    ? [...filteredImages, galleryVideo]
    : filteredImages;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const translationKey = category === "All Projects" ? "all" : category.toLowerCase();
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {t(`filters.${translationKey}`)}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow bg-white"
              onClick={() => setSelectedImage(item)}
              style={{ height: '300px' }}
            >
              {/* Display actual image or video thumbnail */}
              {'isVideo' in item && item.isVideo ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src="/gallery/kitchen-1.jpeg"
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Video play button overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: 0,
                        height: 0,
                        borderLeft: '16px solid #2563eb',
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        marginLeft: '4px'
                      }}></div>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Display video or image in lightbox */}
              {'isVideo' in selectedImage && selectedImage.isVideo ? (
                <video
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                  src={selectedImage.src}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative w-full max-w-4xl mx-auto">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
              <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
