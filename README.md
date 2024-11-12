# 2024-P9-RAG-MARCO

# Enhanced Retrieval for Retrieval-Augmented Generation (RAG) Systems

## Objective
This project focuses on enhancing the retrieval phase of a Retrieval-Augmented Generation (RAG) system. The primary goal is to retrieve the most relevant chunks of text to enable large language models (LLMs) to generate more accurate and contextually appropriate responses. This enhancement is designed to support **LINKS** in developing high-quality RAG systems for various European projects.

## Research Question
**What are effective methods to improve the relevance and quality of retrieval in RAG systems, particularly through advanced text processing and optimized similarity scoring?**

## Task Definition

The project adopts a progressive, iterative approach to achieve the objective, divided into two main phases: **Building a Baseline** and **Improving on Baseline**.

### 1. Build a Baseline
#### Tasks
1. **Sentence Embedding**  
   Select a suitable sentence embedding model (e.g., Sentence-BERT) to represent passages.

2. **Vector Database Setup**  
   Embed all passages and store them in a vector database (e.g., FAISS) for efficient similarity searching.

3. **Initial Trials**  
   Begin with around 1,000 queries to manage computational load and iteratively fine-tune.

4. **Baseline Metrics**  
   Measure retrieval performance using relevant metrics:
   - **Recall@K**: Measures the percentage of relevant documents retrieved among the top K results.
   - **nDCG@K (Normalized Discounted Cumulative Gain)**: Evaluates ranking quality by prioritizing higher-ranked relevant passages.

### 2. Improve on Baseline
#### Tasks
1. **Literature Review and Strategy Development**  
   Conduct research on retrieval optimization techniques to identify impactful methods for improvement.

2. **Techniques for Enhancement**
   - **Summarization**: Generate concise summaries for each paragraph to potentially improve matching accuracy.
   - **Named Entity Recognition (NER)**: Extract key entities from paragraphs and queries to refine relevance.
   - **Topic Extraction**: Identify main topics in paragraphs to improve thematic relevance.
   - **Question Generation**: Generate potential questions for each paragraph to enhance retrieval accuracy by anticipating user query variations.

3. **Combining Scores**  
   Develop a strategy for integrating multiple similarity metrics to achieve optimized scoring:
   - **Cosine Similarity**: Measures the angle between vector embeddings.
   - **Exact NER Match**: Scores based on matching named entities.
   - **Topic Similarity**: Scores based on topic overlap between query and paragraph.

4. **Database Structuring**  
   Introduce a hierarchical database design, grouping chunks by summaries or other metadata to improve retrieval speed and relevance.

### 3. Application to Use Case
- **Develop a functional RAG system**: Build a system targeting a real-world use case.
- **Integrate optimized retrieval methods**: Apply the enhanced retrieval techniques in practical scenarios to showcase improvements in performance and relevance.

---

By progressively building a solid baseline and implementing advanced retrieval techniques, this project aims to create a robust and effective RAG system that supports **LINKS** in achieving high-quality information retrieval in European projects.
