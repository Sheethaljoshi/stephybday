
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Mail, Sparkles, Wand2, MessageSquareHeart, Heart, GitCommit, ChevronDown, LockKeyhole, FileText, ArrowLeft, MapPin, PartyPopper } from 'lucide-react';
import { LetterToStephyPage } from './LetterToStephyPage';
import { MemoryLaneMap } from './MemoryLaneMap';
import { Confetti } from './Confetti';

const memeImages = PlaceHolderImages.filter(img => img.id.startsWith('meme'));
const throwbackImage = { imageUrl: '/throwback.jpeg', description: 'Throwback photo', imageHint: 'A cherished throwback moment' } as const;
const wishImages = PlaceHolderImages.filter(img => img.id.startsWith('wish'));
const finalSurpriseImage = PlaceHolderImages.find(img => img.id === 'final-surprise');

const memeCaptions: { [key: string]: string } = {
  meme1: "This is so us trying to figure out plans.",
  meme2: "Her face when she sees a cute dog.",
  meme3: "When the gossip is just too good.",
};

const wishCaptions: { [key: string]: string } = {
  wish1: "Wishing you a lifetime of happiness, laughter, and endless adventures. Happy Birthday!",
  wish2: "To our dearest friend, may your future be as bright and beautiful as your spirit. We love you!",
  wish3: "Happy Birthday! Never forget how much you're loved. Here's to many more years of amazing memories.",
};


export function MainContent() {
  const [showStephyLetter, setShowStephyLetter] = React.useState(false);
  const [showSurpriseConfetti, setShowSurpriseConfetti] = React.useState(false);

  const handleSurpriseClick = () => {
    setShowSurpriseConfetti(true);
    setTimeout(() => {
        setShowSurpriseConfetti(false);
    }, 4000);
  }

  if (showStephyLetter) {
    return <LetterToStephyPage onBack={() => setShowStephyLetter(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-background animate-in fade-in duration-1000 font-body">
      {showSurpriseConfetti && <Confetti />}
      <header className="text-center py-16 px-4 bg-primary/10">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">Happy Birthday, Stephy!</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Welcome to your digital time capsule, curated with love (and a little bit of sass) by your favorite people.</p>
      </header>
      
      <main className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-12">

        <section className="bg-card rounded-2xl shadow-xl border p-8 md:p-12">
            <div className="text-center mb-8">
                <h2 className="font-headline text-4xl text-primary-foreground flex items-center justify-center gap-3"><MessageSquareHeart className="text-primary-foreground h-8 w-8"/>Wishes From Your Loved Ones</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">A few messages from the people who love you most, to carry with you always.</p>
            </div>
             <Carousel className="w-full max-w-3xl mx-auto" opts={{ loop: true }}>
               <CarouselContent>
                 {wishImages.map((wish) => (
                   <CarouselItem key={wish.id} className="text-center">
                     <div className="p-1">
                         <CardContent className="flex aspect-[16/10] items-center justify-center p-0 relative rounded-lg overflow-hidden border">
                           <Image
                             src={wish.imageUrl}
                             alt={wish.description}
                             fill
                             data-ai-hint={wish.imageHint}
                             className="object-cover w-full h-full"
                           />
                            <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/50">
                             <p className="font-headline text-white text-2xl md:text-3xl leading-snug text-center drop-shadow-md">{wishCaptions[wish.id]}</p>
                         </div>
                         </CardContent>
                     </div>
                   </CarouselItem>
                 ))}
               </CarouselContent>
               <CarouselPrevious />
               <CarouselNext />
             </Carousel>
        </section>

        {/* --- Letters Section --- */}
        <section className="space-y-8">
            <div className="text-center">
                <h2 className="font-headline text-4xl text-primary-foreground">A Couple of Notes...</h2>
                <p className="text-muted-foreground mt-2">From us, to you (and your future hubby).</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center h-full group">
                        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                           <div className="mx-auto bg-primary/20 p-4 rounded-full mb-4 w-fit transition-transform group-hover:scale-110">
                             <Mail className="h-10 w-10 text-primary-foreground" />
                           </div>
                           <h3 className="font-headline text-2xl">A Top-Secret Letter</h3>
                           <p className="text-muted-foreground mt-2">For the future Mr. Stephy's eyes only. Click to unseal.</p>
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

                <Card className="shadow-lg overflow-hidden flex flex-col items-center justify-center text-center h-full group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300" onClick={() => setShowStephyLetter(true)}>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                       <div className="mx-auto bg-primary/20 p-4 rounded-full mb-4 w-fit transition-transform group-hover:scale-110">
                         <FileText className="h-10 w-10 text-primary-foreground" />
                       </div>
                       <h3 className="font-headline text-2xl">To the Stephy of the Future</h3>
                       <p className="text-muted-foreground mt-2">A few words for the years to come. Click to read.</p>
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
        
        <section className="bg-card rounded-2xl shadow-xl border p-8 md:p-12">
            <div className="text-center mb-8">
                <h2 className="font-headline text-4xl text-primary-foreground flex items-center justify-center gap-3"><Sparkles className="text-primary-foreground h-8 w-8"/>Meme Hall of Fame</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">A collection of moments that live in our heads rent-free, because normal photos are too mainstream.</p>
            </div>
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
        </section>


        <div className="relative text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-dashed border-border"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-background px-4 text-muted-foreground"><GitCommit /></span>
            </div>
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h2 className="font-headline text-4xl text-primary-foreground flex items-center justify-center md:justify-start gap-3"><Camera className="h-8 w-8"/> A Moment in Time</h2>
                <p className="text-muted-foreground mt-2">8th Grade Family Get Together... Remember this?</p>
                
                {throwbackImage && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="mt-6 bg-white p-3 pb-8 rounded-lg shadow-lg rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-transform duration-300 cursor-pointer w-3/4 mx-auto md:w-full">
                                <Image
                                    src={throwbackImage.imageUrl}
                                    alt={throwbackImage.description}
                                    width={600}
                                    height={600}
                                    data-ai-hint={throwbackImage.imageHint}
                                    className="rounded-md w-full h-auto"
                                />
                                <p className="font-headline text-lg mt-3 text-center text-gray-700">December 2018 ❤️</p>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Throwback Moment 📸</DialogTitle>
                            </DialogHeader>
                            <div className="relative mt-4">
                                <Image
                                    src={throwbackImage.imageUrl}
                                    alt={throwbackImage.description}
                                    width={600}
                                    height={800}
                                    data-ai-hint={throwbackImage.imageHint}
                                    className="rounded-lg shadow-xl w-full h-auto"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
            
            <section className="bg-card rounded-2xl shadow-xl border p-8 md:p-12 text-center h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                    <h2 className="font-headline text-3xl text-primary-foreground flex items-center justify-center gap-2"> Memory Lane Map 📍</h2>
                    <p className="text-muted-foreground mt-2 max-w-xl mx-auto">A trip down memory lane, charting the places and moments that defined our friendship.</p>
                </div>
                <MemoryLaneMap />
            </section>
        </section>

        <div className="relative text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-dashed border-border"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-background px-4 text-muted-foreground"><GitCommit /></span>
            </div>
        </div>

        <section className="text-center py-12">
           <h2 className="font-headline text-4xl text-primary-foreground">One Last Thing...</h2>
            <p className="text-muted-foreground mt-2">Just for you.</p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg" className="mt-6 text-xl h-14 group" onClick={handleSurpriseClick}>
                        <PartyPopper className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" />
                        Click for a Final Surprise
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Happy Birthday, from all of us!</DialogTitle>
                        <DialogDescription>
                            We love you! Here's to many more years of friendship.
                        </DialogDescription>
                    </DialogHeader>
                    {finalSurpriseImage && (
                        <ScrollArea className="rounded-md border flex-1">
                            <Image
                                src={finalSurpriseImage.imageUrl}
                                alt={finalSurpriseImage.description}
                                width={1200}
                                height={1800}
                                data-ai-hint={finalSurpriseImage.imageHint}
                                className="w-full h-auto"
                            />
                        </ScrollArea>
                    )}
                </DialogContent>
            </Dialog>
        </section>

      </main>
      
       <footer className="text-center py-8 mt-12 px-4 bg-primary/10">
            <p className="text-muted-foreground">Made with ❤️ by your favorite people.</p>
        </footer>

    </div>
  );
}
