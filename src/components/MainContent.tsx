"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
    <div className="flex flex-col min-h-screen w-full bg-background animate-in fade-in duration-1000">
      <header className="text-center py-16 px-4 bg-primary/20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">Happy Birthday, Stephy!</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Welcome to your digital time capsule, curated with love (and a little bit of sass) by your favorite people.</p>
      </header>

      <main className="w-full max-w-5xl mx-auto p-4 md:p-8 grid gap-8">
        
        <Card className="overflow-hidden shadow-xl col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Sparkles className="text-primary-foreground h-6 w-6"/> Meme Hall of Fame</CardTitle>
            <CardDescription>A collection of moments that live in our heads rent-free.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">Enter the Meme-iverse</Button>
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
                            <CardContent className="flex aspect-video items-center justify-center p-0 relative rounded-lg overflow-hidden border">
                              <Image
                                src={meme.imageUrl}
                                alt={meme.description}
                                width={600}
                                height={400}
                                data-ai-hint={meme.imageHint}
                                className="object-cover w-full h-full"
                              />
                               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="font-semibold text-white text-lg">{memeCaptions[meme.id]}</p>
                            </div>
                            </CardContent>
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

        <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Mail className="text-primary-foreground h-6 w-6"/> A Note for Future Hubby</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-relaxed flex-grow">
                <p className="mb-4">Dear Future Mr. Stephy,</p>
                <p className="mb-4">You've hit the jackpot! You're with someone who's not only incredibly smart and beautiful but also has the biggest heart. She's the kind of person who will laugh at your dumbest jokes and support your wildest dreams. She might steal the covers and leave her bobby pins everywhere, but she'll also make you the happiest person on Earth.</p>
                <p className="text-sm text-muted-foreground">P.S. Rules: 1. Let her have the last slice of pizza. 2. Never question her love for bubble tea. 3. Agree that her friends (us) are awesome.</p>
              </CardContent>
              <CardContent>
                 <p className="mt-4 font-bold text-right">Good luck, you'll need it.<Heart className="inline h-4 w-4 ml-1 text-red-500"/></p>
              </CardContent>
            </Card>

            <Card className="shadow-lg flex flex-col">
               <CardHeader>
                <CardTitle className="flex items-center gap-3"><MessageSquareHeart className="text-primary-foreground h-6 w-6"/> To the Stephy of the Future</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-relaxed flex-grow">
                 <p className="mb-4">Hey Old Stephy, we hope you're reading this from a comfy chair, with a cup of tea, and still bossing everyone around. We just wanted to remind you of a few things:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                      <li>We're so proud of the person you've become.</li>
                      <li>Remember all the late-night talks, the silly dances, and the dreams we shared?</li>
                      <li>Your kindness and strength have always been your superpowers.</li>
                      <li>We hope you're still obsessed with a good book.</li>
                  </ul>
              </CardContent>
               <CardContent>
                <p className="text-right font-bold">We love you to the moon and back.</p>
               </CardContent>
            </Card>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Wand2 className="text-primary-foreground h-6 w-6"/> AI Time Machine</CardTitle>
                    <CardDescription>Curious to see what 50 years does to us? Upload a photo to find out.</CardDescription>
                </CardHeader>
                <CardContent>
                    <AiImageSection />
                </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Camera className="text-primary-foreground h-6 w-6"/> Throwback Moment</CardTitle>
                    <CardDescription>One for the history books. Click to remember!</CardDescription>
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
                                        className="rounded-lg shadow-xl w-full h-auto"
                                    />
                                    <p className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-2 rounded-md text-center font-headline">The good old days!</p>
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

    