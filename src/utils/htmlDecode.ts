const htmlDecode = (str : string) => {
    const decoder = new DOMParser().parseFromString(str, "text/html");
    return decoder.documentElement.textContent;
}

export default htmlDecode;