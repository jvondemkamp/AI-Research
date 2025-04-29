
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, FileText, FilePdf } from 'lucide-react';

type DocumentViewerProps = {
  title: string;
  content?: string;
  pdfUrl?: string;
  onBack?: () => void;
};

const DocumentViewer = ({ title, content, pdfUrl, onBack }: DocumentViewerProps) => {
  const [zoom, setZoom] = useState([100]);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="font-heading text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setZoom(prev => [Math.max(prev[0] - 10, 50)])}>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Slider 
              value={zoom} 
              onValueChange={setZoom}
              min={50}
              max={200}
              step={10}
              className="w-[100px]"
            />
            <Button variant="outline" size="icon" onClick={() => setZoom(prev => [Math.min(prev[0] + 10, 200)])}>
              <ChevronUp className="h-4 w-4" />
            </Button>
          </div>
          {onBack && (
            <Button variant="outline" size="sm" onClick={onBack}>
              Back to Overview
            </Button>
          )}
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden bg-background p-6">
        {pdfUrl ? (
          <div className="w-full" style={{ height: "70vh" }}>
            <object
              data={pdfUrl}
              type="application/pdf"
              width="100%"
              height="100%"
              className="border-0"
            >
              <p>
                It appears your browser doesn't support embedded PDFs.
                You can <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">download the PDF</a> instead.
              </p>
            </object>
          </div>
        ) : content ? (
          <div 
            className="prose prose-invert max-w-none"
            style={{ 
              transform: `scale(${zoom[0]/100})`, 
              transformOrigin: 'top left',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p className="text-center text-muted-foreground py-10">No content available</p>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer;
