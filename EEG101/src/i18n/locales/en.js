export default {
	//global
	nextLink:  ' NEXT ',
	museDisconnectedTitle:  'Muse Disconnected',
	museDisconnectedDescription:  'Please reconnect to continue the tutorial.',
	closeButton:  'Close',

	//begin-landing.js
	welcomeEEG101:  'Welcome to EEG 101',
	tutorialDescription:  'At the end of this tutorial, you will have learned how EEG devices can be used to measure the electrical activity of the brain.',
	getStartedLink:  ' GET STARTED ',

	//classifier.js
	classifierTitle:  'CLASSIFIER',
	collectButton:  'Collect',
	stopButton:  'Stop',
	trainButton:  'Train',
	runButton:  'Run',
	resetButton:  'Reset',

	//classifier-run.js:  '',
	tryingToUnderstand:  'Trying to understand your brain...',
	classifierReturnsDataset:  'As this classifier runs, it will return the sample data set your real-time brain activity most closely resembles.',
	retrainLink:  ' RE-TRAIN ',

	//connector-01.js
	step1Title:  'Step 1',
	musePowerOnWarning:  'Make sure your Muse is powered on.',
	museFirstGenWarning:  'If you are using a first generation Muse you may need to pair your device in bluetooth settings.',
	connector2Link:  ' OK, IT\'S ON ',

	//connector-02.js
	step2Title:  'Step 2',
	getStartedLink:  ' GET STARTED ',
	waitMusePair:  'Wait for your Muse to pair \n with EEG 101...',

	//connector-03.js
	step3Title:  'Step 3',
	museFitProperly:  'Make sure the Muse is properly fitted to your head.',
	fitInstructions:  'Fit the earpieces snugly behind your ears and adjust the headband so that it rests mid forehead. Clear any hair that might prevent the device from making contact with your skin.',

	//slide-01.js
	introductionSlideTitle:  'INTRODUCTION',
	brainElectricity:  'Your brain produces electricity. ',
	EEGLink:  'EEG',
	deviceCanDetect:  ' device that you are wearing, we can detect the electrical activity of your brain.',
	usingThe:  'Using the ',
	tryBlinkingEyes:  'Try blinking your eyes...',
	doesSignalChange:  'Does the signal change?',
	eyeMovementCreates:  'Eye movements create ',
	noiseLink:  'noise ',
	inEEGSignal:  ' in the EEG signal.',
	tryThinkingAbout:  'Try thinking about a cat...',
	doesSignalChange:  'Does the signal change?',
	althoughEEG:  'Although EEG can measure overall brain activity, it’s not capable of ',
	readingMindsLink:  'reading minds',
	tryClosingEyes10:  'Now try closing your eyes for 10 seconds.',
	mayNoticeSignalChange:  'You may notice a change in your signal due to an increase in ',
	alphaWavesLink:  'alpha waves.',
	whatIsEEGTitle:  'What exactly is EEG?',
	whatIsEEGDescription:  'Electroencephalography (EEG) is a technique that measures the electrical activity of the brain with sensors that record fluctuations in voltage at the surface of the skull. The first human electroencephalogram was recorded in 1924 by Hans Berger, a German psychiatrist whose interest in ‘psychic energy’ led him to experiment with the electrical fields of the brain.',
	noiseTitle:  'Noise',
	noiseDescription:  'Movement of the eyes (which are electrically charged) and muscle activity produce electrical activity. Thus, blinking, swallowing, and clenching the jaw will all produce noise that can overpower signals originating in the brain. This can make it very difficult to read the EEG. To accurately sense the activity of the brain, movement must be kept to a minimum.',
	cannotReadMindsTitle:  'EEG cannot read minds',
	cannotReadMindsDescription:  'The EEG signal is generated when tens of thousands of brain cells fire in synchrony. Although thinking about a cat produces some change in brain activity, it is too small to affect the large-scale, rhythmic firing of the brain that EEG detects.',
	eyeRythymsTitle:  'Closed eye rhythms',
	eyeRythymsDescription:  'When the eyes are closed, there is often a large increase in rhythmic brain activity in the range of 8-13 cycles per second (Hz). These alpha waves were one of the first discoveries that Hans Berger made with EEG. The ability to detect alpha waves when the eyes are closed varies greatly from person to person, however. Don\'t feel bad if you can\'t see them!',

	//slide-02.js
	physiologySlideTitle:  'PHYSIOLOGY',
	EEGComeFrom:  'Where does the EEG signal come from?',
	EEGMeasures:  'The EEG measures the electrical activity that occurs when ',
	neuronsLink:  'neurons ',
	receiveAndTransmit:  ' receive and transmit information.',
	organizedNeural:  'Organized neural activity produces electric fields.',
	whenBillionsOfNeurons:  'When billions of neurons ',
	workTogetherLink:  'work together',
	produceThoughts:  ' to produce thoughts, feelings, and behaviours, their electricity can be detected by electrodes on the scalp.',
	EEGDetects:  'EEG detects the "state" of the brain.',
	organizedElectricalActivity:  'This organized electrical activity varies between different brain states, such as ',
	sleepWakefulnessLink:  'sleep and wakefulness.',
	neuralBasisEEGTitle:  'Neural basis of EEG.',
	neuralBasisEEGDescription1:  'When synapses are activated on a neuron\'s dendrites, a small electric field (dipole) is created along the body of the neuron due to the difference in charge between those dendrites and the axon. This electric field only lasts for a few milliseconds.',
	neuralBasisEEGDescription2:  'The electric fields produced by single neurons are vanishingly small. However, when large numbers of cortical neurons fire rhythmically, their activity can produce electric fields that are large enough to cross the surface of the skull. This process is influenced by many factors, including depth, orientation, and subtype of neurons, and is a topic of ongoing research.',
	brainStatesTitle:  'Brain states',
	brainStatesDescription:  'During sleep our brains produce very different kinds of rhythmic electrical activity. When awake, brain rhythms tend to be rapidly-changing and irregular, while slowly-changing, organized rhythms become more dominant as we fall asleep and pass through the multiple sleep stages. \n Certain emotions and cognitive processes have also been linked with characteristic patterns of rhythmic activity that can be identified with EEG.',

	//slide-03.js
	hardwareSlideTitle:  'HARDWARE',
	howDoesEEGDeviceWork:  'How does an EEG device work?',
	electricalActivitySensed:  'The electrical activity of the brain is sensed by ',
	electrodesLink:  'electrodes',
	placedOnScalp:  ' placed on the scalp.',
	deviceHas4Electrodes:  'This device has 4 electrodes.',
	touchTheHeadDiagram:  'Touch the head diagram to view the signal at each electrode. Scientists have ',
	namesLink:  'names',
	forEachElectrode:  ' for each of these electrodes.',
	whatElectrodesMeasure:  'What do electrodes measure?',
	voltageFluctuations:  'Each electrode detects voltage fluctuations that are compared to a ',
	referenceElectrodeLink:  'reference electrode',
	amplified1Mil:  ' and then amplified around 1,000,000 times.',
	electrodesTitle:  'Electrodes',
	electrodesDescription:  'An electrode is a conductor through which electricity flows. The device you are wearing (Muse) uses dry electrodes that don\'t require conductive gel and can be placed directly on the skin.',
	electrodeNamingTitle:  'Electrode naming conventions',
	electrodeNamingDescription:  'EEG electrodes are typically identified by a combination of a letter and a number. The letter indicates the part of the head where the electrode is located (F for frontal, C for central, etc.). The number indicates distance from the midline of the head with even numbers on the right hemisphere and odd numbers on the left.',
	referencingTitle:  'Referencing',
	referencingDescription:  'Each electrode\'s signal reflects the difference in electrical potential between that electrode and a seperate reference electrode. Thus, data gathered from EEG devices with different reference electrode placement can vary considerably. With Muse, the reference is located on the front of the forehead.',

	//slide-04.js
	filteringSlideTitle:  'FILTERING',
	raw:  'Raw',
	bandPassFilter:  'Band-Pass Filter',
	meaningfulData:  'How do we get meaningful data from the EEG?',
	firstEEGMust:  'First, the EEG must be ',
	filteredLink:  'filtered',
	toReduceSignals:  'to reduce signals that don\'t come from the brain.',
	filtersTitle:  'Filters',
	filtersDescription:  'Filters remove frequencies that sit outside the spectrum of signals produced by the brain, getting rid of some of the noise produced by muscles or environmental electrical activity. Filters are normally either high-pass (removing low frequencies), low-pass (removing high frequencies) or band-pass (allowing only a specific band of frequencies through). Here, we have implemented a band-pass filter that removes frequencies outside the range of those typically produced by the brain.',

	//slide-05.js
	epochingSlideTitle:  'EPOCHING',
	chunkingSignal:  'Chunking the signal',
	EEGDividedSegments:  'Next, the EEG is divided into small segments or ',
	epochsLink:  'epochs',
	epochsTitle:  'Epochs',
	epochsDescription:  'The brain is constantly changing and the EEG changes with it. Dividing the EEG into epochs allows each moment in time to be analyzed individually. Analyzing how the properties of these epochs vary allows us to quantify how the brain changes over time.',

	//slide-06.js
	artifactRemovalSlideTitle:  'ARTIFACT REMOVAL',
	removingNoise:  'Removing noise',
	afterEEGDividedEpochs:  'After the EEG has been divided into epochs, those that contain a ',
	significantLink:  'significant',
	amountNoiseIgnored:  ' amount of noise can be ignored.',
	artifactDetectionTitle:  'Artefact detection',
	artifactDetectionDescription:  'One simple way to define a "significant amount of noise" is to compare how variable an epoch is in comparison to its neighbours. If the signal moves around in one epoch a lot more than in its neighbours, it is probably because there was an eyeblink or some other source of noise. Get rid of it!',

	//slide-07.js
	featureDetectionSlideTitle:  'FEATURE EXTRACTION',
	breakingDownEEG:  'Breaking down the EEG',
	onceNoiseRemoved:  'Once noise is removed, the EEG can be broken down into many simpler periodic signals or ',
	wavesLink:  'waves',
	howEEGBrokenDown:  'How is the EEG broken down?',
	complexSignalsBrokenDown:  'Complex signals can be broken down into simpler signals with a mathematical function known as the ',
	fourierTransformLink:  'Fourier Transform.',
	wavesTitle:  'Waves',
	wavesDescription:  'Each wave is characterised by a certain frequency (number of cycles per second, Hertz (Hz)). A high frequency wave has many cycles per second, whereas a low frequency wave has fewer cycles per second. Waves of different frequencies are associated with different patterns of neural firing.',
	fourierTransformTitle:  'Fourier transform',
	fourierTransformDescription:  'The Fourier Transform decomposes a complex signal into a collection of simple sine waves. Often, we use an algorithm specifically called the Fast Fourier Transform (FFT) to perform this decomposition in EEG.',

	//slide-08.js
	PSDSlideTitle:  'PSD',
	powerSpectralDensity:  'Power Spectral Density (PSD)',
	whenWeApplyFourier:  'When we apply the Fourier Transform to the EEG, we obtain a measure of signal strength at given frequencies, represented in units of ',
	powerLink:  'power',
	powerTitle:  'Power',
	powerDescription:  'In this graph, the X axis represents frequency and the Y axis represents power (microvolts squared, in decibels (dB)). Power represents how strong a certain frequency is in a complex signal. When power is high for only a few frequencies, it means that the signal is primarily composed of those few elements. If all frequencies have similar power, the signal will look random and be difficult to interpret.',

	//slide-09.js
	brainWavesSlideTitle:  'BRAIN WAVES',
	whatDoFrequenciesRepresent:  'What do these frequencies represent?',
	PSDDividedBands:  'The PSD can be divided into different frequency bands (named by the greek letters δ, θ, α, β, and γ).',
	brainWaves:  'Brain Waves',
	freqCorrelatedBrain:  'Each frequency band exhibits activity correlated with different brain processes. These bands are often referred to as ',
	brainWavesLink:  'brain waves',
	harnessingBrainWaves:  'Harnessing Brain Waves',
	noticePowerChanges:  'Notice how the power in a given frequency band changes over time. It is possible to harness these changes to create a simple ',
	BCILink:  'brain-computer interface (BCI)',
	deltaTitle:  'Delta δ (0-4 Hz)',
	deltaDescription:  'Delta waves are the slowest (i.e. lowest frequency) brain waves. Delta waves dominate during deep sleep and tend to be high in amplitude because they represent the synchronized firing of large populations of neurons.',
	thetaTitle:  'Theta θ (4-8 Hz)',
	thetaDescription:  'Theta waves are most commonly observed in the "hypnagogic" period just before falling asleep. They have also been observed during deep meditative and hypnotic states.',
	alphaTitle:  'Alpha α (8-13 Hz)',
	alphaDescription:  'Alpha waves can indicate the idling of a brain region. For example, they increase dramatically at when the eyes are closed. They are especially strong at the back of the head, where the vision centre of the brain is located.',
	betaTitle:  'Beta β (13-30 Hz)',
	betaDescription:  'Beta waves are prevalent when the brain is awake and active. They have been associated with alertness, concentration, and the active firing of neurons hard at work.',
	gammaTitle:  'Gamma γ (30-100 Hz)',
	gammaDescription:  'Gamma waves are the fastest form of neural oscillation. They are difficult to detect and analyze with ordinary EEG but are a topic of much ongoing research. They have been tentatively associated with attention, working memory, and even consciousness.',
	BCITitle:  'Brain-computer interfaces',
	BCIDescription:  'A brain-computer interface is a direct communication channel between the brain and an external device. For example, one can feed information about brain state based on EEG frequency bands to a computer; that computer then analyzes the EEG data and decides what the user intent was. The computer can use that command to control an external device such as a wheelchair or a display.',

	//slide-end.js
	thanksForCompleting:  'Thanks for completing \n EEG 101',
	hopeYouEnjoyed:  'We hope you enjoyed learning about the basics of EEG. Soon, this tutorial will cover more advanced topics, such as how to create a simple brain-machine interface!',
	whatsNext:  'What\'s Next?',
	liveArtifactRemoval:  '1. Live Artifact Removal',
	offlineMode:  '2. Offline Mode',
	interactiveBCI:  '3. Interactive Brain Computer Interface!',
	projectOpenSource:  'This project is Open Source',
	resultOfCollaboration:  'EEG101 is the result of a collaboration between NeuroTechX, the international neurotechnology network, and the developers at KBDGroup. Its source code is open for anyone to use or contribute to.',
	interestedInApp:  'Interested in how an EEG app is built? Want to contribute to this project? Check out the repo on Github and our community on Slack.',
	theTeam:  'The EEG 101 Team',
	teamMemberHubert:  'Hubert Banville - Visionary',
	teamMemberDano:  'Dano Morrison - Developer',
	teamMemberGeordan:  'Geordan King - Producer',
	teamMemberMichael:  'Michael Vu - Author',
	teamMemberJoanna:  'Joanna Jang - Author',
	teamMemberBrian:  'Brian Stern - Software Architect',
	teamMemberSteve:  'Steve Harjula - Visual Design',
	teamMemberMiles:  'Miles McCraw - Animator',

	//component.js
	needsPermission:  'EEG 101 needs your permission',
	requiresLocation:  'This app requires coarse location permission in order to discover and connect to the 2016 Muse.',
	statusConnected:  'Connected',
	statusNoMusesTitle:  'No Muses were detected.',
	statusNoMusesDescription:  'If you don\'t own a Muse, don\'t worry! We are working on an offline mode that should be avaible in early 2017!',
	searchAgain:  ' SEARCH AGAIN ',
	statusConnecting:  'Connecting...',
	statusDisconnected:  'Searching for Muses',
	//bci
	//step1Title:  'Step 1',
	//step2Title:  'Step 2',
	//step3Title:  'Step 3',
	step4Title:  'Step 4',
};
