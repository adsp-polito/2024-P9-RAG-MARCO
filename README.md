# Improving Retrieval Performance in Retrieval-Augmented Generation Architecture

## Overview
<p align="justify">
  <p>This research explores the world of Retrieval-Augmented Generation (RAG) by studying the interplay between syntactic and semantic search for document retrieval. As depicted in the figure below, a RAG system operates as a powerful pipeline. First, a sophisticated <strong>Retrieval Mechanism</strong> searches through a vast database and pinpoints the most relevant documents related to the input question. These carefully selected documents are then combined with the original question to form an enriched query, which is subsequently fed into a Large Language Model (LLM) for <strong>Response Generation</strong>.</p>

  <p>While RAG is essentially revolutionizing how LLMs generate informed responses, the retrieval mechanism remains the keystone. The quality of the final answer hinges critically on the relevance of the retrieved documents. Garbage in, garbage out, as they say! Therefore, this research revolves around two fundamental questions:</p>

  <ul>
    <li><strong>How can we retreive reliably?</strong> We're exploring state-of-the-art techniques to ensure we're not just finding <em>any</em> documents, but the <em>right</em> ones.</li>
    <li><strong>How can we evaluate that reliability?</strong> We're studying robust metrics to measure the effectiveness of the retrieval methods and ensure they're up to the task.</li>
  </ul>
</p>

![Image](./extras/teaser.svg)

<p align="justify">
  <p>To address the questions posed earlier, this project explores a range of <strong>baseline retrieval mechanisms</strong>, from traditional syntactic search using textual entities to state-of-the-art semantic search based on powerful embedding models. We then focus particularly on semantic search and introduce a <strong>novel learnable mapping</strong> that optimizes question embeddings. This innovative approach aligns these embeddings with relevant document clusters through <strong>contrastive learning</strong>, enhancing the reliability of information retrieval. This constitutes our approach to the first question.</p>

  <p>Furthermore, in addition to formally defining the problem and investigating current performance metrics, we introduce a <strong>new metric for evaluating retrieval performance</strong>. This metric provides a more nuanced and comprehensive assessment of retrieval effectiveness, which addresses the second question.</p>

  <p>Our results demonstrate the significant potential of our proposed method to improve semantic search across multiple metrics, including our novel metric. For a comprehensive understanding of the technical details, we invite you to explore <a href="./presentations/exam.pdf">the exam presentation</a> and the <a href="./report/t3p9_report.pdf">the project report</a>.</p>

  <p>It is worth noting that we leveraged the capabilities of <a href="https://wandb.ai/">Weights & Biases</a> for Bayesian hyperparameter optimization to fine-tune our proposed method. A summary of our key findings is presented in the figure below, with a complete and interactive visualization available in <a href="https://wandb.ai/adsp-gt3-o1/ms-marco/reports/ADSP-gt3--VmlldzoxMTA3OTExOQ?accessToken=3qt191ygaowfk12zgme3665lczudi0bbim9pxfko5qoz01gaeu4fxvunz9fomiuu">this interactive report</a>.</p>
</p>

![Image](./extras/wandb_filtered.jpg)

### Project Structure
```bash
2024-P9-RAG-MARCO/
├── datasets/                             # Directory of the cleaned datasets
│   └── hotpot-qa-no-augmentation.pickle  # 1000 non-augmented queries from Hotpot-QA dataset
│   └── hotpot-qa-spacy-llama8b.pickle    # 100 augmented queries from Hotpot-QA dataset
│   └── ms-marco-no-augmentation.pickle   # 1000 non-augmented queries of MS-Marco dataset
│   └── ms-marco-spacy-llama8b.pickle     # 100 augmented queries from MS-Marco dataset
├── demo/                                 # Directory of the files used for demo
│   └── favicon.ico                       # Icon
│   └── index.html                        # Main HTML homepage
│   └── scripts.js                        # Front-End scripts in Vanilla JS
│   └── styles.css                        # Front-End styles in CSS
├── extras/                               # Directory of the extra files used in the readme
├── notebooks/                            # Directory of the notebooks
│   └── stable_system.ipynb               # Notebook used to implement the system
│   └── stable_data_cleaning.ipynb        # Notebook used to perform data cleaning
│   └── stable_webapp.ipynb               # Notebook used to host a webserver on Calab
├── presentations/                        # Directory of the presentations
│   └── checkpoint_01.pdf                 # Presentation on the first checkpoint
│   └── checkpoint_02.pdf                 # Presentation on the second checkpoint
│   └── checkpoint_03.pdf                 # Presentation on the third checkpoint
│   └── exam.pdf                          # Presentation on the exam day
└─── report/                              # Directory of the report
    └── t3p9_report.pdf                   # The report
```

### Project Stakeholder
<p align="justify">
The primary stakeholder is <a href="">LINKS Foundation</a>, which seeks to leverage advanced RAG systems for European projects and other applications. The project was supervised by <strong>Professor Giuseppe Rizzo</strong> and <strong>Dr. Lorenzo Bongiovanni</strong>.
</p>

### Project Developers
<p align="justify">
The project was developed by <a href="https://www.linkedin.com/in/homayoun-afshari/">Homayoun Afshari</a>, <a href="https://hossenkhodadadi.github.io/">Hossein Khodadadi</a>, and <a href="https://www.linkedin.com/in/arash-daneshvar/">Arash Daneshvar</a>.
</p>

---
## Installation
To run this project, you need to install the packages available in the stable_system notebook. You can install it via pip:<br/>
```bash
pip install wandb
pip install datasets
pip install sentence_transformers
pip install faiss-cpu
pip install faiss-gpu
pip install scann
pip install rapidfuzz
pip install python-Levenshtein
pip install rank-bm25
pip install spacy
python -m spacy download en_core_web_sm
```

## Usage
First, you need to create a directory in your google drive with the following address as you need to mount it later, `ADSP Project/datasets`, copy the content from the same directory in our repository and paste it into your `ADSP Project/datasets`. Now feel free to run the `stable_system.ipynb`.

Second, if you would like to execute the process of data preprocessing to recreate the `ADSP Project/datasets` files, you need to run the `stable_data_cleaning.ipynb`, remember to provide the proper [Qroq API ](https://groq.com/) from your account to the corresponding notebook. You can use the following hyperparameter arguments to customize the training process:

- `--epoch`: Number of epochs for training (default is 50).
- `--batch_size`: Batch size for training (default is 512).
- `--learning_rate`: Learning rate (default is 0.0001).
- `--margin`: The margin which separates the positive and negative samples.
- `--mode`: Policy for choosing the positive and negative samples.
- `--norm_order`: Normalization order.
- `--positive_tendency`: The tendency to choose positive samples over negative samples.
- `--preferred_total`: Total number of positive/negative chosen samples for contrastive loss.


## Objectives

1. Enhance the **retrieval process** by incorporating advanced chunk processing, including:
   - Summarization
   - Topic extraction
   - Key entity identification
2. Optimize **query expansion** to:
   - Identify relevant topics and entities
   - Differentiate instructions from user queries
   - Handle multiple questions effectively

---

## Data
<!---
We use the **MS MARCO dataset (Microsoft Machine Reading Comprehension)**, a large-scale, open-source dataset for passage ranking and question answering. The dataset includes:
- **Triplets**: Query, passage, relevance score
- Tasks:
  - **Passage Retrieval**: Evaluate retrieval quality
  - **Question Answering**: Derive answers using passages 
--->

We use the MS MARCO dataset (Microsoft Machine Reading Comprehension) and TriviaQA, two large-scale, open-source datasets for passage ranking and question answering. The datasets include:

- **MS MARCO**:
Triplets: Query, passage, relevance score  

  Tasks:
   - Passage Retrieval: Evaluate retrieval quality
   - Question Answering: Derive answers using passages
---

## Workflow

### Project Phases
1. **Design and Management**:
   - Understand project requirements
   - Develop initial designs
   - Create presentations and engage with the mentor
2. **Development**:
   - Research resources
   - Build baseline models
   - Incorporate advanced retrieval techniques
3. **Dry Run**:
   - Restructure the database
   - Experiment with ideas
   - Produce an MVP (Minimum Viable Product)
4. **Final Presentation and Evaluation**:
   - Compile findings
   - Develop the final product
   - Deliver project presentations and take exams

### Tools and Techniques
- **Natural Language Processing (NLP)** techniques such as Named Entity Recognition (NER) and summarization
- **Scoring mechanisms** to improve retrieval accuracy

---

## Mentorship

The project is supported by **Lorenzo Bongiovanni** from LINKS Foundation. Guidance is provided through **biweekly mentoring calls**.

---

## Contribution

This repository is a collaborative space for:
- **Code development**
- **Documentation**
- **Presentations**

---

## Policy

- The repository is **public**, following an open-design principle unless otherwise requested by the organization.
- Contributions must align with the objectives and follow the established guidelines.
