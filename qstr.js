export const chopRight = (main, textToChop) => {
    if (main.endsWith(textToChop)) {
        const len = textToChop.length;
        const mainLen = main.length;
        if (len <= mainLen) {
            return main.substring(0, mainLen - len);
        }
    }
    return main;
};
