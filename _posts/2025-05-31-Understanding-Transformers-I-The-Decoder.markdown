---
title: Understanding Transformers I - The Decoder
layout: default
date: 2025-05-31
keywords: transformers
published: true
mathjax: yes
---

In this blog post I give a gentle introduction to the Transformer architecture as originally presented by Vaswani et al., in their landmark paper, "Attention Is All You Need". My focus will be on visuals, intuition, and just enough math to get the concepts across and keep them memorable. Specifically, I intend to explain the Transformer in three parts: Decoders, Encoders, and Cross Attention. This blog post covers part one of this list.

<div class='figure'>
    <img src="/assets/encoder-decoder.png"
         style="width: 50%; height: 50%; display: block; margin: 0 auto;"/>
    <div class='caption'>
        <span class='caption-label'>Figure 1.</span> The transformer architecture features encoders, decoders, positional encodings, and token embeddings (Vaswani et al., 2017).
    </div>
</div>

## Breaking it down - Decoders, Encoders, and Cross Attention

For reasons, decoder-only architectures such as GPT-2 (released in 2019) and encoder-only architectures such as BERT (released 2018) actually came after the original encoder-decoder transformer paper in 2017. Despite this chronology it is useful to focus on these simpler transformers and build our way up in future sections to eventually combine the encoders and decoders together (via Cross Attention) to form the original transformer.

An easy way to visualize this is to divide the Transformer and relate it to these simpler transformers:

<div class='figure'>
    <img src="/assets/disect-transformer.png"
         style="width: 100%; height: 100%; display: block; margin: 0 auto;"/>
    <div class='caption'>
        <span class='caption-label'>Figure 2.</span> The transformer architecture consists of two parts - an encoder stack, and a decoder stack (Esmailbeigi, 2023).
    </div>
</div>

That is - Decoder only architectures mimic the right side of the Transformer stack, while encoder only architectures mimic the left side.

## Decoder-only transformers - GPT-2

Let us now focus on the topic of this blog post which is Decoder-only architectures such as GPT-2. A model like this consumes a sentence and predicts the next token. 

Note: I chose to remove details like multi-head attention since these are not important at a high level.

A model like this can be broken down into simple steps:

1. Receive an input sentence: "Data visualization empowers users to"

2. For each _token_ in the sentence, convert it to an _embedding_ vector of fixed length.
   - A _token_ is a string of continuous characters treated as a unit. For example, in GPT-2's tokenizer, 'data', 'visualization', 'users' and 'to' are all tokens. However, 'em' and 'powers' are separate tokens.
     - There are a variety of tokenization strategies but this is one such example.
   - An _embedding_ is a vector that corresponds to the token, and represents its meaning.

3. For each embedding (corresponding to an input token), apply special transforms (understood to be _weights_ matrices, but this isn't too important) $W_K$, $W_Q$, and $W_V$ to get the Key, Query, and Value vectors corresponding to the token, respectively.
   - Such vectors can be understood as follows: 
     - The Key vector is a vector such that when multiplied by another token's Query vector, gives us a magnitude representing how much _attention_ that other token is paying attention to us. 
     - The Query vector is symmetrically a vector such that, when multiplied by another token's Key vector, gives us a magnitude representing how much _attention_ our token is paying attention to that other token.
     - The Value vector is a vector that represents the original embedding of the token in a new vector space, such that, when multiplied by attention (a scalar number), gives us a vector representing the original token scaled by the attention the current token has for it.

   - Therefore, for each input token's embedding, we get a list of vectors that represent other vectors in the sentence, scaled by the attention this token has for them.

4. Once we have these scaled attention-value vectors, we run these through a Multilayer Perceptron (MLP). This adds many layers of non linearity that allows the transformer to learn deep features about these vectors.

5. Steps 3-4 constitute one transformer _block_. The outputs are then fed to the next block. This process can be repeated as many times as desired. In GPT-2's case, this is repeated 12 times.

6. At the output end of the last transformer block, we apply a softmax layer to convert the outputs to probabilities. This represents the probability of a particular token being the next token in an input sentence.

## References

Esmailbeigi, R. (2023, January 20). BERT, GPT, and BART: A short comparison. Medium. https://medium.com/@reyhaneh.esmailbeigi/bert-gpt-and-bart-a-short-comparison-5d6a57175fca

Vaswani, A., Shazeer, N., Parmar, N., Uszoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. In Advances in Neural Information Processing Systems (pp. 5998–6008). https://arxiv.org/abs/1706.03762
