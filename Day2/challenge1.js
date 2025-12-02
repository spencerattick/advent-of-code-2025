const input = `2200670-2267527,265-409,38866-50720,7697424-7724736,33303664-33374980,687053-834889,953123-983345,3691832-3890175,26544-37124,7219840722-7219900143,7575626241-7575840141,1-18,1995-2479,101904-163230,97916763-98009247,52011-79060,31-49,4578-6831,3310890-3365637,414256-608125,552-1005,16995-24728,6985-10895,878311-912296,59-93,9978301-10012088,17302200-17437063,1786628373-1786840083,6955834840-6955903320,983351-1034902,842824238-842861540,14027173-14217812`

const parsedInput = input.split(',')

const checkValidity = id => {
    const firstHalf = id.toString().slice(0, id.toString().length / 2)
    const secondHalf = id.toString().slice(id.toString().length / 2)

    if (firstHalf === secondHalf) {
        return id
    } else {
        return 0
    }
}

const loopThroughIds = input => {
    const invalidIds = []
    for (let range of input) {
        const split = range.split('-')
        const firstNum = Number(split[0])
        const seconNum = Number(split[1])
        for (let i = firstNum; i <= seconNum; i++) {
            if (i.toString().length % 2 === 0) {
                const isInvalid = checkValidity(i)
                invalidIds.push(isInvalid)
            }
        }
    }
    return invalidIds.reduce((acc, current) => {
        return acc + current
    }, 0)
}

console.log(loopThroughIds(parsedInput))