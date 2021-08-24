import render from "../helper.render";
import markup from "../markup";

class Features {
    init() {
        const container = document.querySelector('body');
        render(container, markup.createAdvantages());
    }
}

export default Features;
