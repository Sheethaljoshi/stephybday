
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


const memeImages = [
  { id: 'meme1', imageUrl: '/1.jpeg', description: 'Meme 1', imageHint: 'funny' },
  { id: 'meme2', imageUrl: '/2.jpeg', description: 'Meme 2', imageHint: 'funny' },
  { id: 'meme3', imageUrl: '/3.jpeg', description: 'Meme 3', imageHint: 'funny' },
  { id: 'meme4', imageUrl: '/4.jpeg', description: 'Meme 4', imageHint: 'funny' },
  { id: 'meme5', imageUrl: '/5.jpeg', description: 'Meme 5', imageHint: 'funny' },
  { id: 'meme6', imageUrl: '/6.jpg', description: 'Meme 6', imageHint: 'funny' },
] as const;
const throwbackImage = { imageUrl: '/throwback.jpeg', description: 'Throwback photo', imageHint: 'A cherished throwback moment' } as const;
const wishImages = [
  { id: 'wish1', imageUrl: '/a.jpeg', description: 'Wish card 1', imageHint: 'greeting' },
  { id: 'wish2', imageUrl: '/b.jpeg', description: 'Wish card 2', imageHint: 'greeting' },
  { id: 'wish3', imageUrl: '/c.jpeg', description: 'Wish card 3', imageHint: 'greeting' },
  { id: 'wish4', imageUrl: '/d.jpeg', description: 'Wish card 4', imageHint: 'greeting' },
] as const;
const finalSurpriseImage = { imageUrl: '/surprise.jpeg', description: 'Final surprise collage', imageHint: 'A celebratory surprise image' } as const;

const memeCaptions: { [key: string]: string } = {
  meme1: "Sometimes I think...",
  meme2: "Not wearing my glasses anymore.",
  meme3: "Ready for war (socializing).",
  meme4: "People with glasses are hot btw.",
  meme5: "What did you study? Architecture.",
  meme6: "I studied abroad once.",
};

const wishCaptions: { [key: string]: string } = {
  wish1: "Wishing you a lifetime of happiness, laughter, and endless adventures. Happy Birthday!",
  wish2: "To our dearest friend, may your future be as bright and beautiful as your spirit. We love you!",
  wish3: "Happy Birthday! Never forget how much you're loved. Here's to many more years of amazing memories.",
  wish4: "More love, more memories, and more joy in the years ahead!",
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
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">Happy Birthday, Stephy💖</h1>
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
                        <DialogDescription>A top-secret message.</DialogDescription>
                    </DialogHeader>
                     <div className="space-y-4 pt-4 text-base leading-relaxed">
                        <p>Dear future husband of Buffy,</p>
                        <p>Get ready… because you’re dealing with her now. We take no responsibility for her being like this. As you can see, she’s literally the sweetest and friendliest person you’ll ever meet! She’s super shy and cute, but also loves annoying us with her endless questions. Her gossip processing speed is kinda slow, but her brainpower? Bright as hell — don’t even try comparing her to Einstein, she’s in her own league.</p>
                        <p>
                          She will binge-watch shows with you forever, reads like a bookworm, and omg… her curiosity is next level. She will try to find answers to EVERYTHING. She’s strong, mature, and rational—makes smart decisions and always stays true to her heart. She’s genuine, amazing, and will love you till the end. But beware… you hurt her, and we WILL take her back. She’s the most precious person ever.
                          </p>
                          <p>
                          She’s independent, adapts to change like a boss—I mean, she literally moved to London at 18 all alone… no help, nothing. Legendary move only. Heads up: you might have to say things twice for her to register… but once she does, omg she will NEVER forget. She can literally tell you the exact date and time of stuff, so don’t do anything suspicious.
                          </p>
                        <p className="text-sm text-muted-foreground pt-4 border-t">
                        P.S - And just so you know… if you mess with her, remember this: she once won a prize for shot put—this girl can throw an 8kg ball like it’s nothing. So tread carefully bro.</p>
                        <p className="mt-4 font-bold text-right">Good luck, you'll need it<Heart className="inline h-4 w-4 ml-1 text-red-500 fill-red-500"/></p>
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
                <h2 className="font-headline text-4xl text-primary-foreground flex items-center justify-center gap-3"><Sparkles className="text-primary-foreground h-8 w-8"/>Buffy's Meme Hall of Fame</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">We tried writing feelings, but then we remembered memes exist.</p>
            </div>
             <Carousel className="w-full max-w-xl mx-auto" opts={{ loop: true }}>
               <CarouselContent>
                 {memeImages.map((meme) => (
                   <CarouselItem key={meme.id} className="text-center">
                     <div className="p-1">
                        <CardContent className="flex aspect-video items-center justify-center p-0 relative rounded-lg overflow-hidden border bg-black">
                          <Image
                            src={meme.imageUrl}
                            alt={meme.description}
                            fill
                            sizes="(max-width: 768px) 100vw, 600px"
                            data-ai-hint={meme.imageHint}
                            className="object-contain w-full h-full"
                          />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                             
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
                        <DialogTitle>Happy Birthday, from all of us - with Maria's extra special designing!</DialogTitle>
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
