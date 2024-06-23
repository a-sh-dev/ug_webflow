# Design interpretation & decision making

As much as I want to ensure design accuracy in the implementation (as pixel-perfect), some parts of the design could be clarified, and I will expand more on this below. For this challenge, I will treat the design as flat (e.g., ignoring layer transparency/opacity used for colour manipulation) and follow best practices for user experience.

## Clarifications to ask

In an actual scenario, upon receiving the design, I would like to have the opportunity to discuss it with the designer. This would allow me to ask for clarification and provide input or comment on the design decisions before implementing them.

- I've set up variables for style management that are reusable and maintainable. The decision on the naming should be discussed with the designer so that it's in sync with the design system as the source of truth. In this instance, I will name them according to standard practices.
  - If there is a proper design system, I would also ensure that the variables are set up as detailed as the design system; for example, the letter spacing, line height, and font sizes are to be set as per the system. In this instance, the variables I've created are based on the actual design.
  - In this implementation, I will convert a small variant into the closest used for consistency, e.g., there are 150% and 160% variants used in some of the line-height in the typography. I will use only one of them (160% as it's used in different font sizes).
- Font weight variations. The design uses four different font-weight variations. Based on their occurrence throughout the design, I will discuss with the designer the possibility of limiting the font weight to no more than three (regular 400, medium 500, and bold 700). A semi-bold (600) is used twice in the banner and in the case-study section image caption in a small font-size. I would recommend replacing it with medium or bold instead of adding a new variant to avoid overloading the site with Google fonts.
- Image assets, e.g., the case study. Is it supposed to be changeable depending on themes, occasions, blog categories, etc.?
  - The Figma design of the image consists of layers of colours stacked on top of each other to create the image's colour. Do we want to use a grayscale image asset and change the colour accordingly? 
- Some elements in the design are not immediately visible and could use some clarification. These hidden elements could be crucial for the overall design, and I believe understanding them better will help in the implementation process.
  - For example, 
- In the "Security Ratings" section, I would like to clarify the representation of the icon next to the "upguard.com" input text field, as it is quite unclear. Is it to represent a scanner, a keyboard key (to indicate a push), a half-check box or something else? I would recommend replacing it with an alternative icon or using explicit wording such as "check score", "score", or "?" for a better user experience.
  - I would also address the inconsistency in the border colour of the life score/result and the text field, as the opacity is different (40% and 100% on the layer opacity, respectively). At this stage, I have decided to make the border colour and opacity the same to ensure consistency.
  - I'd review the use of opacity on the footer links to ensure it complies with WCAG guidelines. In this case, I would use the hex value with 100% opacity as indicated in the design, treating it as flat.
  - Moreover, in the footer, there are duplications of links (overlapping each other), resulting in colour inconsistency. For example, the "Copyright 2024" and the social links have different grey shades.

- Inconsistencies in the footer links text transform.

```
[data-button-style="secondary"] {
	--button--background: var(--button-secondary--background);
	--button--text: var(--button-secondary--text);
	--button--border: var(--button-secondary--border);
	--button--background-hover: var(--button-secondary--background-hover);
	--button--text-hover: var(--button-secondary--text-hover);
	--button--border-hover: var(--button-secondary--border-hover);
}

[class*='section-'] {
  border: 1px solid pink;
};

```

```
custom-attributes:

data-button-style="{{ Button Style }}"
```

```react
// arrow
<svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 1.5L13.5 6.5M13.5 6.5L8.5 11.5M13.5 6.5H1" stroke="#1757C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

// chevron
<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#1757C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


```

