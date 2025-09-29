
"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { MainContent } from '@/components/MainContent';
import { Confetti } from '@/components/Confetti';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Book, Film, Gift, Heart, HelpCircle, Lock, Music, Users, PartyPopper } from 'lucide-react';

const clueAnswers = {
    start: "6B",
    cartoon: "ANGRYBIRDS",
    song: "CHIQUITITA",
    friend: "MARIA",
    teacher: "REKHAMAAM"
};

const clues = [
    { id: 'start', icon: Book, text: "Where did our friendship officially start?", hint: "Annoying Malayalam Class Teacher?", confirmTitle: "Are you sure?", confirmText: "This is where it all began! You should know this one." },
    { id: 'cartoon', icon: Film, text: "Which cartoon character do we always associate with you?", hint: "Red, yellow, black...", confirmTitle: "Really?", confirmText: "You're so close! Try to picture your own concentrate/angry face." },
    { id: 'song', icon: Music, text: "What song did you sing at Arts Fest that we all loved?", hint: "ABBA", confirmTitle: "Gimme! Gimme! Gimme a hint?", confirmText: "We know you're the Art Queen, but do you remember this one?" },
    { id: 'friend', icon: Users, text: "Who is our friend that has never been in your class when 5 of us were together at school?", hint: "You don't need a clue, figure this one out yourself.", confirmTitle: "No hints for this one!", confirmText: "Seriously, this is a giveaway. You got this!" },
    { id: 'teacher', icon: Heart, text: "Which teacher loved you the most?", hint: "Nancy Drew or Geronimo Stilton", confirmTitle: "Need a teacher's pet hint?", confirmText: "Think back to the strictest teacher... who secretly had a soft spot for you." },
];

export function BirthdayPage() {
    const [answers, setAnswers] = useState<Record<string, string>>({
        start: "",
        cartoon: "",
        song: "",
        friend: "",
        teacher: ""
    });
    
    const [correctAnswers, setCorrectAnswers] =useState<Record<string, boolean>>({});
    const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showHintConfetti, setShowHintConfetti] = useState(false);

    const { toast } = useToast();

    const allCorrect = useMemo(() => {
        return clues.every(clue => correctAnswers[clue.id]);
    }, [correctAnswers]);


    const handleInputChange = (id: string, value: string) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const handleClueSubmit = (id: string, answer: string) => {
        if (answers[id].toUpperCase().replace(/\s/g, '') === answer) {
            setCorrectAnswers(prev => ({ ...prev, [id]: true }));
            toast({
                title: "Correct!",
                description: "You're one step closer!",
                className: "bg-green-100 border-green-300 text-green-800"
            });
        } else {
            toast({
                title: "Not quite!",
                description: "Give it another shot!",
                variant: "destructive",
            });
        }
    };
    
    const handleRevealHint = (id: string) => {
        setRevealedHints(prev => ({ ...prev, [id]: true }));
        setShowHintConfetti(true);
        setTimeout(() => {
            setShowHintConfetti(false);
        }, 3000);
    }

    const handleUnlock = () => {
         setShowConfetti(true);
         setTimeout(() => {
             setIsAuthenticated(true);
         }, 1000); // Wait for confetti to be visible
    }

    if (isAuthenticated) {
        return <MainContent />;
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-background font-body">
            {showConfetti && <Confetti />}
            {showHintConfetti && <Confetti />}
            <main className="w-full max-w-2xl">
              <Card className="shadow-2xl animate-in fade-in zoom-in-95 duration-500">
                  <CardHeader className="text-center">
                      <div className="mx-auto bg-primary/20 p-3 rounded-full mb-4 w-fit">
                          <Gift className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="font-headline text-4xl">Alright, spill the tea, birthday girl!</CardTitle>
                      <CardDescription className="text-lg px-6">Your surprise is locked behind some of our best memories. Prove you remember, and it's all yours. No pressure.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="space-y-4 mb-6">
                          {clues.map((clue) => (
                              <div 
                                key={clue.id} 
                                className={`p-4 rounded-lg transition-all duration-300 ${correctAnswers[clue.id] ? 'bg-green-100 border border-green-300' : 'bg-card-foreground/5'}`}
                              >
                                  <div className="flex items-start space-x-4">
                                      <clue.icon className="h-8 w-8 text-primary-foreground mt-1 flex-shrink-0" />
                                      <div>
                                          <p className="font-semibold text-lg">{clue.text}</p>
                                      </div>
                                  </div>
                                  {!correctAnswers[clue.id] && (
                                    <div className="mt-3">
                                        <form onSubmit={(e) => { e.preventDefault(); handleClueSubmit(clue.id, clueAnswers[clue.id as keyof typeof clueAnswers]); }} className="flex gap-2">
                                            <Input
                                                type="text"
                                                placeholder="Your answer..."
                                                value={answers[clue.id]}
                                                onChange={(e) => handleInputChange(clue.id, e.target.value)}
                                                className="text-base h-11"
                                            />
                                            <Button type="submit" size="icon" className="h-11 w-11 flex-shrink-0">
                                                <ArrowRight className="h-5 w-5" />
                                            </Button>
                                        </form>
                                        {!revealedHints[clue.id] && (
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="link" className="text-muted-foreground text-xs h-auto p-0 mt-2">
                                                        <HelpCircle className="h-3 w-3 mr-1" />
                                                        Need a hint?
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>{clue.confirmTitle}</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                           {clue.confirmText}
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Nevermind, I got this</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => handleRevealHint(clue.id)}>
                                                            Yes, I need help
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        )}
                                    </div>
                                  )}
                                  {revealedHints[clue.id] && !correctAnswers[clue.id] && (
                                      <p className="mt-2 text-sm text-accent-foreground p-2 bg-accent/30 rounded-md">
                                          <strong>Hint:</strong> {clue.hint}
                                      </p>
                                  )}
                                  {correctAnswers[clue.id] && (
                                      <div className="mt-2 text-green-700 font-bold flex items-center gap-2">
                                          <PartyPopper size={20} />
                                          <span>Correct! The memory lives on!</span>
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>
                      
                      <Button onClick={handleUnlock} disabled={!allCorrect} className="w-full text-lg h-12 group bg-accent text-accent-foreground hover:bg-accent/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed">
                          {allCorrect ? 'Unlock Your Surprise!' : 'Solve all clues to unlock'}
                          {allCorrect ? <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> : <Lock className="ml-2 h-5 w-5" />}
                      </Button>
                  </CardContent>
              </Card>
            </main>
        </div>
    );
}
