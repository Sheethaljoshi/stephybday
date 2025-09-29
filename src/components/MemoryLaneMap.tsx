
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
    title: 'Where It All Began',
    description: 'The countless hours spent in that stuffy classroom... Who knew it would lead to this? This is where our story officially started.',
    position: { top: '30%', left: '25%' },
  },
  {
    id: 'cafe',
    title: 'Our Favorite Cafe',
    description: "The official headquarters for all our gossip sessions, late-night study crises, and bubble tea emergencies. We've probably spent a fortune here.",
    position: { top: '65%', left: '55%' },
  },
  {
    id: 'trip',
    title: 'That Unforgettable Trip',
    description: 'Remember that one trip? The one with all the inside jokes we still laugh about. It was chaotic, it was perfect.',
    position: { top: '40%', left: '78%' },
  },
  {
    id: 'library',
    title: 'The Library',
    description: "Our second home during exam season. Fueled by coffee and panic, we somehow made it through. So many whispers and shared notes!",
    position: { top: '15%', left: '50%' },
  },
  {
    id: 'park',
    title: 'The Park',
    description: "Those lazy afternoons when we just needed to escape and talk about everything and nothing. The best place to de-stress.",
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
