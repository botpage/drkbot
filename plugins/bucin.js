let handler = async (m, { conn, usedPrefix }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, author, 'Quote', `${usedPrefix}bucin`, m)
}
handler.help = ['quote']
handler.tags = ['quotes']
handler.command = /^(quote)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
   "I choose to be alone, not because I'm waiting for the perfect one, but need someone who never gives up." ,
  "A single person is created with a partner he has not yet found." ,
  "Singles. Maybe that's God's way of saying 'Rest from the wrong love'." ,
  "Singles are young people who prioritize their personal development for a classier love later." ,
  "I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect because of my strengths." ,
  "People's boyfriends are our pending soul mates." ,
  "Singles must pass. Everything has a time, when all loneliness becomes a togetherness with a halal lover. Be patient." ,
  "Romeo would die for Juliet, Jack died for saving Rose. The bottom line is, if you want to live, be single." ,
  "I look for people not from their strengths but I look for people from their sincerity." ,
  "Madmates are not flip-flops, which are often mixed up. So continue to be in the proper struggle." ,
  "If you're the guitar strings, I don't want to be the guitarist. Because I don't want to dump you." ,
  "If loving you is an illusion, then let me imagine forever." ,
  "Honey... My job is only to love you, not to fight fate." ,
  "When I'm with you it feels like 1 hour is just 1 second, but when I'm away from you it feels like 1 day becomes 1 year." ,
  "Kolak bananas know sumedang, even though the distance stretches my love will never disappear." ,
  "I want to be the only one, not the one." ,
  "I can't promise to be good. But I promise to always be by your side." ,
  "If I become the people's representative, I will definitely fail. How can I think about the people if the only thing on my mind is you." ,
  "Look at my garden, full of flowers. Look at your eyes, my heart is blooming." ,
  "Promise to be with me now, tomorrow, and forever." ,
  "Missing does not only arise because of the distance apart. But also because of wishes that do not come true." ,
  "You will never be far from me, wherever I go you are always there, because you are always in my heart, only our bodies are far away, not our hearts." ,
  "I know in my every gaze, we are hindered by distance and time. But I believe that in the future we will definitely be together." ,
  "Missing you without ever seeing you is like creating a song you'll never sing." ,
  "There are times when distance is always a barrier between me and you, but still in my heart we are always close." ,
  "If this heart can't contain all the longing, what can I do but pray for you." ,
  "Maybe at this moment I can only hold back this longing. Until the time comes when I can meet and release this longing with you." ,
  "Through the turbulent longing in my heart, there sometimes I really need your loving hugs." ,
  "In the cold of the night, I don't remember anymore; How often I think of you missing you too." ,
  "Missing you is like rain that comes suddenly and lasts a long time. And even after the rain stops, I still miss you." ,
  "Since getting to know you, I want to continue to learn, learn to be the best for you." ,
  "Do you know the difference between a pencil and your face? If a pencil can erase the writing, but if your face nothing can erase it from my mind." ,
  "It's not the National Examination tomorrow that I have to worry about, but the life test I went through after you left me." ,
  "One thing about happiness at school that keeps me motivated is being able to see your smile every day." ,
  "Do you know the difference between going to school and going to your house? If you go to school, you must bring books and pens, but if you go to your house, I just bring my heart and love." ,
  "I'm not sad if tomorrow is Monday, I'm sad if I don't see you." ,
  "My moment of love is perpendicular to your moment of love. Making our love a perfect equilibrium point." ,
  "I'm willing to take part in a running race around the world, as long as you are the finish line." ,
  "My homework is to miss you. Stronger than Maths, broader than Physics, stronger than Biology." ,
  "My love for you is like a metabolism, which will not stop until death." ,
  "If the jelangkung is like you, come and pick me up, I'll take you home." ,
  "Eat whatever I like as long as it's with you, including eating liver." ,
  "Love is like a death sentence. If you don't get shot, you hang it." ,
  "Loving you is like a drug: once you try to be an addiction, you don't try to make yourself curious, you leave it to make you addicted." ,
  "I like snacking the most because snacking is delicious. Moreover, having you completely..." ,
  "This world belongs to just the two of us. Everything else is just a contract." ,
  "For me, all those days are Tuesdays. Tuesday in Heaven when close to you..." ,
  "What if we both become a gang of criminals? I stole your heart and you stole mine." ,
  "You are like the coffee I drank this morning. Bitter, but addictive." ,
  "I'm often jealous of your lipstick. He can kiss you every day, from morning to night." ,
  "Just hearing your name makes me smile like a fool." ,
  "I know your girlfriend isn't the only one, and it's not just me that likes you either." ,
  "Ever since I stopped wishing on you, I've become unmotivated in everything.." ,
  "With you, falling in love is the most intentional heartbreak." ,
  "It's very difficult to feel the happiness of life without you by my side." ,
  "Through the turbulent longing in my heart, there sometimes I really need your loving hugs." ,
  "Just so you know, until now I still love you." ,
  "Sometimes I'm jealous of kites...the strings just break, they're still being chased and don't want to be taken over by other people..." ,
  "I didn't know what love was until I finally met you. But at that moment I knew how it felt to be heartbroken." ,
  "Chasing is tiring, but even more tired waiting\nWaiting for you to notice my existence..." ,
  "Don't stop loving just because you've been hurt. Because there's no rainbow without rain, there's no true love without tears." ,
  "I have a million reasons to forget you, but nothing can force me to stop loving you." ,
  "Sometimes one feels so stupid just to love someone." ,
  "You are the best heartbreak I've never regretted." ,
  "It's not that it's not worth the wait, it's just that it often gives false hope." ,
  "Part of me hurts, Remembering her so close, yet untouchable." ,
  "The best thing about loving someone is secretly praying for them." ,
  "I wish I could shake off this feeling as soon as I lost you." ,
  "For the sake of love we deceive ourselves. Trying to be strong turns out to be dishonorable." ,
  "Think of me as your home, if you go you understand where to go home. Stay if you want and leave if you are bored..." ,
  "I'm confused, should I be disappointed or not? If I'm disappointed, who am I to him?\n\nIf I'm not disappointed, but I'm waiting for his words." ,
  "My longing is like a branch that remains standing. Even though there are no more leaves to accompany it, until it finally dries up, breaks, and dies." ,
  "I guess we're just two strangers now having the same memories." ,
  "Make me hate you even for a few minutes, so it won't be too hard to forget you." ,
  "I love you with all my heart, but you share your feelings with other people instead." ,
  "Loving you might break me, but somehow leaving you doesn't fix me." ,
  "You are first and foremost in my life. But, I am second to you." ,
  "If we can only meet in a dream, I want to sleep forever." ,
  "Seeing you happy is my happiness, even though your happy without me." ,
  "I sometimes envy an object. It has no taste but is always needed. Unlike me, who has taste, but is abandoned and ignored..." ,
  "How can I move if only you my heart rests?" ,
  "Memories of you are like home to me. So whenever my mind wanders, it will always come back to you." ,
  "Why is tissue useful? Because love never runs dry. - Sujiwo Tejo" ,
  "If loving you is a mistake, fine, let me just keep being wrong." ,
  "Ever since I met you, I want to keep learning. Learn to be the best for you." ,
  "Some people act stupid just to see you smile. And they're happy about that." ,
  "I'm not a good person, but will learn to be the best for you." ,
  "We don't die, but it's the wounds that make us unable to walk like we used to anymore." ,
  "Your presence is like the cup of coffee I need every morning, which can encourage me to stay excited about the day." ,
  "I really want to give the world to you. But since that's not possible, then I will give you the most important thing in my life, which is my world." ,
  "It's better to sing humorously but sweetly, rather than pretending to be romantic but having a tragic ending." ,
  "Ben doesn't end up being disappointed, you have to know when to hope and when to stop." ,
  "I, Ki wong Jowo, don't understand the meaning of 'I Love U'. But I understand the meaning of 'I love your crew'." ,
  "Don't need your beautiful and sugih, I'm pretty sure wes are happy and crazy." ,
  "My love for your crew is torn apart by the camera, focus on your crew is still blurry." ,
  "Saben dino is lazy to dream but can't be stupid." ,
  "Don't meet 30 dinos, I feel like a month." ,
  "I'm without you like a cat who lost his rubber. Abyar." ,
  "I want it, I'm playing at the time. Supoyo I'm iso nemokne kowe lewih hot. Ben Lewih dowo when I'm kanggo urip with your slira." ,
  "I've never known what it's like to kui tresno, kajaba sak bare to meet your slira." ,
  "Love aa ka neng moal leungit-leungit sanajan aa geus marry deui." ,
  "Your patience is limited, but your love, ka anjeun henteu aya se epna." ,
  "It's going to be bad if you use Bayclean." ,
  "The memories of the endah keur babarengan jeung anjeun ek tuluy are remembered by nepi ka poho." ,
  "I will always breathe alone, it will take a long time to help myself." ,
  "Nyaahna, you need tea and the bank clerk is still collecting debts (hayoh mumuntil)." ,
  "Urang's patience is the limit, but your love for urang is good for you." ,
  "Hayang I think I'm cursing up the words of love so and so in this world, then I'm bad, I don't want to gather together, so that Anjeun will have a big love for you, Anjeun." ,
  "Calm down wae neng, ari love brother mah sapertos krispatih song; timeless." ,
  "Abdi sanes jalmi nu is perfect pikeun anjeun, sareng sanes oge nu is the best kanggo anjeun. But nu for sure, abdi jalmi hiji-hijina nu continues to be cute anjeun." ,
  "It's enough just to lose the network, you don't." ,
  "I'm often made to eat liver. But knowing you're still here makes me happy again." ,
  "My enemies are those who want to have you too." ,
  "Many are always there, but if you're the only one I want, then what?" ,
  "My sleeping hours are ruined by longing." ,
  "It's enough that China is far away, don't love us." ,
  "What's important is your happiness, I'm not important .." ,
  "My only wish is to be loved by you." ,
  "Me without you is like an ambulance without wiuw wiuw wiuw." ,
  "It's enough that Antarctica is far away. Not Antarctica."
]
