---
title: Don't Use Truthy/Falsy values
layout: default
date: 2025-07-07
keywords: transformers
published: true
mathjax: yes
---

I'm not a fan of so called Truthy or Falsy values in programming languages for a variety of reasons. For those of you who are unfamiliar with these, truthy and falsy values are basically default _boolean_ values associated with values. For example, in Python, a number implictly has boolean value `True` if and only if it is equal to `0`. Similarly, an empty list `[]` has boolean value `False` but any list with _any_ values, even if they are all `0`, has boolean value `True`. So the lists `[0]`, `[1]`, etc. all have value `True`.

This means you can write nice little code like this:

```python
def processList(inputList : List[int]) -> str:
    if not inputList:
        return "Nothing to do!"
    
    ...
```

Instead of:

```python
def processList(inputList : List[int]) -> str:
    if len(inputList) == 0:
        return "Nothing to do!"
    
    ...
```

The key of course is just that writing `!inputList` is a lot more consise than writing `len(inputList) == 0`, when you want to check if the list is empty or not.

I'll now go through a list of reasons colleagues have presented to me for why truthy falsy values are useful and evaluate their merits.

# Various reasons for why Truthy Falsy checks are good

## Avoids repetitive code for routine checks

In the example above, its useful to use the shorthand `!inputList` and anyone who is fluent in their language to take advantage of the option especially when the check comes up often. I agree with this point that if you're going to do something a lot you should have nice syntax for it, and truthy/falsy values get you that.

## If it is a feature of the language you should use it

I never understood this one but have heard it. It sort of assumes that every language is designed perfectly and has no pitfalls.

A common gotcha in python is that default arguments in function args are mutable and shared across all calls to the function.

```python
def myFunc(inputList : List[int] = []) -> None:
    ...
    inputList.append(5) # each time myFunc is called, the inputList default mutates from [], [5], [5,5]
```

You are often recommended to this instead for safety:

```python
def myFunc(inputList : List[int] = None) -> None:
    if not inputList:
        inputList = [] # always defaults to [] across all function calls
    ...
```


## If you change the type of your variable then you don't have to update any of your checks again

I'm not sure why you would want this, the example presented to me was that converting the following from a list input to an integer input

```python
def processList(inputList : List[int]) -> str:
    if not inputList:
        return "Nothing to do!"
```

would allow us to seamlessly change the type without updating the code of the check

```python
def processList(inputNum : int) -> str:
    if not inputNum:
        return "Nothing to do!"
```

This clearly depends on the fact that your desired check would have remained the same in the new datatype, but I can't think of immediate cases as to why you would want this. Doesn't it seem safer to have had the explicit check `len(inputList) == 0` so that you immediately get compile/run time errors and you now have to make sure the checks are what you want in the new datatype? 

There is then the added case of, if your variable name contains the type like in the example above, you still have to edit the line with the new variable name, so I don't understand what time was saved.

Finally, I don't think you change the type of a variable often anyways, so the whole case seems irrelevant. 


# Various reasons for why truthy/falsy checks are bad:

## It violates "Write once, read many"

Using these checks kind of reminds me of a time when programmers around me would write `alp` everywhere instead of `alpha` just to save time. This leads to the classic case that anyone reading a line in the code needs to now think about what `alp` means, similar to how ayone reading `!myList` needs to think about the False/True cases of list values when `len(myList) == 0` would have immediately told you the check condition.

## No objective default across languages

The boolean values we associate with objects and primitives are inherently arbitrary. For example, in python the empty list `[]` has boolean value `False`, but in Javascript an empty array `[]` has boolean value `true`. Therefore, there is no _intuitive_ way to know this knowledge, you just have to use it often and only in one language, and hope you don't forget that the behavior is different when switching to another language.

## No objective preference across languages

In python, it is often recommended to use these truthy/falsy checks just as it is tacitly the preferred style in the community, as part of writing "Pythonic" code.

In C++, the only truthy/falsy value provided by the language is that for numerical values i.e. `int`, `float`, `double` and their variants. This also applies to pointer values which are just `size_t` values. However we all know a good C++ programmer uses the `nullptr` keyword when checking if a pointer is null or not as follows:


```C++
size_t* ptr;
if (ptr == nullptr){
    std::cout << "Got a null pointer!" << std::endl;
}
```

even though you could do this:

```C++
size_t* ptr;
if (!ptr) {
    std::cout << "Got a null pointer!" << std::endl;
}
```

So we have an example where whether you should use it or not is subjective based on the community you are a part of.


## Contradictory internal style guides

Python programmers _love_ truthy/falsy values because it makes their code so-called "pythonic".

I now refer you to the following lines from `Zen of Python`:

```
...
Explicit is better than implicit
...
Readability counts
...
```

If you read these sentences, you would probably realize that truthy/falsy values violate both - implicit boolean checks are inherently not explicit, and they are harder to read if you don't know what the defaults are.

## Confusing and inefficient when layered

In python, `None` evaluates to `False` in boolean contexts. This means that there are two cases when an `Optional[int]` evaluates to `False`: when it is `0`, and when it is `None`.

You may forget this when writing code and do:

```python
def myFunc(myVal : Optional[int] = None) -> None:
    if not myVal:
        print("No val set... performing handling...")
    else:
        if myVal == 0:
            print("Handling no quantity")
        ...
```

This is a bug. Remember - _both_ the `None` and `0` values hit the `if` block, so you need to do this:

```python
def myFunc(myVal : Optional[int] = None) -> None:
    if myVal is None:
        print("No val set... performing handling...")
    else:
        if myVal == 0:
            print("Handling no quantity")
        ...
```

In this case we weren't able to use the truthy values at all. We _could_ do `!myVal` in the `else` block if we think we're smart, but that would require you to read all of the code _around_ that block in order to realize that `myVal` couldn't be a possible value in the `else` block. Doing the explicit check is much more readable.



# Conclusion

In conclusion, just don't...

