
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TextilePortfolio = () => {
  const handleDownload = () => {
    // Create a link to download the portfolio
    const link = document.createElement('a');
    link.href = '/lovable-uploads/251e8e1c-3b48-49b1-9bfd-28a47cdc4fb6.png';
    link.download = 'textile-portfolio.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Create multiple sections of the long image for sliding
  const imageSections = [
    { id: 1, title: "Pattern Designs", description: "Intricate textile patterns and motifs" },
    { id: 2, title: "Fashion Illustrations", description: "Detailed garment design sketches" },
    { id: 3, title: "Technical Drawings", description: "Professional construction details" }
  ];

  return (
    <div className="mt-16 mb-8">
      <Card className="bg-gradient-to-br from-white/90 to-dusty-lavender/10 backdrop-blur-sm border border-dusty-lavender/20 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-playfair font-bold text-gradient-primary flex items-center justify-center gap-2">
            <FileText size={32} />
            Complete Textile Design Portfolio
          </CardTitle>
          <CardDescription className="text-lg text-slate-gray font-inter">
            Slide through my comprehensive collection of textile designs, patterns, and fashion illustrations
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <Carousel className="w-full max-w-full">
            <CarouselContent>
              {imageSections.map((section) => (
                <CarouselItem key={section.id}>
                  <div className="relative h-80 overflow-hidden rounded-xl border border-dusty-lavender/20">
                    <img
                      src="/lovable-uploads/251e8e1c-3b48-49b1-9bfd-28a47cdc4fb6.png"
                      alt={`Textile Design Portfolio - ${section.title}`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                      style={{ 
                        objectPosition: section.id === 1 ? 'top' : section.id === 2 ? 'center' : 'bottom'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/20 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-playfair font-semibold text-lg">{section.title}</h4>
                      <p className="text-sm opacity-90">{section.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <h4 className="font-playfair font-semibold text-gradient-primary">Pattern Designs</h4>
              <p className="text-sm text-slate-gray font-inter">Intricate textile patterns and motifs</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-playfair font-semibold text-gradient-primary">Fashion Illustrations</h4>
              <p className="text-sm text-slate-gray font-inter">Detailed garment design sketches</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-playfair font-semibold text-gradient-primary">Technical Drawings</h4>
              <p className="text-sm text-slate-gray font-inter">Professional construction details</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={handleDownload}
              className="bg-gradient-primary hover:bg-gradient-secondary text-white px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download size={20} className="mr-2" />
              Download Complete Portfolio
            </Button>
            <p className="text-xs text-slate-gray font-inter mt-2">
              High-resolution PNG format • Professional quality
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextilePortfolio;
