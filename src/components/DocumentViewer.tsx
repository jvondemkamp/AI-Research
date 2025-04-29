type DocumentViewerProps = {
  pdfUrl: string;
};

const DocumentViewer = ({ pdfUrl }: DocumentViewerProps) => {
  return (
    <div className="space-y-4">
      <div className="border rounded-lg overflow-hidden bg-background">
        <object
          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="600px"
          className="w-full"
        >
          <p>
            Your browser does not support embedded PDFs. You can{' '}
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              download the PDF
            </a>{' '}
            instead.
          </p>
        </object>
      </div>
    </div>
  );
};

export default DocumentViewer;
