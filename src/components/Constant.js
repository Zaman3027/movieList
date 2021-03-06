const movieData =[
    {
        id:1,
      name : 'Black Panther',
      bio : '"Black Panther" follows T\'Challa who, after the events of "Captain America: Civil War," returns home to the isolated, technologically advanced African nation of Wakanda to take his place as King. However, when an old enemy reappears on the radar, T\'Challa\'s mettle as King and Black Panther is tested when he is drawn into a conflict that puts the entire fate of Wakanda and the world at risk.',
      image : 'https://resizing.flixster.com/t-o6INqTkgsjD6U0oZR1TXYUi6Y=/fit-in/1152x864/v1.bjsxODM0MzU4O2o7MTc5NzY7MTIwMDszMDAwOzE2ODg',
      learnMore : 'https://www.rottentomatoes.com/m/black_panther_2018'
    },
    {
        id:2,
      name : 'MISSION: IMPOSSIBLE - FALLOUT',
      bio : 'The best intentions often come back to haunt you. MISSION: IMPOSSIBLE - FALLOUT finds Ethan Hunt (Tom Cruise) and his IMF team (Alec Baldwin, Simon Pegg, Ving Rhames) along with some familiar allies (Rebecca Ferguson, Michelle Monaghan) in a race against time after a mission gone wrong. Henry Cavill, Angela Bassett, and Vanessa Kirby also join the dynamic cast with filmmaker Christopher McQuarrie returning to the helm.',
      image : 'https://resizing.flixster.com/5VXW1COpivkzHmUkJ1QdOBedq4M=/fit-in/1152x864/v1.bjsxODc4ODIxO2o7MTc5NzY7MTIwMDsxODc1OzI3Nzc',
      learnMore : 'https://www.rottentomatoes.com/m/mission_impossible_fallout'
    },
    {
        id:3,
      name : 'BLACKKKLANSMAN',
      bio : 'From visionary filmmaker Spike Lee comes the incredible true story of an American hero. It\'s the early 1970s, and Ron Stallworth (John David Washington) is the first African-American detective to serve in the Colorado Springs Police Department. Determined to make a name for himself, Stallworth bravely sets out on a dangerous mission: infiltrate and expose the Ku Klux Klan. The young detective soon recruits a more seasoned colleague, Flip Zimmerman (Adam Driver), into the undercover investigation of a lifetime. ',
      image : 'https://resizing.flixster.com/yYMO5hj2T-NSg-bzjOEcRd9-SSs=/fit-in/1152x864/v1.bjsyMDU3NTAyO2o7MTc5Nzg7MTIwMDsyMTAwOzE0MDA',
      learnMore : 'https://www.rottentomatoes.com/m/blackkklansman'
    },
    {
        id:4,
      name : 'SPIDER-MAN: INTO THE SPIDER-VERSE',
      bio : 'Phil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that\'s the first of its kind. Spider-Man: Into the Spider-Verse introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.',
      image : 'https://resizing.flixster.com/bOPvVP2xVgjDa5V_609uYIVUAUo=/fit-in/1152x864/v1.bjsyMTQxODk3O2o7MTc5Nzk7MTIwMDsxNDY0OzIxOTY',
      learnMore : 'https://www.rottentomatoes.com/m/spider_man_into_the_spider_verse'
    },
    {
        id:5,
      name : 'A STAR IS BORN',
      bio : '"A Star Is Born," Bradley Cooper and Lady Gaga fuse their considerable talents to depict the raw and passionate tale of Jack and Ally, two artistic souls coming together, on stage and in life. Theirs is a complex journey through the beauty and the heartbreak of a relationship struggling to survive. In this new take on the iconic love story, four-time Oscar nominee Cooper ("American Sniper," "American Hustle," "Silver Linings Playbook"), makes his directorial debut, and also stars alongside multiple award-winning, Oscar-nominated music superstar Gaga in her first leading role in a major motion picture. ',
      image : 'https://resizing.flixster.com/za32dyu7vQTiivKOWq4As0eJ7pw=/fit-in/1152x864/v1.bjsxOTQ4Mzg1O2o7MTc5Nzc7MTIwMDs2MDE2OzQwMTY',
      learnMore : 'https://www.rottentomatoes.com/m/a_star_is_born_2018'
    },
    {
        id:6,
      name : 'A QUIET PLACE',
      bio : 'In the modern horror thriller A QUIET PLACE, a family of four must navigate their lives in silence after mysterious creatures that hunt by sound threaten their survival. If they hear you, they hunt you.',
      image : 'https://resizing.flixster.com/Dy585GEwjD1LeC5g7rf6nNdaNtg=/fit-in/1152x864/v1.bjsxODgyNTg1O2o7MTc5NzY7MTIwMDs4NzM7NTMy',
      learnMore : 'https://www.rottentomatoes.com/m/a_quiet_place_2018'
    },
    {
        id:7,
      name : 'ROMA',
      bio : 'The most personal project to date from Academy Award (R)-winning director and writer Alfonso Cuarón (Gravity, Children of Men, Y Tu Mama Tambien), ROMA follows Cleo (Yalitza Aparicio), a young domestic worker for a family in the middle-class neighborhood of Roma in Mexico City. Delivering an artful love letter to the women who raised him, Cuarón draws on his own childhood to create a vivid and emotional portrait of domestic strife and social hierarchy amidst political turmoil of the 1970s. Cuarón\'s first project since the groundbreaking Gravity in 2013, ROMA will be available in theaters and on Netflix later this year.',
      image : 'https://resizing.flixster.com/26L4uxds0gZWeeG50cQ2QZ8Pq2o=/fit-in/1152x864/v1.bjsyMTQyMTgyO2o7MTc5Nzk7MTIwMDsyNTYwOzE0NDA',
      learnMore : 'https://www.rottentomatoes.com/m/roma_2018'
    },
    {
        id:8,
      name : 'PADDINGTON 2',
      bio : 'PADDINGTON 2 finds Paddington happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy\'s hundredth birthday, Paddington spots a unique pop-up book in Mr. Gruber\'s antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it\'s up to Paddington and the Browns to unmask the thief... Helmed by twice BAFTA nominated director Paul King, PADDINGTON 2 is co-produced by multi award-winning David Heyman / Heyday Films (producer of all eight of the HARRY POTTER films, GRAVITY, THE BOY IN THE STRIPED PYJAMAS, FANTASTIC BEASTS AND WHERE TO FIND THEM) and StudioCanal, who will also distribute in the UK, France, Germany, Australia and New Zealand. ',
      image : 'https://resizing.flixster.com/jT3qOegAwCRuM3mCwObUhuZR9tM=/fit-in/1152x864/v1.bjsxNjMyNzkxO2o7MTc5NzM7MTIwMDsyNTU0OzEwNTI',
      learnMore : 'https://www.rottentomatoes.com/m/paddington_2'
    },
    {
        id:9,
      name : 'CALL ME BY YOUR NAME',
      bio : 'CALL ME BY YOUR NAME, the new film by Luca Guadagnino, is a sensual and transcendent tale of first love, based on the acclaimed novel by André Aciman. It\'s the summer of 1983 in the north of Italy, and Elio Perlman (Timothée Chalamet), a precocious 17- year-old American-Italian, spends his days in his family\'s 17th century villa transcribing and playing classical music, reading, and flirting with his friend Marzia (Esther Garrel). Elio enjoys a close relationship with his father (Michael Stuhlbarg), an eminent professor specializing in Greco-Roman culture, and his mother Annella (Amira Casar), a translator, who favor him with the fruits of high culture in a setting that overflows with natural delights. While Elio\'s sophistication and intellectual gifts suggest he is already a fully-fledged adult, there is much that yet remains innocent and unformed about him, particularly about matters of the heart. One day, Oliver (Armie Hammer), a charming American scholar working on his doctorate, arrives as the annual summer intern tasked with helping Elio\'s father.',
      image : 'https://resizing.flixster.com/GtXZ-cuKuNL8VnpMIUvFntUD5ak=/fit-in/1152x864/v1.bjsxNDc3MDAxO2o7MTc5NzI7MTIwMDs3MTA7NDgw',
      learnMore : 'https://www.rottentomatoes.com/m/call_me_by_your_name'
    },
    {
        id:10,
      name : 'INCREDIBLES 2',
      bio : 'Everyone\'s favorite family of superheroes is back in "Incredibles 2"--but this time Helen (voice of Holly Hunter) is in the spotlight, leaving Bob (voice of Craig T. Nelson) at home with Violet (voice of Sarah Vowell) and Dash (voice of Huck Milner) to navigate the day-to-day heroics of "normal" life. It\'s a tough transistion for everyone, made tougher by the fact that the family is still unaware of baby Jack-Jack\'s emerging superpowers. When a new villain hatches a brilliant and dangerous plot, the family and Frozone (voice of Samuel L. Jackson) must find a way to work together again--which is easier said than done, even when they\'re all Incredible.',
      image : 'https://resizing.flixster.com/w-1dAUt5M-wLzWXdwmdpLLgGQ5M=/fit-in/1152x864/v1.bjsxOTYyMjA1O2o7MTc5Nzc7MTIwMDs0MDk2OzE4NjI',
      learnMore : 'https://www.rottentomatoes.com/m/incredibles_2'
    },
    
    
  ]
    
  







export default movieData;