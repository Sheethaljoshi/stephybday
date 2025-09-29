
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
    imageUrl: 'https://images.unsplash.com/photo-156078547A-1DF210452969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhbm5veWluZyUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3NTkxNTI5ODR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: "annoying classroom",
    position: { top: '30%', left: '25%' },
  },
  {
    id: 'cafe',
    title: 'Our Favorite Cafe',
    description: "The official headquarters for all our gossip sessions, late-night study crises, and bubble tea emergencies. We've probably spent a fortune here.",
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWxhdGFibGUlMjBxdW90ZXxlbnwwfHx8fDE3NTkxNTI5NTl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: "relatable quote",
    position: { top: '65%', left: '55%' },
  },
  {
    id: 'trip',
    title: 'That Unforgettable Trip',
    description: 'Remember that one trip? The one with all the inside jokes we still laugh about. It was chaotic, it was perfect.',
    imageUrl: 'https://images.unsplash.com/photo-1532664032179-36d09349884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmcmllbmRzJTIwdHJpcHxlbnwwfHx8fDE3NTkxNTI5NTl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: "friends trip",
    position: { top: '40%', left: '78%' },
  },
  {
    id: 'library',
    title: 'The Library',
    description: "Our second home during exam season. Fueled by coffee and panic, we somehow made it through. So many whispers and shared notes!",
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5fGVufDB8fHx8MTc1OTU4NjYyNnww&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: 'cozy library',
    position: { top: '15%', left: '50%' },
  },
  {
    id: 'park',
    title: 'The Park',
    description: "Those lazy afternoons when we just needed to escape and talk about everything and nothing. The best place to de-stress.",
    imageUrl: 'https://images.unsplash.com/photo-1594773886361-f05a681c2f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmcmllbmRzJTIwaW4lMjBhJTIwcGFya3xlbnwwfHx8fDE3NTk1ODY2MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: 'friends in park',
    position: { top: '80%', left: '20%' },
  }
];

const mapBackgroundImage = PlaceHolderImages.find(img => img.id === 'map-background');

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
                               <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                                     <Image src={point.imageUrl} alt={point.description} fill style={{objectFit: 'cover'}} data-ai-hint={point.imageHint}/>
                               </div>
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
