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

## Decoder-only transformers - GPT-2

For reasons, decoder-only architectures such as GPT-2 (released in 2019) actually came after the original encoder-decoder transformer paper in 2017. Despite this chronology it is useful to focus on decoder only transformers and build our way up in future sections to eventually combine the encoders and decoders together to form the original transformer.




## References

Vaswani, A., Shazeer, N., Parmar, N., Uszoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. In Advances in Neural Information Processing Systems (pp. 5998–6008). https://arxiv.org/abs/1706.03762
