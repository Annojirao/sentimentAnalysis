import natural from 'natural';
//import SpellChecker from 'spellchecker';
import SpellCorrector from 'spelling-corrector';
export default function request(data) {
	var naturalprocessing = natural;
	var spellCorrector = new SpellCorrector();
	spellCorrector.loadDictionary();
	var tokenizer = new naturalprocessing.WordTokenizer();
	var tot;
	var result = {};
	var z = [];
	var y = [];

	var i;
	var x = tokenizer.tokenize(data.toString());
	for(var m = 0;m<x.length;m++){
		//x[m] = SpellChecker.getCorrectionsForMisspelling(x[m])[0]
		x[m] = spellCorrector.correct(x[m])
	}
	var Analyzer = naturalprocessing.SentimentAnalyzer;
	var stemmer = naturalprocessing.PorterStemmer;
	var analyzer = new Analyzer("English", stemmer, "afinn");
	var fear = /^.*\b(fear|afraid|terror|fright|fearfulness|horror|alarm|panic|agitation|trepidation|dread|consternation|dismay|distress|anxiety|worry|angst|unease|uneasiness|apprehension|apprehensiveness|nervousness|nerves|timidity|disquiet|disquietude|discomposure|unrest|perturbation|foreboding|misgiving|doubt|suspicion|jitteriness|twitchiness|funk|worriment|inquietude|phobia|aversion|antipathy|dread|bugbear|bogey|nightmare|horror|anxiety|neurosis|complex|mania)\b.*$/i;

	var Anger = /^.*\b(anger|angry|annoyance|vexation|exasperation|crossness|irritation|irritability|indignation|pique|displeasure|resentment|rage|fury|wrath|outrage|temper|road rage|air rage|irascibility|ill temper|dyspepsia|spleen|ill humour|tetchiness|testiness|waspishness|aggravated|annoy|irritate|exasperate|irk|vex|put out|provoke|pique|gall|displease|enrage|incense|infuriate|madden|inflame|antagonize|ruffle|nark|gravel|empurple)\b.*$/i;

	var sad = /^.*\b(sad|pain|pained|vexed|vexation|unhappy|sorrowful|dejected|regretful|depressed|downcast|miserable|downhearted|down|despondent|despairing|disconsolate|out of sorts|desolate|wretched|glum|gloomy|doleful|dismal|blue|melancholy|melancholic|low-spirited|mournful|woeful|woebegone|forlorn|crestfallen|broken-hearted|heartbroken|inconsolable|grief-stricken|tragic|unhappy|unfortunate|awful|sorrowful|miserable|cheerless|wretched|sorry|pitiful|pitiable|grievous|traumatic|depressing|distressing|dispiriting|heartbreaking|heart-rending|agonizing|harrowing|unfortunate|regrettable|sorry|wretched|deplorable|lamentable|pitiful|pitiable|pathetic|shameful|disgraceful)\b.*$/i;

	var joy = /^.*\b(joy|happy|happiness|delight|great pleasure|joyfulness|jubilation|triumph|exultation|rejoicing|happiness|gladness|glee|exhilaration|ebullience|exuberance|elation|euphoria|bliss|ecstasy|transports of delight|rapture|radiance|enjoyment|gratification|felicity|cloud nine|seventh heaven|delectation|pleasure|source of pleasure|delight|treat|thrill|success|satisfaction|luck|successful result|positive result|accomplishment|achievement)\b.*$/i;

	var disgust = /^.*\b(disgust|revulsion|repugnance|aversion|distaste|abhorrence|loathing|detestation|odium|execration|horror|nausea|informalyuck factor|archaicdisrelish|rarerepellence|repellency|revolt|repel|repulse|sicken|nauseate|cause to feel nauseous|make shudder|turn someone's stomach|make someone's gorge rise|be repugnant to|be repulsive to|be distasteful to|informalturn off|make someone want to throw up|squick. outrage|shock|horrify|appal|scandalize|offend|affront|dismay|displease|dissatisfy)\b.*$/i;

	var surprise = /^.*\b(surprise|surprised|astonished|amazed|in amazement|nonplussed|taken aback|startled|astounded|stunned|flabbergasted|staggered|shocked|shellshocked|stupefied|open-mouthed|dumbfounded|dumbstruck|speechless|thunderstruck|dazed|benumbed|confounded|agape|jolted|shaken up|unexpected|unanticipated|unforeseen|unpredictable|unpredicted|astonishing|amazing|startling|astounding|striking|staggering|incredible|extraordinary|dazzling|breathtaking|remarkable|wonderful|unusual|mind blowing|amazeballs)\b.*$/i;

	var trust = /^.*\b(trust|confidence|belief|faith|freedom from suspicion|freedom from doubt|sureness|certainty|certitude|assurance|conviction|credence|reliance)\b.*$/i;

	var anticipation = /^.*\b(anticipation|expectation|prediction|forecast|prolepsis|expectancy|expectation|hope|hopefulness|excitement|suspense)\b.*$/i;

	var shame = /^.*\b(shame|humiliation|mortification|chagrin|ignominy|loss of face|shamefacedness|embarrassment|indignity|abashment|discomfort|discomfiture|discomposure|guilt|remorse|contrition|compunction|humiliate|mortify|make someone feel ashamed|chagrin|embarrass|abash|chasten)\b.*$/i;

	var kindness = /^.*\b(kind|kindness|kindliness| kind-heartedness| warm-heartedness| tender-heartedness| goodwill| affectionateness| affection| warmth| gentleness| tenderness| concern| care|consideration| considerateness| helpfulness| thoughtfulness| unselfishness| selflessness| altruism| compassion| sympathy| understanding| big-heartedness| benevolence| benignity| friendliness| neighbourliness| hospitality| amiability| courteousness| public-spiritedness|generosity| magnanimity| indulgence| patience| tolerance| charitableness| graciousness| lenience| humaneness| mercifulness) \b.*$/i;

	var pity = /^.*\b(pity|compassion|commiseration|condolence|sorrow|regret|sadness|distress|sympathy|fellowfeeling)\b.*$/i;

	var envy = /^.*\b(envy|jealous|jealousy|enviousness|covetousness|desire|resentment|resentfulness|bitterness|discontent|spite)\b.*$/i;

	var love = /^.*\b(love|infatuation|deep affection|fondness|tenderness|warmth|intimacy|attachment|endearment|devotion|adoration|doting|idolization|worship|passion|ardour|desire|lust|yearning|infatuation|adulation|besottedness|compassion|care|caring|regard|solicitude|concern|warmth|friendliness|friendship|kindness|charity|goodwill|sympathy|kindliness|altruism|philanthropy|unselfishness|benevolence|brotherliness|sisterliness|fellow feeling|humanity|relationship|love affair|affair|romance|liaison|affair of the heart|intrigue|amour)\b.*$/i;

	var pairing = {
		"Fear": ["em em-fearful"],
		"Anger": ["em em-rage"],
		"Sad": [],
		"Joy": ["em em-angel"],
		"Disgust": [],
		"Trust": [],
		"Anticipation": [],
		"Shame": [],
		"Kindness": [],
		"Pity": [],
		"Envy": [],
		"Love": ["em em-couple_with_heart"],
		"Surprise": ["em em-face_with_raised_eyebrow"],
		"Emotion": ["em em-expressionless"],
	}
	for (i = 0; i < x.length; i++) {

		if (x[i].match(fear)) {
			z[0] = "Fear";
			y[0] = analyzer.getSentiment(["Fear"]);
		} else if (x[i].match(Anger)) {
			z[1] = "Anger";
			y[1] = analyzer.getSentiment(["Anger"]);

		} else if (x[i].match(sad)) {
			z[2] = "Sad";
			y[2] = analyzer.getSentiment(["Sad"]);

		} else if (x[i].match(joy)) {
			z[3] = "Joy";
			y[3] = analyzer.getSentiment(["Joy"]);
		} else if (x[i].match(disgust)) {
			z[4] = "Disgust";
			y[4] = analyzer.getSentiment(["Disgust"]);
		} else if (x[i].match(trust)) {
			z[5] = "Trust";
			y[5] = analyzer.getSentiment(["Trust"]);
		} else if (x[i].match(anticipation)) {
			z[6] = "Anticipation";
			y[6] = analyzer.getSentiment(["Anticipation"]);
		} else if (x[i].match(shame)) {
			z[7] = "Shame";
			y[7] = analyzer.getSentiment(["Shame"]);
		} else if (x[i].match(kindness)) {
			z[8] = "Kindness";
			y[8] = analyzer.getSentiment(["Kindness"]);
		} else if (x[i].match(pity)) {
			z[9] = "Pity";
			y[9] = analyzer.getSentiment(["Pity"]);
		} else if (x[i].match(envy)) {
			z[10] = "Envy";
			y[10] = analyzer.getSentiment(["Envy"]);
		} else if (x[i].match(love)) {
			z[11] = "Love";
			y[11] = analyzer.getSentiment(["Love"]);
		} else if (x[i].match(surprise)) {
			z[12] = "Surprise";
			y[12] = analyzer.getSentiment(["Surprise"]);
		} else {
			z[13] = "Emotion";
			y[13] = analyzer.getSentiment(x);
			tot = Math.abs(Math.round(((y[13] / 5) * 100)))
		}
	}
	z.forEach((z, j) => result[z] = y[j]);

	var min = Math.min.apply(null, Object.keys(result).map(function (x) {
		return result[x]
	}));
	var max = Math.max.apply(null, Object.keys(result).map(function (x) {
		return result[x]
    }));

	if (Math.abs(min) > Math.abs(max) || Math.abs(max) == Math.abs(min)) {
		result["emotion"] = Object.keys(result).filter(function (x) {
			return result[x] == min;
		})[0];
	} else {
        console.log("here "+max+" min"+min);
		result["emotion"] = Object.keys(result).filter(function (x) {
            return result[x] == max;
        })[0];
	}
    for (const key of Object.keys(result)) {
		const value = result[key]
		if (`${key}` == "Emotion" && value < 0 && value > -2) {
			result["emotionDes"] = "Negative Emotion" + " " + tot + "%";
		} else if (`${key}` == "Emotion" && value == -2 && value > -3 && value != 0) {
			result["emotionDes"] = "Negative Emotion that affects your thought process" + " " + tot + "%";
		} else if (`${key}` == "Emotion" && value == -3 || value < -3 && value != 0) {
			result["emotionDes"] = "Negative Emotion that affects you completely" + " " + tot + "%";
		} else if (`${key}` == "Emotion" && value == 0) {
			result["emotionDes"] = "Normal and Confused Emotions";
		} else if (`${key}` == "Emotion" && value > 0) {
			result["emotionDes"] = "Positive Emotion" + " " + tot + "%";
		}
	}
	result["emotion"] = pairing[result["emotion"]];
	console.log("resultant object " + JSON.stringify(result));
	return result;

}