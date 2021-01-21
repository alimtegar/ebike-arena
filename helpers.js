export const range = (start, stop, step) => {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

export const slugify = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

export const getDiscountedPx = (price, discount) =>
    price - (price * discount / 100);

export const getParamVal = (params = {}, slug, parameterName, defaultValue = null) =>
    Object.keys(params).length && slug.includes(parameterName) ? slug[slug.indexOf(parameterName) + 1] : defaultValue;

export const getSentence = (str, i) =>
    /^(.*?)[.?!]\s/.exec(str)[i];

export const getTotalAmount = (arr) => {
    let totalAmount = 0;

    arr.map((arrItem) => totalAmount += arrItem.amount);

    return totalAmount;
};

export const getTotalPrice = (arr) => {
    let totalPrice = 0;

    arr.map((arrItem) => totalPrice += arrItem.amount * arrItem.price);

    return totalPrice;
};

export const stripHtml = (html) => {
    return html.replace(/<[^>]*>?/gm, '').trim();
}