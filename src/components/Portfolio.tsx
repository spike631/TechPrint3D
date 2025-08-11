import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Alle Projecten' },
    { id: 'technical', name: 'Technische Onderdelen' },
    { id: 'decorative', name: 'Decoratieve Objecten' },
    { id: 'prototypes', name: 'Prototypes' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Wandhouder',
      category: 'technical',
      material: 'PLA+',
      color: 'Wit',
      description: 'Wandhouder voor Deco M50',
      image: '/Deco_Houder.jpg'
    },
    {
      id: 2,
      title: 'Smartwatch Stand',
      category: 'decorative',
      material: 'PLA',
      color: 'Sparkle Blue Crystal',
      description: 'Houder voor Fitbit Smartwatch',
      image: '/Fitbit_Stand.jpg'
    },
    {
      id: 3,
      title: 'Smartwatch Stand',
      category: 'decorative',
      material: 'PLA+',
      color: 'Sparkle Blue Crystal',
      description: 'Houder voor OnePlus Smartwatch',
      image: '/OnePlus_Stand.jpg'
    },
    {
      id: 4,
      title: '3D Model',
      category: 'decorative',
      material: 'PLA+',
      color: 'Chrome',
      description: 'Terminator 3D Model',
      image: '/Terminator_BlackBG.jpg'
    },
    {
      id: 5,
      title: 'Teelicht',
      category: 'decorative',
      material: 'PLA+',
      color: 'Oranje',
      description: 'Halloween teelicht',
      image: '/Halloween_Teelicht.jpg'
    },
    {
      id: 6,
      title: 'Motorsteun',
      category: 'prototypes',
      material: 'PLA+',
      color: 'Rood',
      description: 'Simracing Rumblemotorsteun',
      image: '/Simracing_RumbleMotor_Houder.jpg'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ontdek onze gerealiseerde projecten - van technische onderdelen tot decoratieve objecten
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-400 transition-colors"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400">Materiaal</p>
                    <p className="text-cyan-400 font-semibold">{project.material}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Kleur</p>
                    <p className="text-green-400 font-semibold">{project.color}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Portfolio item"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
