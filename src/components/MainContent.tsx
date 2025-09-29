
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Mail, Sparkles, Wand2, MessageSquareHeart, Heart, GitCommit, ChevronDown, LockKeyhole } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen w-full bg-background animate-in fade-in duration-1000 font-body">
      
      <header className="text-center py-16 px-4 bg-primary/10">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">Happy Birthday, Stephy!</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Welcome to your digital time capsule, curated with love (and a little bit of sass) by your favorite people.</p>
      </header>
      
      <main className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-12">

        {/* --- Letters Section --- */}
        <section className="space-y-8">
            <div className="text-center">
                <h2 className="font-headline text-4xl text-primary-foreground">A Couple of Notes...</h2>
                <p className="text-muted-foreground mt-2">From us, to you (and your future hubby).</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center">
                        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                           <div className="mx-auto bg-primary/20 p-4 rounded-full mb-4 w-fit">
                             <LockKeyhole className="h-10 w-10 text-primary-foreground" />
                           </div>
                           <h3 className="font-headline text-2xl">A Top-Secret Letter</h3>
                           <p className="text-muted-foreground mt-2">For the future Mr. Stephy's eyes only. Click to unlock.</p>
                        </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="font-headline text-2xl flex items-center gap-3"><Mail className="text-primary-foreground h-6 w-6"/> To Your Future Hubby</DialogTitle>
                        <DialogDescription>A top-secret message for his eyes only.</DialogDescription>
                    </DialogHeader>
                     <div className="space-y-4 pt-4 text-base leading-relaxed">
                        <p>Dear Future Mr. Stephy,</p>
                        <p>You've hit the jackpot! You're with someone who's not only incredibly smart and beautiful but also has the biggest heart. She's the kind of person who will laugh at your dumbest jokes and support your wildest dreams.</p>
                        <p>She might steal the covers and leave her bobby pins everywhere, but she'll also make you the happiest person on Earth.</p>
                        <p className="text-sm text-muted-foreground pt-4 border-t">P.S. Rules: 1. Let her have the last slice of pizza. 2. Never question her love for bubble tea. 3. Agree that her friends (us) are awesome.</p>
                        <p className="mt-4 font-bold text-right">Good luck, you'll need it.<Heart className="inline h-4 w-4 ml-1 text-red-500 fill-red-500"/></p>
                    </div>
                  </DialogContent>
                </Dialog>

                <Card className="shadow-lg transform transition-transform hover:scale-105 duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-headline text-2xl flex items-center gap-3 mb-4"><MessageSquareHeart className="text-primary-foreground h-6 w-6"/> To the Stephy of the Future</h3>
                    <div className="text-base leading-relaxed space-y-4">
                         <p>Hey Old Stephy, we hope you're reading this from a comfy chair, with a cup of tea, and still bossing everyone around. We just wanted to remind you of a few things:</p>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                              <li>We're so proud of the person you've become.</li>
                              <li>Remember all the late-night talks, the silly dances, and the dreams we shared?</li>
                              <li>Your kindness and strength have always been your superpowers.</li>
                              <li>We hope you're still obsessed with a good book.</li>
                          </ul>
                        <p className="text-right font-bold pt-4 border-t">We love you to the moon and back.</p>
                    </div>
                  </CardContent>
                </Card>
            </div>
        </section>

        <div className="relative text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-dashed border-border"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-background px-4 text-muted-foreground"><GitCommit /></span>
            </div>
        </div>


        {/* --- Interactive Fun Section --- */}
        <section className="space-y-8 bg-card rounded-lg p-8 shadow-xl border">
            <div className="text-center">
                <h2 className="font-headline text-4xl text-primary-foreground">The Fun Zone</h2>
                <p className="text-muted-foreground mt-2">Time for some interactive shenanigans.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                     <h3 className="font-headline text-2xl flex items-center gap-3"><Sparkles className="text-primary-foreground h-6 w-6"/> Meme Hall of Fame</h3>
                     <p className="text-muted-foreground">A collection of moments that live in our heads rent-free.</p>
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
                </div>
                <div className="space-y-4">
                    <h3 className="font-headline text-2xl flex items-center gap-3"><Camera className="text-primary-foreground h-6 w-6"/> Throwback Moment</h3>
                    <p className="text-muted-foreground">One for the history books. Click to remember!</p>
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
                </div>
            </div>

             <div className="pt-8 text-center">
                <h3 className="font-headline text-2xl flex items-center gap-3 justify-center"><Wand2 className="text-primary-foreground h-6 w-6"/> AI Time Machine</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">Curious to see what 50 years does to us? Upload a photo to find out.</p>
                <div className="mt-4 max-w-md mx-auto">
                    <AiImageSection />
                </div>
            </div>
        </section>

      </main>
      
       <footer className="text-center py-8 mt-12 px-4 bg-primary/10">
            <p className="text-muted-foreground">Made with ❤️ by your favorite people.</p>
        </footer>

    </div>
  );
}

    

    