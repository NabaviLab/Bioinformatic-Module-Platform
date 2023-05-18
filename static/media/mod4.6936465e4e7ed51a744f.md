# Module Outline

Learning Objectives

1. Define RNA-sequencing.


2. Understand RNA isolation methods.


3. Understand the process of sequence alignment.


4. Understand protein expression.


5. Use statistical tests to determine changes in expression levels.


6. Use the Burrows-Wheeler Aligner to map sequencing reads to a reference genome.

# 1. Introduction to RNA Sequencing
## What is RNA-sequencing?
- DNA extraction methods cannot be directly applied to RNA because RNA is structurally very different (https://www.labome.com/method/RNA-Extraction.html)
- RNA sequencing is a technique that can examine the quantity and sequences of RNA in a sample using next-generation

![chart](/images/mod4imgs/first.png)

## How does it work?

### 1) RNA Extraction

- method: using organic solvents/chaotropic agents (https://www.labome.com/method/RNA-Extraction.html)

![protocol](/images/mod4imgs/second.png)

- PCR (polymerase chain reaction)
- enzymatic assays
- TRIzol method
- many diff strategies, but all share 3 aims: (https://www.frontiersin.org/articles/10.3389/fmicb.2015.00476/full)
    - comprehensive lysis of cells and extraction of intracellular nucleic acids into aqueous solution
    - the removal of non-nucleic acid organic and inorganic molecules from resultant aqueous extracts
    - the minimization of nucleic acid losses throughout this purification process


# 2. Mapping reads & read counts
- read sequences are usually stored in compressed (gzipped) FASTQ files
- reads = short DNA fragments — typically 150 bp in length
### With Alignment
- read sequences aligned to reference genome and counted into annotated genes
- can align reads with HISAT2 — fast and sensitive alignment program for mapping sequencing reads
    - https://daehwankimlab.github.io/hisat2/
- alignment generates a BAM file with mapped reads
    - BAM file consists of chromosome names & lengths, and alignment section
    - each file contains read alignments for each sample
- finds where each read comes from in the genome
- alternative mappers: STAR, Subread
### Without Alignment
- unmapped reads = reads that map nowhere on the reference genome
- these are dumped in a separate bin to analyze easily and separately from mapped reads
### Data Analysis
### 1) Read Quantification
- counting the number of reads that align to each gene
### 2) Differential Gene Expression Analysis
- will learn more about this later in this module
### Normalizing & Transforming Read Counts
- aligned reads (BAMs) can be converted to counts
### ACTIVITY
- youtube video: https://www.youtube.com/watch?v=jA8RI4u_hd8


# 3. Gene Expression
## Differential Gene Expression (DGE)
- most common application of RNA-sequencing data
- determines which genes are expressed in a cell
- tools in R (have a toy data set)
    - early tools w simple statistical analysis (T test)
        - find a simple package

https://www.nature.com/scitable/topicpage/gene-expression-14121669/


# 4. Protein Expression
## What is Protein Expression?
- definition: refers to the production of proteins by cells.
    - In cancer applications, protein expression can give information about a specific type of cancer, the best treatment to use, and how effective the treatment is
    - Source: https://www.cancer.gov/publications/dictionaries/cancer-terms/def/protein-expression
## Transcription & Translation
- 3 steps to transcription:


    1. Initiation


    2. Elongation


    3. Termination


- translation: requires tRNA, mRNA


- post translation modification

## Recombinant Protein Expression Methods
- strategies: transfecting cells with a DNA vector that contains the template and then culturing the cells so that they transcribe and translate the desired protein

![expression methods](/images/mod4imgs/third.png)

## Mammalian Protein Expression
- mammalian proteins can be used to produce antibodies, complex proteins, and proteins for use in functional cell-based assays
## *FURTHER READINGS*:
- https://www.biosyn.com/faq/what-is-protein-expression.aspx#!
- https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-protein-expression-systems.html#2


# 5. Differential Expression Analysis
## What is Differential Expression Analysis?
- Performing statistical analysis on normalized read count data
    - determines changes in expression levels
- EX: use this to decide, for a given gene, if an observed difference in read is significant
    - greater than it should be due to natural random variation
## Methods
1. Negative Binomial (NB) distributions
    - edgeR
    - DESeq
2. Bayesian Approaches based on NB model
    - baySeq
    - EBSeq

## Visualizing & Interpreting data
- heatmaps
    - can be combined with clustering methods — groups genes/samples based on similarity of gene expression pattern

![heatmap](/images/mod4imgs/fourth.png)

- https://www.ebi.ac.uk/training/online/courses/functional-genomics-ii-common-technologies-and-data-analysis-methods/biological-interpretation-of-gene-expression-data-2/

## ACTIVITY
- perform quality control on count data
- Use DESeq2 to obtain a list of significantly differentially expressed genes
- visualize expression patterns of differentially expressed genes
- perform functional analysis on gene lists with R-based tools
- https://hbctraining.github.io/DGE_workshop/lessons/04_DGE_DESeq2_analysis.html


# 6. Activity
- differential expression analysis
    - basic statistical analysis
        - basic T tests
        - nearest neighbor classification
        - regression analysis
## Map sequencing reads to a reference genome
- Burrows-Wheeler Aligner (https://bio-bwa.sourceforge.net/)
   - https://genomics.sschmeier.com/ngs-mapping/
## Statistical Tests
- Likelihood Ratio Test (LRT) : https://hbctraining.github.io/DGE_workshop/lessons/08_DGE_LRT.html
    - LRT is used to identify any genes that show change in expression across the different levels

# REFERENCES
- https://www.technologynetworks.com/genomics/articles/rna-seq-basics-applications-and-protocol-299461

- https://hbctraining.github.io/Intro-to-rnaseq-hpc-salmon/lessons/Intro-to-RNAseq.html
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4863231/
- https://hbctraining.github.io/Intro-to-R-with-DGE/
- https://www.ncbi.nlm.nih.gov/books/NBK550334/
- https://training.galaxyproject.org/training-material/topics/transcriptomics/tutorials/rna-seq-reads-to-counts/tutorial.html
- https://thesequencingcenter.com/knowledge-base/what-are-unmapped-reads/
