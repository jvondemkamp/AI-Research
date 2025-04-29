
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';

type FileUploaderProps = {
  onFileUpload: (file: File) => void;
  accept?: string;
  label?: string;
};

const FileUploader = ({ 
  onFileUpload, 
  accept = ".pdf,.doc,.docx,.txt",
  label = "Upload Document"
}: FileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };
  
  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        isDragging ? 'border-primary bg-primary/10' : 'border-border'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium mb-2">{label}</h3>
      <p className="text-muted-foreground mb-4">
        Drag and drop your file here, or click to select
      </p>
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept={accept}
        onChange={handleFileChange}
      />
      <Button
        variant="outline"
        asChild
      >
        <label htmlFor="file-upload" className="cursor-pointer">
          Select File
        </label>
      </Button>
      <p className="mt-2 text-sm text-muted-foreground">
        Supported formats: PDF, Word, Text
      </p>
    </div>
  );
};

export default FileUploader;
