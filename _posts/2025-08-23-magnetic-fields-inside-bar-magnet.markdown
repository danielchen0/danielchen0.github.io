---
title: Why do Magnetic Field Lines go from South to North inside of a bar magnet?
layout: default
date: 2025-08-23
keywords: transformers
published: true
mathjax: yes
---

When reading about magnetic field lines for bar magnets, you will often hear that field lines go from north to south outside the bar magnet, and they go from south to north inside of the bar magnet, thus forming closed loops. The direction of the field line is interpreted to be the direction of force the bar magnet imposes on a point north pole particle. So it would make sense that field lines go from north to south outside of the magnet, but why does it make sense that they would go from south to north then when _inside_ of a bar magnet? How can you ascertain what would happen to a north pole particle when you cannot physically measure this since you can't place a particle there physically? In otherwords, if there's no way to experimentally verify or dispute this, why do we say this? 

<div class='figure'>
    <img src="/assets/Bar-Magnet-Magnetic-Field-With-Compass.gif"
        style="width: 100%; height: 100%; display: block; margin: 0 auto;"/>
    <div class='caption'>
        <span class='caption-label'>Figure 1.</span> Magnetic Field lines indicate which direction a north monopole will be pushed due to the magnetic field of the bar magnet (StickMan Physics).
    </div>
</div>

<div class='figure'>
    <img src="/assets/bar-magnet.gif"
        style="width: 50%; height: 50%; display: block; margin: 0 auto;"/>
    <div class='caption'>
        <span class='caption-label'>Figure 2.</span> Magnetic Field lines are often shown going from north to south outside of the bar magnet, while south to north inside of the bar magnet. (Nave).
    </div>
</div>


Such a statement has bothered me since my youth when it was first taught to me, and even now most sources don't really do the topic justice, so I'll try my best to break this down into intuitive terms.

# First principles

To begin to understand this behavior, we need to recall some facts about bar magnets that we _can_ verify.

Fact 1: A bar magnet cannot be split into two monopoles. In fact, when splitting a bar magnet, you will get two bar magnets with both north and south poles, regardless of whether you split it vertically or horizontally.

Note that this is equivalent to the fact that magnetic monopoles (i.e. magnets with only a north or south pole) don't exist. 


<div class='figure'>
    <img src="/assets/split-magnet.png"
        style="width: 100%; height: 100%; display: block; margin: 0 auto;"/>
    <div class='caption'>
        <span class='caption-label'>Figure 3.</span> Splitting a North-South bar magnet just recursively produces smaller North-South bar magnets, you cannot separate the north from the south pole even if you try (Monash University).
    </div>
</div>

Clearly, if you keep doing this recursion, you end up with a collection of ferromagnetic _units_, each of which of course has its own north and south poles.

<div class='figure'>
    <img src="/assets/ferromagnetic-bar-magnet.jpg"
        style="width: 100%; height: 100%; display: block; margin: 0 auto;"/>
    <div class='caption'>
        <span class='caption-label'>Figure 4.</span> A magnet consists of ferromagnetic sections. (Lehan, 2020)
    </div>
</div>

Now, intuitively, if you place a north pole somewhere in this array of north-south dipoles, the force enacted upon the north pole will tend to move towards the top (north side) of the magnet, hence why the field lines point towards the north pole of the overall bar magnet. 

There is really no outside vs inside, at all points in space there are many of these ferromagnetic particles acting on those points inside of the overall bar magnet. Basically, the north pole of the magnet is implied by the particles and not the otherway around - the particles imbue an overall sense of north vs southness of the bar magnet.


# References

Lehan, D. (2020). Permanent and Induced Magnetism (4.7.1 Permanent and induced magnetism). In Physics-SchoolUK.com. Retrieved August 23, 2025, from https://physics-schooluk.com/magnetism_permanent.html

Monash University. (n.d.). Magnetic fields. In Student Academic Success – Physics: Fields and interactions. Retrieved August 23, 2025, from https://www.monash.edu/student-academic-success/physics/fields-and-interactions/magnetic-fields

Nave, C. R. (n.d.). Magnetism & electromagnetism. In HyperPhysics. Georgia State University. Retrieved August 23, 2025, from http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/elemag.html

StickMan Physics. (n.d.). Magnetic fields. In Magnets and magnetism [Web page]. Retrieved August 23, 2025, from https://stickmanphysics.com/stickman-physics-home/magnets-and-magnetism/magnetic-fields/
