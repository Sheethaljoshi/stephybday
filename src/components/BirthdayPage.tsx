
"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainContent } from '@/components/MainContent';
import { Confetti } from '@/components/Confetti';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Book, Film, Gift, Heart, Lock, Music, Users, PartyPopper } from 'lucide-react';

const clueAnswers = {
    start: "6B",
    cartoon: "ANGRYBIRDS",
    song: "CHIQUITITA",
    friend: "MARIA",
    teacher: "REKHAMAAM"
};

const clues = [
    { id: 'start', icon: Book, text: "Where did our friendship officially start?", hint: "A grade and a section. 📚", answer: clueAnswers.start },
    { id: 'cartoon', icon: Film, text: "Which cartoon character do we always associate with you?", hint: "Hint: They're not happy birds. 🐦", answer: clueAnswers.cartoon },
    { id: 'song', icon: Music, text: "What song did you sing at Arts Fest that we all loved?", hint: "Hint: It's a classic by ABBA. 🎶", answer: clueAnswers.song },
    { id: 'friend', icon: Users, text: "Who is our friend that’s never been in our class yet?", hint: "Hint: Her name starts with M. 💕", answer: clueAnswers.friend },
    { id: 'teacher', icon: Heart, text: "Which teacher loved you the most?", hint: "Hint: Her name ends with 'Ma'am'. ❤️", answer: clueAnswers.teacher },
];

export function BirthdayPage() {
    const [answers, setAnswers] = useState<Record<string, string>>({
        start: "",
        cartoon: "",
        song: "",
        friend: "",
        teacher: ""
    });
    
    const [correctAnswers, setCorrectAnswers] = useState<Record<string, boolean>>({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
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
            <main className="w-full max-w-2xl">
              <Card className="shadow-2xl animate-in fade-in zoom-in-95 duration-500">
                  <CardHeader className="text-center">
                      <div className="mx-auto bg-primary/20 p-3 rounded-full mb-4 w-fit">
                          <Gift className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="font-headline text-4xl">Stop Being Old: A Birthday Intervention</CardTitle>
                      <CardDescription className="text-lg px-6">To make sure your brain hasn't turned to mush, answer these questions to unlock your surprise.</CardDescription>
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
                                          <p className="text-sm text-muted-foreground">{clue.hint}</p>
                                      </div>
                                  </div>
                                  {!correctAnswers[clue.id] && (
                                    <form onSubmit={(e) => { e.preventDefault(); handleClueSubmit(clue.id, clue.answer); }} className="mt-3 flex gap-2">
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
