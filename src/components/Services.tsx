import React from 'react';
import { Printer, Palette, Settings, Zap, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const materials = [
    {
      name: 'PLA',
      description: 'Ideaal voor prototypes en decoratieve objecten',
      colors: ['Wit', 'Zwart', 'Grijs', 'Rood', 'Blauw', 'Groen'],
      features: ['Milieuvriendelijk', 'Gemakkelijk te printen', 'Lage temperatuur']
    },
    {
      name: 'PETG',
      description: 'Sterke en duurzame prints voor functionele onderdelen',
      colors: ['Transparant', 'Wit', 'Zwart', 'Grijs'],
      features: ['Chemisch bestendig', 'Hoge sterkte', 'Goede transparantie']
    },
    {
      name: 'ABS',
      description: 'Industriële kwaliteit voor technische toepassingen',
      colors: ['Zwart', 'Wit', 'Grijs'],
      features: ['Hittebestendig', 'Slagvast', 'Bewerkbaar']
    }
  ];

  const printers = [
    {
      name: 'Bambu Labs P1S',
      buildVolume: '256 × 256 × 256 mm',
      precision: '0.1 mm',
      features: ['Automatische calibratie', 'Multi-color support', 'Snelle print speeds']
    },
    {
      name: 'Creality K1 Max',
      buildVolume: '300 × 300 × 300 mm',
      precision: '0.1 mm',
      features: ['Groot printvolume', 'Stabiele constructie', 'Betrouwbare kwaliteit']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Onze Diensten
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionele FDM 3D printing met geavanceerde technologie en premium materialen
          </p>
        </div>

        {/* Materials Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="h-8 w-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">Materialen & Kleuren</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-cyan-400 mb-3">{material.name}</h4>
                <p className="text-gray-300 mb-4">{material.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-white mb-2">Beschikbare Kleuren:</h5>
                  <div className="flex flex-wrap gap-2">
                    {material.colors.map((color, colorIndex) => (
                      <span key={colorIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2">Eigenschappen:</h5>
                  <ul className="space-y-1">
                    {material.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Printers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Printer className="h-8 w-8 text-green-400" />
            <h3 className="text-3xl font-bold text-white">Onze Printers</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printers.map((printer, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-green-400 mb-3">{printer.name}</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Printvolume</p>
                    <p className="text-white font-semibold">{printer.buildVolume}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Precisie</p>
                    <p className="text-white font-semibold">{printer.precision}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2">Kenmerken:</h5>
                  <ul className="space-y-1">
                    {printer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Settings className="h-8 w-8 text-purple-400" />
            <h3 className="text-3xl font-bold text-white">Ons Proces</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Upload', description: 'Upload uw STL of STEP bestand' },
              { step: '2', title: 'Analyse', description: 'Wij analyseren uw bestand en adviseren' },
              { step: '3', title: 'Productie', description: 'Professionele print met kwaliteitscontrole' },
              { step: '4', title: 'Levering', description: 'Snelle levering of afhaling mogelijk' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;