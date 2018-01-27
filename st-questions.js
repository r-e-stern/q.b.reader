var bonuses = [];
var tossups = [];
bonuses.push(new Bonus("Many Earth naval traditions were observed by Starfleet. For ten points each —",
    "The movie Star Trek Generations opens with a shot of a bottle of champagne, used for this traditional act, floating in space.",
    "christening a ship (accept variants)",
    "The champagne, vintage 2265, was used by James T. Kirk to christen this starship helmed by Demora Sulu.",
    "USS Enterprise-B (accept NCC-1701-B, do not accept or prompt on answers without 'B')",
    "The Enterprise-B belonged to this class. Tuvok once served under Hikaru Sulu on a vessel of this class.",
    "Excelsior-class (prompt on 'USS Excelsior')"));
bonuses.push(new Bonus("The Terran Empire was created when this man shot and killed a Vulcan Ambassador in 2063. For ten points each —",
    "Name this human scientist who created the first warp-capable ship on Earth.",
    "Dr. Zephram Cochrane",
    "That first contact occurred in this Western American town, home of Next Generation writer Brannon Braga.",
    "Bozeman, Montana",
    "The USS Bozeman was trapped under these conditions for 90 years until its rescue in 2368 by the Enterprise-D.",
    "a temporal distortion (accept 'time loop' or answers mentioning time and repetition)"));
bonuses.push(new Bonus("Many famous performers have had cameos on Star Trek shows. For ten points each —",
    "This wrestler-turned-actor appeared as a wrestler on Voyager; he was credited under his wrestling name.",
    "Dwayne Douglas 'The Rock' Johnson (accept either underlined portion)",
    "This actor known for his work in animation appeared as an engineer on Enterprise and helmed his own Trek imitator in 2017.",
    "Seth Woodbury MacFarlane",
    "Abdullah bin al-Hussein, then a prince of this country, appeared uncredited on Voyager as a lieutenant.",
    "the Hashemite Kingdom of Jordan"));
bonuses.push(new Bonus("Journeying to the center of the galaxy, Sybok and the crew of the Enterprise-A discovered a planet. For ten points each —",
    "Name this planet inhabited by a seemingly divine entity.",
    "Sha Ka Ree",
    "That entity took the form of deities from Alpha Quadrant species, including one from this founding member of the Federation.",
    "Andorian(s)",
    "An element of Andorian religious culture is this ritual duel fought with ice-axes.",
    "the Ushaan [OO-shon]"));
bonuses.push(new Bonus("For ten points each — name these officers who might have earned the rank of Captain:",
    "In an alternate timeline, this officer, promoted to captain, attempted to stop the crew of the Delta Flyer from changing history.",
    "Lt. Cmdr. Geordi LaForge (accept 'Captain LaForge' or variants)",
    "In the Next Generation finale, the USS Pasteur is captained by a hypothetical daughter of this couple.",
    "Capt. Jean-Luc Picard and Dr. Beverly Crusher (prompt on 'Captain Beverly Crusher' but not 'Captain Crusher')",
    "In another hypothetical timeline, Lorian, a half-Vulcan, half-human, commands the Enterprise in the Delphic Expanse as it becomes this type of ship.",
    "generational starship"));
bonuses.push(new Bonus("The Delphic Expanse was destroyed in 2154. For ten points each —",
    "This group of six species, including Aquatics, Reptilians, and Primates, lived within the Expanse.",
    "the Xindi",
    "The Xindi, intending to destroy Earth, began to test a weapon of mass destruction at this site.",
    "Florida, Earth",
    "The superweapon was thwarted when Jonathan Archer and the crew of the Enterprise defeated these creators of the Expanse.",
    "the Sphere-Builders (or the Guardians)"));
bonuses.push(new Bonus("For ten points each — answer these questions about characters played by Aron Eisenberg:",
    "Eisenberg played this first Ferengi in Starfleet for seven years on Deep Space Nine.",
    "Nog",
    "On Voyager, Eisenberg played a boy of this species saved by Chakotay.",
    "Kazon-Ogla [KAY-zon og-LUH]",
    "In a Prophet-induced vision of the 1950s, Eisenberg, then twenty-nine years old, had this occupation.",
    "newsboy (accept newsie or news hawker, or answers mentioning selling newspapers, do not accept or prompt on 'paperboy')"));
bonuses.push(new Bonus("For ten points each — name these scientists:",
    "This inventor of the Warp Five Engine was the father of a human starship captain.",
    "Henry Archer",
    "Originally a Brunali, this Starfleet Academy applicant earned a position in the USS Voyager astrometrics lab.",
    "Icheb",
    "In a holoprogram created for Julian Bashir, this James Bond-inspired antagonist with a medical name kidnapped scientists specializing in lasers.",
    "Hippocrates Noah"));
bonuses.push(new Bonus("Starships require energy to function. For ten points each —",
    "Name this energy source used by the Federation and mined by the Klingons at Rura Penthe [ROO-ra PEN-te].",
    "dilithium crystals (do not accept or prompt on 'lithium')",
    "The dilithium crystals on his ship were a constant adversary of this engineer often tasked with providing ‘more power’.",
    "Captain Montgomery 'Scotty' Scott (accept either underlined portion)",
    "By 2369, Scotty was lost in space, trapped near one of these massive energy-capturing devices.",
    "Dyson sphere"));
bonuses.push(new Bonus("'Keep your ears open and your eyes on the mark' was one of these directives. For ten points each —",
    "Name this collection of guidelines traditionally published with the cheapest possible binding.",
    "the Ferengi Rules of Acquisition",
    "The Rules of Acquisition were written by Gint, the first holder of this position and leader of the Ferengi.",
    "Grand Nagus",
    "Rom was scolded for breaking this first Rule of Acquisition in front of Zek during his Nagal visit to Deep Space Nine.",
    "'Once you have their money, you never give it back.' (accept variants mentioning a prohibition on returning   money)"));
bonuses.push(new Bonus("Pavel Chekov was born in Russia in 2245, and has misconceptions about his birthplace. For ten points each —",
    "Chekov claimed that this beverage enjoyed by Scotty was 'invented by a little old lady from Leningrad'.",
    "Scotch whisky",
    "Chekov claimed that this mythical location was near Moscow, which must have made its inhabitants 'very sad to leave'.",
    "the Garden of Eden (or gan eden)",
    "Upon encountering this grain at Deep Space K-7, Chekov declared it to be a Russian 'inwention' [in-WEN-tion].",
    "quadrotriticale"));
bonuses.push(new Bonus("In 2370, the Federation-Cardassian Treaty was signed. For ten points each —",
    "That treaty established this buffer between the Cardassian Union and the Federation.",
    "the Demilitarized Zone (or DMZ)",
    "Planets from the DMZ and the Badlands, now without an interstellar allegiance, formed this association.",
    "the Maquis [mah-KEE]",
    "The Maquis were successfully infiltrated by this Cardassian posing as a Bajoran Starfleet engineer.",
    "Seska"));
bonuses.push(new Bonus("This document was ratified in 2161 and signed by Jonathan Archer. For ten points each —",
    "Name this founding document of a major Alpha Quadrant power.",
    "the Charter of the United Federation of Planets",
    "This group takes its name from an article in the Federation Charter providing for extraordinary measures to be taken in times of extreme threat.",
    "Section 31",
    "Section 31 attempted to cure this affliction in the 22nd century for less-than-noble reasons.",
    "the Klingon augment virus (accept variants)"));
bonuses.push(new Bonus("Millions of species have evolved on Earth. For ten points each —",
    "This reptilian group inhabited Earth until a meteor strike sixty-five million years ago.",
    "the dinosaur(s)",
    "Before dinosaurs went extinct, this species left Earth for the Delta Quadrant. The USS Voyager encountered them in 2373.",
    "the Voth (prompt on 'hadrosaur(s)')",
    "The Voth were determined to have evolved on Earth by Voyager’s doctor, who noted the Voth and humans shared this many genetic markers.",
    "forty-seven"));
bonuses.push(new Bonus("An endling is the last surviving member of its species. For ten points each —",
    "Kamin could be considered an endling of this long-dead village known for its flautists.",
    "Ressik, Kataan",
    "Ressik was destroyed as a result of one of these natural disasters, one of which happened in the Hobus sector in the 24th century.",
    "supernova(e)",
    "Supernovae leave behind these remnants, of which artificial ones can be used to power warbirds.",
    "singulariti(es) (accept 'black holes')"));
bonuses.push(new Bonus("Emory Erickson invented the transporter. For ten points each —",
    "The transporter was capable of facilitating an early version of this phenomenon.",
    "teleportation (accept variants)",
    "In 2256, teleportation of starship-sized objects was discovered by this creator of the spore drive.",
    "Lt. Paul Stamets",
    "In the 24th century, this type of teleportation was achieved by Tom Paris, shortly before he turned into a lizard.",
    "warp 10 or infinite velocity or crossing the transwarp threshold (accept answers mentioning infinite speed)"));
bonuses.push(new Bonus("For ten points each — name these long-lived species:",
    "Dr. Tolian Soran and Guinan were members of this species ripped from the Nexus by the Enterprise-B.",
    "El-Aurian(s)",
    "This Enterprise crew member was 137 years old when he toured the Enterprise-D at Farpoint Station.",
    "Adm. Leonard H. 'Bones' McCoy, MD (accept variants)",
    "The Prophets, including this mother of the Emissary, exist outside of time and thus technically live forever.",
    "Sarah Sisko"));
bonuses.push(new Bonus("The Borg have the capacity to assimilate humans. For ten points each —",
    "In 2356, they assimilated this six-year old daughter of exobiologists exploring the Delta Quadrant.",
    "Annika Hansen (do not accept or prompt on 'Seven of Nine')",
    "Hansen was assimilated by the Borg and liberated by the USS Voyager, where she served at this station.",
    "astrometrics officer",
    "An astrometrics display screen once listed 'J. Lyman', a character on this program broadcast against the final seasons of Voyager, as a deceased lieutenant.",
    "The West Wing"));
bonuses.push(new Bonus("For ten points each — name these recreational activities:",
    "William Riker would often practice this martial art with his father, only to later discover he had been cheated.",
    "Anbo-jytsu",
    "Jonathan Archer had a fondness for watching California universities compete at this Earth sport.",
    "water polo",
    "Data defeated a third-level grand-master at Stratagema [strat-uh-GEM-uh] by abandoning this common strategy.",
    "attempting to win (accept variants)"));
bonuses.push(new Bonus("The pagh was an element of one of these on Bajor. For ten points each —",
    "Name these organized belief systems like the rogue one encountered by Jean-Luc Picard on Mintaka III ['three'].",
    "religion(s)",
    "This Starfleet order was inadvertently broken on Mintaka III when an anthropological bunker ran out of power.",
    "the Prime Directive (or Starfleet General Order Number One, or the non-interference directive)",
    "The Prime Directive was superseded only by this directive to destroy a namesake specific molecular particle.",
    "the Omega Directive"));
bonuses.push(new Bonus("Trip Tucker was an aficionado of early Earth science fiction. For ten points each —",
    "As a child, he read this sci-fi epic by H.G. Wells about a Martian invasion.",
    "The War of the Worlds",
    "While in decon with Hoshi Sato, Tucker declared their situation to be not unlike this 1969 bio-thriller.",
    "The Andromeda Strain",
    "Upon hearing about T’Pol’s second foremother, Tucker compared her adventures in this Pennsylvania town to an episode of The Twilight Zone.",
    "Carbon Creek, Pennsylvania"));
bonuses.push(new Bonus("According to James T. Kirk, every Federation vessel carries this substance. For ten points each —",
    "Name this fictional substance that resists attacks invented by Kirk to bluff an opponent.",
    "corbomite",
    "Kirk’s 'corbomite maneuver' was used to out-think this menacing alien who turned out to be controlling a puppet.",
    "Balok",
    "Like this founding species of the Federation, Balok turned out to be no more than four feet tall.",
    "Tellarite(s)"));
bonuses.push(new Bonus("In 2365, Bruce Maddox developed three criteria for sentience. For ten points each —",
    "The first criterion was this quality, the 'ability to learn, understand, and cope with new situations'.",
    "intelligence (prompt on variants)",
    "The second criterion, self-awareness, was met by Data by stating that he was engaged in this activity.",
    "a legal hearing (accept variants, do not accept or prompt on 'tribunal' or 'trial')",
    "Maddox’s criteria were used by Jean-Luc Picard to convince this magistrate of Data’s right to choose.",
    "Capt. Phillipa Louvois"));
bonuses.push(new Bonus("He’s a doctor, damn it, not a nightlight. For ten points each —",
    "Lewis Zimmerman created this Starfleet physician, one of which served aboard the USS Voyager.",
    "the Emergency Medical Hologram, Mark I",
    "The Voyager EMH was considered by Voyager to be a sentient lifeform under this category.",
    "photonic lifeform(s)",
    "The Doctor wrote this holonovel in the Delta Quadrant which contributed to photonic liberation.",
    "Photons Be Free"));
tossups.push(new Tossup("One of these objects was owned by a relative of an inhabitant of Deep Space Nine. Another of these objects was the site of the tragic death of Cadet Joshua Albert during a training exercise. In a memorable episode titled for these objects, Nog (*) learns to cope with his PTSD. The Aenar [EE-nar] are native to one of these cosmological objects, of which 181 are in the Sol system. For ten points — name these planet-like bodies such as Praxis and Luna.",
    "moon(s) (accept It’s Only A Paper Moon after 'Nog')",bonuses[0]));
tossups.push(new Tossup("Though ambidextrous, this individual preferred using his left hand for tasks including painting and writing. This individual was, by most counts, forty-one years of age at the time of his death. Aboard the Enterprise-D (*), he became close friends with Lt. Reginald Barclay, who, along with this man, was the only other officer known to be able to feed Spot. For ten points — name this android Starfleet lieutenant commander who left his head in San Francisco.",
    "Lt. Cmdr. Data [DAY-tuh]",bonuses[1]));
tossups.push(new Tossup("Admiral William Ross is notable among Starfleet leadership for having no experience with this object.  Trader Kivas Fajo [KEE-vas FAH-jo] relinquished twelve crates of this object upon his capture. Upon consuming it in The Undiscovered (*) Country, Captain Kirk notes that it is ‘no longer to be used at diplomatic functions’.  When Worf consumed this, he noted that it should be illegal; it was legalized during the Dominion War. For ten points — name this blue translucent alcoholic beverage.",
    "Romulan ale (do not accept or prompt on 'Kali-Fal')",bonuses[2]));
tossups.push(new Tossup("At Starfleet Academy, this officer took American Sign Language but struggled with Klingon. Aboard the USS Al-Batani, this officer served under then-Captain Owen Paris, who was responsible for the attempted (*) rescue of this officer’s ship through the Pathfinder Project in 2378. Born in Bloomington, Indiana, she enjoyed drinking coffee and attributed her victory over the Borg to it. The starship Voyager was commanded in the Delta Quadrant by — for ten points, which first female lead of a Star Trek series?",
    "Adm. Kathryn Janeway",bonuses[3]));
tossups.push(new Tossup("Dathon invoked one of these entities in his encounter with Captain Picard at El-Adrel to convey silence; after attempting to unionize coal miners, Sean O’Brien was cast into one of them. A red one of these geographic features (*) lies at the entrance to Sto-Vo-Kor to be navigated by those with honor. Wesley Crusher first met Data at a simulation of one of these features. Deep Space Nine’s runabouts were named after these objects, which — for ten points — on Earth include the Yangtse Kiang [yang-TSEE KEE-ang] and Orinoco.",
    "river(s)",bonuses[4]));
tossups.push(new Tossup("This individual died due to radiation sickness in the early stages of his civilization. That death, in a vast desert, was caused by his species’ reliance on atomic weaponry in the midst of a conflict with rebels. The rebels, who were said to 'march (*) beneath the Raptor’s wings', were eventually defeated as this man’s teachings led to a Time of Awakening and Reform under the Kir’Shara [KEER SHA-ra]. For ten points — name this father of Vulcan philosphy whose enlightenment on Mount Seleya is symbolized by the IDIC.",
    "Surak of Vulcan",bonuses[5]));
tossups.push(new Tossup("On one iteration of this holiday, the USS Enterprise-D rendezvoused with the USS Crazy Horse under Captain Eric Pressman. It was celebrated with an art contest, which in 2370 was won by Paul Menegay, a (*) seven-year-old. Menegay’s submission was an orange bust of this holiday’s honoree, an unwilling 'role model' for the youth of the Enterprise-D. William Riker particularly enjoyed — for ten points — what holiday created by the crew of the Enterprise-D to celebrate their leader?",
    "Captain Picard Day",bonuses[6]));
tossups.push(new Tossup("Built at Tranquility Base, the site of the first moon landing, this vessel was lost in space in 2268. Recovered by a different faction, this ship would go on to tip the balance of power in a conflict not involving Starfleet. When it was discovered by the crew of the Enterprise, its crew had (*) mutinied against its captain. Another mutiny would later occur aboard it, this time led by soon to be-Empress Hoshi Sato. For ten points — name this vessel with registry number 'one-seven-six-four', the first of three ships to bear its name.",
    "USS Defiant (accept NCC-1764 before 'registry', do not accept or prompt on 'NX-74205')",bonuses[7]));
tossups.push(new Tossup("Upon this figure’s death, he was told that he would be remembered by all of his species. That death was preceded by his proclamation that 'a hero's demise brings pride for a life given ... and comfort in the knowledge that new life awaits in (*) Sto-Vo-Kor'. Claiming to represent all Klingons, he saw in himself a reincarnation of the Klingon warrior Kahless [KAY-lesh], who slew the Klingon gods and crafted the first bat’leth. For ten points — name this Klingon leader slain by Michael Burnham at the Battle of the Binary Stars.",
    "T’Kuvma (or tIquvma)",bonuses[8]));
tossups.push(new Tossup("One of Kathryn Janeway’s holoprograms had two rules: a ban on this art form, and 'check your rank at the door'. This art form is valued on Qo’noS [KRO-nos], but most non-Klingons find Klingon versions of this art form to be (*) unendurable. The doctor on the USS Voyager enjoyed, to the dismay of his crewmates, performing in this art form. Berlioz, Puccini, and Verdi are — for ten points — human composers of what art form performed in special 'houses'?",
    "opera (prompt on variants)",bonuses[9]));
tossups.push(new Tossup("A common saying among members of this species was that one should ‘never turn [one’s] back on a Breen’. Uncharacteristically uninvolved in the Terran - Klingon conflict, this species has relations with all other major Alpha Quadrant powers. Elim Garak was once assigned as a (*) 'gardener' on this world, on which Tomalak once threatened to display the broken hull of the Enterprise-D.  This species’ intervention caused the formation of the Federation. Senator Vreenak was a high-ranking diplomat of — for ten points —  what species?",
    "Romulan(s)",bonuses[10]));
tossups.push(new Tossup("The Borg designated this group as Species 5618, and considered them to possess 'below-average cranial capacity, minimal redundant systems, and limited regenerative abilities'. The Klingons referred to them as (*) 'tera’ngan' [te-RA-ng-an]. Q was punished by the Continuum and transformed into a member of this group, which was a founding member of the Federation. For ten points each — name these protagonists of Star Trek that have appeared in all released Star Trek material except for Voyager’s 'Living Witness'.",
    "human(s) (or humanity, or mankind, or humankind)",bonuses[11]));
tossups.push(new Tossup("The Galaxy-class USS Odyssey was lost in this conflict, during which the Son’a [SEWN-ah] were opposed to the Federation. Though the Ba’ku were neutral, many powers played both sides of this conflict. The (*) Chin’toka system was taken and retaken in this war, the second time only months before the defection of Damar and the war’s end. This war was fought between two quadrants connected by the Bajoran wormhole. Weyoun was a commander in — for ten points — what conflict between an alliance and the Founders?",
    "the Federation-Dominion War (accept variants)",bonuses[12]));
tossups.push(new Tossup("Miles O’Brien wanted Kira Nerys to stop drinking Quarktajino [qwark-ta-JINO], one of these substances, which Quark commented was easy to sell. Dr. Phlox proposed these as an alternative to Vulcan neuropressure to convince Trip Tucker to undergo treatment. The (*) Jem’Hadar were genetically engineered by the Founders to be reliant on ketracel-white, one of these potent substances. Tobacco is an example of — for ten points — which substances summarized by Quark as ‘if they’ll buy poison, they’ll buy anything’.",
    "addictive drug(s) (accept variants)",bonuses[13]));
tossups.push(new Tossup("The 24th century saw the phasing out of this starship position, in favor of automation with isolinear circuitry. Technically Chief Pendleton was this type of officer on the Enterprise-D, but his job was usually done by Worf. Before the (*) universal translator, these officers, like Hoshi Sato, would have to translate messages as well as relay them. Nyota Uhura held — for ten points — what starship position responsible for hailing other ships and interpreting their signals?",
    "communications officer",bonuses[14]));
tossups.push(new Tossup("The Dixon Hill holonovels were set in this mid-twentieth century locale. During the Niners’ baseball practice, Benjamin Sisko wore a cap indicating preference for a team in this city. Attacked by the Breen in 2375, this city has long been associated with unity. The (*) Federation was founded here in 2161, over two hundred years after the founding of the United Nations in this city’s center. Starfleet Academy was located at — for ten points — which city visited in 1986 by the crew of the HMS Bounty?",
    "San Francisco, Earth",bonuses[15]));
tossups.push(new Tossup("On their homeworld, these life-forms lived in ecological balance with a reptilian species. That planet, Iota Geminorum IV ['four'], was overrun by a Klingon armada in the late 23rd century. A dissected specimen of these round, (*) furry creatures was displayed in Gabriel Lorca’s laboratory. In 2268, Cyrano Jones introduced these enemies of the Klingon Empire to Deep Space K-7, and their rapid reproductive rate led to them overwhelming the station and the USS Enterprise. For ten points — name these life-forms with scientific name Polygeminus grex.",
    "tribble(s)",bonuses[16]));
tossups.push(new Tossup("This individual was a Lurian, but, unlike other members of his species, he frequently travelled outside of the Ionite Nebula region. He utilized his second stomach to (*) store one thousand bricks worth of latinum obtained in the Liseppian Mother’s Day Heist, and the latinum contamination led to his hair loss. His departure, according to an unofficial Rule of Acquisition, signals the end of times. For ten points — name this frequent patron of Quark’s who never spoke on camera throughout the entire run of Deep Space Nine.",
    "Morn",bonuses[17]));
tossups.push(new Tossup("To escape a subspace anomaly, the USS Voyager and three other ships engaged in this action. This action was taken between the Na’kuhl [na-COOL] and the Nazi Party in an alternate timeline. The Romulans were compelled to take this action by (*) Elim Garak during the Dominion War. In the mirror universe, Klingons, Vulcans, and Andorians took this action against the Terran Empire. To defeat Species 8472, Captain Kathryn Janeway and the Borg temporarily — for ten points — took what action involving the joining of forces?",
    "forming (or joining) an alliance",bonuses[18]));
tossups.push(new Tossup("Julian Bashir prescribed this beverage to a humanoid Odo, along with rest. Generally unpopular among humans, Sergey and Helena Rozhenko [ro-JEN-ko] were surprised that their adopted son (*) consumed it, much less enjoyed it. Quark began stocking a chilled version of this beverage at his bar and on the USS Defiant for Worf’s consumption after Worf declared it to be 'a warrior’s drink'. For ten points — name this Earth beverage made from the puréed dried fruit of a plum tree.",
    "prune juice",bonuses[19]));
tossups.push(new Tossup("In order to frame Odo, this process was undergone by Ibudan. Two brothers on the USS Voyager performed this process on potatoes, after they were forbidden to do it on Naomi Wildman. Weyoun is a (*) product of this process, which requires genetic material. In order to infiltrate the Federation, Romulans performed this process on Jean-Luc Picard, but the result, Shinzon, instead launched a coup d'état against the Romulan Senate on behalf of the Reman people. Identical live copies can be created through — for ten points — what bio-technological process?",
    "cloning (accept variants, do not accept or prompt on 'asexual reproduction')",bonuses[20]));
tossups.push(new Tossup("This color’s alert was called in exceptional situations, including biohazards. Data’s wedding gift to William Riker and Deanna Troi invoked this color. An alternate future involved Jean-Luc Picard (*) wearing this color uniform instead of his usual command red. Major Kira once remarked that Earth’s oceans featured more of this color than those of Bajor. Hoshi Sato, Julian Bashir, the Emergency Medical Hologram, and Leonard McCoy all wore — for ten points — what color used on Starfleet uniforms to indicate medical or science personnel?",
    "blue (accept reasonable variants)",bonuses[21]));
tossups.push(new Tossup("At a fan convention in Las Vegas in 2013, this film was voted the seventh-best Star Trek movie. Patrick Stewart was initially skeptical of this film’s premise, but enjoyed seeing it after being urged to by Jonathan Frakes. It features a television show in which the crew of the (*) NSEA Protector embark on interstellar adventures, and follows the lives of its actors on the convention circuit seventeen years after the show. For ten points — Tim Allen and Sigourney Weaver starred in what 1999 Star Trek parody film?",
    "Galaxy Quest",bonuses[22]));
tossups.push(new Tossup("This individual rebelled against their species and instigated a civil war, which had unintended consequences. First contact between this entity’s species and the USS Enterprise-D went less than ideally, featuring the first use of the Enterprise-D’s battle bridge. That 'encounter', at (*) Farpoint Station kick-started this powerful entity’s trial of humanity, with Jean-Luc Picard as proxy. During the trial, this seemingly omnipotent entity judged humanity to be capable of expanding its horizons. For ten points — name this godlike troublemaker who shares a name with his species and all its members.",
    "Q (do not accept or prompt on any other answer)",bonuses[23]));
tossups[0].source.push(new Episode("Civil Defense","DS9",3,7));
tossups[0].source.push(new Episode("It's Only a Paper Moon","DS9",7,10));
tossups[0].source.push(new Episode("The Aenar","ENT",4,14));
tossups[0].source.push(new Movie("The Undiscovered Country"));
tossups[0].source.push(new Episode("The First Duty","TNG",5,19));
tossups[1].source.push(new Movie("Nemesis"));
tossups[1].source.push(new Episode("Birthright, Part 1","TNG",6,16));
tossups[1].source.push(new Episode("Genesis","TNG",7,19));
tossups[1].source.push(new Episode("Time's Arrow","TNG",5,26));
tossups[2].source.push(new Episode("Inter Arma Enim Silent Leges","DS9",7,16));
tossups[2].source.push(new Movie("Nemesis"));
tossups[2].source.push(new Movie("The Undiscovered Country"));
tossups[2].source.push(new Episode("The Most Toys","TNG",3,22));
tossups[3].source.push(new Episode("Caretaker","VOY",1,1));
tossups[3].source.push(new Episode("Macrocosm","VOY",3,12));
tossups[3].source.push(new Episode("Hunters","VOY",4,15));
tossups[3].source.push(new Episode("Pathfinder","VOY",6,10));
tossups[3].source.push(new Episode("Imperfection","VOY",7,2));
tossups[4].source.push(new Episode("Bar Association","DS9",4,16));
tossups[4].source.push(new Episode("Emissary","DS9",1,1));
tossups[4].source.push(new Episode("Encounter at Farpoint","TNG",1,1));
tossups[4].source.push(new Episode("Darmok","TNG",5,2));
tossups[4].source.push(new Episode("Barge of the Dead","VOY",6,3));
tossups[5].source.push(new Episode("The Forge","ENT",4,7));
tossups[5].source.push(new Episode("Awakening","ENT",4,8));
tossups[6].source.push(new Episode("The Pegasus","TNG",7,12));
tossups[7].source.push(new Episode("The Search, Part I","DS9",3,1));
tossups[7].source.push(new Episode("In a Mirror, Darkly, Part II","ENT",4,19));
tossups[7].source.push(new Episode("In a Mirror, Darkly","ENT",4,18));
tossups[7].source.push(new Episode("The Tholian Web","TOS",3,9));
tossups[8].source.push(new Episode("The Vulcan Hello","DIS",1,1));
tossups[8].source.push(new Episode("Battle at the Binary Stars","DIS",1,2));
tossups[9].source.push(new Episode("The Alternate","DS9",2,12));
tossups[9].source.push(new Episode("Unification II","TNG",5,8));
tossups[9].source.push(new Episode("Future's End, Part II","VOY",3,9));
tossups[9].source.push(new Episode("Barge of the Dead","VOY",6,3));
tossups[9].source.push(new Episode("Virtuoso","VOY",6,13));
tossups[9].source.push(new Episode("Renaissance Man","VOY",7,24));
tossups[10].source.push(new Episode("Crossover","DS9",2,23));
tossups[10].source.push(new Episode("Body Parts","DS9",4,25));
tossups[10].source.push(new Episode("By Inferno's Light","DS9",5,15));
tossups[10].source.push(new Episode("In the Pale Moonlight","DS9",6,19));
tossups[10].source.push(new Episode("The Defector","TNG",3,10));
tossups[11].source.push(new Episode("Deja Q","TNG",3,13));
tossups[11].source.push(new Episode("Living Witness","VOY",4,23));
tossups[11].source.push(new Episode("Dark Frontier","VOY",5,15));
tossups[12].source.push(new Episode("The Jem'Hadar","DS9",2,26));
tossups[12].source.push(new Episode("In the Pale Moonlight","DS9",6,19));
tossups[12].source.push(new Episode("Penumbra","DS9",7,17));
tossups[12].source.push(new Episode("The Changing Face of Evil","DS9",7,20));
tossups[13].source.push(new Episode("Little Green Men","DS9",4,8));
tossups[13].source.push(new Episode("Nor the Battle to the Strong","DS9",5,4));
tossups[13].source.push(new Episode("Rocks and Shoals","DS9",6,2));
tossups[13].source.push(new Episode("These Are The Voyages...","ENT",4,22));
tossups[14].source.push(new Episode("Broken Bow","ENT",1,1));
tossups[14].source.push(new Episode("Aquiel","TNG",6,13));
tossups[14].source.push(new Episode("The Corbomite Maneuver","TOS",1,2));
tossups[15].source.push(new Episode("Take Me Out to the Holosuite","DS9",7,4));
tossups[15].source.push(new Episode("The Changing Face of Evil","DS9",7,20));
tossups[15].source.push(new Episode("These Are The Voyages...","ENT",4,22));
tossups[15].source.push(new Movie("The Motion Picture"));
tossups[15].source.push(new Movie("The Voyage Home"));
tossups[15].source.push(new Episode("The Big Goodbye","TNG",1,12));
tossups[16].source.push(new Episode("Context is for Kings","DIS",1,3));
tossups[16].source.push(new Episode("Trials and Tribble-ations","DS9",5,6));
tossups[16].source.push(new Episode("The Trouble with Tribbles","TOS",2,13));
tossups[17].source.push(new Episode("The House of Quark","DS9",3,3));
tossups[17].source.push(new Episode("The Way of the Warrior","DS9",4,1));
tossups[17].source.push(new Episode("Who Mourns for Morn?","DS9",6,12));
tossups[18].source.push(new Episode("The Wolf Inside","DIS",1,11));
tossups[18].source.push(new Episode("In the Pale Moonlight","DS9",6,19));
tossups[18].source.push(new Episode("Storm Front","ENT",4,1));
tossups[18].source.push(new Episode("Scorpion. Part II","VOY",4,1));
tossups[18].source.push(new Episode("The Void","VOY",7,15));
tossups[19].source.push(new Episode("The Way of the Warrior","DS9",4,1));
tossups[19].source.push(new Episode("The Quickening","DS9",4,24));
tossups[19].source.push(new Episode("The Begotten","DS9",5,12));
tossups[19].source.push(new Episode("Family","TNG",4,2));
tossups[19].source.push(new Episode("Yesterday's Enterprise","TNG",3,15));
tossups[20].source.push(new Episode("A Man Alone","DS9",1,4));
tossups[20].source.push(new Movie("Nemesis"));
tossups[20].source.push(new Episode("Child's Play","VOY",6,19));
tossups[21].source.push(new Episode("Past Tense, Part I","DS9",3,11));
tossups[21].source.push(new Episode("Emissary","DS9",1,1));
tossups[21].source.push(new Episode("Broken Bow","ENT",1,1));
tossups[21].source.push(new Episode("Brothers","TNG",4,3));
tossups[21].source.push(new Episode("Tapestry","TNG",6,15));
tossups[21].source.push(new Episode("Where No Man Has Gone Before","TOS",1,1));
tossups[21].source.push(new Episode("Caretaker","VOY",1,1));
tossups[23].source.push(new Episode("All Good Things...","TNG",7,25));
tossups[23].source.push(new Episode("Encounter at Farpoint","TNG",1,1));
tossups[23].source.push(new Episode("The Q and the Grey","VOY",3,11));
tossups[0].bonus.partOne.source.push(new Movie("Generations"));
tossups[0].bonus.partTwo.source.push(new Movie("Generations"));
tossups[0].bonus.partThree.source.push(new Episode("Flashback","VOY",3,2));
tossups[1].bonus.partOne.source.push(new Episode("In a Mirror, Darkly","ENT",4,18));
tossups[1].bonus.partOne.source.push(new Movie("First Contact"));
tossups[1].bonus.partTwo.source.push(new Movie("First Contact"));
tossups[1].bonus.partThree.source.push(new Episode("Cause and Effect","TNG",5,18));
tossups[2].bonus.partOne.source.push(new Episode("Tsunkatse","VOY",6,15));
tossups[2].bonus.partTwo.source.push(new Episode("The Forgotten","ENT",3,20));
tossups[2].bonus.partThree.source.push(new Episode("Investigations","VOY",2,20));
tossups[3].bonus.partOne.source.push(new Movie("The Final Frontier"));
tossups[3].bonus.partTwo.source.push(new Episode("These Are The Voyages...","ENT",4,22));
tossups[3].bonus.partThree.source.push(new Episode("United","ENT",4,13));
tossups[4].bonus.partOne.source.push(new Episode("Timeless","VOY",5,6));
tossups[4].bonus.partTwo.source.push(new Episode("All Good Things...","TNG",7,25));
tossups[4].bonus.partThree.source.push(new Episode("E-squared","ENT",3,21));
tossups[5].bonus.partOne.source.push(new Episode("The Xindi","ENT",3,1));
tossups[5].bonus.partOne.source.push(new Episode("Zero Hour","ENT",3,24));
tossups[5].bonus.partTwo.source.push(new Episode("The Expanse","ENT",2,26));
tossups[5].bonus.partThree.source.push(new Episode("Zero Hour","ENT",3,24));
tossups[6].bonus.partOne.source.push(new Episode("Emissary","DS9",1,1));
tossups[6].bonus.partTwo.source.push(new Episode("Initiations","VOY",2,2));
tossups[6].bonus.partThree.source.push(new Episode("Far Beyond the Stars","DS9",6,13));
tossups[7].bonus.partOne.source.push(new Episode("Broken Bow","ENT",1,1));
tossups[7].bonus.partTwo.source.push(new Episode("Ashes to Ashes","VOY",6,18));
tossups[7].bonus.partTwo.source.push(new Episode("Child's Play","VOY",6,19));
tossups[7].bonus.partThree.source.push(new Episode("Our Man Bashir","DS9",4,10));
tossups[8].bonus.partOne.source.push(new Movie("The Undiscovered Country"));
tossups[8].bonus.partTwo.source.push(new Episode("Where No Man Has Gone Before","TOS",1,1));
tossups[8].bonus.partThree.source.push(new Episode("Relics","TNG",6,4));
tossups[9].bonus.partOne.source.push(new Episode("In the Hands of the Prophets","DS9",1,20));
tossups[9].bonus.partOne.source.push(new Episode("False Profits","VOY",3,5));
tossups[9].bonus.partTwo.source.push(new Episode("Body Parts","DS9",4,25));
tossups[9].bonus.partThree.source.push(new Episode("The Nagus","DS9",1,11));
tossups[10].bonus.partOne.source.push(new Episode("Who Mourns for Adonais?","TOS",2,4));
tossups[10].bonus.partOne.source.push(new Episode("The Trouble with Tribbles","TOS",2,13));
tossups[10].bonus.partTwo.source.push(new Episode("The Apple","TOS",2,9));
tossups[10].bonus.partThree.source.push(new Episode("The Trouble with Tribbles","TOS",2,13));
tossups[11].bonus.partOne.source.push(new Episode("Whispers","DS9",2,14));
tossups[11].bonus.partTwo.source.push(new Episode("The Maquis, Part I","DS9",2,20));
tossups[11].bonus.partThree.source.push(new Episode("State of Flux","VOY",1,11));
tossups[12].bonus.partOne.source.push(new Episode("These Are The Voyages...","ENT",4,22));
tossups[12].bonus.partTwo.source.push(new Episode("Divergence","ENT",4,16));
tossups[12].bonus.partThree.source.push(new Episode("Affliction","ENT",4,15));
tossups[13].bonus.partOne.source.push(new Episode("Azati Prime","ENT",3,18));
tossups[13].bonus.partTwo.source.push(new Episode("Distant Origin","VOY",3,23));
tossups[13].bonus.partThree.source.push(new Episode("Distant Origin","VOY",3,23));
tossups[14].bonus.partOne.source.push(new Episode("The Inner Light","TNG",5,25));
tossups[14].bonus.partTwo.source.push(new Movie("Star Trek (2009)"));
tossups[14].bonus.partThree.source.push(new Episode("Face of the Enemy","TNG",6,14));
tossups[15].bonus.partOne.source.push(new Episode("Daedalus","ENT",4,10));
tossups[15].bonus.partTwo.source.push(new Episode("Context is for Kings","DIS",1,3));
tossups[15].bonus.partThree.source.push(new Episode("Threshold","VOY",2,15));
tossups[16].bonus.partOne.source.push(new Movie("Generations"));
tossups[16].bonus.partTwo.source.push(new Episode("Encounter at Farpoint","TNG",1,1));
tossups[16].bonus.partThree.source.push(new Episode("Image in the Sand","DS9",7,1));
tossups[17].bonus.partOne.source.push(new Episode("The Raven","VOY",4,6));
tossups[17].bonus.partTwo.source.push(new Episode("Year of Hell","VOY",4,8));
tossups[17].bonus.partThree.source.push(new Episode("Imperfection","VOY",7,2));
tossups[18].bonus.partOne.source.push(new Episode("The Icarus Factor","TNG",2,14));
tossups[18].bonus.partTwo.source.push(new Episode("The Seventh","ENT",2,7));
tossups[18].bonus.partThree.source.push(new Episode("Peak Performance","TNG",2,21));
tossups[19].bonus.partOne.source.push(new Episode("Emissary","DS9",1,1));
tossups[19].bonus.partOne.source.push(new Episode("Who Watches The Watchers","TNG",3,4));
tossups[19].bonus.partTwo.source.push(new Episode("Who Watches The Watchers","TNG",3,4));
tossups[19].bonus.partThree.source.push(new Episode("The Omega Directive","VOY",4,21));
tossups[20].bonus.partOne.source.push(new Episode("Similitude","ENT",3,10));
tossups[20].bonus.partTwo.source.push(new Episode("Observer Effect","ENT",4,11));
tossups[20].bonus.partThree.source.push(new Episode("Carbon Creek","ENT",2,2));
tossups[21].bonus.partOne.source.push(new Episode("The Corbomite Maneuver","TOS",1,2));
tossups[21].bonus.partTwo.source.push(new Episode("The Corbomite Maneuver","TOS",1,2));
tossups[21].bonus.partThree.source.push(new Episode("The Corbomite Maneuver","TOS",1,2));
tossups[21].bonus.partThree.source.push(new Episode("Journey to Babel","TOS",2,15));
tossups[22].bonus.partOne.source.push(new Episode("The Measure of A Man","TNG",2,9));
tossups[22].bonus.partTwo.source.push(new Episode("The Measure of A Man","TNG",2,9));
tossups[22].bonus.partThree.source.push(new Episode("The Measure of A Man","TNG",2,9));
tossups[23].bonus.partOne.source.push(new Episode("Doctor Bashir, I Presume","DS9",5,16));
tossups[23].bonus.partTwo.source.push(new Episode("Author, Author","VOY",7,20));
tossups[23].bonus.partThree.source.push(new Episode("Author, Author","VOY",7,20));