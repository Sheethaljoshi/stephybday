
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MapPin, Sparkles } from 'lucide-react';

const mapPoints = [
  {
    id: 'school',
    title: 'Covid Google Meet',
    description: 'Bro, when you did the moonwalk in the cultural program back in 11th or 12th, you shocked us all — we were like damn, girl, thats insane!',
    position: { top: '30%', left: '25%' },
  },
  {
    id: 'cafe',
    title: 'Staff Room Meets',
    description: "Omg, that log book was such a pain! Sheep always forgot it, and we’d be running here and there, only to bump into you — the 10B log book leader.",
    position: { top: '65%', left: '55%' },
  },
  {
    id: 'trip',
    title: 'Bathroom Secrets',
    description: 'Remember how we used to take timed washroom breaks — first two people would go, then one, and then the rest followed as if the entire school was dying to find out if we went to the washroom together. Also locking our beloved Ann Maria in the bathroom and running away is an official core memory along with our fashion shows!',
    position: { top: '40%', left: '78%' },
  },
  {
    id: 'library',
    title: '6-B',
    description: "Jessy Ma'am Cofounded MAASC - If she didnt take us 3 loners (Sheethal(Me), You and Catherine) and make us sit together - who knows where we would be now? ",
    position: { top: '15%', left: '50%' },
  },
  {
    id: 'park',
    title: 'Platform Music Sessions',
    description: "Since everyone loved your voice, and loved you singing on the platform, calling you our friend was such a huge flex!",
    position: { top: '80%', left: '20%' },
  }
];

const mapBackgroundImage = { imageUrl: '/map.webp', description: 'Map background', imageHint: 'Memory lane map background' } as const;

export function MemoryLaneMap() {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-[500px] h-[300px] rounded-2xl shadow-inner overflow-hidden border-2 border-dashed border-primary/50">
            {mapBackgroundImage && (
                <Image
                    src={mapBackgroundImage.imageUrl}
                    alt={mapBackgroundImage.description}
                    fill
                    className="object-cover opacity-30"
                    data-ai-hint={mapBackgroundImage.imageHint}
                />
            )}
            
            <TooltipProvider>
                {mapPoints.map(point => (
                    <Dialog key={point.id}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <DialogTrigger asChild>
                                    <button
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                                        style={{ top: point.position.top, left: point.position.left }}
                                    >
                                        <MapPin className="h-8 w-8 text-primary-foreground drop-shadow-lg animate-pulse hover:animate-none hover:scale-125 transition-transform" />
                                    </button>
                                </DialogTrigger>
                            </TooltipTrigger>
                             <TooltipContent>
                                <p>{point.title}</p>
                            </TooltipContent>
                        </Tooltip>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle className="font-headline text-2xl">{point.title}</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4 space-y-4">
                                <p className="text-muted-foreground">{point.description}</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </TooltipProvider>

            <div className="absolute bottom-4 right-4 bg-background/80 p-2 rounded-md text-xs text-muted-foreground flex items-center gap-1">
                <Sparkles size={14} className="text-primary-foreground"/>
                Click the pins to reveal memories!
            </div>
        </div>
    </div>
  );
}
