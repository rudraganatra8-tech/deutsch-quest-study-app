(function () {
  "use strict";

  var FIRST = "2026-10-18";
  var LAST_SPRINT = "2026-10-24";
  var KEY = "deutsch-quest-progress-v1";
  var weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  var plan = [
    {date:"2026-10-14",label:"Day 1",title:"Hallo Deutsch!",unit:"Warm-up + Lesson 1",focus:"Start speaking today: greetings, names, the alphabet and your first German sentence.",core:["Say hello and introduce yourself: name, where you are from, and how you feel.","Review alphabet, spelling names, numbers 0–20, noun capitals, and der/die/das.","Learn pronouns ich/du/er/sie/es/wir/ihr/Sie and make 5 sentences with sein."],bonus:["Record a 30-second self-introduction and listen once.","Make a mini poster with 5 German words that look like English cognates."],note:"Keep the first session friendly and light. Today is about getting words out, not perfect pronunciation."},
    {date:"2026-10-15",label:"Day 2",title:"Meet & greet",unit:"Lesson 1A1–1A2",focus:"Introduce people, choose formal or informal greetings, and ask how someone is.",core:["Practise Hallo/Guten Tag/Auf Wiedersehen and du vs Sie.","Conjugate 5 common present-tense verbs with ich, du, er/sie, wir, ihr, Sie.","Ask and answer Wie heißt du? Woher kommst du? Wie geht es dir/Ihnen?"],bonus:["Do a two-person role-play: meeting a new classmate.","Use a DW Nicos Weg scene and repeat 5 useful lines aloud."],note:"In a normal statement the conjugated verb is usually in position 2: Ich heiße Mira."},
    {date:"2026-10-16",label:"Day 3",title:"Spell it out",unit:"Lesson 1A3–1A4 + 1B",focus:"Spell names, understand numbers and contact details, and form questions and negatives.",core:["Practise alphabet pronunciation and spelling 5 names or places.","Learn numbers 0–100; ask age, phone number, address and postcode.","Make W-questions and yes/no questions; negate a sentence with nicht."],bonus:["Write a tiny profile card with name, age, city and phone number (invent details).","Do 10 textbook workbook questions from the Lesson 1 practice section."],note:"W-word first: Wie heißt du? Yes/no question: Heißt du Alex? Use nicht to negate a verb or description."},
    {date:"2026-10-17",label:"Day 4",title:"Meine Familie",unit:"Lesson 1A5 + 1B",focus:"Talk about family and use the possessive words mein, dein, sein and ihr.",core:["Learn close-family words: Mutter, Vater, Bruder, Schwester, Eltern, Oma, Opa.","Use mein/dein/sein/ihr with a family noun: meine Mutter, sein Bruder.","Practise a 5-sentence family introduction and ask Wer ist das? / Wie alt ist ...?"],bonus:["Draw a small imaginary family tree and label 8 people in German.","Read the book's family texts and answer without translating every word."],note:"The possessive tells whose person or thing it is. Learn each family noun together with der/die/das."},
    {date:"2026-10-18",label:"Day 5",title:"Lesson 1 checkpoint",unit:"Lesson 1 reading + writing",focus:"Bring the whole first lesson together with listening, reading, speaking and a short written profile.",core:["Review greetings, pronouns, present-tense verb endings, question word order and nicht.","Read the Lesson 1 texts about people and families; find names, ages, places and relationships.","Write 8–10 simple sentences about yourself and an imaginary friend or family."],bonus:["Take the app's mixed quiz and redo every missed question.","Speak your writing aloud twice, then try once without looking."],note:"Checkpoint target: introduce yourself and another person with short, clear sentences."},
    {date:"2026-10-19",label:"Day 6",title:"Willkommen zu Hause",unit:"Lesson 2A1–2A2",focus:"Describe housing types, rooms and where young people live.",core:["Learn housing words: Haus, Wohnung, Zimmer, Küche, Bad, Balkon, Garten.","Describe 3 homes with simple adjectives: groß, klein, modern, hell, ruhig.","Use es gibt + accusative to say what a home has: Es gibt einen Balkon."],bonus:["Sketch your dream home and label 8 rooms or features in German.","Practise asking Was gibt es in deiner Wohnung? and answer in full sentences."],note:"Es gibt is followed by the accusative: Es gibt einen Balkon, ein Sofa, eine Küche."},
    {date:"2026-10-20",label:"Day 7",title:"Furniture detective",unit:"Lesson 2A3 + 2B1",focus:"Name furniture and objects, and see how the masculine article changes in the accusative.",core:["Learn furniture: Tisch, Stuhl, Bett, Schrank, Sofa, Sessel, Teppich, Lampe.","Compare subject (nominative) with direct object (accusative): Der Tisch ist neu. Ich kaufe den Tisch.","Practise articles: der→den/ein→einen/kein→keinen; feminine, neuter and plural stay the same here."],bonus:["Play room detective: list 10 objects you can see and write one sentence for each.","Do 10 book exercises on nominative vs accusative."],note:"The biggest beginner clue: masculine changes in the accusative. Ich brauche einen Tisch."},
    {date:"2026-10-21",label:"Day 8",title:"Objects and pronouns",unit:"Lesson 2A4 + 2B4",focus:"Replace repeated object nouns with accusative pronouns and describe whose things they are.",core:["Learn accusative pronouns: mich, dich, ihn, sie, es, uns, euch, Sie.","Swap a noun for a pronoun: Ich sehe den Tisch → Ich sehe ihn.","Review possessives and describe furniture: Das Zimmer hat mein Bett und meinen Schreibtisch."],bonus:["Make 8 noun-to-pronoun swaps aloud, including one masculine, feminine and neuter noun.","Write a 6-line dialogue about visiting or furnishing a flat."],note:"Match the pronoun to the noun's gender and number: der Tisch→ihn, die Lampe→sie, das Bett→es."},
    {date:"2026-10-22",label:"Day 9",title:"Wohnungssuche",unit:"Lesson 2A5 + 2B",focus:"Talk about looking for a home, use kein vs nicht, and learn the key patterns from Lesson 2.",core:["Use kein/keine/keinen before a noun: Es gibt keinen Balkon. Use nicht for adjectives/verbs: Die Wohnung ist nicht groß.","Practise accusative prepositions für, um, durch, ohne, gegen; entlang often follows its noun.","Practise common irregular verbs: du fährst, sprichst, liest, isst, nimmst; understand compound nouns."],bonus:["Read a housing ad and pick out price, rooms, location and furniture.","Make 5 compound nouns: Schlafzimmer, Haustür, Kinderbett; the last noun sets the article."],note:"Think F-U-D-O-G-E for the accusative prepositions. Many irregular vowel changes happen with du and er/sie/es."},
    {date:"2026-10-23",label:"Day 10",title:"Home, in your words",unit:"Lesson 2C–2D + full checkpoint",focus:"Finish the housing reading and writing tasks, then show what you can do across both lessons.",core:["Read housing ads, a shared-flat text and an alternative-housing text; find the key detail asked for.","Write a short email about your home or the flat you are looking for (8–10 German sentences).","Take the mixed quiz; review every wrong answer and finish all Lesson 2 practice through printed p.128."],bonus:["Explain nominative, accusative, kein/nicht and accusative pronouns aloud in English, then give one German example each.","Use flashcards until you get 15 in a row right."],note:"You have now covered the planned new learning. The last two days are for recall and confidence."},
    {date:"2026-10-24",label:"Review day",title:"Mock-test Saturday",unit:"Full syllabus review",focus:"Practise retrieval under a timer and repair the two weakest areas.",core:["Set a 30-minute timer: do 10 minutes vocabulary, 10 grammar questions, and 10 reading/writing minutes.","Write a self-introduction and a short home description without notes.","Redo missed quiz questions and the workbook pages you marked."],bonus:["Ask someone to quiz you orally on family, numbers, rooms and furniture.","Repeat one short DW or Goethe listening activity and note 5 words you catch."],note:"Use your mistake list; rereading everything is less useful than fixing specific errors."},
    {date:"2026-10-25",label:"Final review",title:"Calm, confident German",unit:"Light recall before the exam",focus:"Keep it short. Review your memory, not every page.",core:["Review the article changes and pronoun chart once; say one example for each.","Speak a 1-minute introduction and a 1-minute description of a home.","Review the 20 hardest words, then stop and get good rest."],bonus:["Do 5 easy quiz questions only if they make you feel calmer.","Pack what you need for the exam and finish studying early."],note:"Viel Erfolg! Trust the work you have put in."}
  ];

  // The teacher's checklist is the authoritative exam scope; the 10-day sprint follows it.
  plan[0]={date:"2026-10-14",label:"Day 1",title:"Schulsachen + word basics",unit:"Chapter 0 · nouns and present verbs",focus:"Start with school objects, noun articles, singular/plural forms, and the first present-tense verb pattern.",core:["Learn 12 school-supply nouns with articles: der Kuli, das Heft, die Schere, der Bleistift, etc.","Make singular/plural pairs and notice common endings: das Buch → die Bücher; der Stift → die Stifte.","Practise present-tense verb conjugation (Form 1) with lernen: ich lerne, du lernst, er lernt, wir lernen."],bonus:["Label 8 real school objects in German, including each article.","Say the six lernen forms aloud, then write them from memory."],note:"For a new noun, remember the article and plural together. A useful first-verb pattern is -e, -st, -t, -en, -t, -en."};
  plan[1]={date:"2026-10-15",label:"Day 2",title:"Who is doing it?",unit:"Lesson 1 · nominative",focus:"Learn personal pronouns and definite/indefinite articles for the subject of a sentence.",core:["Memorise nominative pronouns: ich, du, er, sie, es, wir, ihr, sie/Sie.","Review nominative articles: der/ein, die/eine, das/ein, plural die/—.","Build 8 simple subject + verb sentences: Der Schüler lernt. Eine Freundin wohnt hier."],bonus:["Sort 12 nouns into der, die, das, and plural groups.","Use the Learn tab to rehearse pronouns and articles, then take five quiz questions."],note:"Nominative is the subject: who or what is doing the action? The subject controls the verb."};
  plan[2]={date:"2026-10-16",label:"Day 3",title:"Ask the right question",unit:"Lesson 1 · W-questions",focus:"Use the exact question words in your checklist and make question word order automatic.",core:["Learn wie (how), was (what), woher (from where), wohin (to where), welche/r/s (which).","Practise wie viele (how many countable things) and wie viel (how much / how many as an amount).","Write and answer 8 questions about a person, school things, place, direction and number."],bonus:["Do a 2-minute interview aloud: Wie heißt du? Woher kommst du? Wohin gehst du?","Make question cards and answer them without translating word-by-word."],note:"In a W-question, the question word comes first and the conjugated verb comes next: Woher kommst du?"};
  plan[3]={date:"2026-10-17",label:"Day 4",title:"Familie, Freunde und Ich",unit:"Lesson 1 · possessives in nominative",focus:"Introduce people and use possessive articles as subjects or descriptions.",core:["Learn family and friend words; learn every noun with its article and plural.","Use nominative possessives: mein Bruder, meine Freundin, mein Heft, meine Freunde.","Write 6 sentences introducing your family or friends and ask/answer Wer ist das?"],bonus:["Draw a small family tree and describe 8 people in German.","Practise mein/dein/sein/ihr with masculine, feminine, neuter and plural nouns."],note:"Possessive articles show whose person or thing it is. Match the ending to the noun: mein Bruder, meine Schwester."};
  plan[4]={date:"2026-10-18",label:"Day 5",title:"Say no + nominative review",unit:"Lesson 1 · nicht and articles",focus:"Negate statements with nicht and review definite/indefinite articles in the nominative.",core:["Use nicht to negate a verb or description: Ich wohne nicht hier. Das ist nicht groß.","Review der/die/das and ein/eine/ein in nominative sentences.","Do a mixed Lesson 1 checkpoint: pronouns, W-questions, possessives, nicht, and articles."],bonus:["Write a short self-introduction with 8 sentences; include 2 questions and 2 negatives.","Read the book's Lesson 1 family texts and locate the requested facts."],note:"nicht negates an action or description. kein is for saying no/not any before a noun; that is in Lesson 2."};
  plan[5]={date:"2026-10-19",label:"Day 6",title:"Wie junge Leute wohnen",unit:"Lesson 2 · complete topic vocabulary",focus:"Build the Lesson 2 word bank: housing nouns, room and furniture adjectives, and useful verbs.",core:["Learn the Lesson 2 nouns for homes, rooms, furniture and household objects, with articles/plurals.","Learn and use its adjectives: groß, klein, modern, hell, bequem, ruhig, etc.","Practise the housing verbs: wohnen, suchen, haben, brauchen, kaufen, finden, nehmen."],bonus:["Sketch and label your room with 12 nouns; add 5 describing adjectives.","Make a 3-column vocabulary sheet: Nomen / Adjektive / Verben."],note:"The exam list says all Chapter 2 vocabulary. Use the book's Lernwortschatz and exercises as your complete word source."};
  plan[6]={date:"2026-10-20",label:"Day 7",title:"Accusative people + things",unit:"Lesson 2 · pronouns, articles, verbs",focus:"Spot direct objects and practise the accusative pronouns, articles and accusative verbs.",core:["Learn accusative pronouns: mich, dich, ihn, sie, es, uns, euch, sie/Sie.","Change articles: der→den, ein→einen; die/eine, das/ein and plural die stay the same.","Practise accusative verbs (haben, brauchen, kaufen, suchen, finden, besuchen, lesen) with direct objects."],bonus:["Change 10 nouns into pronouns: Ich finde den Tisch → Ich finde ihn.","Make 8 mini sentences and underline the subject once and the accusative object twice."],note:"Ask wen? or was? to find the direct object. Masculine nouns show the clearest article change in accusative."};
  plan[7]={date:"2026-10-21",label:"Day 8",title:"kein, es gibt, prepositions",unit:"Lesson 2 · accusative patterns",focus:"Use the accusative after es gibt and the key prepositions; distinguish kein from nicht.",core:["Say what a home has: Es gibt + accusative — Es gibt einen Balkon, ein Sofa, eine Küche.","Use kein/keine/keinen before nouns; use nicht with adjectives or verbs.","Learn accusative prepositions für, um, durch, ohne and gegen; notice entlang often follows its noun."],bonus:["Describe what is and is not in a room with 8 es gibt / kein sentences.","Create five silly sentences with accusative prepositions, then check the article."],note:"Es gibt takes accusative. Compare: Es gibt keinen Balkon. Die Wohnung ist nicht teuer."};
  plan[8]={date:"2026-10-22",label:"Day 9",title:"Possessives in accusative",unit:"Lesson 2 · articles + possessives",focus:"Decline possessive articles in accusative and consolidate article, pronoun and verb patterns.",core:["Practise accusative possessives: Ich sehe meinen Bruder; Ich sehe meine Schwester/mein Heft/meine Freunde.","Mix definite, indefinite and possessive articles in all four gender/number groups.","Review accusative verbs and use an object pronoun to avoid repeating a noun."],bonus:["Do a timed 15-item article drill and correct it in a different colour.","Write a short flat description using es gibt, kein, nicht, für, and 3 possessives."],note:"The possessive ending follows the same pattern as ein: masculine accusative mein→meinen; feminine/neuter/plural stay in the familiar forms."};
  plan[9]={date:"2026-10-23",label:"Day 10",title:"Berufe + full syllabus run",unit:"Berufe und Tätigkeiten · mixed exam",focus:"Add the teacher-listed jobs and activities, then retrieve every topic once without notes.",core:["Learn professions and activities: Arzt/Ärztin, Lehrer/in, Koch/Köchin, Programmierer/in, Journalist/in, etc.","Match people to activities: unterrichten, kochen, Programme schreiben, Musik machen, Autos reparieren.","Do a mixed mock across Chapter 0, Lesson 1, Lesson 2 and jobs; mark errors for the two review days."],bonus:["Give a 1-minute German introduction, describe a home, and say 5 job/activity sentences.","Finish relevant textbook practice through the teacher's p.128 cut-off."],note:"The teacher's list also includes Berufe und Tätigkeiten. This app includes that vocabulary even if your book's page numbering differs."};

  // A focused 7-day route, followed by one revision day. Page ranges are an even split;
  // the learner's first-page note helps us confirm the textbook's actual topic order.
  plan.splice(0,plan.length,
    {date:"2026-10-18",label:"Day 1",pages:"1–19",title:"The School-Supply Stash",unit:"Chapter 0 · Schulsachen",focus:"Name classroom objects, learn singular/plural forms, and start Form 1 verbs.",core:["Learn school-supply nouns with their article and plural.","Practise singular and plural patterns with real examples.","Use the first present-tense verb form in short sentences."],bonus:["Label 8 objects around you in German."],note:"Learn each noun as a set: article + word + plural."},
    {date:"2026-10-19",label:"Day 2",pages:"20–38",title:"The Subject Squad",unit:"Lesson 1 · nominative",focus:"Meet the pronouns and spot who is doing the action in a sentence.",core:["Practise nominative pronouns.","Match der/die/das and ein/eine/ein to the subject.","Introduce yourself and a friend with short sentences."],bonus:["Make 6 subject + verb sentences."],note:"Nominative is the sentence's main character: who or what does the action?"},
    {date:"2026-10-20",label:"Day 3",pages:"39–56",title:"The Question-Word Detective",unit:"Lesson 1 · W-Fragen",focus:"Ask about people, things, places, direction, choice, and quantity.",core:["Use wie, was, woher and wohin.","Choose welcher/welche/welches for 'which'.", "Tell wie viele (countable) from wie viel (amount)."],bonus:["Interview an imaginary classmate with 6 W-questions."],note:"Put the question word first, then the conjugated verb: Woher kommst du?"},
    {date:"2026-10-21",label:"Day 4",pages:"57–74",title:"The Family & Friends Guild",unit:"Lesson 1 · possessives + negatives",focus:"Talk about whose things they are, say 'not', and review nominative articles.",core:["Use mein/dein/sein/ihr with nominative nouns.","Use nicht to negate a verb or description.","Review definite and indefinite nominative articles."],bonus:["Write a 6-line introduction about an imaginary family."],note:"Match the possessive ending to the noun: mein Bruder, meine Schwester."},
    {date:"2026-10-22",label:"Day 5",pages:"75–92",title:"The Dream-Flat Scavenger Hunt",unit:"Lesson 2 · Wortschatz",focus:"Collect the chapter's housing nouns, describing words, and useful verbs.",core:["Learn Chapter 2 nouns with articles and plurals.","Describe rooms with adjectives.","Use the chapter's housing verbs in short sentences."],bonus:["Draw a tiny room and label 10 objects."],note:"Use the textbook's full Chapter 2 Lernwortschatz as the source for every word."},
    {date:"2026-10-23",label:"Day 6",pages:"93–110",title:"The Accusative Object Hunt",unit:"Lesson 2 · Akkusativ",focus:"Find direct objects and use the accusative patterns around the home.",core:["Change masculine articles in the accusative: der→den, ein→einen.","Use accusative pronouns and accusative verbs.","Use kein, es gibt, accusative prepositions, and possessives in context."],bonus:["Describe a room using 5 accusative sentences."],note:"Ask wen? or was? for the direct object. Es gibt also takes the accusative."},
    {date:"2026-10-24",label:"Day 7",pages:"111–128",title:"The Job-Fair Final Boss",unit:"Lesson 2 + Berufe",focus:"Finish accusative possessives, learn jobs and activities, then mix the whole syllabus.",core:["Use possessive articles in the accusative.","Learn Berufe und Tätigkeiten.","Complete a mixed Chapter 0, Lesson 1, and Lesson 2 challenge."],bonus:["Give a 1-minute German intro and home tour."],note:"Small recall beats rereading: hide the answer, try it, then check."},
    {date:"2026-10-25",label:"Revision",pages:"1–128",title:"The Grand German Review",unit:"Revision · all chapters",focus:"Review the complete syllabus with mixed recall, a short mock, and a calm final check.",core:["Review your missed questions and toughest vocabulary.","Explain the nominative and accusative with one example each.","Write a short introduction and home description without notes."],bonus:["Do a 20-minute timed mixed quiz, then stop and rest."],note:"You do not need perfect German. Show what you remember, repair a few gaps, and rest."}
  );

  function makeStep(title,teach,example,prompt,options,answer,why,analogy){
    return {title:title,teach:teach,example:example,prompt:prompt,options:options,answer:answer,why:why,analogy:analogy||"Think of it like sorting school supplies into the right labelled tray. The label helps you choose the right form."};
  }
  var questDays = [
    {steps:[
      makeStep("German nouns wear capital letters","Every German noun starts with a capital letter, even in the middle of a sentence.","das Heft = the notebook","Which word is a noun written correctly?",["lernt","Heft","und"],1,"Heft names a thing, so it starts with a capital letter.","A capital letter is a name badge German gives every noun."),
      makeStep("Meet the pencil","Learn a classroom object together with its article.","der Bleistift = the pencil","Choose 'the pencil'.",["die Bleistift","der Bleistift","das Bleistift"],1,"Bleistift is masculine: der Bleistift.","The article is part of the word's uniform. Learn them together."),
      makeStep("The notebook","Some objects use das.","das Heft = the notebook","Complete: ___ Heft",["der","die","das"],2,"Heft is neuter: das Heft.","Think of article choice like picking the right key for a lock."),
      makeStep("Scissors have an article too","Learn useful classroom nouns as complete chunks.","die Schere = the scissors","Which means 'the scissors'?",["die Schere","der Schere","das Schere"],0,"Schere is feminine: die Schere.","Keep the article attached, like a label on the object."),
      makeStep("One pen, many pens","Plural nouns use die in the nominative, whatever the singular gender.","der Stift → die Stifte","Choose the plural phrase.",["der Stifte","die Stifte","das Stifte"],1,"Plural nouns use die: die Stifte.","A whole group gets the same plural label: die."),
      makeStep("The book changes shape","Some plurals add an umlaut and -er.","das Buch → die Bücher","What is the plural of Buch?",["die Buchs","die Bücher","die Buche"],1,"The plural is die Bücher.","The two dots are a tiny sound change marker, like a word changing clothes."),
      makeStep("A bag gets -en","Many feminine nouns form the plural with -n or -en.","die Tasche → die Taschen","Complete the plural: die Tasche → die ___",["Taschen","Taschee","Tasche"],0,"Tasche becomes Taschen.","Plural endings are like add-on pieces; learn the piece with the word."),
      makeStep("The ruler","A useful school noun is das Lineal.","das Lineal = the ruler","Choose the correct article.",["der Lineal","die Lineal","das Lineal"],2,"Lineal is neuter: das Lineal.","Use the article as a memory hook for the noun."),
      makeStep("Form 1: ich","For a regular verb, ich often takes -e.","ich lern + e = ich lerne","Complete: Ich ___ Deutsch. (lernen)",["lerne","lernst","lernt"],0,"With ich, lernen becomes lerne.","The verb ending is a little name tag showing who is learning."),
      makeStep("Form 1: du","A regular verb often takes -st with du.","du lern + st = du lernst","Complete: Du ___ Deutsch. (lernen)",["lerne","lernst","lernen"],1,"With du, the regular ending is -st: du lernst.","Du has its own verb ending, like a two-person team badge.")
    ]},
    {steps:[
      makeStep("Ich is the subject","A subject pronoun tells us who does the action.","Ich lerne. = I learn.","Which pronoun means 'I'?",["ich","du","wir"],0,"ich means I.","The subject is the hero doing the action."),
      makeStep("Du is informal you","Use du with one friend or someone your age in an informal setting.","Du bist nett. = You are kind.","Which pronoun would you use with one friend?",["Sie","du","wir"],1,"du is the informal singular 'you'.","Think of du as your close-friend setting."),
      makeStep("Sie is formal you","Formal Sie is capitalized and used politely.","Wie heißen Sie? = What is your name? (formal)","Which is the polite 'you'?",["sie","Sie","ihr"],1,"Capital-S Sie is formal you.","The capital letter is a polite little bow."),
      makeStep("He: er","Use er for a masculine person or noun.","Der Bruder lernt. Er lernt. = The brother learns. He learns.","Replace der Bruder with a pronoun.",["sie","er","es"],1,"Der Bruder is masculine, so use er.","Match the pronoun to the noun's article label."),
      makeStep("She: sie","Use sie for a feminine person or noun.","Die Freundin wohnt hier. Sie wohnt hier.","Replace die Freundin with a pronoun.",["er","es","sie"],2,"Die Freundin is feminine, so use sie.","The noun's article points you to its pronoun partner."),
      makeStep("It: es","Use es for a neuter noun.","Das Heft ist neu. Es ist neu.","Replace das Heft with a pronoun.",["es","er","sie"],0,"Das Heft is neuter, so use es.","Think of the article as a signpost toward the pronoun."),
      makeStep("We: wir","wir means we and is the subject form.","Wir lernen Deutsch. = We learn German.","Which means 'we'?",["uns","wir","ihr"],1,"wir is nominative 'we'; uns is an object form.","The subject form stands in the driver's seat: wir."),
      makeStep("You all: ihr","Use ihr when speaking informally to several people.","Ihr lernt Deutsch. = You all learn German.","Which means 'you all' informally?",["ihr","Sie","wir"],0,"ihr is informal plural you.","One friend is du; the whole friend group is ihr."),
      makeStep("Nominative is the doer","The nominative marks the subject of a sentence.","Der Schüler lernt. = The student learns.","Who is doing the learning?",["Der Schüler","lernt","Deutsch"],0,"Der Schüler is the subject and appears in the nominative.","The nominative is the actor standing on stage."),
      makeStep("A feminine subject","Use eine with a feminine singular noun in the nominative.","Eine Freundin lernt.","Complete: ___ Freundin lernt.",["Ein","Eine","Einen"],1,"Freundin is feminine, so use eine.","Match the article to the noun's label before the action starts.")
    ]},
    {steps:[
      makeStep("Wie asks 'how'","Use wie to ask how or what something is like.","Wie heißt du? = What is your name?","Which asks 'how/what is your name?'",["Wie heißt du?","Was bist du?","Wohin heißt du?"],0,"Wie heißt du? is the normal question for someone's name.","Wie is a question-key that opens the 'how?' door."),
      makeStep("Was asks 'what'","Use was to ask about a thing or information.","Was ist das? = What is that?","Choose the question that asks 'what'.",["Woher ist das?","Was ist das?","Wohin ist das?"],1,"Was ist das? means What is that?","Was points at a thing and asks for its name."),
      makeStep("Woher asks 'from where'","Use woher for someone's place of origin.","Woher kommst du? = Where are you from?","Which asks where someone comes from?",["Wohin kommst du?","Woher kommst du?","Wie kommst du?"],1,"Woher means from where.","The word her hints at coming from a place toward here."),
      makeStep("Wohin asks 'to where'","Use wohin to ask about a destination.","Wohin gehst du? = Where are you going to?","Choose 'Where are you going to?'",["Wohin gehst du?","Woher gehst du?","Was gehst du?"],0,"Wohin asks for the destination.","Think of wohin as a direction arrow pointing toward a destination."),
      makeStep("Which changes with the noun","Welcher, welche, welches agree with the noun's gender.","welches Heft = which notebook","Choose the right question: ___ Heft brauchst du?",["Welcher","Welche","Welches"],2,"Heft is neuter (das Heft), so use welches.","The question word wears the same gender-colour as its noun."),
      makeStep("Countable: wie viele","Use wie viele before countable plural things.","Wie viele Bücher? = How many books?","Complete: ___ Bücher hast du?",["Wie viel","Wie viele","Welche viel"],1,"Bücher are countable plural objects: wie viele.","If you can count them one by one, choose viele."),
      makeStep("Amount: wie viel","Use wie viel for an amount, price, or uncountable quantity.","Wie viel kostet das? = How much does it cost?","Ask 'How much does it cost?'",["Wie viele kostet das?","Wie viel kostet das?","Welche kostet das?"],1,"Cost/price asks how much: wie viel.","If you measure an amount instead of counting separate items, choose viel."),
      makeStep("Question word then verb","In a W-question, put the question word first and the conjugated verb next.","Woher kommst du?","What comes right after the W-word?",["The conjugated verb","The object","A second question word"],0,"The verb follows the W-word: Woher kommst du?","It's like a two-step dance: question word, then verb."),
      makeStep("Nominative: mein Bruder","Nominative possessives show whose subject it is.","Mein Bruder lernt. = My brother learns.","Choose 'my brother'.",["meine Bruder","mein Bruder","meinen Bruder"],1,"Bruder is masculine nominative: mein Bruder.","The possessive ending follows the noun's gender and case."),
      makeStep("Feminine possessive","A feminine nominative noun uses meine.","meine Freundin = my friend","Choose 'my friend' for a female friend.",["mein Freundin","meine Freundin","meinen Freundin"],1,"Freundin is feminine: meine Freundin.","A feminine noun gets the -e ending in this pattern.")
    ]},
    {steps:[
      makeStep("Possessive: dein","dein means your when speaking informally to one person.","dein Heft = your notebook","Choose 'your notebook' (informal).",["deine Heft","dein Heft","deinen Heft"],1,"Heft is neuter nominative: dein Heft.","dein is the 'your' label; the noun chooses the ending."),
      makeStep("Possessive: sein","sein means his for a masculine or neuter owner.","sein Bruder = his brother","Choose 'his brother'.",["sein Bruder","seine Bruder","seinen Bruder"],0,"Bruder is masculine nominative: sein Bruder.","sein tells whose; Bruder controls the ending."),
      makeStep("Possessive: ihr","ihr can mean her when the owner is female.","ihre Mutter = her mother","Choose 'her mother'.",["ihr Mutter","ihre Mutter","ihren Mutter"],1,"Mutter is feminine: ihre Mutter.","The owner's gender gives ihr; the noun gives the ending."),
      makeStep("Nicht negates a description","Use nicht before an adjective to say 'not'.","Das Zimmer ist nicht groß. = The room is not big.","Complete: nicht ___ (not bright)",["hell","kein","ist"],0,"hell means bright; nicht hell means not bright.","nicht is a small 'no' sticker placed on the description."),
      makeStep("Nicht negates an action","Use nicht to negate a verb or the whole statement.","Ich wohne nicht hier. = I don't live here.","Choose 'I don't live in Berlin.'",["Ich kein wohne in Berlin.","Ich wohne nicht in Berlin.","Ich wohne in Berlin nicht?"],1,"Use nicht to negate the statement: Ich wohne nicht in Berlin.","nicht crosses out the action or statement, not the noun label."),
      makeStep("Definite article: der","Use der for a masculine singular nominative noun.","der Schüler = the student","Choose 'the student'.",["die Schüler","der Schüler","das Schüler"],1,"Schüler is masculine singular: der Schüler.","The definite article is a pointer to one known noun."),
      makeStep("Definite article: die","Use die for a feminine singular nominative noun.","die Familie = the family","Choose 'the family'.",["der Familie","das Familie","die Familie"],2,"Familie is feminine: die Familie.","Memorise the noun with its article as a matched pair."),
      makeStep("Definite article: das","Use das for a neuter singular nominative noun.","das Haus = the house","Choose 'the house'.",["das Haus","der Haus","die Haus"],0,"Haus is neuter: das Haus.","The noun's article is part of its flashcard."),
      makeStep("Indefinite article: ein","Use ein for a masculine or neuter singular nominative noun.","ein Schüler / ein Heft","Choose: ___ Heft ist neu.",["ein","eine","einen"],0,"Heft is neuter nominative: ein Heft.","ein is the 'a/an' starter for masculine and neuter subjects."),
      makeStep("Indefinite article: eine","Use eine for a feminine singular nominative noun.","eine Freundin = a friend","Complete: ___ Freundin wohnt hier.",["ein","eine","einen"],1,"Freundin is feminine: eine Freundin.","The -e is the feminine article cue in this pattern.")
    ]},
    {steps:[
      makeStep("A place to live","Learn home words with their article: das Haus, die Wohnung, das Zimmer.","die Wohnung = the flat/apartment","Choose 'the flat'.",["der Wohnung","die Wohnung","das Wohnung"],1,"Wohnung is feminine: die Wohnung.","Keep the article as the noun's name tag."),
      makeStep("A room","Zimmer is a neuter noun.","das Zimmer = the room","Complete: ___ Zimmer",["der","die","das"],2,"Zimmer is neuter: das Zimmer.","Article first, noun second: one vocabulary chunk."),
      makeStep("Rooms around the home","Learn room words together: die Küche, das Bad, der Balkon, der Garten.","die Küche = the kitchen","Choose the right phrase.",["der Küche","die Küche","das Küche"],1,"Küche is feminine: die Küche.","The article is a tiny memory hook for the noun."),
      makeStep("Furniture set","Build a home word bank: der Tisch, der Stuhl, das Bett, der Schrank, das Sofa, der Sessel, der Teppich, die Lampe.","der Tisch = the table","Choose 'the table'.",["der Tisch","die Tisch","das Tisch"],0,"Tisch is masculine: der Tisch.","Treat article+noun like a two-part name."),
      makeStep("Furniture: bed","Bett is neuter; remember it with the room furniture words.","das Bett = the bed","Choose the article for Bett.",["der","die","das"],2,"Bett is neuter: das Bett.","The noun always travels with its article."),
      makeStep("Describe a room","Adjectives describe places: hell (bright), groß (big), modern (modern), ruhig (quiet).","hell = bright; groß = big","Which word means 'bright'?",["hell","klein","ruhig"],0,"hell means bright.","An adjective is the colour or mood you paint onto a noun."),
      makeStep("Say something is small","klein and bequem are common housing adjectives.","Das Zimmer ist klein. = The room is small.","Which word means 'small'?",["modern","klein","bequem"],1,"klein means small.","Think of klein as shrinking the room in a picture."),
      makeStep("Useful home verbs","Learn the chapter verbs as an action set: wohnen, suchen, haben, brauchen, kaufen, finden, nehmen.","Ich wohne in Pune. = I live in Pune.","Choose the verb 'to live/reside'.",["wohnen","kaufen","finden"],0,"wohnen means to live or reside.","A verb is the action engine of the sentence."),
      makeStep("Need something","brauchen means to need; kaufen means to buy.","Ich brauche einen Tisch. = I need a table.","What does brauchen mean?",["to find","to need","to live"],1,"brauchen means to need.","brauchen tells what you need to make a home work."),
      makeStep("Looking for a flat","suchen means to search/look for; finden means to find.","Ich suche eine Wohnung. = I am looking for a flat.","Choose 'I am looking for a flat.'",["Ich wohne eine Wohnung.","Ich suche eine Wohnung.","Ich habe eine Wohnung."],1,"suchen means to look for.","Imagine a detective searching for a new home.")
    ]},
    {steps:[
      makeStep("The direct object","Akkusativ marks the direct object: the thing/person affected by the action.","Ich kaufe den Tisch. = I buy the table.","What is being bought?",["Ich","kaufe","den Tisch"],2,"den Tisch is the direct object, so it is accusative.","The subject acts; the object receives the action like a ball being passed."),
      makeStep("Masculine der changes","In the accusative, masculine der becomes den.","der Tisch → den Tisch","Complete: Ich sehe ___ Tisch.",["der","den","dem"],1,"Masculine accusative uses den.","The masculine article puts on an -n jacket when it becomes the object."),
      makeStep("Masculine ein changes","In the accusative, masculine ein becomes einen.","ein Tisch → einen Tisch","Complete: Ich brauche ___ Tisch.",["ein","einen","einem"],1,"Tisch is masculine direct object: einen Tisch.","The extra -en is a signpost: this is the object."),
      makeStep("Feminine stays the same","Feminine article forms do not change in the basic accusative pattern.","eine Lampe → eine Lampe","Complete: Ich kaufe ___ Lampe.",["einen","eine","einer"],1,"Feminine accusative remains eine.","This form keeps its outfit; no change is needed."),
      makeStep("Neuter stays the same","Neuter articles also stay the same in the basic accusative pattern.","ein Bett → ein Bett","Complete: Ich brauche ___ Bett.",["einen","ein","einem"],1,"Neuter accusative remains ein.","Neuter walks through the object door without changing its article."),
      makeStep("Accusative pronouns","Use mich, dich, ihn, sie, es, uns, euch, sie/Sie for direct objects.","Ich kaufe den Stuhl → Ich kaufe ihn.","Replace den Stuhl: Ich kaufe ___.",["er","ihn","ihm"],1,"Stuhl is masculine accusative, so use ihn.","The object pronoun is a shortcut label that replaces the full noun."),
      makeStep("Feminine pronoun: sie","Use sie for a feminine direct object.","Ich sehe die Lampe → Ich sehe sie.","Replace die Lampe: Ich sehe ___.",["sie","ihr","es"],0,"Lampe is feminine: sie.","The pronoun keeps the noun's gender label."),
      makeStep("kein before a noun","Use kein to say no/not any before a noun.","Es gibt kein Sofa. = There is no sofa.","Choose 'There is no sofa.'",["Es gibt nicht Sofa.","Es gibt kein Sofa.","Es gibt keine Sofa."],1,"Sofa is neuter, so use kein Sofa.","kein is a 'no/not any' label attached to a noun."),
      makeStep("Es gibt takes accusative","Use es gibt + accusative to say there is/are.","Es gibt einen Balkon. = There is a balcony.","Complete: Es gibt ___ Balkon.",["ein","einen","einem"],1,"Balkon is masculine; after es gibt use accusative einen.","Es gibt opens a doorway that objects pass through in accusative form."),
      makeStep("The accusative preposition crew","für, um, durch, ohne, and gegen all take the accusative.","für meinen Bruder · ohne einen Tisch","Which preposition belongs to this accusative group?",["mit","für","bei"],1,"für is one of the five: für, um, durch, ohne, gegen.","Think of these five as a crew that always invites the accusative along.")
    ]},
    {steps:[
      makeStep("Possessives follow ein-words","Possessive endings follow ein-words: masculine accusative adds -en; feminine, neuter and plural keep their usual forms.","meinen Bruder · meine Schwester · mein Heft · meine Bücher","Complete: Ich sehe ___ Bruder. (my)",["mein","meinen","meine"],1,"Bruder is masculine accusative: meinen Bruder.","Possessives borrow the ending pattern from ein."),
      makeStep("Feminine possessive object","Feminine accusative possessives keep the -e form.","meine Schwester","Choose 'I see my sister.'",["Ich sehe mein Schwester.","Ich sehe meine Schwester.","Ich sehe meinen Schwester."],1,"Schwester is feminine accusative: meine Schwester.","The feminine form keeps its -e; it doesn't need the masculine -en."),
      makeStep("Accusative verb: brauchen","brauchen often takes a direct object.","Ich brauche einen Stuhl. = I need a chair.","Which sentence is correct?",["Ich brauche einen Stuhl.","Ich brauche ein Stuhl.","Ich brauche einem Stuhl."],0,"Stuhl is masculine accusative: einen Stuhl.","The verb's action lands on an object, so check its accusative form."),
      makeStep("Accusative verb: kaufen","kaufen means to buy and can take a direct object.","Ich kaufe den Tisch. = I buy the table.","Choose the correct sentence.",["Ich kaufe der Tisch.","Ich kaufe den Tisch.","Ich kaufe dem Tisch."],1,"Tisch is masculine accusative: den Tisch.","The table receives the buying action."),
      makeStep("Use kein with an object noun","kein declines like ein when the noun is accusative.","Ich habe keinen Balkon. = I have no balcony.","Complete: Ich habe ___ Balkon.",["kein","keinen","keine"],1,"Balkon is masculine accusative: keinen Balkon.","kein gets the same masculine object jacket: -en."),
      makeStep("Nicht with adjectives","Use nicht, not kein, to negate an adjective.","Die Wohnung ist nicht teuer. = The flat is not expensive.","Choose 'not expensive'.",["kein teuer","nicht teuer","nicht kein teuer"],1,"teuer is an adjective, so use nicht teuer.","Use nicht to put a little 'not' sticker on a description."),
      makeStep("Job: teacher","Learn the job and its action together.","der Lehrer unterrichtet = the teacher teaches","What does the teacher do?",["unterrichtet","kocht","fährt"],0,"unterrichtet means teaches.","Pair every job with its action like a character card and skill."),
      makeStep("Job: cook","A female cook is die Köchin.","Die Köchin kocht. = The cook cooks.","Choose 'the cook cooks'.",["Die Köchin kocht.","Die Köchin liest.","Die Köchin fährt."],0,"kocht means cooks.","The person and their action fit together like a role and a tool."),
      makeStep("Job: doctor","Arzt is a male doctor; Ärztin is a female doctor.","der Arzt / die Ärztin","Which is the female doctor?",["der Arzt","die Ärztin","der Lehrer"],1,"die Ärztin is the female doctor.","The feminine job ending is like a name badge for the person."),
      makeStep("Final mix: plural","Retrieve the plural from Chapter 0.","das Buch → die Bücher","Choose the plural of das Buch.",["die Bücher","die Buchs","die Buche"],0,"Buch has the irregular plural Bücher.","Final boss tip: check the clue and use one rule at a time.")
    ]}
  ];

  var lessons = [
    {tag:"Foundation • start here",title:"Hallo Deutsch! — the launch pad",text:"German and English share useful cognates, but some look alike and mean something different. German nouns begin with a capital letter. Learn every new noun with its article and plural.",example:"der Tisch • die Lampe • das Bett<small>masculine • feminine • neuter</small>",tip:"Build a tiny word set each day. Say the article with the noun, not as a separate chore."},
    {tag:"Lesson 1 • speaking",title:"Greetings and introductions",text:"Use informal du with friends and formal Sie with adults or people you do not know well. The conjugated verb normally sits second in a statement.",example:"Ich heiße Asha. Ich komme aus Indien.<small>My name is Asha. I come from India.</small>",tip:"Start a role-play with Hallo! or Guten Tag! Finish with Tschüs! or Auf Wiedersehen!"},
    {tag:"Lesson 1 • grammar",title:"Pronouns and present-tense verbs",text:"Learn the subject pronouns. Regular verbs often use -e, -st, -t, -en, -t, -en. sein is irregular and very common.",example:"ich lerne • du lernst • er lernt • wir lernen<small>ich bin • du bist • er ist • wir sind</small>",tip:"Say a pronoun and verb as a pair: ich lerne, du lernst, er lernt."},
    {tag:"Lesson 1 • grammar",title:"Statements, questions and nicht",text:"A statement usually puts the conjugated verb in position 2. A yes/no question starts with the verb. A W-question starts with its question word, then the verb. Use nicht to negate a verb or description.",example:"Wo wohnst du? Wohnst du in Pune? Ich wohne nicht in Berlin.<small>Where do you live? Do you live in Pune? I don't live in Berlin.</small>",tip:"W-words: wer (who), was (what), wo (where), woher (from where), wie (how), wie alt (how old)."},
    {tag:"Lesson 1 • vocabulary",title:"Family + possessive words",text:"Name your family and introduce people. Possessive words show who someone belongs to: mein (my), dein (your, informal), sein (his), ihr (her). Match the ending to the noun.",example:"Das ist meine Mutter. Das ist sein Bruder.<small>This is my mother. This is his brother.</small>",tip:"A short family introduction is excellent speaking and writing practice."},
    {tag:"Lesson 2 • vocabulary",title:"Homes, rooms and furniture",text:"Learn housing types, rooms, household objects and adjectives. Describe what a room looks like and what it contains.",example:"Die Wohnung ist hell. Im Zimmer gibt es ein Bett und einen Tisch.<small>The flat is bright. There is a bed and a table in the room.</small>",tip:"Look around your own room and label five things in German."},
    {tag:"Lesson 2 • grammar",title:"Nominative vs accusative",text:"The subject is nominative. A direct object is accusative. The main visible article change is masculine: der→den and ein→einen. Feminine, neuter and plural forms stay the same in the basic pattern.",example:"Der Tisch ist schön. Ich kaufe den Tisch. / Ich brauche ein Bett.<small>The table is nice. I am buying the table. / I need a bed.</small>",tip:"Ask wer? or was? for the subject; ask wen? or was? for the direct object."},
    {tag:"Lesson 2 • grammar",title:"Accusative pronouns + für",text:"Replace a direct-object person or thing with an accusative pronoun. The preposition für also takes the accusative.",example:"Ich finde den Tisch. → Ich finde ihn. / Das Geschenk ist für meine Mutter.<small>I like/find the table. → I like/find it. / The gift is for my mother.</small>",tip:"Pronouns: mich, dich, ihn, sie, es, uns, euch, Sie. Repeat them as a rhythm."},
    {tag:"Lesson 2 • grammar",title:"kein, nicht, irregular verbs",text:"Use kein before a noun to say there is no/not any. Use nicht for a verb or adjective. Several common verbs change their vowel in du and er/sie/es forms.",example:"Es gibt keinen Balkon. Das Zimmer ist nicht groß. Du liest; er liest.<small>There is no balcony. The room isn't big. You read; he reads.</small>",tip:"Useful verbs: fahren, sprechen, lesen, essen, nehmen, sehen, geben, waschen, treffen, schlafen."},
    {tag:"Lesson 2 • word building",title:"Compound words + housing texts",text:"German joins words to make a compound noun. The final noun determines the article. Apply the grammar while reading housing ads and writing a short email.",example:"das Haus + die Tür = die Haustür • das Schlaf + Zimmer = das Schlafzimmer<small>house + door = house door • sleep + room = bedroom</small>",tip:"For reading, hunt for the exact information first: rent, location, rooms, furniture, who lives there."},
    {tag:"Chapter 0 • Wortschatz",title:"Schulsachen + singular and plural",text:"Learn classroom objects with their article and plural. German plurals vary: some add -e, -er, -n/-en or -s; some do not change. Memorise each useful word as a set.",example:"der Bleistift → die Bleistifte • das Buch → die Bücher<small>pencil → pencils • book → books</small>",tip:"Try: der Kuli, das Heft, die Tasche, die Schere, das Lineal, der Radiergummi, das Buch."},
    {tag:"Lesson 1 • nominative",title:"Pronouns + article map",text:"Use nominative for the subject. Match definite and indefinite articles to noun gender and number. Subject pronouns replace names or nouns.",example:"der/ein Schüler • die/eine Freundin • das/ein Buch • die/— Bücher<small>the/a student • the/a friend • the/a book • the/books</small>",tip:"Nominative pronouns: ich, du, er, sie, es, wir, ihr, sie; formal you is Sie."},
    {tag:"Lesson 1 • W-Fragen",title:"Seven useful question starts",text:"Put the W-word first, the conjugated verb next, then the subject. Welcher/welche/welches means which and changes with the noun.",example:"Wie viel kostet das Heft? Wie viele Bücher hast du?<small>How much does the notebook cost? How many books do you have?</small>",tip:"wie = how; was = what; woher = from where; wohin = to where; welche/r/s = which; wie viele = count; wie viel = amount/price."},
    {tag:"Lesson 2 • accusative",title:"Possessives and article endings",text:"Possessive articles behave like ein-words. In the accusative, masculine endings take -en; feminine, neuter and plural use the familiar forms.",example:"Nominative: mein Bruder, meine Schwester, mein Heft, meine Bücher<small>Accusative: meinen Bruder, meine Schwester, mein Heft, meine Bücher</small>",tip:"Read the noun's gender first, then choose the ending. Do not add -en to every noun."},
    {tag:"Teacher-listed topic • vocabulary",title:"Berufe und Tätigkeiten",text:"Learn job names and what people do. Notice that many job nouns have masculine and feminine forms. Practise the job together with an action verb.",example:"Der Lehrer unterrichtet. Die Köchin kocht. Der Programmierer schreibt Programme.<small>The teacher teaches. The cook cooks. The programmer writes programs.</small>",tip:"Useful jobs: Arzt/Ärztin, Lehrer/in, Koch/Köchin, Ingenieur/in, Journalist/in, Programmierer/in, Anwalt/Anwältin."}
  ];

  var questions = [
    {q:"Choose the natural sentence: “My name is Mira.”",options:["Ich heiße Mira.","Mira heiße ich?","Ich heißen Mira."],answer:0,why:"Ich heiße Mira. The verb heiße matches ich."},
    {q:"Which is a yes/no question: “Do you live in Pune?”",options:["Wo wohnst du?","Wohnst du in Pune?","Du wohnst wo?"],answer:1,why:"A yes/no question begins with the conjugated verb: Wohnst du ...?"},
    {q:"What does “Wie geht es dir?” mean?",options:["What is your name?","How are you? (informal)","Where do you live?"],answer:1,why:"Wie geht es dir? asks how a friend is doing."},
    {q:"Pick the correct family phrase: “my mother.”",options:["mein Mutter","meine Mutter","meinen Mutter"],answer:1,why:"Mutter is feminine, so this beginner form is meine Mutter."},
    {q:"Fill in: Es gibt ___ Balkon. (a balcony)",options:["ein","einen","einem"],answer:1,why:"Balkon is masculine and es gibt takes the accusative: einen Balkon."},
    {q:"Which is the subject in “Der Tisch ist neu”?",options:["Der Tisch","ist","neu"],answer:0,why:"Der Tisch is the subject: it is the thing being described."},
    {q:"Choose the accusative form: Ich brauche ___ Tisch.",options:["der","den","dem"],answer:1,why:"Masculine definite article der becomes den in the accusative."},
    {q:"Replace “den Stuhl” with a pronoun: Ich kaufe ___.",options:["er","ihn","ihm"],answer:1,why:"Der Stuhl is masculine and is a direct object, so use ihn."},
    {q:"Which means “There is no sofa”?",options:["Es gibt kein Sofa.","Es gibt nicht Sofa.","Es gibt keine Sofa."],answer:0,why:"Sofa is neuter: kein Sofa. Kein is used before a noun."},
    {q:"Which sentence means “The room is not bright”?",options:["Das Zimmer ist kein hell.","Das Zimmer ist nicht hell.","Das Zimmer nicht ist hell."],answer:1,why:"Nicht negates an adjective: nicht hell."},
    {q:"Choose the right form: Du ___ gern. (you read)",options:["liest","lese","lesen"],answer:0,why:"lesen changes its vowel for du: du liest."},
    {q:"Which preposition takes the accusative?",options:["für","mit","bei"],answer:0,why:"Für takes the accusative. Mit and bei take the dative."},
    {q:"What is the article of “Schlafzimmer”?",options:["der","die","das"],answer:2,why:"In a compound, the last noun sets the article. Zimmer is das Zimmer."},
    {q:"Where is the verb in a standard statement?",options:["Usually second","Always last","Always first"],answer:0,why:"In a standard main-clause statement, the conjugated verb is usually in position 2."},
    {q:"Choose: “I don't live in Berlin.”",options:["Ich kein wohne in Berlin.","Ich wohne nicht in Berlin.","Ich wohne in Berlin nicht?"],answer:1,why:"Use nicht to negate the statement: Ich wohne nicht in Berlin."},
    {q:"Which question asks where someone comes from?",options:["Wie alt bist du?","Woher kommst du?","Was ist das?"],answer:1,why:"Woher kommst du? means Where are you from?"},
    {q:"What is the plural of das Buch?",options:["die Buchs","die Bücher","die Buche"],answer:1,why:"Buch has an irregular plural with an umlaut: die Bücher."},
    {q:"Which pronoun means “we” in the nominative?",options:["uns","wir","ihr"],answer:1,why:"wir is the subject pronoun for we. uns is the accusative form."},
    {q:"Which asks “How many books do you have?”",options:["Wie viel Bücher hast du?","Wie viele Bücher hast du?","Welche viele Bücher hast du?"],answer:1,why:"Use wie viele for countable plural items: Wie viele Bücher ...?"},
    {q:"Choose the nominative indefinite article: ___ Freundin lernt.",options:["Ein","Eine","Einen"],answer:1,why:"Freundin is feminine: eine Freundin."},
    {q:"Complete: Ich sehe ___ Bruder. (my brother)",options:["mein","meinen","meine"],answer:1,why:"Bruder is masculine accusative: meinen Bruder."},
    {q:"Which means “Which notebook do you need?”",options:["Wie Heft brauchst du?","Welches Heft brauchst du?","Wohin Heft brauchst du?"],answer:1,why:"Welches is the neuter form of which and agrees with das Heft."},
    {q:"Who teaches? Der Lehrer ...",options:["unterrichtet","repariert Autos","schreibt Programme"],answer:0,why:"Der Lehrer unterrichtet means The teacher teaches."},
    {q:"Choose: Es gibt ___ Lampe. (a lamp)",options:["eine","einen","einer"],answer:0,why:"Lampe is feminine; accusative feminine remains eine."}
  ];

  var cards = [
    ["Guten Morgen!","Good morning!"],["Wie heißt du?","What is your name? (informal)"],["Ich heiße ...","My name is ..."],["Woher kommst du?","Where are you from?"],["Wie geht es dir?","How are you? (informal)"],["die Mutter","mother"],["der Vater","father"],["der Bruder","brother"],["die Schwester","sister"],["mein / meine","my"],["das Haus","house"],["die Wohnung","flat / apartment"],["das Zimmer","room"],["die Küche","kitchen"],["das Bad","bathroom"],["der Tisch","table"],["der Stuhl","chair"],["das Bett","bed"],["Es gibt ...","There is / there are ..."],["Ich brauche einen Tisch.","I need a table."],["kein Sofa","no sofa / not a sofa"],["nicht groß","not big"],["der Tisch → ihn","the table → it (masculine direct object)"],["die Lampe → sie","the lamp → it (feminine direct object)"],["das Bett → es","the bed → it (neuter direct object)"],["für","for (takes accusative)"],["du liest","you read"],["du fährst","you travel / drive"],["das Schlafzimmer","bedroom"],["Auf Wiedersehen!","Goodbye!"],["das Heft","notebook"],["der Bleistift","pencil"],["die Schere","scissors"],["das Buch → die Bücher","book → books"],["die Stifte","the pens/pencils"],["wir","we (subject pronoun)"],["wen?","whom? (direct object question)"],["wohin?","where to?"],["wie viele","how many (countable)"],["wie viel","how much / how many (amount)"],["mein Bruder → meinen Bruder","my brother → my brother as a direct object"],["die Ärztin","female doctor"],["Der Lehrer unterrichtet.","The teacher teaches."],["der Schrank","wardrobe / cupboard"],["das Sofa","sofa"],["der Sessel","armchair"],["der Teppich","rug"],["die Lampe","lamp"],["der Balkon","balcony"],["der Garten","garden"],["hell","bright"],["bequem","comfortable"],["ruhig","quiet"],["modern","modern"],["wohnen","to live / reside"],["suchen","to look for"],["brauchen","to need"],["kaufen","to buy"],["finden","to find"],["nehmen","to take"],["durch","through (takes accusative)"],["um","around (takes accusative)"],["ohne","without (takes accusative)"],["gegen","against (takes accusative)"],["die Köchin","female cook"],["der Programmierer","male programmer"],["schreibt Programme","writes programs"]
  ];

  var refs = [
    {icon:"DW",title:"Nicos Weg — A1 story course",text:"Free short video scenes and interactive practice. Use the English interface or the English vocabulary/script links; it makes beginner German feel like a story.",url:"https://dw.com/nico/english"},
    {icon:"GO",title:"Goethe-Institut: Basic A1–A2",text:"Free interactive exercises, quizzes and videos for beginner German, including everyday situations and pronunciation.",url:"https://www.goethe.de/en/m/spr/ueb/ele.html"},
    {icon:"A1",title:"Goethe A1 youth practice",text:"Practice listening, reading, writing and speaking in an A1-style format. Best used on review day; your school exam may use a different format.",url:"https://www.goethe.de/ins/de/en/prf/gzfit1/ueb.html"}
  ];

  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (_) {}
  var state = Object.assign({completed:[],xp:0,tasks:{},notes:{},selectedDate:null,minutes:30,screen:"today",quizIndex:0,quizScore:0,quizAnswer:null,cardIndex:0,cardFlipped:false,known:[],quest:{started:false,pageTopics:"",hp:100,xp:0,day:1,step:0,dayXp:0,answered:false,result:"",choice:null,completedDays:[],reviewStarted:false,reviewStep:0,reviewAnswered:false,reviewResult:"",reviewChoice:null,reviewCompleted:false}},saved);
  if (!Array.isArray(state.completed)) state.completed=[];
  if (!state.tasks) state.tasks={};
  if (!state.notes) state.notes={};
  if (!Array.isArray(state.known)) state.known=[];
  if (!state.quest) state.quest={started:false,pageTopics:"",hp:100,xp:0,day:1,step:0,dayXp:0,answered:false,result:"",choice:null,completedDays:[],reviewStarted:false,reviewStep:0,reviewAnswered:false,reviewResult:"",reviewChoice:null,reviewCompleted:false};
  if (!Array.isArray(state.quest.completedDays)) state.quest.completedDays=[];
  state.quest.hp=Number.isFinite(state.quest.hp)?state.quest.hp:100;
  state.quest.xp=Number.isFinite(state.quest.xp)?state.quest.xp:0;
  state.quest.day=Math.max(1,Math.min(8,Number(state.quest.day)||1));
  state.quest.step=Math.max(0,Number(state.quest.step)||0);
  var todayAtStart=iso(new Date());
  if(plan.some(function(d){return d.date===todayAtStart;}))state.selectedDate=todayAtStart;

  function save(){localStorage.setItem(KEY,JSON.stringify(state));updateTop();}
  function byId(id){return document.getElementById(id);}
  function pad(n){return n<10?"0"+n:""+n;}
  function iso(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());}
  function parseISO(s){var p=s.split("-");return new Date(Number(p[0]),Number(p[1])-1,Number(p[2]));}
  function dateOffset(s){return Math.round((parseISO(s).getTime()-parseISO(FIRST).getTime())/86400000);}
  function todayISO(){return iso(new Date());}
  function activePlan(){
    var today=todayISO();
    if(state.selectedDate)return plan.find(function(d){return d.date===state.selectedDate;})||plan[0];
    return plan.find(function(d){return d.date===today;})||(today<FIRST?plan[0]:plan[11]);
  }
  function displayDate(s){return parseISO(s).toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"});}
  function elapsedSprintDays(){return Math.max(0,Math.min(10,dateOffset(todayISO())+1));}
  function streak(){
    var c=new Set(state.completed),cursor=parseISO(todayISO());
    if(!c.has(iso(cursor)))cursor.setDate(cursor.getDate()-1);
    var count=0;while(c.has(iso(cursor))){count++;cursor.setDate(cursor.getDate()-1);}return count;
  }
  function updateTop(){
    var s=streak();
    if(byId("topStreak"))byId("topStreak").textContent=s;
    if(byId("sideStreak"))byId("sideStreak").textContent=s+" day streak";
    if(byId("topXp"))byId("topXp").textContent=state.quest?state.quest.xp:(state.xp||0);
    if(byId("topHp"))byId("topHp").textContent=state.quest?state.quest.hp:100;
  }
  function toast(message){
    var el=byId("toast");el.textContent=message;el.classList.add("show");
    window.clearTimeout(toast.timer);toast.timer=window.setTimeout(function(){el.classList.remove("show");},2300);
  }
  function celebrate(){
    var area=byId("celebration"),bits=["✦","✺","♥","✧","●","★"];
    for(var i=0;i<22;i++){
      var s=document.createElement("span"),angle=(Math.PI*2*i)/22,dist=85+Math.random()*135;
      s.className="spark";s.textContent=bits[i%bits.length];
      s.style.setProperty("--x",Math.round(Math.cos(angle)*dist)+"px");
      s.style.setProperty("--y",Math.round(Math.sin(angle)*dist)+"px");
      s.style.setProperty("--r",Math.round(Math.random()*180-90)+"deg");
      s.style.color=["#6549e8","#ff9d56","#25ae7b","#e75e9d"][i%4];
      area.appendChild(s);window.setTimeout(function(node){node.remove();},1100,s);
    }
  }
  function taskKey(day,index,bonus){return day.date+":"+(bonus?"b":"c")+":"+index;}
  function taskChecked(day,index,bonus){return !!state.tasks[taskKey(day,index,bonus)];}
  function makeTask(day,text,index,bonus){
    var key=taskKey(day,index,bonus),checked=!!state.tasks[key];
    return '<label class="task-item"><input type="checkbox" data-task="'+key+'" '+(checked?"checked":"")+'><span><strong>'+text+'</strong><small>'+(bonus?"Optional 30-minute booster":"Part of your 30-minute core")+'</small></span></label>';
  }
  function allDone(day,bonus){var arr=bonus?day.bonus:day.core;return arr.every(function(_,i){return taskChecked(day,i,bonus);});}
  function pageHead(kicker,title,subtitle,right){
    return '<div class="page-head"><div><div class="eyebrow">'+kicker+'</div><h1>'+title+'</h1><p>'+subtitle+'</p></div>'+(right||"")+'</div>';
  }
  function escapeHtml(value){
    return String(value||"").replace(/[&<>"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch];});
  }
  function renderGraph(){
    var bars="",labels="";
    plan.forEach(function(d,i){
      var checked=d.core.filter(function(_,n){return taskChecked(d,n,false);}).length;
      var pct=state.completed.indexOf(d.date)!==-1?100:Math.round(checked/d.core.length*100);
      var tag=i<10?"D"+(i+1):(i===10?"R1":"R2");
      bars+='<div class="chart-column" title="'+d.label+': '+pct+'% of core tasks"><span class="chart-percent">'+(pct?pct+"%":"")+'</span><div class="chart-bar-wrap"><div class="chart-bar '+(pct===100?"done":"")+'" style="--bar:'+Math.max(5,pct)+'%;--delay:'+(i*35)+'ms"></div></div></div>';
      labels+="<span>"+tag+"</span>";
    });
    return '<section class="progress-chart"><div class="chart-heading"><div><h2>Your progress, day by day</h2><p>Each bar rises as you check off that day’s core tasks.</p></div><span class="chart-key"><i></i>core tasks</span></div><div class="chart-bars" role="img" aria-label="Progress graph for ten learning days and two review days">'+bars+'</div><div class="chart-labels">'+labels+'</div><div class="chart-caption">D1–D10 = learning sprint · R1–R2 = review before 25 October</div></section>';
  }

  function renderToday(){
    var d=activePlan(),sprint=elapsedSprintDays();
    var completedSprint=state.completed.filter(function(x){return x>=FIRST&&x<=LAST_SPRINT;}).length;
    var required=state.minutes===60?allDone(d,false)&&allDone(d,true):allDone(d,false);
    var isDone=state.completed.indexOf(d.date)!==-1;
    var bonusHtml=state.minutes===60?'<div style="height:9px"></div><div class="panel-head"><h2>Extra 30-minute boost</h2><small>Optional when you choose the 60-minute session</small></div><div class="task-list">'+d.bonus.map(function(t,i){return makeTask(d,t,i,true);}).join("")+'</div>':"";
    var week="";
    for(var i=0;i<7;i++){
      var dt=parseISO(todayISO());dt.setDate(dt.getDate()-(6-i));var key=iso(dt);
      week+='<span class="week-dot '+(state.completed.indexOf(key)!==-1?"done":"")+'">'+weekdays[dt.getDay()]+'</span>';
    }
    var html=pageHead(d.label+" · "+d.unit,d.title,d.focus,'<span class="date-label">'+displayDate(d.date)+'</span>');
    html+='<div class="dashboard-grid"><section class="hero-card"><div class="eyebrow">YOUR 10-DAY SPRINT · EXAM BY 25 OCT</div><h2>'+(d.date===todayISO()?"Your next small win starts now.":"One focused session at a time.")+'</h2><p>Do the 30-minute core. If you have time and energy, add the 30-minute booster. Every finished day builds recall and keeps your streak alive.</p><div class="hero-actions"><button class="btn white" data-screen="learn">Open today’s lesson</button><button class="btn" data-screen="quiz">Quick quiz</button></div></section>';
    html+='<section class="streak-card"><div class="streak-top"><div><h3>Keep your spark going</h3><p>Finish one study day to keep your streak.</p></div><span class="flame">♨</span></div><div><div class="streak-number">'+streak()+' <small>day streak</small></div><div class="week-dots">'+week+'</div></div></section></div>';
    html+='<div class="stat-row"><div class="stat-card"><span class="stat-icon">✦</span><strong>'+(state.xp||0)+' XP</strong><small>earned from study sessions</small></div><div class="stat-card"><span class="stat-icon">▣</span><strong>'+completedSprint+' / 10</strong><small>learning days completed</small></div><div class="stat-card"><span class="stat-icon">◷</span><strong>'+Math.max(0,10-sprint)+' days</strong><small>until the final review window</small></div></div>';
    html+=renderGraph();
    html+='<div class="content-grid"><section class="panel"><div class="panel-head"><div><h2>Today’s mission</h2><small>Check off each part as you finish it.</small></div><div class="duration-toggle"><button data-minutes="30" class="'+(state.minutes===30?"selected":"")+'">30 min</button><button data-minutes="60" class="'+(state.minutes===60?"selected":"")+'">60 min</button></div></div><div class="task-list">'+d.core.map(function(t,i){return makeTask(d,t,i,false);}).join("")+'</div>'+bonusHtml;
    html+='<div class="task-progress"><span>Core mission</span><span>'+d.core.filter(function(_,i){return taskChecked(d,i,false);}).length+' of '+d.core.length+' complete</span></div><div class="progress-track"><div class="progress-fill" style="width:'+Math.round(100*d.core.filter(function(_,i){return taskChecked(d,i,false);}).length/d.core.length)+'%"></div></div><div class="claim-row"><span>'+(isDone?"Day complete — nice work!":(required?"Everything for this session is checked.":"Finish the "+(state.minutes===60?"60-minute session":"30-minute core")+" to claim XP."))+'</span><button class="btn small" data-claim="'+d.date+'" '+((!required||isDone)?"disabled":"")+'>'+(isDone?"Completed ✓":"Claim "+(state.minutes===60?"35":"25")+" XP")+'</button></div></section>';
    html+='<div><section class="panel"><div class="panel-head"><h2>Today’s focus</h2><small>'+d.unit+'</small></div><div class="mission-card"><span class="mini-label">Remember this</span><strong>'+d.note+'</strong><p>At the end, close the notes and explain one rule in your own words.</p></div><div class="mission-card" style="background:#f1fbf7"><span class="mini-label" style="color:#167452">Study rhythm</span><strong>5 min recall · 15 min learn · 10 min use it</strong><p>That is the 30-minute core. Use the booster for extra speaking, writing or workbook practice.</p></div><label class="note-label" for="dailyNote">Daily check-in · what did I finish or want to review?</label><textarea class="daily-note" id="dailyNote" data-note="'+d.date+'" placeholder="Example: I can use kein with furniture. I want to practise accusative pronouns again.">'+escapeHtml(state.notes[d.date]||"")+'</textarea><button class="btn ghost small" style="margin-top:13px" data-screen="plan">See the whole plan →</button></section></div></div>';
    html+='<div class="scope-banner"><strong>Exam scope from your checklist:</strong> Chapter 0 Schulsachen, noun singular/plural and present verb forms; Lesson 1 nominative pronouns, W-questions, possessives, nicht and nominative articles; Lesson 2 vocabulary, accusative pronouns/articles/possessives/verbs, kein, es gibt and accusative prepositions; plus Berufe und Tätigkeiten.</div>';
    byId("screen").innerHTML=html;
  }

  function renderPlan(){
    var html=pageHead("Your adventure map","7 quests + 1 revision day","The 128 pages are split into seven 18–19-page chunks, then one full-syllabus review on 25 October.",'<span class="date-label">100 XP unlocks the next chapter</span>');
    var bars="";
    plan.forEach(function(d,i){
      var isReview=i===7,complete=isReview?state.quest.reviewCompleted:(state.quest.day>i+1||state.quest.completedDays.indexOf(i+1)!==-1),current=state.quest.day===i+1;
      var pct=complete?100:(current?Math.min(100,Math.round((isReview?state.quest.reviewStep:state.quest.step)/10*100)):0);
      bars+='<div class="journey-bar-col"><span>'+ (pct?pct+"%":"") +'</span><div class="journey-bar-wrap"><i class="'+(complete?"done":"")+'" style="height:'+Math.max(5,pct)+'%"></i></div><small>'+(isReview?"REV":("D"+(i+1)))+'</small></div>';
      var status=complete?"CLEARED ✓":(current?"YOU ARE HERE":"LOCKED "+(i<7?"🔒":"★"));
      html+="";
    });
    html+='<section class="journey-chart"><div class="route-heading"><div><span class="welcome-kicker">YOUR PROGRESS</span><h2>Look how far you’re going 🌱</h2></div><span class="map-chip">'+state.quest.completedDays.length+' / 7 days</span></div><div class="journey-bars">'+bars+'</div></section><div class="journey-list">';
    plan.forEach(function(d,i){
      var isReview=i===7,complete=isReview?state.quest.reviewCompleted:(state.quest.day>i+1||state.quest.completedDays.indexOf(i+1)!==-1),current=state.quest.day===i+1,locked=!complete&&!current;
      html+='<article class="journey-card '+(complete?"done ":"")+(current?"current ":"")+(locked?"locked":"")+'"><div class="journey-day">'+(isReview?"★":"0"+(i+1))+'</div><div class="journey-copy"><div class="journey-meta">'+(isReview?"REVISION · 25 OCT":escapeHtml(d.label.toUpperCase()+" · PAGES "+d.pages))+'</div><h3>'+escapeHtml(d.title)+'</h3><p>'+escapeHtml(d.focus)+'</p></div><span class="journey-status">'+(complete?"CLEARED ✓":(current?"CURRENT QUEST":"LOCKED 🔒"))+'</span></article>';
    });
    html+='</div><div class="scope-banner"><strong>Your exam checklist is covered:</strong> Chapter 0 Schulsachen, singular/plural and verb forms; Lesson 1 nominative pronouns, W-questions, possessives, nicht and articles; Lesson 2 vocabulary, accusative pronouns/articles/possessives/verbs, kein, es gibt and accusative prepositions; plus Berufe und Tätigkeiten. Day 8 is for revision.</div>';
    byId("screen").innerHTML=html;
  }

  function renderLearn(){
    renderQuest();
  }

  function renderQuiz(){
    renderQuest();
  }

  function renderCards(){
    var idx=state.cardIndex%cards.length,card=cards[idx],known=state.known.length;
    var html=pageHead("Spaced recall","Flashcards","Try to remember the English before flipping. Mark difficult cards for another round.",'<span class="date-label">'+(idx+1)+' / '+cards.length+' · '+known+' known</span>');
    html+='<div class="flash-card" data-flip><div><div class="flash-lang">'+(state.cardFlipped?"English meaning":"German · tap to flip")+'</div><h2>'+(state.cardFlipped?card[1]:card[0])+'</h2><p>'+(state.cardFlipped?"Flip again or choose how well you knew it.":"Try saying it before you reveal the answer.")+'</p></div></div><div class="flash-controls"><button class="btn ghost" data-card-hard>Again</button><button class="btn" data-card-known>Got it ✓</button></div><div style="text-align:center;color:var(--muted);font-size:10px;margin-top:13px">Use the 30 cards as a 5-minute warm-up or a quick end-of-day review.</div>';
    byId("screen").innerHTML=html;
  }

  function renderResources(){
    var html=pageHead("Make it fun","English-friendly German practice","Use one short video or game as a treat after your textbook mission. These are support resources, not replacements for the syllabus.",'<span class="date-label">A1 beginner-friendly</span>');
    html+='<div class="reference-note"><strong>Easy routine:</strong> choose one 5–10 minute activity, listen once, replay a line, and repeat it aloud. Keep the textbook vocabulary and grammar as your exam source.</div><div class="reference-list">';
    refs.forEach(function(r){html+='<a class="reference-card" href="'+r.url+'" target="_blank" rel="noopener noreferrer"><span class="reference-icon">'+r.icon+'</span><span><h3>'+r.title+'</h3><p>'+r.text+'</p></span><span class="out">↗</span></a>';});
    html+='<div class="panel" style="margin-top:4px"><div class="panel-head"><h2>Your fun, five-minute options</h2><small>Keep German active without making study feel heavy.</small></div><div class="review-row"><span class="check-emoji">♪</span><span><strong>Song hunt</strong><small>Listen for words you already know: Hallo, gut, Haus, Mutter. Catching familiar words is a win.</small></span></div><div class="review-row"><span class="check-emoji">🎬</span><span><strong>Mini-scene replay</strong><small>Watch a short beginner scene with English support, then replay one line and copy the rhythm.</small></span></div><div class="review-row"><span class="check-emoji">🏠</span><span><strong>Room label game</strong><small>Point at 5 things in your room and say their German article + noun: der Tisch, die Lampe, das Bett.</small></span></div><div class="review-row"><span class="check-emoji">🎤</span><span><strong>Voice-note challenge</strong><small>Record a 30-second introduction or home tour. Keep it; compare again on 24 October.</small></span></div></div>';
    html+='<div class="scope-banner">Your core textbook: <a href="https://books.ebalbharati.in/pdfs/1101020169.pdf" target="_blank" rel="noopener noreferrer">Sprachlotsen 1 — German Coursebook</a>. The page cut-off in this app follows the printed page numbers.</div>';
    byId("screen").innerHTML=html;
  }

  function renderWelcome(){
    document.body.classList.add("welcome-mode");
    var route=plan.map(function(d,i){return '<div class="welcome-route-item"><span class="route-number">'+(i<7?pad(i+1):"★")+'</span><span><strong>'+escapeHtml(d.title)+'</strong><small>'+escapeHtml(d.pages?"Pages "+d.pages:"One full revision day")+' · '+escapeHtml(d.unit)+'</small></span></div>';}).join("");
    byId("screen").innerHTML='<div class="welcome-shell"><div class="welcome-top"><a class="welcome-brand" href="#"><span class="brand-mark">D<span>Q</span></span><span><b>DeutschQuest</b><small>Your German adventure</small></span></a><span class="welcome-date">7 STUDY DAYS · 1 REVISION DAY</span></div><div class="welcome-layout"><section class="welcome-hero"><span class="welcome-kicker">🎒 YOUR TEXTBOOK, TURNED INTO A QUEST</span><h1>German gets easier <em>one little win at a time.</em></h1><p>Short lessons. Tiny challenges. A cheerful progress map. We’ll work through your syllabus together, one concept at a time.</p><div class="welcome-stats"><div><span>❤️</span><b>100</b><small>starting HP</small></div><div><span>✨</span><b>0</b><small>XP so far</small></div><div><span>🗺️</span><b>Day 1</b><small>your first quest</small></div></div><div class="welcome-how"><b>How the quest works</b><span>✅ Correct answer: +10 XP</span><span>💛 Wrong answer: −10 HP, a kind explanation, then another try</span><span>🏆 100 XP: level up and unlock the next chapter</span></div></section><section class="setup-card"><div class="setup-icon">🧭</div><span class="setup-label">BEFORE WE START</span><h2>What topics are on pages 1–19?</h2><p>Tell me the headings or main topics you see in the first chunk. A short list is perfect.</p><label for="pageTopics">Your first-page topics</label><textarea id="pageTopics" data-page-topics maxlength="500" placeholder="For example: Schulsachen, articles, singular and plural…">'+escapeHtml(state.quest.pageTopics||"")+'</textarea><div class="setup-hint">The page split is an estimate from your 128-page total. Your note helps make Day 1 match the book.</div><button class="btn quest-primary" data-start-quest '+((String(state.quest.pageTopics||"").trim().length<2)?"disabled":"")+'>Save topics &amp; start Day 1 <span>→</span></button><div class="setup-private">🔒 Saved on this device only</div></section></div><section class="welcome-route"><div class="route-heading"><div><span class="welcome-kicker">THE MAP</span><h2>Seven chapters. One revision day.</h2></div><span class="map-chip">📚 128 pages</span></div><div class="welcome-route-grid">'+route+'</div><p class="map-note">Page ranges are evenly split estimates. We’ll use your textbook’s headings to line up the topics.</p></section></div>';
  }

  function currentQuestStep(){
    var day=questDays[state.quest.day-1];
    return day&&day.steps[state.quest.step];
  }
  function levelNumber(){return Math.floor((state.quest.xp||0)/100)+1;}
  function routeProgress(){
    return plan.map(function(d,i){
      var passed=state.quest.day>i+1;
      var current=state.quest.day===i+1;
      var done=state.quest.completedDays.indexOf(i+1)!==-1||passed||(i===7&&state.quest.reviewCompleted);
      return '<div class="route-node '+(done?"done ":"")+(current?"current ":"")+(i===7?"revision":"")+'"><span>'+(i<7?"D"+(i+1):"★")+'</span><small>'+escapeHtml(i<7?"Day "+(i+1):"Review")+'</small></div>';
    }).join("");
  }
  function renderQuest(){
    document.body.classList.remove("welcome-mode");
    if(state.quest.day>=8){renderRevision();return;}
    var day=plan[state.quest.day-1],step=currentQuestStep();
    if(!step){renderDayComplete();return;}
    var pct=Math.round(state.quest.step/10*100),wrong=state.quest.result==="wrong",correct=state.quest.result==="correct";
    var html='<div class="quest-page"><div class="quest-heading"><div><span class="welcome-kicker">'+escapeHtml(day.label)+' · '+escapeHtml(day.unit)+'</span><h1>'+escapeHtml(day.title)+'</h1><p>'+escapeHtml(day.focus)+'</p></div><span class="page-chip">📖 Pages '+escapeHtml(day.pages)+'</span></div>';
    html+='<div class="quest-stats"><div class="quest-stat hp"><span>❤️</span><b>'+state.quest.hp+'</b><small>HP</small></div><div class="quest-stat xp"><span>✨</span><b>'+state.quest.xp+'</b><small>XP</small></div><div class="quest-stat level"><span>🏆</span><b>'+levelNumber()+'</b><small>Level</small></div><div class="quest-stat streak-stat"><span>🔥</span><b>'+streak()+'</b><small>day streak</small></div></div>';
    html+='<section class="quest-route-panel"><div class="quest-route-head"><div><b>Your adventure map</b><small>One 100 XP level unlocks the next chapter.</small></div><strong>'+Math.min(7,state.quest.day)+' / 7</strong></div><div class="quest-route-track">'+routeProgress()+'</div></section>';
    html+='<div class="quest-progress-head"><span>Day '+state.quest.day+' · Challenge '+(state.quest.step+1)+' of 10</span><span>'+state.quest.dayXp+' / 100 XP</span></div><div class="progress-track quest-track"><div class="progress-fill" style="width:'+pct+'%"></div></div>';
    if(state.quest.day===1&&state.quest.pageTopics){html+='<div class="page-topics-note"><b>📌 Your pages 1–19 notes</b><span>'+escapeHtml(state.quest.pageTopics)+'</span></div>';}
    html+='<div class="quest-learning-card"><div class="concept-label"><span>🧩 CONCEPT '+(state.quest.step+1)+'</span><span class="concept-time">about 2 min</span></div><h2>'+escapeHtml(step.title)+'</h2><p>'+escapeHtml(step.teach)+'</p><div class="german-example"><b>'+escapeHtml(step.example.split(" = ")[0])+'</b>'+(step.example.indexOf(" = ")>-1?'<span>'+escapeHtml(step.example.slice(step.example.indexOf(" = ")+3))+'</span>':"")+'</div></div>';
    var gameMode=(step.prompt.indexOf("___")>-1||step.prompt.indexOf("Complete:")===0)?"FILL THE GAP":((step.prompt.toLowerCase().indexOf("means")>-1||step.prompt.indexOf("Choose '")===0)?"MEANING MATCH":"QUICK PICK");
    html+='<section class="challenge-card"><div class="challenge-top"><span>🎮 MINI-GAME</span><small>'+gameMode+'</small></div><h3>'+escapeHtml(step.prompt)+'</h3><div class="game-options">'+step.options.map(function(o,i){var cls="";if(state.quest.answered&&state.quest.result==="correct"&&i===step.answer)cls=" correct";if(wrong&&i===state.quest.choice)cls=" wrong";return '<button class="game-option'+cls+'" data-game-answer="'+i+'" '+(state.quest.answered?"disabled":"")+'><span class="option-letter">'+String.fromCharCode(65+i)+'</span>'+escapeHtml(o)+'</button>';}).join("");
    if(correct){var levelUp=state.quest.xp>0&&state.quest.xp%100===0;html+='<div class="game-feedback good"><b>'+ (levelUp?"🏆 LEVEL UP! Chapter unlocked!":"✨ Lovely! +10 XP")+'</b><p>'+escapeHtml(step.why)+'</p><button class="btn quest-primary" data-next-step>'+(state.quest.step===9?"Claim Day "+state.quest.day+" reward →":"Next tiny lesson →")+'</button></div>';}
    else if(wrong){html+='<div class="game-feedback gentle"><b>💛 Close! Let’s make it click.</b><p>'+escapeHtml(step.why)+'</p><div class="analogy"><b>Easy way to remember:</b> '+escapeHtml(step.analogy)+'</div><button class="btn quest-secondary" data-try-again>Try again — you’ve got this</button></div>';}
    else{html+='<div class="challenge-foot"><span>Choose an answer. You can retry after a friendly hint.</span><span>+10 XP ✨</span></div>';}
    html+='</section><div class="quest-nudge">🌱 A small session is a real win. Your progress saves automatically on this device.</div></div>';
    byId("screen").innerHTML=html;
  }
  function renderDayComplete(){
    var day=plan[state.quest.day-1],idx=state.quest.day-1;
    var html='<div class="day-win"><div class="win-emoji">🎉</div><span class="welcome-kicker">QUEST COMPLETE</span><h1>You cleared '+escapeHtml(day.title)+'!</h1><p>You earned 100 XP and unlocked the next chapter. Take a tiny victory lap—your German is growing.</p><div class="win-stats"><div><b>❤️ '+state.quest.hp+'</b><small>HP left</small></div><div><b>✨ '+state.quest.xp+'</b><small>total XP</small></div><div><b>🏆 Level '+levelNumber()+'</b><small>current level</small></div></div><button class="btn quest-primary" data-next-day>'+(idx===6?"Open revision day →":"Continue to Day "+(state.quest.day+1)+" →")+'</button><div class="win-sparkles">✦　✧　★　✺　✦</div></div>';
    byId("screen").innerHTML=html;
  }
  function renderRevision(){
    document.body.classList.remove("welcome-mode");
    var day=plan[7];
    if(!state.quest.reviewStarted){
      byId("screen").innerHTML='<div class="revision-page"><div class="revision-hero"><span class="welcome-kicker">DAY 8 · FINAL REVIEW</span><h1>Ready for the Grand German Review?</h1><p>Today is for recall, a short mixed challenge, and calm confidence. No new topics. Just bring your seven quests together.</p><span class="page-chip">📖 Pages 1–128</span></div><div class="revision-grid"><section class="revision-list"><h2>🧰 Your review kit</h2><div>☐ Schulsachen, articles, plural forms, and verb endings</div><div>☐ Pronouns, W-questions, possessives, and nicht</div><div>☐ Chapter 2 nouns, adjectives, and verbs</div><div>☐ Accusative articles, pronouns, kein, es gibt, and prepositions</div><div>☐ Berufe und Tätigkeiten</div></section><section class="revision-start"><div class="setup-icon">🏁</div><h2>One mixed challenge at a time</h2><p>Try 10 questions. Wrong answers still show a hint and let you retry.</p><button class="btn quest-primary" data-start-review>Start final review →</button></section></div></div>';
      return;
    }
    if(state.quest.reviewStep>=10){
      byId("screen").innerHTML='<div class="day-win"><div class="win-emoji">🌟</div><span class="welcome-kicker">DEUTSCHQUEST COMPLETE</span><h1>You reached the end of the map!</h1><p>Seven learning chapters, one full revision day, and a whole lot of German. Viel Erfolg!</p><div class="win-stats"><div><b>❤️ '+state.quest.hp+'</b><small>HP left</small></div><div><b>✨ '+state.quest.xp+'</b><small>total XP</small></div><div><b>🔥 '+streak()+'</b><small>day streak</small></div></div><button class="btn quest-secondary" data-screen="plan">See your journey map</button></div>';
      return;
    }
    var q=questions[state.quest.reviewStep%questions.length],wrong=state.quest.reviewResult==="wrong",correct=state.quest.reviewResult==="correct";
    var html='<div class="quest-page"><div class="quest-heading"><div><span class="welcome-kicker">REVISION DAY · '+escapeHtml(day.unit)+'</span><h1>'+escapeHtml(day.title)+'</h1><p>'+escapeHtml(day.focus)+'</p></div><span class="page-chip">📖 '+escapeHtml(day.pages)+'</span></div><div class="quest-stats"><div class="quest-stat hp"><span>❤️</span><b>'+state.quest.hp+'</b><small>HP</small></div><div class="quest-stat xp"><span>✨</span><b>'+state.quest.xp+'</b><small>XP</small></div><div class="quest-stat level"><span>🏆</span><b>'+levelNumber()+'</b><small>Level</small></div></div><div class="quest-progress-head"><span>Final review · question '+(state.quest.reviewStep+1)+' of 10</span><span>Mixed recall</span></div><div class="progress-track quest-track"><div class="progress-fill" style="width:'+Math.round(state.quest.reviewStep/10*100)+'%"></div></div><div class="challenge-card revision-question"><div class="challenge-top"><span>⚔️ FINAL BOSS</span><small>MIXED REVIEW</small></div><h3>'+escapeHtml(q.q)+'</h3><div class="game-options">'+q.options.map(function(o,i){var cls="";if(correct&&i===q.answer)cls=" correct";if(wrong&&i===state.quest.reviewChoice)cls=" wrong";return '<button class="game-option'+cls+'" data-review-answer="'+i+'" '+(state.quest.reviewAnswered?"disabled":"")+'><span class="option-letter">'+String.fromCharCode(65+i)+'</span>'+escapeHtml(o)+'</button>';}).join("");
    if(correct){html+='<div class="game-feedback good"><b>✨ Correct! +10 XP</b><p>'+escapeHtml(q.why)+'</p><button class="btn quest-primary" data-next-review>'+(state.quest.reviewStep===9?"Finish the review →":"Next review question →")+'</button></div>';}
    else if(wrong){html+='<div class="game-feedback gentle"><b>💛 Not quite—here’s a helpful clue.</b><p>'+escapeHtml(q.why)+'</p><div class="analogy"><b>Easy way to remember:</b> Match the sentence job first, like putting each item in its own labelled drawer.</div><button class="btn quest-secondary" data-try-review>Try again</button></div>';}
    else{html+='<div class="challenge-foot"><span>One question at a time. You can retry after a hint.</span><span>+10 XP ✨</span></div>';}
    byId("screen").innerHTML=html+'</div>';
  }

  function setScreen(name){
    state.screen=name;
    if(!state.quest.started){renderWelcome();updateTop();return;}
    document.body.classList.remove("welcome-mode");
    document.querySelectorAll("[data-screen]").forEach(function(el){el.classList.toggle("active",el.dataset.screen===name);});
    var names={today:"YOUR QUEST",learn:"TODAY’S LESSON",quiz:"MINI-GAME",cards:"WORD CARDS",plan:"JOURNEY MAP",resources:"ENGLISH BOOSTS"};
    byId("sectionName").textContent=names[name]||"TODAY";
    if(name==="today")renderQuest();
    else if(name==="plan")renderPlan();
    else if(name==="learn")renderLearn();
    else if(name==="quiz")renderQuiz();
    else if(name==="cards")renderCards();
    else renderResources();
    save();byId("screen").focus({preventScroll:true});
  }

  document.addEventListener("click",function(e){
    if(e.target.closest("[data-start-quest]")){
      state.quest.pageTopics=byId("pageTopics").value.trim();
      if(state.quest.pageTopics.length<2){toast("Add a topic or heading from pages 1–19 first.");return;}
      state.quest.started=true;state.quest.hp=100;state.quest.xp=0;state.quest.day=1;state.quest.step=0;state.quest.dayXp=0;state.quest.answered=false;state.quest.result="";state.quest.choice=null;
      save();setScreen("today");return;
    }
    var gameAnswer=e.target.closest("[data-game-answer]");
    if(gameAnswer&&!state.quest.answered){
      var activeStep=currentQuestStep(),gameChoice=Number(gameAnswer.dataset.gameAnswer);
      state.quest.choice=gameChoice;state.quest.answered=true;
      if(gameChoice===activeStep.answer){state.quest.result="correct";state.quest.xp+=10;state.quest.dayXp+=10;if(state.quest.xp%100===0){celebrate();toast("Level up! The next chapter is unlocked!");}}
      else{state.quest.result="wrong";state.quest.hp=Math.max(0,state.quest.hp-10);}
      save();renderQuest();return;
    }
    if(e.target.closest("[data-try-again]")){state.quest.answered=false;state.quest.result="";state.quest.choice=null;save();renderQuest();return;}
    if(e.target.closest("[data-next-step]")&&state.quest.result==="correct"){
      state.quest.step++;state.quest.answered=false;state.quest.result="";state.quest.choice=null;
      if(state.quest.step>=10){if(state.quest.completedDays.indexOf(state.quest.day)===-1)state.quest.completedDays.push(state.quest.day);var completedDate=todayISO();if(state.completed.indexOf(completedDate)===-1)state.completed.push(completedDate);}
      save();renderQuest();return;
    }
    if(e.target.closest("[data-next-day]")){
      state.quest.day=Math.min(8,state.quest.day+1);state.quest.step=0;state.quest.dayXp=0;state.quest.answered=false;state.quest.result="";state.quest.choice=null;state.quest.reviewStep=0;save();setScreen("today");return;
    }
    if(e.target.closest("[data-start-review]")){state.quest.reviewStarted=true;state.quest.reviewStep=0;save();renderRevision();return;}
    var reviewAnswer=e.target.closest("[data-review-answer]");
    if(reviewAnswer&&!state.quest.reviewAnswered){
      var reviewQ=questions[state.quest.reviewStep%questions.length],reviewChoice=Number(reviewAnswer.dataset.reviewAnswer);
      state.quest.reviewChoice=reviewChoice;state.quest.reviewAnswered=true;
      if(reviewChoice===reviewQ.answer){state.quest.reviewResult="correct";state.quest.xp+=10;if(state.quest.xp%100===0){celebrate();toast("Level up! Great recall!");}}
      else{state.quest.reviewResult="wrong";state.quest.hp=Math.max(0,state.quest.hp-10);}
      save();renderRevision();return;
    }
    if(e.target.closest("[data-try-review]")){state.quest.reviewAnswered=false;state.quest.reviewResult="";state.quest.reviewChoice=null;save();renderRevision();return;}
    if(e.target.closest("[data-next-review]")&&state.quest.reviewResult==="correct"){
      state.quest.reviewStep++;state.quest.reviewAnswered=false;state.quest.reviewResult="";state.quest.reviewChoice=null;if(state.quest.reviewStep>=10){state.quest.reviewCompleted=true;var reviewDate=todayISO();if(state.completed.indexOf(reviewDate)===-1)state.completed.push(reviewDate);}save();renderRevision();return;
    }
    var screen=e.target.closest("[data-screen]");
    if(screen){e.preventDefault();setScreen(screen.dataset.screen);return;}
    var minutes=e.target.closest("[data-minutes]");
    if(minutes){state.minutes=Number(minutes.dataset.minutes);renderToday();save();return;}
    var claim=e.target.closest("[data-claim]");
    if(claim){
      var day=plan.find(function(x){return x.date===claim.dataset.claim;});
      var ok=state.minutes===60?allDone(day,false)&&allDone(day,true):allDone(day,false);
      if(!ok){toast("Finish the checked study tasks first.");return;}
      if(state.completed.indexOf(day.date)===-1){state.completed.push(day.date);state.xp=(state.xp||0)+25+(state.minutes===60?10:0);save();celebrate();toast(state.minutes===60?"Study day complete! +35 XP":"Study day complete! +25 XP");}
      renderToday();return;
    }
    var select=e.target.closest("[data-select-day]");
    if(select){state.selectedDate=select.dataset.selectDay;setScreen("today");return;}
    var ans=e.target.closest("[data-answer]");
    if(ans&&state.quizAnswer===null){
      var q=questions[state.quizIndex%questions.length];state.quizAnswer=Number(ans.dataset.answer);
      if(state.quizAnswer===q.answer)state.quizScore++;
      renderQuiz();save();return;
    }
    if(e.target.closest("[data-next-quiz]")){
      if(state.quizIndex%questions.length===questions.length-1){toast("Quiz run complete: "+state.quizScore+" / "+questions.length);state.quizIndex=0;state.quizScore=0;}
      else state.quizIndex++;
      state.quizAnswer=null;renderQuiz();save();return;
    }
    if(e.target.closest("[data-flip]")){state.cardFlipped=!state.cardFlipped;renderCards();return;}
    if(e.target.closest("[data-card-hard]")){state.cardIndex=(state.cardIndex+1)%cards.length;state.cardFlipped=false;renderCards();return;}
    if(e.target.closest("[data-card-known]")){
      var word=cards[state.cardIndex%cards.length][0];
      if(state.known.indexOf(word)===-1)state.known.push(word);
      state.cardIndex=(state.cardIndex+1)%cards.length;state.cardFlipped=false;save();renderCards();return;
    }
    var openCards=e.target.closest("[data-open-cards]");
    if(openCards){state.cardIndex=Number(openCards.dataset.openCards)%cards.length;state.cardFlipped=false;setScreen("cards");return;}
  });
  document.addEventListener("change",function(e){
    if(e.target.matches("[data-task]")){state.tasks[e.target.dataset.task]=e.target.checked;save();renderToday();}
  });
  document.addEventListener("input",function(e){
    if(e.target.matches("[data-page-topics]")){
      state.quest.pageTopics=e.target.value;
      var startButton=byId("screen").querySelector("[data-start-quest]");
      if(startButton)startButton.disabled=String(e.target.value||"").trim().length<2;
      save();return;
    }
    if(e.target.matches("[data-note]")){state.notes[e.target.dataset.note]=e.target.value;save();}
  });

  updateTop();setScreen(state.screen||"today");
  var installPrompt=null;
  window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();installPrompt=e;byId("installButton").hidden=false;});
  byId("installButton").addEventListener("click",async function(){
    if(!installPrompt){toast("Use your browser menu: Install app / Add to Home screen.");return;}
    installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;byId("installButton").hidden=true;
  });
  if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){
    window.addEventListener("load",function(){navigator.serviceWorker.register("./service-worker.js").catch(function(){});});
  }
})();
