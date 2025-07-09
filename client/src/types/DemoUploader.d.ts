export interface DemoUploaderProps {
  demo: File | null;
  onUpload: (file: File) => void;
}
