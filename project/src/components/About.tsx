import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Over Ons
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passie voor technologie en perfectie in elke print
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <User className="h-8 w-8 text-cyan-400" />
                  <h3 className="text-3xl font-bold text-white">Wie zijn wij?</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  TechPrint3D is opgericht vanuit een passie voor technologie en innovatie. Als ervaren maker en tech-liefhebber 
                  heb ik jarenlange ervaring in 3D printing en product ontwikkeling.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Van het eerste prototype tot de finale productie - wij begrijpen de behoeften van makers, engineers en 
                  ontwerpers. Onze focus ligt op kwaliteit, precisie en persoonlijke service.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 text-center hover:border-green-400/50 transition-all duration-300">
                <Award className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">5+ Jaar Ervaring</h4>
                <p className="text-gray-300">Uitgebreide kennis van 3D printing technologieën</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 text-center hover:border-purple-400/50 transition-all duration-300">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">500+ Projecten</h4>
                <p className="text-gray-300">Succesvol gerealiseerde prints en tevreden klanten</p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="h-8 w-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Onze Missie</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Wij maken 3D printing toegankelijk voor iedereen. Of je nu een prototype nodig hebt, een oplossing zoekt 
                voor een technisch probleem, of gewoon een creatief idee wilt realiseren - wij helpen je van concept naar realiteit.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="h-8 w-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Onze Waarden</h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Kwaliteit boven kwantiteit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Persoonlijke service en advies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Duurzaamheid en milieubewustzijn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Innovatie en continue verbetering</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Focus */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Voor Makers & Tech-Liefhebbers</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                Wij spreken de taal van makers. Of je nu werkt aan een Arduino project, een drone onderdeel nodig hebt, 
                of een custom tool wilt printen - wij begrijpen je behoeften. Onze technische achtergrond stelt ons in staat 
                om niet alleen te printen, maar ook mee te denken over design optimalisatie en materiaalkeuzE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
