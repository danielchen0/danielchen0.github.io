---
title: Understanding Transformers III - Cross Attention
layout: default
date: 2025-11-13
keywords: transformers
published: true
mathjax: yes
---

This post is a follow up to Part II on Encoders, you should start there if you are unfamiliar with encoders. 

Recall that the Transformer architecture consists of three parts: the Decoder, the Encoder, and Cross Attention. In parts I and II we studied the decoder only transformer and the encoder only transformer, respectively. Now it is time to combine these things together to form the original encoder-decoder transformer architecture, using the Cross Attention mechanism.

Up to now, all mentions of "Attention" have referred to "Self Attention", where a token pays attention to other tokens in the same sequence. Cross Attention is a mechanism where a token pays attention to tokens in a different sequence. In particular, Cross Attention is used to connect the Encoder and the Decoder.

## Cross Attention



## References
