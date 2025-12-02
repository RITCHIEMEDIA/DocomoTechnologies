interface OGImageProps {
  title: string;
  description: string;
  image?: string;
}

export default function OGImage({ title, description, image }: OGImageProps) {
  // This component is primarily for documentation purposes
  // In a real implementation, you would generate dynamic images
  // using libraries like @vercel/og or puppeteer
  
  return (
    <div className="hidden">
      <h1>Open Graph Image Generator</h1>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Image: {image || 'default'}</p>
    </div>
  );
}