function addEventListeners(element, eventNames, handler) {
	eventNames.forEach(eventName => element.addEventListener(eventName, handler));
}

async function sendPostRequest(command) {

	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			body: JSON.stringify(command)
		});
		if (!response.ok)
			throw new Error('Request failed');
		return await response.json();
	} catch (error) {
		return null;
	}

}

document.addEventListener('DOMContentLoaded', () => {

	const domContainer = document.getElementById('container');
	const domPageFront = domContainer.getElementsByClassName('page front')[0];
	const domPageUplink = domContainer.getElementsByClassName('page uplink')[0];
	const domPageDownlink = domContainer.getElementsByClassName('page downlink')[0];
	const domBtnConnect = domContainer.getElementsByClassName('btn connect')[0];
	const domBtnAsk = domContainer.getElementsByClassName('btn ask')[0];
	const domBtnClose = domContainer.getElementsByClassName('btn close')[0];
	const domCover = domPageDownlink.getElementsByClassName('cover')[0];
	
	addEventListeners(document, ['click', 'touchstart'], () => {
		const domQuestionBox = domPageUplink.getElementsByClassName('box questions')[0];
		const domQuestions = domQuestionBox.getElementsByClassName('question');
		Array.from(domQuestions).forEach(domQuestion => domQuestion.classList.remove('selected'));
		domBtnAsk.classList.add('disabled');
	});

	addEventListeners(domBtnConnect, ['click', 'touchstart'], async (event) => {
		domBtnConnect.classList.add('disabled');
		// const result = await sendPostRequest('SEND_QUERIES');
		const result = {
			2: 'What are the key differences between machine learning and deep learning, and in what scenarios is deep learning preferred over traditional machine learning?',
			1: 'Machine learning includes various algorithms such as decision trees and support vector machines, whereas deep learning relies on multi-layered neural networks. Deep learning is preferred in scenarios like image recognition and NLP, where large datasets and high computational power allow for automated feature extraction.',
			6: 'How does reinforcement learning differ from supervised learning, and what are some real-world applications of reinforcement learning?',
			0: 'Why is feature engineering important in machine learning, and how does it impact model performance?'
		};
		if (result) {
			const domQuestionBox = domPageUplink.getElementsByClassName('box questions')[0];
			Object.entries(result).forEach(([questionIndex, question]) => {
				const domQuestion = document.createElement('span');
				domQuestion.classList.add('question');
				domQuestion.index = questionIndex;
				domQuestion.innerText = question;
				domQuestionBox.appendChild(domQuestion);
				addEventListeners(domQuestion, ['click', 'touchstart'], (event) => {
					Array.from(domQuestionBox.getElementsByClassName('question')).forEach(domQuestion => domQuestion.classList.remove('selected'));
					domQuestion.classList.add('selected');
					domBtnAsk.classList.remove('disabled');
					event.stopPropagation();
				});
			});
			domPageFront.classList.add('hidden');
			domPageUplink.classList.remove('hidden');
		} else
			domBtnConnect.classList.remove('disabled');
		event.stopPropagation();
	});
	
	addEventListeners(domBtnAsk, ['click', 'touchstart'], async () => {
		const domQuestionBox = domPageUplink.getElementsByClassName('box questions')[0];
		const domQuestions = domQuestionBox.getElementsByClassName('question');
		Array.from(domQuestions).forEach(async (domQuestion) => {
			if (domQuestion.classList.contains('selected')) {
				domBtnAsk.classList.add('disabled');
				// const result = await sendPostRequest(domQuestion.index);
				const result = {
					'good': {
						'docs': [
							'Machine learning includes traditional algorithms like decision trees and linear regression.',
							'Deep learning relies on multi-layered neural networks to automatically extract features.',
							'Deep learning is particularly effective for tasks like image and speech recognition.',
							'Traditional machine learning works well with structured data and smaller datasets.'
						],
						'answer': 'Deep learning is a subset of machine learning that uses neural networks with multiple layers, making it ideal for complex pattern recognition tasks like NLP and computer vision.'
					},
					'bad': {
						'docs': [
							'Relevant information was not found in the dataset.',
							'Dataset lacks details on deep learning techniques and applications.',
							'Consider expanding the dataset to include machine learning-related content.',
							'No sufficient data available to compare machine learning and deep learning.'
						],
						'answer': 'Relevant information was not found in the dataset. Please check the input data or consider adding more sources.'
					}
				};
				if (result) {
					const domDownlinkQuestionBox = domPageDownlink.getElementsByClassName('box questions')[0];
					const domGoodResponseBox = domPageDownlink.getElementsByClassName('box responses good')[0];
					const domBadResponseBox = domPageDownlink.getElementsByClassName('box responses bad')[0];
					const domDownlinkQuestion = domDownlinkQuestionBox.getElementsByClassName('question')[0];
					const domGoodResponse = domGoodResponseBox.getElementsByClassName('response')[0];
					const domBadResponse = domBadResponseBox.getElementsByClassName('response')[0];
					const domGoodDocs = domGoodResponseBox.getElementsByClassName('docs')[0];
					const domBadDocs = domBadResponseBox.getElementsByClassName('docs')[0];
					domDownlinkQuestion.innerText = domQuestion.innerText;
					domGoodResponse.innerText = result['good']['answer'];
					domBadResponse.innerText = result['bad']['answer'];
					Array.from(result['good']['docs']).forEach((doc) => {
						const domDoc = document.createElement('div');
						domDoc.classList.add('doc');
						domDoc.innerHTML = DOC_SVG;
						domDoc.content = doc;
						domGoodDocs.appendChild(domDoc);
						addEventListeners(domDoc, ['click', 'touchstart'], (event) => {
							const domContent = domCover.getElementsByClassName('content')[0];
							domCover.classList.remove('hidden');
							domContent.innerText = domDoc.content;
							event.stopPropagation();
						});
					});
					Array.from(result['bad']['docs']).forEach((doc) => {
						const domDoc = document.createElement('div');
						domDoc.classList.add('doc');
						domDoc.innerHTML = DOC_SVG;
						domDoc.content = doc;
						domBadDocs.appendChild(domDoc);
						addEventListeners(domDoc, ['click', 'touchstart'], (event) => {
							const domContent = domCover.getElementsByClassName('content')[0];
							domCover.classList.remove('hidden');
							domContent.innerText = domDoc.content;
							event.stopPropagation();
						});
					});
					domPageUplink.classList.add('hidden');
					domPageDownlink.classList.remove('hidden');
				} else
					domBtnAsk.classList.remove('disabled');
			}
		});
	});

	addEventListeners(domBtnClose, ['click', 'touchstart'], () => {
		domCover.classList.add('hidden');
	});
	
});