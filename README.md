This effect is based off an effect I made in after effects for a project I do with a friend. The effect is essentially using turbulent displacement, mixed with random transforms, hue cycles, and then  copying this effect and duplicating the initial text layer , layering them on top of each other, and then using different blending modes to get the final effect.

Well after learning about svg filters, I figured out I could recreate the effect and get about 75% of the same result. I've had to make several compromises to hopefully get the performance to be adequate, but even with that, the effect is a bit expensive to run. 

How it works under the hood is there is an invisible textarea input that the user can click on and this textarea (should) line up perfectly with another div that holds an h1 which actually creates the effect.  I've had to tweak it a ton to get it to be decently stable (I did have to use ai alot for the finer details because lining up everything was a nightmare since I've never intentionally layered elements on top of each other like this). My original version of this method required actually copying the h1 element and having multiple copies in the dom, but I was able to eliminate it all using before and after psuedo classes.

The Javascript does a few things. First, it syncs up the input in the text area to the textContent of the H1, however, since we also need to update all the psuedoclasses, it also has to update the content of all the psuedo classes as well. 
The other thing the javascript does is sanitize the input. It requires the text be an "approved" character as some characts outright break the effect due to (I believe) how css handles strings in the content of psuedo classes. So it has to ensure the input is only approved characters. Then, it also needs to adjust escape characters and ensure they are properly formatted for the css psuedo classes. Tbh, this was one thing ai helped majorly on.

Limitations of the effect:
- I have tried to optimize and compromise the effect, but it's still rather expensive to run.
- The svg filters are made with bigger text in mind. I do have some media queries that should make the text smaller based on screen size, but as it gets smaller, the effect looks worse. I have slightly fixed this by adjusting the css animations based on screen size, however, the svg filters do not adjust and I didn't want to make like 6 copies of each effect just to account for various font sizes. Tbh, I could but this whole effect has taken much longer than I thought it would and I wanted to be done lol.
- I'm sure there's lots of hidden issues and potential jank in the effect.  I'm sure I'm doing several things un-optimally and could improve them, but I think this works for now.

Plan for the future:
- The plan is to let users use this effect to type over pictures gotten from the unsplash api so they can sort of recreate the videos my friend and I make in our spelling project.
- Will need to build a simple ui around the effect
- For now, the site is literally just the typing effect. It's more of a "tech demo" right now.
