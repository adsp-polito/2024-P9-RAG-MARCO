# Improving Retrieval Performance in Retrieval-Augmented Generation Architecture

## Overview
<p align="justify">
  <p>This research plunges into the fascinating world of Retrieval-Augmented Generation (RAG) by exploring the crucial interplay between syntactic and semantic search for document retrieval. Imagine a system where questions are not just answered, but <em>masterfully</em> answered, drawing upon a wealth of relevant information. That's the promise of RAG.</p>

  <p>As depicted in the figure below, a RAG system operates as a powerful pipeline. First, a sophisticated <strong>Retrieval Mechanism</strong> searches through a vast database, pinpointing the most relevant documents related to the input question. These carefully selected documents are then combined with the original question to form an enriched query, which is subsequently fed into a Large Language Model (LLM) for <strong>Response Generation</strong>.</p>

  <p>While RAG is essentially revolutionizing how LLMs generate informed responses, the retrieval mechanism remains the keystone. The quality of the final answer hinges critically on the relevance of the retrieved documents. Garbage in, garbage out, as they say!</p>

  <p>Therefore, this research tackles two fundamental questions that lie at the heart of effective RAG:</p>

  <ul>
    <li><strong>How can we achieve truly reliable retrieval?</strong> We're exploring cutting-edge techniques to ensure we're not just finding <em>any</em> documents, but the <em>right</em> onese</li>
    <li><strong>How can we rigorously evaluate that reliability?</strong> We're developing robust metrics to measure the effectiveness of our retrieval methods and ensure they're up to the task.</li>
  </ul>
</p>

![Image](./extras/teaser.svg)

<p align="justify">
In this project, we first investigate different <strong>baseline retrieval mechanisms</strong>, such as syntactic search through textual entities and semantic search with embedding models. Focusing on the latter, we propose a <strong>novel learnable mapping</strong> that optimizes question embeddings by aligning them with relevant document clusters via contrastive learning. We also introduce a <strong>new metric for evaluating retrieval performance</strong>. Our results demonstrate that the proposed method has strong potential to improve semantic search across various metrics, including our novel metric. For more details, please refer to <a href="./checkpoints/checkpoint_03.pdf">the final presentation</a> or the <a href="./report/t3p9_report.pdf">project report</a>. It is worth noting that, in otder to optimize the proposed method, we leveraged <a href="https://wandb.ai/">Weights & Biases</a> for Bayesian hyperparameter search. The figure below summarizes the results. A complete visualization is available in <a href="https://wandb.ai/adsp-gt3-o1/ms-marco/reports/ADSP-gt3--VmlldzoxMTA3OTExOQ?accessToken=3qt191ygaowfk12zgme3665lczudi0bbim9pxfko5qoz01gaeu4fxvunz9fomiuu">this report</a>.
</p>

![Image](./extras/wandb_filtered.jpg)

### Project Structure
```bash
ADSP Project/
├── datasets/                       # Directory of the datasets
├── notebooks/                      # Directory of the notebooks
│   └── stable_system.ipynb         # Main script to create retrieval mechanisms
│   └── stable_data_cleaning.ipynb  # Main script to perform data cleaning
├── checkpoints/                    # Directory of the checkpoint presentations
└── report/                         # Directory of the report
```

### Project Stakeholder
<p align="justify">
The primary stakeholder is <strong>LINKS Foundation</strong>, which seeks to leverage advanced RAG systems for European projects and other applications. The project was supervised by <strong>Professor Giuseppe Rizzo</strong> and <strong>Dr. Lorenzo Bongiovanni</strong>.
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
