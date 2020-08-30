export const chopRight = (main: string, textToChop: string) => {
    if (main.endsWith(textToChop)) {
        const len: number = textToChop.length;
        const mainLen: number = main.length;
        if (len <= mainLen) {
            return main.substring(0, mainLen - len);
        }
    }
    return main;
};