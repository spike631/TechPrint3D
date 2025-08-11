import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Welke bestandsformaten accepteren jullie?',
      answer: 'Wij accepteren STL en STEP bestanden. STL is het meest gebruikte formaat voor 3D printing, terwijl STEP bestanden meer gedetailleerde informatie bevatten. Beide formaten kunnen we probleemloos verwerken tot maximaal 50MB per bestand.'
    },
    {
      question: 'Hoe lang duurt het voordat mijn print klaar is?',
      answer: 'Standaard is de levertijd 5 werkdagen na ontvangst van uw bestand en goedkeuring van de offerte. Voor spoedorders bieden we een 48-uurs service tegen meerprijs. De exacte levertijd hangt af van de complexiteit en grootte van uw object.'
    },
    {
      question: 'Kunnen jullie mijn bestand optimaliseren voor 3D printing?',
      answer: 'Ja, wij bieden gratis advies over design optimalisatie. Na analyse van uw bestand adviseren wij over wanddikte, support structuren, oriëntatie en eventuele aanpassingen voor een betere printkwaliteit. Dit is onderdeel van onze service.'
    },
    {
      question: 'Wat zijn de kosten voor 3D printing?',
      answer: 'De kosten zijn afhankelijk van materiaal, printvolume, complexiteit en aantal. Na upload van uw bestand berekenen wij automatisch de kosten en ontvangt u binnen 24 uur een gedetailleerde offerte. Geen verrassingen achteraf.'
    },
    {
      question: 'Welke materialen hebben jullie beschikbaar?',
      answer: 'Wij printen met PLA (milieuvriendelijk, ideaal voor prototypes), PETG (sterk en chemisch bestendig) en ABS (hittebestendig, industriële kwaliteit). Elke materiaal is beschikbaar in verschillende kleuren. Advies over materiaalkeuzE krijgt u bij uw offerte.'
    },
    {
      question: 'Kunnen jullie ook grote objecten printen?',
      answer: 'Ja, onze Creality K1 Max heeft een printvolume van 300×300×300mm. Voor objecten die groter zijn kunnen we deze opsplitsen in meerdere delen die later samengevoegd kunnen worden. Wij denken graag mee over de beste aanpak.'
    },
    {
      question: 'Bieden jullie ook post-processing aan?',
      answer: 'Wij leveren professioneel afgewerkte prints met minimale support marks. Basis nabewerking zoals support verwijdering is inbegrepen. Voor specifieke afwerkingen zoals slijpen, boren of assemblage kunnen we een maatwerkoplossing aanbieden.'
    },
    {
      question: 'Hoe zit het met intellectueel eigendom?',
      answer: 'Uw bestanden en ontwerpen blijven volledig uw eigendom. Wij bewaren bestanden alleen voor de duur van het project en verwijderen deze na voltooiing. Wij delen nooit bestanden met derden zonder expliciete toestemming.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze 3D printing services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                  </div>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="pl-9 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Nog vragen?</h3>
              <p className="text-gray-300 mb-6">
                Heeft u een vraag die hier niet beantwoord wordt? Neem gerust contact met ons op!
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                Neem Contact Op
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
