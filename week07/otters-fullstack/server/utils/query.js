/*

@params: 
    queryObj - req.query
    table - table to query
    valid_queries - array of strings

*/

export function queryGenerator(queryObj, valid_queries) {
    let query = ''
    let conditions = []
    let values = []

    const valid = new Set(valid_queries)

    for (let query in queryObj) {
        if (!(valid.has(query))) throw new Error(`thats not even a valid query, idiot >:( you sent : ${query}`);
        conditions.push(`${query.toString()} = $${conditions.length + 1}`)
        values.push(queryObj[query])
    }
    query += ` WHERE ${conditions.join(' AND ')}`
    return [query, values]
  }