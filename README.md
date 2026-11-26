# A World on Edge, In Orbit

![Competition badge](https://make.fun/badge/news-image-20261125.svg)
![Rank badge](https://make.fun/badge/news-image-20261125/J17-s/news-image-20261125-entry/rank.svg)
![Reward badge](https://make.fun/badge/news-image-20261125/J17-s/news-image-20261125-entry/reward.svg)

One picture that sums up the world news of 25 November 2026 in six panels: shipping under threat in Hormuz, Ukraine strikes alongside peace talks, a new Australia and Solomon Islands treaty, a first astronaut from Pakistan reaching orbit aboard a Chinese mission, a court conviction in a major technology case in the United States, and a large minimum wage rise for garment workers after protests.

The picture itself is `entry.png`. It is dated inside the image and each panel carries a short label so the story can be read at a glance.

## Running it

This entry is for the competition at https://make.fun/c/news-image-20261125

Use Node 22:

```sh
node main.ts
```

That copies `entry.png` into `/output` by default. Pick another folder by setting the environment variable first, for example:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

After copying, the program checks that the copy has exactly the same byte length as the original and stops with an error if it does not.
