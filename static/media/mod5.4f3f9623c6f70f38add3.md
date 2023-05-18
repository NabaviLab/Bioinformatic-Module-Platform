# Module 5: Genomic Variants

## 1 Introduction
### 1.1 What are genomic variants?
Recorded video #1

### 1.2 Genomic variants in populations
From archeological evidence, we know humans spread out across the globe over the course of thousands of years. The last main continent to be reached (besides Antarctica) was South America around 15,000 years ago, while some islands in the Pacific were settled relatively recently. How far and wide humans traveled was influenced by a number of changing factors, including the changes in climate, overpopulation and competing populations, and new technologies like the sail.

In today’s world, we can reach virtually any region on the planet in at most a few days. But for most of human history, a mountain chain could have meant the end of the known world, with human populations on either side never knowing of each other’s existence. As a consequence, these populations become isolated, and independent evolution leads to genetic divergence. This is because while variants naturally arise in individuals 

![map](/images/mod5imgs/first.png)

spontaneously, they can also be inherited from previous generations. This means that a variant unique to a population is not necessarily present in every individual, only a fraction. This fraction is referred to as an allele frequency, or the rate of occurrence of a particular variant across a population.

Right now, you may be thinking of the pioneering work of Gregor Mendel and his punnet squares. Mendel studied the properties of inheritance for certain traits in peas. It turns out that studying genomic variants on the population level is an existing field called population genetics, and has existed long before bioinformatics came around. 

![mendel](/images/mod5imgs/second.png)

But, as is the case with many other fields, developments in bioinformatics and the field of genomics has fundamentally pushed our understanding of population genetics to new heights. Before continuing, it is important to make a distinction between studying genomic variants vs population genetics. Population genetics and genomic variants are closely related but distinct concepts. Population genetics is the study of the distribution and frequency of genetic variations within and among populations. This can include studying the inherited and spontaneous variations in the DNA sequence of a group of individuals, as well as the patterns of inheritance and transmission of these variations from one generation to the next. In contrast, genomic variants refer specifically to changes or alterations in an individual's DNA sequence, relative to a reference genome. This can include changes in the number of copies of a particular gene, or changes in the nucleotide sequence of a gene. While population genetics can provide insight into the genetic makeup of a group and the underlying causes of genetic disorders and other traits, studying genomic variants focuses specifically on individual-level changes in the DNA sequence. For example, where a population geneticist might measure the frequency of a certain trait among an isolated population, a bioinformatician would look at the DNA sequences of individuals from the population and identify genomic variants linked to that trait.

Despite these differences, advances in genomics have fundamentally changed our understanding of human traits. Studying the presence of genetic variants in populations, especially ones that have no phenotype (observable change), can help researchers track the migration and mixing of various populations throughout history. It can also help us understand the causes of certain traits; for example, we now know that eye color is determined by the combination of several genomic variants. The same is true of skin color, and all variants that control skin color originated in Africa. 

Check out this short documentary on the biology of skin color:
https://www.youtube.com/watch?v=hFw8mMzH5YA&ab_channel=biointeractive

### 1.3 Genomic variants in cancer
While genomic variants can manifest in a wide variety of ways (as we will see in the next section), there are two fundamental types of variants: somatic and germline. Somatic variants occur from mutations in any non-reproductive cells, whereas germline variants occur in reproductive cells. Basically, germline variants are inherited, and somatic variants are not. 

Because somatic variants, by definition, do not occur in reproductive cells, they never become variants in a population. However, because cells still divide and replicate by copying their DNA to daughter cells, somatic variants have the potential to spread throughout the body. If a particular somatic variant inhibits some cellular function, this could be a serious problem! Luckily, our genomes have built-in mechanisms to stop this from happening in the form of several genes that repair DNA. But what if the somatic mutations affect the genes meant to repair DNA? What if other mutations pop up that inhibit the cell from initiating apoptosis, or cause changes in the way the cell regulates growth and the rate of division?

This ‘perfect storm’ of acquiring the right somatic mutations is the unlikely process that ultimately leads to cancer. Certain variants are seemingly vital to cancer formation, whereas other variants may be required for a certain type of cancer only. For example, variants located on the p53 gene, a small region on the short arm of chromosome 17, are found in the genomes of nearly all cancer cells. Being the subject of many studies, we know that p53 controls factors that contribute to both the rate of division and the inhibition of apoptosis.

However, not all variants are made equal. Some somatic variants, though seen frequently across patients, are simply ‘passengers’ - they do not contribute to oncogenesis. On the other hand, driver variants lead to changes in cell functions typical of cancer. Furthermore, some driver variants are more significant to others - both in their effect on cellular function and on our ability to target them in treatment. As such, medical professionals usually use a four-tier system when categorizing somatic variants in cancer. Tier 1 corresponds to variants with strong clinical significance in terms of diagnosis, prognosis, or treatment. 

The field of bioinformatics, specifically cancer genomics, has revolutionized the way in which we treat and study cancer. It turns out that actually detecting variants in a person’s genome is far from an easy task. Detecting these tier 1 variants in patients, and even cataloging what they are in the first place, were made possible by advances in sequencing technology and variant detection. In fact, studying the genomic variations that occur in cancer has become integral cancer research as a whole.


## 2 Types of genomic variants
As mentioned previously, genomic variants can manifest in a variety of ways at all scales across the genome. In this section, we’ll discuss the different types of genomic variants and their properties. An important concept to keep in mind is that identifying variants in a DNA sequence requires comparing it to an established reference genome. This idea was discussed in module 3, but is extremely relevant for this topic as well. In population genetics, the reference sequence at a particular location in the genome is often called the ‘wild type’, and the variant sequence at the same location is called the ‘mutant’.

Also, it is important to note that variants happen naturally all the time, but most are ineffectual or otherwise harmless. Some types of variants only rarely have implications for a person’s health or traits, whereas some rare variants are largely associated with cancer genomes.

Recorded video #2

Cheat Sheet

![cheat sheet of mutations and variants](/images/mod5imgs/third.png)

## 3 Population Genetics
While population genetics is an entire field on its own, we wanted to provide a bit more information on this subject for those interested. There exists tons of educational resources on this subject, so checkout this introductory video from CrashCourse:
https://www.youtube.com/watch?v=WhFKPaRnTdQ

When you’re finished, click on the following link and complete the activity on genetic variation.
https://www.genome.gov/25019961/online-education-kit-activity-1-genetic-variation-in-populations

## 4 Detecting genomic variants
So let’s say we’re a cancer researcher studying recurring variants in breast cancer. We’ve just acquired sequencing data from a patient recently diagnosed and have already aligned it to the reference genome. At this point, detecting variants should be pretty straightforward - just scan the positions in the genome, and look at the differences. Simple, right?

In theory, yes! Though the strategy may be simplifying a few processes, the basic idea remains the same. But as you may have guessed, there is indeed a catch. Though sequencing technology continues to improve, the data is unreliable. On top of that, detecting genomic variants is one of the last stops in a long experimental pipeline - there are so many places where something can go wrong! Sequencers sometimes misread base pairs, resulting in a false positive genomic variant. Certain areas of the genome may have been read more than others, which the researcher may mistakenly assume to be the result of copy number variations in that area. Some regions of the genome do not map well to the reference, while others map too well. You get the idea!

Given these challenges, reliable variant detection remains an ongoing area of research. Methods to detect variants often combine computational, statistical, and analytical approaches to produce the most confident set of variants possible.

### 4.1 Variant calling vs genotyping

Let’s discuss two important terms. Variant detection is a broad term that encompasses a range of techniques used to identify differences in DNA sequences. Variant calling is a derivative of this; it describes more specific techniques used to identify and classify types of variants, such as SNPs, indels, ect. When doing variant calling, the researcher looks for evidence of a variant at a particular location in the genome.

![Variant Calling Steps](/images/mod5imgs/fourth.png)

Genotyping describes a wider population-focused view. At that same location in the genome, genotyping describes all the different alleles at that location, and their relative frequencies. Variant callers will estimate the probability of observing a particular allele at the location.

### 4.2 Variant Calling workflow

The figure to the right describes a typical variant calling workflow. One typically starts with raw sequencing reads, filters low quality reads out of the sample, and aligns to a reference genome. Aligned reads are then typically stored as special sequencing files, called SAM or BAM files. At this step, a genotype software is applied to the data to get a collection of variants. As standard practice, the variants themselves are stored in a special type of file called a VCF file.

Some popular variant calling softwares include:
- Samtools
- GATK
- FreeBayes
- DiBayes

In the programming activity at the end of this section, we will use variant calling software from the samtools package.

## 5 Cataloging Variants
The last topic in this section features how we record and catalog variants for future use. As mentioned previously, there are millions of recorded variants in the genomes of healthy humans, many of which have important implications for diseases and predisposition to certain conditions.

PopHumanVar is an interactive interface where users can explore specific genomic regions in humans. For variants of interest, it allows users to learn about their functional role and frequency across different populations. Click the following link:
https://pophumanvar.uab.cat/

For a comprehensive explanation on how to use the system, navigate to tutorials and complete section 2. Here, you’ll focus on viewing a 1.15Mb variant on chromosome 2 containing the gene EDAR.

## 6 Learn More

