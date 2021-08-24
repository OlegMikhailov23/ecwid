import render from "../helper.render";
import markup from "../markup";

class Intro {
    init() {
        const container = document.querySelector('body');
        render(container, markup.createIntro());
    }
}

export default Intro;
