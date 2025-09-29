"use client";

import { useState } from 'react';
import Image from 'next/image';
import { generateFutureImage } from '@/ai/flows/generate-future-image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function AiImageSection() {
  const [file, setFile] = useState<File | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoDataUri(reader.result as string);
        setGeneratedImage(null); // Reset previous generation
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleGenerateClick = async () => {
    if (!photoDataUri) {
      toast({
        title: "No photo selected",
        description: "Please upload a photo first.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const result = await generateFutureImage({ photoDataUri });
      if (result.futureImage) {
        setGeneratedImage(result.futureImage);
      } else {
        throw new Error("The AI did not return an image.");
      }
    } catch (error) {
      console.error("AI image generation failed:", error);
      toast({
        title: "Generation Failed",
        description: "Something went wrong. Please try another photo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">See Us in 50 Years 👵</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Future-You Generator</DialogTitle>
          <DialogDescription>Upload a group photo and see what you'll all look like in 50 years!</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                 <label htmlFor="picture" className="sr-only">Picture</label>
                 <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} className="file:text-primary-foreground file:font-semibold" />
            </div>

            {photoDataUri && !generatedImage && !isLoading && (
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-dashed flex items-center justify-center bg-muted/50">
                    <Image src={photoDataUri} alt="Uploaded preview" fill style={{objectFit: 'contain'}} />
                </div>
            )}

            <Button onClick={handleGenerateClick} disabled={isLoading || !photoDataUri} className="w-full">
                {isLoading ? <Loader2 className="animate-spin" /> : "Generate Future Image"}
            </Button>

            {isLoading && (
                <div className="flex flex-col items-center justify-center text-center p-8 space-y-2">
                    <Loader2 className="h-12 w-12 animate-spin text-primary-foreground" />
                    <p className="text-muted-foreground">The AI is looking into the future... this may take a moment.</p>
                </div>
            )}

            {generatedImage && (
                <div className="relative mt-4">
                    <Image src={generatedImage} alt="AI generated image of friends in 50 years" width={512} height={512} className="rounded-lg shadow-xl w-full h-auto" />
                     <p className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-2 rounded-md text-center font-headline">Us in 50 years 😎</p>
                </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
