import React, { useState } from 'react';
import { Upload as UploadIcon, FileText, Zap, CheckCircle } from 'lucide-react';

const Upload: React.FC = () => {
  const [formData, setFormData] = useState({
    file: null as File | null,
    material: 'PLA',
    color: 'Wit',
    quantity: 1,
    urgent: false,
    notes: ''
  });

  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Bestand succesvol geüpload! We nemen binnen 24 uur contact met u op.');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Upload & Offerte
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upload uw bestand en ontvang binnen 24 uur een professionele offerte
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* File Upload */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <UploadIcon className="h-6 w-6 text-cyan-400" />
                Bestand Uploaden
              </h3>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                  dragOver
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-gray-600 hover:border-cyan-400/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {formData.file ? (
                  <div className="space-y-4">
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
                    <div>
                      <p className="text-white font-semibold">{formData.file.name}</p>
                      <p className="text-gray-400">{(formData.file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, file: null }))}
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Ander bestand selecteren
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-white font-semibold mb-2">
                        Sleep uw bestand hier of klik om te selecteren
                      </p>
                      <p className="text-gray-400">Ondersteunde formaten: STL, STEP (max 50MB)</p>
                    </div>
                    <input
                      type="file"
                      accept=".stl,.step,.stp"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    >
                      Bestand Selecteren
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Material & Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">Material & Kleur</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Materiaal</label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData(prev => ({ ...prev, material: e.target.value }))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="PLA">PLA</option>
                      <option value="PETG">PETG</option>
                      <option value="ABS">ABS</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Kleur</label>
                    <select
                      value={formData.color}
                      onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="Wit">Wit</option>
                      <option value="Zwart">Zwart</option>
                      <option value="Grijs">Grijs</option>
                      <option value="Rood">Rood</option>
                      <option value="Blauw">Blauw</option>
                      <option value="Groen">Groen</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">Opties</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Aantal</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={formData.quantity}
                      onChange={(e) => setFormData(prev => ({ ...prev, quantity: parseInt(e.target.value) }))}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="urgent"
                      checked={formData.urgent}
                      onChange={(e) => setFormData(prev => ({ ...prev, urgent: e.target.checked }))}
                      className="w-5 h-5 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400"
                    />
                    <label htmlFor="urgent" className="text-gray-300 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      Spoed (binnen 48 uur)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">Opmerkingen</h4>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Eventuele bijzonderheden of specifieke wensen..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none resize-none h-32"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Offerte Aanvragen
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Upload;
