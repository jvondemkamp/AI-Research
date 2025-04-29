
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronDown, ChevronUp, FileText } from 'lucide-react';

type DocumentViewerProps = {
  file: File | null;
  title: string;
};

const DocumentViewer = ({ file, title }: DocumentViewerProps) => {
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [zoom, setZoom] = useState([100]);
  
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setFileURL(url);
      
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);
  
  const handleZoomIn = () => {
    setZoom(prev => [Math.min(prev[0] + 10, 200)]);
  };
  
  const handleZoomOut = () => {
    setZoom(prev => [Math.max(prev[0] - 10, 50)]);
  };
  
  if (!file) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">No document uploaded yet.</p>
      </Card>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="font-heading text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handleZoomOut}>
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
            <Button variant="outline" size="icon" onClick={handleZoomIn}>
              <ChevronUp className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a 
              href={fileURL || '#'} 
              download={file.name}
              className="inline-flex items-center gap-1"
            >
              <ArrowDown className="h-4 w-4" /> Download
            </a>
          </Button>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden bg-background">
        {fileURL && file.type.includes('pdf') && (
          <iframe
            src={fileURL}
            className="w-full"
            style={{ height: '70vh', transform: `scale(${zoom[0]/100})`, transformOrigin: 'top left' }}
            title={title}
          />
        )}
        
        {fileURL && !file.type.includes('pdf') && (
          <div className="p-4 text-center py-12">
            <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <p className="mb-4">Preview not available for this file type.</p>
            <Button asChild>
              <a href={fileURL} download={file.name}>Download to View</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer;
