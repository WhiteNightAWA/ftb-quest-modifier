const { parseNbtString } = await import('snbt-js');

export function parseNbt(text) {
    let newT = ""
    text.replaceAll("\t", "").replaceAll("\r", "").split("\n").forEach(line => {
        newT += line;
        newT += (line.endsWith("{") || line.endsWith("[")) ? "" : ",";
    });
    newT = newT.replaceAll(",,", "");
    return parseNbtString(newT)
}


export function fixFomat (text) {
    const replaceLs = ["{", "}", "[", "]", ","];

    replaceLs.forEach(char => {
        text = text.replaceAll(char, `|${char}|`);
    });

    const tL = text.split("|").map(t => {
        if (t.includes(":")) {
            let temp = t.split(": ");
            if (temp[0].includes(":")) {
                console.log(temp);
                return `"${temp[0]}": ${temp[1]}`;
            } else return t;
        } else return t;
    });

    return tL.join("");
}
