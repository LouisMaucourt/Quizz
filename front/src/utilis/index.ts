import { Res } from "src/type";

export const getBestMatch = (score: Record<string, number>, res: Res[]) => {
    if (res.length === 0) return null

    const allKeys = new Set<string>([
        ...Object.keys(score),
        ...res.flatMap((r) => Object.keys(r.points)),
    ])

    let best = res[0]
    let bestDistance = Infinity

    for (const result of res) {
        let distance = 0
        for (const key of allKeys) {
            distance += Math.abs((score[key] ?? 0) - (result.points[key] ?? 0))
        }
        if (distance < bestDistance) {
            bestDistance = distance
            best = result
        }
    }

    return best
}