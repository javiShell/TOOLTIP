const oracledb = require('oracledb');

cns = {
    user: "USERJAVI",
    password: "80169565",
    connectString: "localhost:1521/TOOLTIP"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;