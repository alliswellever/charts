const $ = require('jquery');
const URL = "http://223.72.207.235:8090/XXX";
const data = require('./data');
const TEST = false;

const Ajax = async (params) => {
    const { url, method = "GET", data = {} } = params;
    let result = await $.ajax({
        url: URL + url,
        method,
        json: true,
        data
    });

    if (result.retcode !== 200) {
        alert(result.retmsg);
        return null;
    }

    return result.rows;
}

const query = async () => {
    if (TEST) {
        return data.query;
    }

    let result = await Ajax({
        url: "/query"
    });
    return result;
}

const query1 = async () => {
    if (TEST) {
        return data.query1;
    }

    let result = await Ajax({
        url: "/query1"
    });
    return result;
}

const query2 = async () => {
    if (TEST) {
        return data.query2;
    }

    let result = await Ajax({
        url: "/query2"
    });
    return result;
}

const query3 = async () => {
    if (TEST) {
        return data.query3;
    }

    let result = await Ajax({
        url: "/query3"
    });
    return result[0];
}

const query4 = async () => {
    if (TEST) {
        return data.query4;
    }

    let result = await Ajax({
        url: "/query4"
    });
    return result[0];
}


const query5 = async () => {
    if (TEST) {
        return data.query5;
    }

    let result = await Ajax({
        url: "/query5"
    });
    return result;
}

let init = async () => {
    let ps = await Promise.all([query(), query1(), query2(), query3(), query4(), query5()]);
    // console.log(ps);

    let res = {
        query: ps[0],
        query1: ps[1],
        query2: ps[2],
        query3: ps[3],
        query4: ps[4],
        query5: ps[5]
    }
    return res;
}

export default init;