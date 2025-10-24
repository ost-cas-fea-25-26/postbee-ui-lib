import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
import { Button } from '../button';
import { Icon } from '../icon';

interface UploadFile {
  file: File;
  preview?: string;
}

export const Upload = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: true,
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    },
  });

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const toRemove = prev[index];
      // Revoke only the preview of the removed file
      if (toRemove?.preview) URL.revokeObjectURL(toRemove.preview);
      // Return the rest of the files
      return prev.filter((_, i) => i !== index);
    });
  };

  // Clean up previews on unmount
  useEffect(() => {
    return () => {
      files.forEach((f) => f.preview && URL.revokeObjectURL(f.preview));
    };
  }, []);

  return (
    <div className="mx-auto w-full space-y-6 p-6">
      {/* Drag-and-drop area */}
      <div
        {...getRootProps({
          className: `rounded-2xl border-2 border-dashed px-8 py-20 text-center transition-all duration-200 ${
            isDragActive ? 'border-secondary-500 bg-secondary-50' : 'border-secondary-300 bg-secondary-100/50'
          } hover:border-secondary-400 hover:bg-secondary-50 cursor-pointer`,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-3">
          <Icon icon="upload" className="text-secondary-500" size={28} />
          <p className="text-secondary-600 font-medium">
            {isDragActive ? 'Drop your files here' : 'Drag & drop files here'}
          </p>
          <p className="text-secondary-400 text-sm">or use the button below</p>
        </div>
      </div>

      {/* Upload button */}
      <div className="flex justify-center">
        <Button type="button" onClick={open}>
          Choose Files
        </Button>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h4 className="text-secondary-700 mb-3 text-sm font-semibold">Uploaded Files</h4>
          <ul className="divide-secondary-100 divide-y">
            {files.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between gap-4 py-2">
                <div className="flex min-w-0 items-center gap-3">
                  {/* Preview or icon */}
                  {item.preview ? (
                    <img
                      src={item.preview}
                      alt={item.file.name}
                      className="h-10 w-10 flex-shrink-0 rounded-md border object-cover"
                    />
                  ) : (
                    <div className="bg-secondary-50 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border">
                      <Icon icon="upload" className="text-secondary-500" size={18} />
                    </div>
                  )}

                  {/* File details */}
                  <div className="min-w-0">
                    <p
                      className="text-secondary-700 truncate text-sm font-medium"
                      style={{ maxWidth: '200px' }}
                      title={item.file.name}
                    >
                      {item.file.name}
                    </p>
                    <p className="text-secondary-400 text-xs">{(item.file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-error cursor-pointer text-xs font-medium"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
