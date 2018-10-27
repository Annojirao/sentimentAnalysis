
import  natural  from 'natural';
export default function request(data) {
    var naturalprocessing = natural; 
    var tokenizer = new naturalprocessing.WordTokenizer();
    var x=tokenizer.tokenize(data.toString());    
    
    var Analyzer = naturalprocessing.SentimentAnalyzer;
    var stemmer = naturalprocessing.PorterStemmer;
    var analyzer = new Analyzer("English", stemmer, "afinn");
    var fear=/^.*\b(fear|afraid|terror|fright|fearfulness|horror|alarm|panic|agitation|trepidation|dread|consternation|dismay|distress|anxiety|worry|angst|unease|uneasiness|apprehension|apprehensiveness|nervousness|nerves|timidity|disquiet|disquietude|discomposure|unrest|perturbation|foreboding|misgiving|doubt|suspicion|jitteriness|twitchiness|funk|worriment|inquietude|phobia|aversion|antipathy|dread|bugbear|bogey|nightmare|horror|anxiety|neurosis|complex|mania)\b.*$/i;
    
    var anger=/^.*\b(anger|angry|annoyance|vexation|exasperation|crossness|irritation|irritability|indignation|pique|displeasure|resentment|rage|fury|wrath|outrage|temper|road rage|air rage|irascibility|ill temper|dyspepsia|spleen|ill humour|tetchiness|testiness|waspishness|aggravated|annoy|irritate|exasperate|irk|vex|put out|provoke|pique|gall|displease|enrage|incense|infuriate|madden|inflame|antagonize|ruffle|nark|gravel|empurple)\b.*$/i;

    var sad=/^.*\b(sad|pain|pained|vexed|vexation|unhappy|sorrowful|dejected|regretful|depressed|downcast|miserable|downhearted|down|despondent|despairing|disconsolate|out of sorts|desolate|wretched|glum|gloomy|doleful|dismal|blue|melancholy|melancholic|low-spirited|mournful|woeful|woebegone|forlorn|crestfallen|broken-hearted|heartbroken|inconsolable|grief-stricken|tragic|unhappy|unfortunate|awful|sorrowful|miserable|cheerless|wretched|sorry|pitiful|pitiable|grievous|traumatic|depressing|distressing|dispiriting|heartbreaking|heart-rending|agonizing|harrowing|unfortunate|regrettable|sorry|wretched|deplorable|lamentable|pitiful|pitiable|pathetic|shameful|disgraceful)\b.*$/i;

    var joy=/^.*\b(joy|happy|happiness|delight|great pleasure|joyfulness|jubilation|triumph|exultation|rejoicing|happiness|gladness|glee|exhilaration|ebullience|exuberance|elation|euphoria|bliss|ecstasy|transports of delight|rapture|radiance|enjoyment|gratification|felicity|cloud nine|seventh heaven|delectation|pleasure|source of pleasure|delight|treat|thrill|success|satisfaction|luck|successful result|positive result|accomplishment|achievement)\b.*$/i;
    
    var disgust=/^.*\b(disgust|revulsion|repugnance|aversion|distaste|abhorrence|loathing|detestation|odium|execration|horror|nausea|informalyuck factor|archaicdisrelish|rarerepellence|repellency|revolt|repel|repulse|sicken|nauseate|cause to feel nauseous|make shudder|turn someone's stomach|make someone's gorge rise|be repugnant to|be repulsive to|be distasteful to|informalturn off|make someone want to throw up|squick. outrage|shock|horrify|appal|scandalize|offend|affront|dismay|displease|dissatisfy)\b.*$/i;
    
    var surprise=/^.*\b(surprise|surprised|astonished|amazed|in amazement|nonplussed|taken aback|startled|astounded|stunned|flabbergasted|staggered|shocked|shellshocked|stupefied|open-mouthed|dumbfounded|dumbstruck|speechless|thunderstruck|dazed|benumbed|confounded|agape|jolted|shaken up|unexpected|unanticipated|unforeseen|unpredictable|unpredicted|astonishing|amazing|startling|astounding|striking|staggering|incredible|extraordinary|dazzling|breathtaking|remarkable|wonderful|unusual|mind blowing|amazeballs)\b.*$/i;

    var trust=/^.*\b(trust|confidence|belief|faith|freedom from suspicion|freedom from doubt|sureness|certainty|certitude|assurance|conviction|credence|reliance)\b.*$/i;

    var anticipation=/^.*\b(anticipation|expectation|prediction|forecast|prolepsis|expectancy|expectation|hope    |hopefulness|excitement|suspense)\b.*$/i;

    var shame=/^.*\b(shame|humiliation|mortification|chagrin|ignominy|loss of face|shamefacedness|embarrassment|indignity|abashment|discomfort|discomfiture|discomposure|guilt|remorse|contrition|compunction|humiliate|mortify|make someone feel ashamed|chagrin|embarrass|abash|chasten)\b.*$/i;

    var kindness=/^.*\b(kind|kindness|kindliness| kind-heartedness| warm-heartedness| tender-heartedness| goodwill| affectionateness| affection| warmth| gentleness| tenderness| concern| care|consideration| considerateness| helpfulness| thoughtfulness| unselfishness| selflessness| altruism| compassion| sympathy| understanding| big-heartedness| benevolence| benignity| friendliness| neighbourliness| hospitality| amiability| courteousness| public-spiritedness|generosity| magnanimity| indulgence| patience| tolerance| charitableness| graciousness| lenience| humaneness| mercifulness) \b.*$/i;
    
    var pity=/^.*\b(pity|compassion|commiseration|condolence|sorrow|regret|sadness|distress|sympathy|fellowfeeling)\b.*$/i;

    var envy=/^.*\b(envy|jealous|jealousy|enviousness|covetousness|desire|resentment|resentfulness|bitterness|discontent|spite)\b.*$/i;

    var love=/^.*\b(love|infatuation|deep affection|fondness|tenderness|warmth|intimacy|attachment|endearment|devotion|adoration|doting|idolization|worship|passion|ardour|desire|lust|yearning|infatuation|adulation|besottedness|compassion|care|caring|regard|solicitude|concern|warmth|friendliness|friendship|kindness|charity|goodwill|sympathy|kindliness|altruism|philanthropy|unselfishness|benevolence|brotherliness|sisterliness|fellow feeling|humanity|relationship|love affair|affair|romance|liaison|affair of the heart|intrigue|amour)\b.*$/i;

    var resultantobj= {
        "fear": 0,
        "anger" : 0,
        "sad":0,
        "joy" : 0,
        "disgust": 0,
        "trust" : 0,
        "anticipation": 0,
        "shame" : 0,
        "kindness" : 0,
        "pity" : 0,
        "envy" : 0,
        "love": 0,
        "surprise" : 0
    }
    var value;
    for (var i = 0; i < x.length; i++) {
        value = x[i].toLowerCase();
        console.log("value "+value);
        
            if(value.match(fear))
                resultantobj.fear = resultantobj.fear  + 1; 
                        
            else if(value.match(anger))  
                resultantobj.anger = resultantobj.anger  + 1;

            else if(value.match(sad)) 
                resultantobj.sad = resultantobj.sad  + 1
                
            else if(value.match(joy)) 
                resultantobj.joy = resultantobj.joy  + 1
                
            else if(value.match(disgust)) 
                resultantobj.disgust = resultantobj.disgust  + 1
                
            else if(value.match(trust))  
                resultantobj.trust = resultantobj.trust  + 1
                
            else if(value.match(anticipation))
                resultantobj.anticipation = resultantobj.anticipation  + 1
                
            else if(value.match(shame))
                resultantobj.shame = resultantobj.shame  + 1
                
            else if(value.match(kindness) )
                resultantobj.kindness = resultantobj.kindness  + 1
                
            else if(value.match(pity))  
                resultantobj.sad = resultantobj.sad  + 1
                
            else if(value.match(envy) ) 
                resultantobj.pity = resultantobj.pity  + 1
                
            else if(value.match(love))
                resultantobj.love = resultantobj.love  + 1

            else if(value.match(surprise)) 
                resultantobj.surprise = resultantobj.surprise  + 1
        
    } 

    console.log("resultant object "+JSON.stringify(resultantobj));

    var returnObject = {};
    var key = Object.keys(resultantobj).reduce((a, b) => resultantobj[a] > resultantobj[b] ? a : b);
    returnObject[key] = resultantobj[key];
    returnObject["sentiment"] = analyzer.getSentiment(x);
    return returnObject;

}