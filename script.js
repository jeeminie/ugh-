const text = "Ughhhhhh <b>I don’t want to do this.</b> I feel like I’ve been working on my <b>portfolio</b> for days, weeks, months, I don’t even know… I hate how <b>indecisive</b> I am with the vibe of my page and what artworks to include. Are my works even <b>good enough?</b> I don’t even know if this is the kind of work that will get me a job. But at the same time I have <b>nothing better</b>… And like, I’m so <b>lost</b> on how to present my work. Do I want something more <b>simple?</b> Or should I go with my style or be more <b>experimental? Or bold? Or minimalistic?</b> I feel like I should show myself through my website, but… <b>I don’t know…</b>it doesn’t feel solid enough? It’s like… someone is <b>judging</b> me based on my portfolio, so I’m <b>pressured</b> to show the <b>best version</b> of myself. The flow <b>doesn’t feel right</b> either, do my projects even showcase my skills properly? Do they make sense together? Am I showing <b>enough variety?</b> Maybe <b>too much?</b> Which works are my strongest and which are the <b>weakest?</b> I feel like I’m trying to put in too much maybe… I DO have a hard time letting go of my work… <b>maybe I should just let it all go and start all over</b> lmao… I’m just so <b>frustrated</b>. I’m <b>exhausted</b> from tweaking every little detail, being the perfectionist I am, and I’m still <b>not feeling good</b> about this. Maybe I’m <b>overthinking</b> this whole thing. But I’m so <b>burnt out?</b> Everything feels so <b>wrong and ugly</b>, maybe it’s also because I’ve been <b>working on this forever.</b> And <b>it sucks</b> because after all this time and effort, I could still get nothing. No internship, no job. <b>Nothing.</b> Just a “finished” portfolio that I will have to keep <b>reworking again and again</b>. And I feel like I need to look at other people’s portfolios for inspiration, but I keep <b>comparing myself</b>. They all look so clean and professional, as if they’ve got it figured out… and then there’s mine. Everything looks so polished and developed, their work presented perfectly, and it feels like each portfolio has its own personality… does mine do the same? At this point <b>it’s just stress then stress then stress then stress I HATE WORKING ON MY PORTFOLIO I FEEL SO STRESSED AND FRUSTRATED AND ANXIOUS AND UGH.</b> Sometimes I do enjoy working on my portfolio, it shows how my works have developed and how my skills have gotten better but <b>will it ever be enough?</b> Will I ever reach a point where I’m satisfied with my work and my portfolio?";
const textElement = document.getElementById("typewriter-text");

let index = 0;
const speed = 50;

function typeWriter() {
    let currentText = text.slice(0, index + 1); 
    textElement.innerHTML = currentText; 
    index++;

    if (index < text.length) {
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            index = 0;
            textElement.innerHTML = ""; 
            typeWriter(); 
        }, 2000); 
    }
}

window.onload = typeWriter;
