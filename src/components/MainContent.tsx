"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Mail, Sparkles, Wand2, MessageSquareHeart, Heart } from 'lucide-react';
import { AiImageSection } from './AiImageSection';

const memeImages = PlaceHolderImages.filter(img => img.id.startsWith('meme'));
const throwbackImage = PlaceHolderImages.find(img => img.id === 'throwback');

const memeCaptions: { [key: string]: string } = {
  meme1: "This is so us trying to figure out plans.",
  meme2: "Her face when she sees a cute dog.",
  meme3: "When the gossip is just too good.",
};


export function MainContent() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full py-12 px-4 md:px-8 animate-in fade-in duration-1000">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-sm">Happy Birthday, Stephy!</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">A little time capsule from your favorite people.</p>
      </header>

      <main className="w-full max-w-4xl mx-auto grid gap-8">
        
        <Card className="overflow-hidden shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary-foreground"/> Meme Memories</CardTitle>
            <CardDescription>Some moments that live rent-free in our heads.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">Open Meme Memories</Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Our Meme Hall of Fame</DialogTitle>
                  <DialogDescription>Because normal photos are too mainstream.</DialogDescription>
                </DialogHeader>
                <Carousel className="w-full max-w-xl mx-auto" opts={{ loop: true }}>
                  <CarouselContent>
                    {memeImages.map((meme) => (
                      <CarouselItem key={meme.id} className="text-center">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                              <Image
                                src={meme.imageUrl}
                                alt={meme.description}
                                width={600}
                                height={400}
                                data-ai-hint={meme.imageHint}
                                className="rounded-t-lg object-cover"
                              />
                            </CardContent>
                            <div className="p-4 bg-muted/50">
                                <p className="font-semibold">{memeCaptions[meme.id]}</p>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-card rounded-lg shadow-lg border-b-0">
            <AccordionTrigger className="text-lg font-semibold px-6 hover:no-underline">
              <span className="flex items-center gap-2"><Mail className="text-primary-foreground"/> Letter for Future Hubby 💌</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 text-base leading-relaxed">
              <p className="mb-4">Dear Future Mr. Stephy,</p>
              <p className="mb-4">You've hit the jackpot! You're with someone who's not only incredibly smart and beautiful but also has the biggest heart. She's the kind of person who will laugh at your dumbest jokes and support your wildest dreams. She might steal the covers and leave her bobby pins everywhere, but she'll also make you the happiest person on Earth.</p>
              <p>Just a few rules: 1. Always let her have the last slice of pizza. 2. Never, ever question her love for bubble tea. 3. Agree that her friends (us) are awesome.</p>
              <p className="mt-4 font-bold">Good luck, you'll need it (just kidding... mostly).<Heart className="inline h-4 w-4 ml-1"/></p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card rounded-lg shadow-lg border-b-0">
            <AccordionTrigger className="text-lg font-semibold px-6 hover:no-underline">
              <span className="flex items-center gap-2"><MessageSquareHeart className="text-primary-foreground"/> Message to Old Stephy</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 text-base leading-relaxed">
               <p className="mb-4">Hey Old Stephy, we hope you're reading this from a comfy chair, with a cup of tea, and still bossing everyone around. We just wanted to remind you of a few things:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>We're so proud of the person you've become. Your journey has been amazing to watch.</li>
                    <li>Remember all the late-night talks, the silly dances, and the dreams we shared? We hope you've lived them all.</li>
                    <li>Your kindness and strength have always been your superpowers. Never forget that.</li>
                    <li>We hope you're still as obsessed with a good book and a great story.</li>
                </ul>
                <p>We love you to the moon and back, forever and always.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Wand2 className="text-primary-foreground"/> AI Time Machine</CardTitle>
                    <CardDescription>Curious to see what 50 years does to us?</CardDescription>
                </CardHeader>
                <CardContent>
                    <AiImageSection />
                </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Camera className="text-primary-foreground"/> Throwback Moment</CardTitle>
                    <CardDescription>A trip down memory lane.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-full">Remember when... ❤️</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Throwback Moment 📸</DialogTitle>
                            </DialogHeader>
                            {throwbackImage && (
                                <div className="relative mt-4">
                                    <Image
                                        src={throwbackImage.imageUrl}
                                        alt={throwbackImage.description}
                                        width={600}
                                        height={800}
                                        data-ai-hint={throwbackImage.imageHint}
                                        className="rounded-lg shadow-xl"
                                    />
                                    <p className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-2 rounded-md text-center font-headline">Remember when... ❤️</p>
                                </div>
                            )}
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
