
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';

type FileUploaderProps = {
  onViewContent: () => void;
  label?: string;
  description?: string;
};

const FileUploader = ({ 
  onViewContent, 
  label = "View Document",
  description = "Click to view the document"
}: FileUploaderProps) => {
  
  return (
    <div 
      className="border-2 border-dashed rounded-lg p-8 text-center border-primary/30 hover:border-primary/60 transition-colors cursor-pointer"
      onClick={onViewContent}
    >
      <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium mb-2">{label}</h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <Button
        variant="outline"
      >
        View Document
      </Button>
    </div>
  );
};

export default FileUploader;
